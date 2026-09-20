import { useEffect, useState } from 'react'
import { Link, createFileRoute, useSearch } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, ShoppingCart } from 'lucide-react'
import { MarketplaceHeader } from '@/components/MarketplaceHeader'
import { categories } from './index'
import { vendors } from '@/lib/catalog-data'

type SearchState = { category?: string; q?: string }

export const Route = createFileRoute('/catalog')({
  validateSearch: (search: Record<string, unknown>): SearchState => ({ category: typeof search.category === 'string' ? search.category : undefined, q: typeof search.q === 'string' ? search.q : undefined }),
  head: () => ({ meta: [{ title: 'Categories & vendors · ALD Pulse' }, { name: 'description', content: 'Choose a category to see only the manufacturers that supply it.' }] }),
  component: CatalogPage,
})

function CategoryPicker() {
  return <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9">{categories.map(category => <Link key={category.slug} to="/catalog" search={{ category: category.name }} className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"><div className="relative aspect-[1.25] overflow-hidden bg-secondary"><img src={category.image} alt={category.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" /></div><div className="flex min-h-16 items-center justify-between gap-2 p-3"><span className="text-xs font-bold leading-tight text-foreground">{category.name}</span><span className="shrink-0 font-mono text-[10px] text-muted-foreground">{category.count}</span></div></Link>)}</div>
}

function VendorLogo({ vendor, size = 'size-20' }: { vendor: typeof vendors[number]; size?: string }) {
  return <div className={`grid ${size} shrink-0 place-items-center overflow-hidden rounded-2xl border border-border bg-secondary`}><img src={vendor.logo} alt={`${vendor.name} logo`} className="h-full w-full object-cover" /></div>
}

function VendorRotationBanner({ categoryVendors }: { categoryVendors: typeof vendors }) {
  const [active, setActive] = useState(0)
  useEffect(() => { const timer = window.setInterval(() => setActive(value => (value + 1) % categoryVendors.length), 2800); return () => window.clearInterval(timer) }, [categoryVendors.length])
  if (categoryVendors.length === 0) return null
  const vendor = categoryVendors[active]
  return <section aria-label="Featured category vendors" className="mt-10 overflow-hidden rounded-3xl border border-border bg-secondary px-6 py-6 shadow-sm sm:px-8"><div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-mono text-[10px] font-bold tracking-[.2em] text-primary">SUPPLIER SPOTLIGHT</p><p className="mt-2 text-sm text-muted-foreground">Qualified manufacturers for this category, rotating automatically.</p></div><div className="flex items-center gap-4"><AnimatePresence mode="wait"><motion.div key={vendor.slug} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .35 }} className="flex items-center gap-4"><VendorLogo vendor={vendor} size="size-14" /><div><p className="text-lg font-bold tracking-[-.03em] text-foreground">{vendor.name}</p><p className="text-xs text-muted-foreground">{vendor.domain}</p></div></motion.div></AnimatePresence><div className="hidden gap-1.5 sm:flex" aria-hidden="true">{categoryVendors.map((item, index) => <span key={item.slug} className={`h-1.5 w-5 rounded-full transition-colors ${index === active ? 'bg-primary' : 'bg-border'}`} />)}</div></div></div></section>
}

function VendorCard({ vendor, category }: { vendor: typeof vendors[number]; category: string }) {
  return <Link to="/vendor/$vendor" params={{ vendor: vendor.slug }} search={{ category }} className="group flex min-h-64 flex-col justify-between rounded-3xl border border-border bg-background p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"><div><VendorLogo vendor={vendor} /><h2 className="mt-7 text-2xl font-semibold tracking-[-.04em] text-foreground">{vendor.name}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">{vendor.description}</p><p className="mt-4 font-mono text-[10px] tracking-[.14em] text-muted-foreground">04 PRODUCTS · {vendor.domain}</p></div><div className="mt-8 flex items-center justify-between border-t border-border pt-4"><span className="font-mono text-[10px] tracking-[.14em] text-muted-foreground">{category}</span><span className="inline-flex items-center gap-1 text-sm font-bold text-primary">See all <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></span></div></Link>
}

function CatalogPage() {
  const { category, q } = useSearch({ from: '/catalog' })
  const normalizedQuery = q?.trim().toLowerCase() ?? ''
  const visibleVendors = normalizedQuery ? vendors.filter(vendor => [vendor.name, vendor.domain, vendor.description, ...vendor.categories].join(' ').toLowerCase().includes(normalizedQuery)) : vendors
  const categoryVendors = category ? visibleVendors.filter(vendor => vendor.categories.includes(category)) : []
  return <div className="min-h-dvh bg-background"><MarketplaceHeader /><main className="w-full px-6 py-10 sm:px-10 lg:px-16 lg:py-14"><div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground"><Link to="/" className="hover:text-primary">Home</Link><ChevronRight className="size-3" /><span className="font-semibold text-foreground">{category || 'Categories'}</span></div>{category ? <><div className="mt-9 flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-mono text-[10px] font-bold tracking-[.2em] text-primary">CATEGORY DIRECTORY</p><h1 className="mt-3 text-4xl font-semibold tracking-[-.055em] text-foreground sm:text-6xl">{category}</h1><p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">Only vendors supplying this category are shown below. Open a vendor to browse its product image mosaic.</p></div><Link to="/catalog" className="text-sm font-bold text-primary hover:underline">Choose another category</Link></div><VendorRotationBanner categoryVendors={categoryVendors} /><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{categoryVendors.map(vendor => <VendorCard key={vendor.slug} vendor={vendor} category={category} />)}</div>{categoryVendors.length === 0 && <div className="mt-10 rounded-3xl border border-dashed border-border bg-secondary p-12 text-center"><p className="text-lg font-semibold text-foreground">We are still curating this category.</p><p className="mt-2 text-sm text-muted-foreground">Send the sourcing desk a brief and we’ll find the right manufacturers.</p><Link to="/coating-services" className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground">Talk to the sourcing desk</Link></div>}</> : <><div className="mt-9 flex items-end justify-between border-b border-border pb-8"><div><p className="font-mono text-[10px] font-bold tracking-[.2em] text-primary">THE ALD PULSE CATALOG</p><h1 className="mt-3 text-4xl font-semibold tracking-[-.055em] text-foreground sm:text-6xl">Choose a category.</h1><p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">Start with a category to see only the vendors who supply it. Products appear after you choose a vendor.</p></div><Link to="/cart" className="hidden items-center gap-2 text-sm font-bold text-primary sm:flex"><ShoppingCart className="size-4" /> RFQ cart</Link></div><div className="mt-10"><CategoryPicker /></div></>}</main></div>
}
