export function Footer() {
  return (
    <footer className="w-full max-w-2xl mx-auto px-4 text-center">
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
        This challenge is completely free. No credit card required. You&apos;ll need 30 minutes per day for 5 days and a
        willingness to test your assumptions.
      </p>
      <p className="text-sm text-muted-foreground">
        Offered by{" "}
        <a
          href="https://pathfinderfoundry.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-secondary/80 underline underline-offset-2 transition-colors"
        >
          Pathfinder Foundry
        </a>
      </p>
    </footer>
  )
}
