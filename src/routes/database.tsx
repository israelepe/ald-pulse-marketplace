import { useMemo, useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Check, Database, Factory, Globe2, Search, SlidersHorizontal } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/database')({
  head: () => ({ meta: [
    { title: 'ALD Equipment Manufacturer Database — ALD Pulse' },
    { name: 'description', content: 'Explore a curated database of ALD, ALE and MLD equipment manufacturers, process capabilities and supply categories.' },
  ] }),
  component: EquipmentDatabasePage,
})

type Manufacturer = {
  name: string
  country: string
  region: string
  focus: string
  equipment: string[]
  processes: string[]
  verified: boolean
}

const manufacturers: Manufacturer[] = [
  { name: 'Beneq', country: 'Finland', region: 'Europe', focus: 'Production ALD systems and coating services', equipment: ['Batch ALD', 'Spatial ALD', 'Coating systems'], processes: ['ALD', 'PEALD'], verified: true },
  { name: 'Picosun', country: 'Finland', region: 'Europe', focus: 'High-throughput industrial ALD platforms', equipment: ['Batch reactors', 'R&D reactors', 'Bubblers'], processes: ['ALD', 'MLD'], verified: true },
  { name: 'Arradiance', country: 'United States', region: 'North America', focus: 'Compact research ALD and plasma systems', equipment: ['R&D reactors', 'Plasma sources', 'Load locks'], processes: ['ALD', 'PEALD'], verified: true },
  { name: 'Oxford Instruments', country: 'United Kingdom', region: 'Europe', focus: 'Nanofabrication and deposition platforms', equipment: ['Cluster tools', 'Plasma ALD', 'Vacuum systems'], processes: ['ALD', 'ALE', 'PEALD'], verified: true },
  { name: 'Veeco', country: 'United States', region: 'North America', focus: 'Semiconductor deposition equipment', equipment: ['Production systems', 'Cluster tools', 'MFCs'], processes: ['ALD', 'PEALD'], verified: true },
  { name: 'ASM International', country: 'Netherlands', region: 'Europe', focus: 'Advanced wafer processing equipment', equipment: ['Single-wafer ALD', 'Batch ALD', 'Gas delivery'], processes: ['ALD', 'PEALD'], verified: true },
  { name: 'Kurt J. Lesker', country: 'United States', region: 'North America', focus: 'Custom vacuum deposition and components', equipment: ['Vacuum chambers', 'Evaporation', 'Pumping'], processes: ['ALD', 'PVD'], verified: false },
  { name: 'Moorfield Nanotechnology', country: 'United Kingdom', region: 'Europe', focus: 'Flexible laboratory coating platforms', equipment: ['Benchtop systems', 'Plasma sources', 'Vacuum'], processes: ['ALD', 'PECVD'], verified: false },
  { name: 'Jusung Engineering', country: 'South Korea', region: 'Asia Pacific', focus: 'Large-area display and semiconductor tools', equipment: ['Large-area ALD', 'Gas cabinets', 'Cluster tools'], processes: ['ALD', 'CVD'], verified: false },
  { name: 'SENTECH Instruments', country: 'Germany', region: 'Europe', focus: 'Thin-film measurement and deposition', equipment: ['ALD systems', 'Etch systems', 'Metrology'], processes: ['ALD', 'PECVD', 'RIE'], verified: false },
  { name: 'Kurt J. Lesker Korea', country: 'South Korea', region: 'Asia Pacific', focus: 'Vacuum processing and custom hardware', equipment: ['Chambers', 'Valves', 'Pumps'], processes: ['ALD', 'PVD'], verified: false },
  { name: 'Encapsulix', country: 'France', region: 'Europe', focus: 'Encapsulation and barrier coating', equipment: ['Roll-to-roll', 'Spatial ALD', 'Web coating'], processes: ['ALD', 'MLD'], verified: false },
]

const regions = ['All regions', 'Europe', 'North America', 'Asia Pacific']

