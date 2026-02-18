const CTASection = () => {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Warm gold glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.06] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif-display text-6xl md:text-7xl lg:text-8xl mb-6 reveal">
          Bereit?
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed reveal">
          30 Minuten. Kostenlos. Danach wissen Sie, ob KI für Ihr
          Unternehmen Sinn macht – und was der nächste Schritt wäre.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
          <a
            href="mailto:hallo@schrittmacher.ai"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Erstgespräch buchen <span aria-hidden="true">→</span>
          </a>
          <a
            href="tel:+498990901539​43"
            className="inline-flex items-center gap-2 border border-border text-foreground/80 px-7 py-3.5 rounded-lg font-medium hover:bg-secondary/50 transition-colors"
          >
            Oder direkt anrufen <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="border-t border-border/50 pt-8 reveal">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-mono-label text-[11px] tracking-wider text-muted-foreground">
            <span>✉ hallo@schrittmacher.ai</span>
            <span>☎ +49 89 909015 3943</span>
            <span>◉ Grünwald bei München</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
