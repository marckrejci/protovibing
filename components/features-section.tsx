import { Lightbulb, Wrench, Users } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Clarity first",
    description: "We'll help you define who this is for and what problem it solves",
  },
  {
    icon: Wrench,
    title: "Build without code",
    description: "Use simple tools to create a prototype people can actually react to",
  },
  {
    icon: Users,
    title: "Real validation",
    description: "Test with 3-5 potential users and know if you're on the right track",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="w-full max-w-4xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Why This Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`glass-card gradient-border p-6 text-center animate-fade-in-up animation-delay-${(index + 1) * 100}`}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 mb-4">
              <feature.icon className="w-6 h-6 text-secondary" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
