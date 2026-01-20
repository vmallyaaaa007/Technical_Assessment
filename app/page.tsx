"use client"

import { HeroSection } from "@/components/hero-section"
import { ExploreSection } from "@/components/explore-section"
import { SpeakersSection } from "@/components/speakers-section"
import { ExpertPerspectives } from "@/components/expert-perspectives"
import { InsightsSection } from "@/components/insights-section"
import { AgendaSection } from "@/components/agenda-section"
import { Footer } from "@/components/footer"
import { RSVPForm } from "@/components/rsvp-form"

export default function SimplilearnLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <HeroSection />
      
      {/* Introduction Section - RSVP hidden on mobile since it's in hero */}
      <section className="max-w-3xl mx-auto px-5 md:px-6 pt-6 md:pt-8 pb-8 md:pb-12">
        <div className="hidden md:block mb-8">
          <RSVPForm variant="light" />
        </div>
        <p className="text-black leading-relaxed mb-5 md:mb-6 text-sm md:text-[15px] font-bold">
          AI is accelerating change across every operational layer. Roles are shifting. Leadership models are
          collapsing and reforming. Frontline and mid-level managers will soon lead teams of people and
          intelligent agents.
        </p>
        <p className="text-black leading-relaxed mb-5 md:mb-6 text-sm md:text-[15px] font-bold">
          But even the most advanced enterprises are asking the same question:
        </p>
        <p className="text-center text-lg md:text-2xl font-bold text-gray-900 leading-snug mb-5 md:mb-6">
          Which capabilities will matter most,<br />
          and how do we build them at scale?
        </p>
        <p className="text-black leading-relaxed text-sm md:text-[15px] font-bold">
          This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders for a candid,
          senior-level discussion on what&apos;s coming next.
        </p>
      </section>

      <ExploreSection />
      <SpeakersSection />
      <ExpertPerspectives />
      <InsightsSection />
      <AgendaSection />

      <Footer />
    </div>
  )
}
