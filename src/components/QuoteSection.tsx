const QuoteSection = () => {
  return (
    <section className="relative py-24 md:py-36">
      <div className="max-w-4xl mx-auto px-6 text-center reveal">
        <blockquote className="font-serif-display italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground leading-snug">
          "Wir glauben nicht an PowerPoint-Beratung.<br />
          Wir bauen Dinge. Schnell. Mit KI.<br />
          Und ja – mit einem Lächeln."
        </blockquote>
        <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-8">
          — Antoine Monot · Gründer, schrittmacher.ai
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;
