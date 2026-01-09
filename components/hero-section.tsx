import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center max-w-[600px] mx-auto px-4 animate-fade-in-up">

      <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-[1.2] tracking-tight text-balance mb-4">
        Your human partner for AI-powered product validation
      </h1>

      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
        Join the free ProtoVibing Challenge. 5 focused sessions, 30 minutes each. Build something real, get real
        feedback, and finally move forward. Is your idea ready?
      </p>

      <a
        href="https://pmf.partners/"
        className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(107,63,160,0.5)] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background"
        aria-label="Take the Quick Assessment to start the ProtoVibing Challenge"
      >
        <span>Take the Quick Assessment</span>
        <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
      </a>

      <p className="mt-4 text-sm text-muted-foreground">
        Takes 3-5 minutes • Then we&apos;ll schedule your 5 sessions together
      </p>
    </section>
  )
}
