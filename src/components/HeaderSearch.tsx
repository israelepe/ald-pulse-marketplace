import { useState, type FormEvent } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Search } from 'lucide-react'

export function HeaderSearch({ dark = false, mobile = false, onNavigate }: { dark?: boolean; mobile?: boolean; onNavigate?: () => void }) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = query.trim()
    void navigate({ to: '/catalog', search: value ? { q: value } : {} })
    onNavigate?.()
  }

  return <form onSubmit={handleSubmit} className={mobile ? 'w-full' : 'w-[190px] xl:w-[220px]'} role="search">
    <label className="sr-only" htmlFor={mobile ? 'mobile-site-search' : 'site-search'}>Search the ALD Pulse marketplace</label>
    <div className={`flex items-center gap-2 rounded-full border px-3 ${mobile ? 'h-11' : 'h-9'} ${dark ? 'border-background/20 bg-background/10 text-background' : 'border-border bg-secondary text-foreground'}`}>
      <Search className={`size-4 shrink-0 ${dark ? 'text-background/60' : 'text-muted-foreground'}`} />
      <input id={mobile ? 'mobile-site-search' : 'site-search'} value={query} onChange={event => setQuery(event.target.value)} placeholder="Search marketplace" className={`min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:${dark ? 'text-background/50' : 'text-muted-foreground'}`} />
    </div>
  </form>
}
