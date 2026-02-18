const CTASection = () => {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Strong warm gold glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/[0.10] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/[0.06] rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif-display text-7xl md:text-8xl lg:text-9xl text-foreground/95 mb-6 reveal">
          Bereit?
        </h2>
        <p className="text-lg md:text-xl text-foreground/75 max-w-xl mx-auto mb-10 leading-relaxed reveal">
          30 Minuten. Kostenlos. Danach wissen Sie,
          was möglich ist – und was der nächste Schritt wäre.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
          <a
            href="mailto:hallo@schrittmacher.ai"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Projekt anfragen <span aria-hidden="true">→</span>
          </a>
          <a
            href="tel:+4989909015393"
            className="inline-flex items-center gap-2 border border-border text-foreground/80 px-7 py-3.5 rounded-lg font-medium hover:bg-secondary/50 transition-colors"
          >
            Oder direkt anrufen <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="border-t border-border/50 pt-8 reveal">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-mono-label text-[11px] tracking-wider text-foreground/35">
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
