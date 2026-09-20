import { useSyncExternalStore } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react'
import { MarketplaceHeader } from '@/components/MarketplaceHeader'
import { catalogProducts } from '@/lib/catalog-data'

export const Route = createFileRoute('/cart')({
  head: () => ({ meta: [{ title: 'RFQ cart · ALD Pulse' }, { name: 'description', content: 'Review your ALD Pulse RFQ cart before requesting a formal quote.' }] }),
  component: CartPage,
})
const subscribeCart = (onStoreChange: () => void) => {
  window.addEventListener('storage', onStoreChange)
  return () => window.removeEventListener('storage', onStoreChange)
}
let cartSnapshot: string[] = []
let cartSnapshotRaw = ''
const getCartIds = () => {
  const raw = localStorage.getItem('ald-pulse-cart') || '[]'
  if (raw === cartSnapshotRaw) return cartSnapshot
  cartSnapshotRaw = raw
  try { cartSnapshot = JSON.parse(raw) as string[] } catch { cartSnapshot = [] }
  return cartSnapshot
}
const EMPTY_CART: string[] = []
const getServerCartIds = () => EMPTY_CART

function CartPage() {
  const cartIds = useSyncExternalStore(subscribeCart, getCartIds, getServerCartIds)
  const selected = catalogProducts.filter(product => cartIds.includes(product.id))
  const subtotal = selected.reduce((sum, product) => sum + product.price, 0)
  const removeItem = (id: string) => {
    localStorage.setItem('ald-pulse-cart', JSON.stringify(cartIds.filter(item => item !== id)))
    window.dispatchEvent(new Event('storage'))
  }
  return <div className="min-h-dvh bg-background"><MarketplaceHeader /><main className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16"><div><p className="font-mono text-[10px] font-semibold tracking-[0.22em] text-primary">YOUR RFQ CART</p><h1 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-foreground md:text-6xl">Ready for a formal quote?</h1><p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">Prices below are indicative. Your final quote will confirm manufacturer availability, delivery time, and final price.</p></div>{selected.length === 0 ? <div className="mt-12 rounded-3xl border border-dashed border-border bg-secondary p-12 text-center"><ShoppingCart className="mx-auto size-8 text-primary" /><h2 className="mt-5 text-2xl font-semibold text-foreground">Your RFQ cart is empty.</h2><p className="mt-2 text-sm text-muted-foreground">Add a product from a vendor mosaic to start a quote request.</p><Link to="/catalog" className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground">Browse categories</Link></div> : <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_.65fr]"><section className="rounded-2xl border border-border bg-background shadow-sm"><div className="flex items-center gap-3 border-b border-border p-6"><ShoppingCart className="size-5 text-primary" /><h2 className="font-bold text-foreground">Selected parts <span className="ml-1 font-normal text-muted-foreground">({selected.length})</span></h2></div><div className="divide-y divide-border">{selected.map(item => <div key={item.id} className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-bold text-foreground">{item.name}</p><p className="mt-1 font-mono text-[10px] text-muted-foreground">{item.partNumber} · {item.vendor}</p></div><div className="flex items-center justify-between gap-8 sm:justify-end"><div className="flex items-center gap-3 rounded-full border border-border px-2 py-1"><button className="grid size-7 place-items-center rounded-full text-muted-foreground hover:bg-secondary" aria-label="Decrease quantity"><Minus className="size-3" /></button><span className="w-4 text-center text-sm font-semibold">1</span><button className="grid size-7 place-items-center rounded-full text-muted-foreground hover:bg-secondary" aria-label="Increase quantity"><Plus className="size-3" /></button></div><p className="w-20 text-right font-bold text-foreground">${item.price.toLocaleString()}</p><button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive" aria-label={`Remove ${item.name}`}><Trash2 className="size-4" /></button></div></div>)}</div></section><aside className="h-fit rounded-2xl border border-border bg-secondary p-6 shadow-sm"><h2 className="text-lg font-bold text-foreground">RFQ summary</h2><div className="mt-7 space-y-3 text-sm"><div className="flex justify-between text-muted-foreground"><span>Indicative subtotal</span><span>${subtotal.toLocaleString()}</span></div><div className="flex justify-between text-muted-foreground"><span>Shipping</span><span>Confirmed in quote</span></div><div className="border-t border-border pt-4"><div className="flex justify-between text-base font-bold text-foreground"><span>Estimated total</span><span>${subtotal.toLocaleString()}</span></div></div></div><Link to="/checkout" className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">Continue to checkout <ArrowRight className="size-4" /></Link><p className="mt-4 text-center text-[11px] text-muted-foreground">No card is charged at this stage.</p></aside></div>}</main></div>
}
