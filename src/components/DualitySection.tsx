const DualitySection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border reveal">
          {/* Programmer */}
          <div className="relative pb-12 md:pb-0 md:pr-12 lg:pr-16">
            <div className="absolute inset-0 bg-cool-blue/[0.03] rounded-l-2xl pointer-events-none" />
            <div className="relative">
              <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-4">
                Seit 1996
              </p>
              <h2 className="font-serif-display text-4xl md:text-5xl mb-6">
                Der Programmierer.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Erste Website mit 14. Eines der größten TYPO3-Foren Europas
                aufgebaut. <span className="text-foreground font-medium">3.676 GitHub-Commits, 6 produktionsreife Plattformen
                mit KI und Vibe Coding gebaut</span> – und ein tiefes Verständnis dafür,
                was Technologie kann und wo sie an ihre Grenzen stößt.
              </p>
            </div>
          </div>

          {/* Entertainer */}
          <div className="relative pt-12 md:pt-0 md:pl-12 lg:pl-16">
            <div className="absolute inset-0 bg-warm-gold/[0.03] rounded-r-2xl pointer-events-none" />
            <div className="relative">
              <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-4">
                Seit 2008
              </p>
              <h2 className="font-serif-display text-4xl md:text-5xl mb-6">
                Der Entertainer.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                4 Jahre "Tech-Nick" bei Saturn. Schauspieler in Absolute Giganten,
                Das Experiment, Who Am I. Drehbücher für Netflix und ZDF.{' '}
                <span className="text-foreground font-medium">Die seltene Fähigkeit, komplexe Dinge so zu erklären, dass
                jeder sie versteht</span> – und am nächsten Tag umsetzt.
              </p>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-20 reveal">
          <p className="font-serif-display italic text-3xl md:text-4xl text-primary">
            Technick verbindet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DualitySection;
