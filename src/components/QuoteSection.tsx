const QuoteSection = () => {
  return (
    <section className="relative py-24 md:py-36">
      <div className="max-w-4xl mx-auto px-6 text-center reveal">
        <blockquote className="font-serif-display italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground/95 leading-snug">
          "30 Jahre war ich abhängig von Programmierern.<br />
          Dann kam KI. Jetzt baue ich selbst."
        </blockquote>
        <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-foreground/35 mt-8">
          — Antoine Monot · Gründer, schrittmacher.ai
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;
