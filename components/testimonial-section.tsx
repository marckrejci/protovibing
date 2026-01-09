import { Quote } from "lucide-react"

export function TestimonialSection() {
  return (
    <section id="testimonial" className="w-full max-w-2xl mx-auto px-4 animate-fade-in-up animation-delay-400">
      <div className="glass-card p-8 text-center">
        <Quote className="w-8 h-8 text-primary mx-auto mb-4 opacity-60" aria-hidden="true" />
        <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-4 text-pretty">
          “I went from 'maybe someday' to having real people test a prototype of my idea in just a few days!”
        </blockquote>
        <cite className="text-sm text-muted-foreground not-italic">— Early ProtoVibing participant</cite>
      </div>
    </section>
  )
}
