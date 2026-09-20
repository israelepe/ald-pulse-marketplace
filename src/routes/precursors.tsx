import { createFileRoute } from '@tanstack/react-router'
import { MarketplaceHeader } from '@/components/MarketplaceHeader'
import { ConciergeForm } from '@/components/ConciergeForm'

const suppliers = [
  { name: 'Merck / EMD Electronics', domain: 'merckgroup.com' },
  { name: 'Air Liquide', domain: 'airliquide.com' },
  { name: 'Entegris', domain: 'entegris.com' },
  { name: 'UP Chemical', domain: 'upchemical.com' },
  { name: 'Soulbrain', domain: 'soulbrain.co.kr' },
  { name: 'Adeka', domain: 'adeka.co.jp' },
  { name: 'Fujifilm', domain: 'fujifilm.com' },
  { name: 'Strem Chemicals', domain: 'strem.com' },
]

export const Route = createFileRoute('/precursors')({
  head: () => ({ meta: [{ title: 'ALD Precursors · ALD Pulse' }, { name: 'description', content: 'Describe your ALD precursor requirement and let ALD Pulse coordinate qualified suppliers.' }] }),
  component: PrecursorsPage,
})

function PrecursorsPage() {
  return <div className="min-h-dvh bg-background"><MarketplaceHeader /><main className="w-full px-6 py-12 sm:px-10 lg:px-16 lg:py-16"><div className="mb-12 border-b border-border pb-8"><p className="font-mono text-[10px] tracking-[.2em] text-muted-foreground">ALD PULSE · PRECURSOR DESK</p><h1 className="mt-3 text-2xl font-semibold tracking-[-.04em] text-foreground">One brief. A coordinated conversation with the right precursor suppliers.</h1></div><div className="grid gap-12 xl:grid-cols-[1.25fr_.75fr]"><ConciergeForm eyebrow="PRECURSOR CONCIERGE" title="Tell us what chemistry your process needs." description="Share the target film, substrate, deposition conditions, and delivery requirements. We’ll ask the suppliers below for the right fit and commercial terms." /><aside className="h-fit rounded-3xl border border-border bg-secondary p-6 md:p-8"><p className="font-mono text-[10px] font-bold tracking-[.2em] text-primary">SUPPLIER NETWORK</p><h2 className="mt-4 text-2xl font-semibold tracking-[-.04em] text-foreground">Suppliers we can ask</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Your brief is routed to the relevant manufacturers, not broadcast indiscriminately.</p><div className="mt-7 grid grid-cols-2 gap-3">{suppliers.map(supplier => <div key={supplier.name} className="flex min-h-24 flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-background p-4 text-center"><div className="grid h-8 min-w-16 place-items-center rounded-md bg-secondary px-2 text-[10px] font-bold tracking-tight text-foreground">{supplier.name.split(/\s|\//).filter(Boolean).map(word => word[0]).join('').slice(0, 4)}</div><span className="text-[11px] font-semibold leading-4 text-foreground">{supplier.name}</span></div>)}</div></aside></div></main><footer className="border-t border-border px-6 py-8 text-sm text-muted-foreground sm:px-10 lg:px-16">Supplier outreach is coordinated by the ALD Pulse sourcing desk.</footer></div>
}
