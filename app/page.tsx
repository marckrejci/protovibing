import { GradientBlobs } from "@/components/gradient-blobs"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TimelineSection } from "@/components/timeline-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background effects */}
      <GradientBlobs />
      <div className="noise-overlay" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-20 md:gap-24 py-12 md:py-20">
        <HeroSection />
        <FeaturesSection />
        <TimelineSection />
        <TestimonialSection />
        <Footer />
      </div>
    </main>
  )
}
