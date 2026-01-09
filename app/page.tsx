"use client"

import { GradientBlobs } from "@/components/gradient-blobs"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TimelineSection } from "@/components/timeline-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CTASection } from "@/components/cta-section"
import { GPTSection } from "@/components/gpt-section"
import { Footer } from "@/components/footer"
import { useHashNavigation } from "@/lib/use-hash-navigation"

export default function Home() {
  useHashNavigation()
  return (
    <main className="relative min-h-screen">
      {/* Background effects */}
      <GradientBlobs />
      <div className="noise-overlay" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pb-12 md:pb-20">
        <Header />

        <div className="flex flex-col items-center gap-20 md:gap-24 mt-8 md:mt-12">
          <HeroSection />
          <FeaturesSection />
          <TimelineSection />
          <div className="flex flex-col items-center gap-16 w-full">
            <TestimonialSection />
            <CTASection />
          </div>
          <GPTSection />
          <Footer />
        </div>
      </div>
    </main>
  )
}
