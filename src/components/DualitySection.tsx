const DualitySection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border reveal">
          {/* Programmer */}
          <div className="relative pb-12 md:pb-0 md:pr-12 lg:pr-16">
            <div className="absolute inset-0 bg-cool-blue/[0.03] rounded-l-2xl pointer-events-none" />
            <div className="relative">
              <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-foreground/35 mb-4">
                Seit 1996
              </p>
              <h2 className="font-serif-display text-4xl md:text-5xl mb-6 text-foreground/95">
                Der Programmierer.
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Erste Website mit 14. Eines der größten TYPO3-Foren Europas
                aufgebaut. Seitdem: <span className="text-foreground/95 font-medium">Tausende Zeilen Code, Dutzende Projekte, ein tiefes Verständnis dafür,
                was Technologie kann</span> – und wo sie an ihre Grenzen stößt.
              </p>
            </div>
          </div>

          {/* Entertainer */}
          <div className="relative pt-12 md:pt-0 md:pl-12 lg:pl-16">
            <div className="absolute inset-0 bg-warm-gold/[0.03] rounded-r-2xl pointer-events-none" />
            <div className="relative">
              <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-foreground/35 mb-4">
                Seit 2008
              </p>
              <h2 className="font-serif-display text-4xl md:text-5xl mb-6 text-foreground/95">
                Der Entertainer.
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                4 Jahre "Tech-Nick" bei Saturn. Drehbücher für Netflix und ZDF.{' '}
                <span className="text-foreground/95 font-medium">Die seltene Fähigkeit, komplexe Dinge so zu erklären, dass
                jeder sie versteht</span> – und am nächsten Tag umsetzt.
              </p>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-20 py-16 reveal">
          <p className="font-serif-display italic text-4xl md:text-5xl lg:text-6xl text-primary">
            Technick verbindet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DualitySection;
