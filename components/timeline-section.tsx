const steps = [
  {
    number: 1,
    title: "Take the assessment",
    description: "We'll understand your idea and readiness",
  },
  {
    number: 2,
    title: "Schedule your sessions",
    description: "Quick call to lock in five 30-minute blocks over 5 days",
  },
  {
    number: 3,
    title: "Do the homework",
    description:
      "Expect assigned tasks between sessions and be ready to work.",
  },
  {
    number: 4,
    title: "Ship your prototype",
    description: "Walk away with something real you can test and iterate on",
  },
]

export function TimelineSection() {
  return (
    <section className="w-full max-w-2xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">How It Works</h2>

      <div className="relative">
        {/* Vertical gradient line */}
        <div
          className="absolute left-6 md:left-8 top-6 bottom-6 w-0.5 z-0"
          style={{ background: "var(--gradient-primary)" }}
          aria-hidden="true"
        />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative flex gap-6 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              {/* Step icon */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-xl font-bold bg-primary text-white">
                {step.number}
              </div>

              {/* Step content */}
              <div className="flex-1 pt-2 md:pt-3">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
