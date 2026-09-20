import { createFileRoute } from '@tanstack/react-router'
import { MarketplaceHeader } from '@/components/MarketplaceHeader'
import { ConciergeForm } from '@/components/ConciergeForm'

export const Route = createFileRoute('/coating-services')({
  head: () => ({ meta: [{ title: 'ALD Coating Services · ALD Pulse' }, { name: 'description', content: 'Tell the ALD Pulse sourcing desk about your coating need, part size, and application.' }] }),
  component: CoatingServicesPage,
})

function CoatingServicesPage() {
  return <div className="min-h-dvh bg-background"><MarketplaceHeader /><main className="w-full px-6 py-12 sm:px-10 lg:px-16 lg:py-16"><div className="mb-12 border-b border-border pb-8"><p className="font-mono text-[10px] tracking-[.2em] text-muted-foreground">ALD PULSE · COATING SERVICES</p><h1 className="mt-3 text-2xl font-semibold tracking-[-.04em] text-foreground">A direct path from requirement to qualified coating partner.</h1></div><ConciergeForm eyebrow="COATING CONCIERGE" title="Tell us what you need coated." description="Share the part, the performance target, and the application. Our desk will turn your brief into a focused supplier conversation." /></main><footer className="border-t border-border px-6 py-8 text-sm text-muted-foreground sm:px-10 lg:px-16">ALD Pulse connects buyers with qualified coating and deposition suppliers.</footer></div>
}