function EquipmentDatabasePage() {
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('All regions')
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const filtered = useMemo(() => manufacturers.filter(manufacturer => {
    const haystack = [manufacturer.name, manufacturer.country, manufacturer.focus, ...manufacturer.equipment, ...manufacturer.processes].join(' ').toLowerCase()
    return haystack.includes(query.toLowerCase()) && (region === 'All regions' || manufacturer.region === region) && (!verifiedOnly || manufacturer.verified)
  }), [query, region, verifiedOnly])

  return <div className="min-h-dvh bg-background text-foreground">
    <section className="relative isolate overflow-hidden bg-foreground text-background">
      <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=85" alt="Precision manufacturing equipment" className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/55" />
      <div className="relative mx-auto max-w-[1440px] px-6 pb-16 pt-14 sm:px-10 lg:px-20 lg:pb-24 lg:pt-20">
        <div className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-[.2em] text-background/60"><Database className="size-3.5" /> ALD PULSE RESEARCH DESK</div>
        <div className="mt-7 max-w-3xl"><h1 className="text-4xl font-semibold leading-[.98] tracking-[-.06em] sm:text-6xl">The equipment manufacturers behind the process.</h1><p className="mt-5 max-w-2xl text-base leading-7 text-background/70 sm:text-lg">A practical starting point for finding ALD, ALE, and MLD system builders, component specialists, and deposition technology partners.</p></div>
        <div className="mt-10 flex flex-wrap gap-3 text-sm text-background/70"><span className="rounded-full border border-background/20 px-4 py-2">{manufacturers.length} manufacturers indexed</span><span className="rounded-full border border-background/20 px-4 py-2">4 regions covered</span><span className="rounded-full border border-background/20 px-4 py-2">ALD · ALE · MLD</span></div>
      </div>
    </section>

    <main className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-20 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-2xl border border-border bg-secondary/45 p-5 lg:sticky lg:top-24"><div className="flex items-center gap-2 text-sm font-bold"><SlidersHorizontal className="size-4 text-primary" /> Refine database</div><label className="mt-6 block text-xs font-bold uppercase tracking-[.14em] text-muted-foreground">Region</label><div className="mt-3 grid gap-1">{regions.map(item => <button key={item} onClick={() => setRegion(item)} className={`rounded-lg px-3 py-2 text-left text-sm transition-colors ${region === item ? 'bg-foreground text-background' : 'text-muted-foreground hover:bg-background hover:text-foreground'}`}>{item}</button>)}</div><button onClick={() => setVerifiedOnly(value => !value)} className={`mt-6 flex w-full items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors ${verifiedOnly ? 'border-primary bg-primary/10 text-foreground' : 'border-border text-muted-foreground hover:bg-background'}`}><span className={`grid size-4 place-items-center rounded border ${verifiedOnly ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground/50'}`}>{verifiedOnly && <Check className="size-3" />}</span> Show verified entries</button><p className="mt-6 text-xs leading-5 text-muted-foreground">Entries are organized for sourcing research. Confirm current specifications, availability, and regional support directly with each manufacturer.</p></aside>
        <section><div className="flex flex-col justify-between gap-5 border-b border-border pb-6 sm:flex-row sm:items-end"><div><p className="font-mono text-[10px] font-bold tracking-[.2em] text-primary">MANUFACTURER INDEX</p><h2 className="mt-2 text-3xl font-semibold tracking-tight">Find an equipment partner</h2><p className="mt-2 text-sm text-muted-foreground">{filtered.length} {filtered.length === 1 ? 'entry' : 'entries'} match your filters.</p></div><div className="relative w-full sm:max-w-xs"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search manufacturers or equipment" className="h-11 rounded-xl bg-secondary pl-10" /></div></div><div className="mt-6 grid gap-4 md:grid-cols-2">{filtered.map(manufacturer => <article key={manufacturer.name} className="group rounded-2xl border border-border bg-background p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"><div className="flex items-start justify-between gap-4"><div className="flex items-start gap-3"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-foreground text-sm font-bold text-background">{manufacturer.name.split(' ').map(word => word[0]).join('').slice(0, 2)}</span><div><h3 className="font-semibold tracking-tight">{manufacturer.name}</h3><p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><Globe2 className="size-3" /> {manufacturer.country} · {manufacturer.region}</p></div></div>{manufacturer.verified && <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[9px] font-bold tracking-wider text-primary">VERIFIED</span>}</div><p className="mt-5 text-sm leading-6 text-muted-foreground">{manufacturer.focus}</p><div className="mt-4 flex flex-wrap gap-2">{manufacturer.equipment.map(item => <span key={item} className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">{item}</span>)}</div><div className="mt-5 flex items-center justify-between border-t border-border pt-4"><div className="flex gap-1.5">{manufacturer.processes.map(process => <span key={process} className="font-mono text-[10px] font-bold text-primary">{process}</span>)}</div><Link to="/rfq" className="inline-flex items-center gap-1 text-xs font-bold text-primary transition-transform group-hover:translate-x-0.5">Request quote <ArrowRight className="size-3.5" /></Link></div></article>)}</div>{filtered.length === 0 && <div className="rounded-2xl border border-dashed border-border p-12 text-center"><Factory className="mx-auto size-8 text-muted-foreground" /><h3 className="mt-4 font-semibold">No manufacturers found</h3><p className="mt-2 text-sm text-muted-foreground">Try a different search term or clear one of the filters.</p><Button variant="outline" onClick={() => { setQuery(''); setRegion('All regions'); setVerifiedOnly(false) }} className="mt-5">Clear filters</Button></div>}</section>
      </div>
      <div className="mt-16 flex flex-col items-start justify-between gap-5 rounded-2xl bg-secondary p-6 sm:flex-row sm:items-center sm:p-8"><div><p className="font-mono text-[10px] font-bold tracking-[.2em] text-primary">NEED A SHORTLIST?</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">Tell us what your process needs.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">Send one RFQ and the ALD Pulse sourcing desk will route it to relevant equipment and component suppliers.</p></div><Link to="/rfq" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-md">Start an RFQ <ArrowRight className="size-4" /></Link></div>
    </main>
  </div>
}
