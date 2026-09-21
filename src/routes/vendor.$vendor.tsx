import { Link, createFileRoute, useSearch } from '@tanstack/react-router'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { MarketplaceHeader } from '@/components/MarketplaceHeader'
import { catalogProducts, getVendor } from '@/lib/catalog-data'

export const Route = createFileRoute('/vendor/$vendor')({
  validateSearch: (search: Record<string, unknown>) => ({ category: typeof search.category === 'string' ? search.category : undefined }),
  head: () => ({ meta: [{ title: 'Vendor products · ALD Pulse' }, { name: 'description', content: 'Browse product images from an ALD Pulse marketplace vendor.' }] }),
  component: VendorPage,
})

function VendorPage() {
  const { vendor: vendorSlug } = Route.useParams()
  const { category } = useSearch({ from: '/vendor/$vendor' })
  const vendor = getVendor(vendorSlug)
  if (!vendor) return <div className="min-h-dvh bg-background"><MarketplaceHeader /><main className="p-10"><h1 className="text-3xl font-semibold">Vendor not found</h1><Link to="/catalog" className="mt-4 inline-flex text-primary">Back to categories</Link></main></div>
  const vendorProducts = catalogProducts.filter(product => product.vendorSlug === vendor.slug)
  return <div className="min-h-dvh bg-background"><MarketplaceHeader /><main className="w-full px-6 py-10 sm:px-10 lg:px-16 lg:py-14"><div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground"><Link to="/catalog" search={{ category }} className="hover:text-primary">Categories</Link><ChevronRight className="size-3" /><span className="font-semibold text-foreground">{vendor.name}</span></div><div className="mt-9 flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between"><div className="flex items-center gap-5"><div className="grid size-20 shrink-0 place-items-center overflow-hidden rounded-2xl border border-border bg-secondary"><img src={vendor.logo} alt={`${vendor.name} logo`} className="h-full w-full object-cover" /></div><div><p className="font-mono text-[10px] font-bold tracking-[.2em] text-primary">VENDOR CATALOG · {vendorProducts.length} PRODUCTS</p><h1 className="mt-2 text-4xl font-semibold tracking-[-.055em] text-foreground sm:text-5xl">{vendor.name}</h1><p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">{vendor.description}</p></div></div><Link to="/catalog" search={{ category }} className="inline-flex items-center gap-2 text-sm font-bold text-primary"><ArrowLeft className="size-4" /> All categories</Link></div><div className="mt-10 grid auto-rows-[230px] grid-cols-2 gap-3 md:auto-rows-[270px] md:grid-cols-4">{vendorProducts.map(product => <Link key={product.id} to="/product/$product" params={{ product: product.id }} className="group relative h-full overflow-hidden rounded-2xl bg-secondary"><img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-transparent to-transparent" /><div className="absolute bottom-0 left-0 right-0 p-5 text-background"><p className="font-mono text-[10px] tracking-[.16em] text-background/70">{product.partNumber}</p><p className="mt-1 text-lg font-bold">{product.name}</p><p className="mt-1 text-xs text-background/75">{product.specs.join(' · ')}</p></div></Link>)}</div></main></div>
}
