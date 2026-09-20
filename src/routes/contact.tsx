import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Mail } from 'lucide-react'
import { MarketplaceHeader } from '@/components/MarketplaceHeader'

export const Route = createFileRoute('/contact')({
  head: () => ({ meta: [{ title: 'Contact ALD Pulse' }, { name: 'description', content: 'Contact the ALD Pulse marketplace team by email.' }] }),
  component: ContactPage,
})

function ContactPage() {
  return <div className="min-h-dvh bg-background"><MarketplaceHeader /><main className="w-full px-6 py-20 sm:px-10 lg:px-16 lg:py-28"><div className="grid gap-12 lg:grid-cols-2 lg:gap-24"><div><p className="font-mono text-[10px] font-bold tracking-[.22em] text-primary">CONTACT ALD PULSE</p><h1 className="mt-4 text-5xl font-semibold leading-[1.02] tracking-[-.06em] text-foreground md:text-7xl">Let’s make sourcing simpler.</h1><p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground">For marketplace questions, supplier introductions, coating requests, or precursor sourcing, send us a note and our desk will respond by email.</p></div><div className="flex items-start border-t border-border pt-6"><Mail className="mt-1 size-5 text-primary" /><div className="ml-4"><p className="text-sm font-semibold text-foreground">General enquiries</p><a href="mailto:hello@aldpulse.com" className="mt-3 inline-block text-2xl font-semibold tracking-[-.03em] text-primary hover:underline">hello@aldpulse.com</a><p className="mt-4 text-sm leading-6 text-muted-foreground">We’ll get back to you as soon as possible.</p></div></div></div><Link to="/" className="mt-16 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"><ArrowLeft className="size-4" /> Back to ALD Pulse</Link></main></div>
}
