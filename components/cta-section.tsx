import { ArrowRight } from "lucide-react"

export function CTASection() {
    return (
        <section id="cta" className="flex flex-col items-center text-center max-w-[600px] mx-auto px-4 animate-fade-in-up">
            <a
                href="https://pmf.partners/"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(107,63,160,0.5)] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Take the Quick Assessment to start the ProtoVibing Challenge"
            >
                <span>Take the Quick Assessment</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <p className="mt-4 text-sm text-muted-foreground">
                Move from stuck idea to tested prototype in 5 days
            </p>
        </section>
    )
}
