const steps = [
  {
    num: '01',
    title: 'Erstgespräch',
    text: '30 Minuten. Kaffee optional. Sie erzählen, wo es klemmt. Wir sagen ehrlich, ob KI helfen kann.',
    note: 'Kein Buzzword-Bingo, versprochen.',
  },
  {
    num: '02',
    title: 'Analyse',
    text: 'Wir finden die Stellen, an denen KI den größten Hebel hat. Ein Plan auf einer Seite, keine 80-Folien-Präsentation.',
    note: null,
  },
  {
    num: '03',
    title: 'Umsetzung',
    text: 'Workshop am selben Tag. Prototyp in 1–2 Wochen. Wir sind Macher, keine Berater die Berater beraten.',
    note: 'Ergebnisse, nicht Folien.',
  },
  {
    num: '04',
    title: 'Nachbetreuung',
    text: 'Wir ghosten nicht. Wir messen den Impact, optimieren was nötig ist und helfen beim nächsten Schritt.',
    note: null,
  },
];

const ProcessSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="mb-16 reveal">
          <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-foreground/35 mb-4">
            So arbeiten wir
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl text-foreground/95">
            Vier Schritte. Null Bullshit.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              {/* Big background number */}
              <span className="font-serif-display text-[8rem] md:text-[10rem] leading-none text-foreground/[0.03] absolute -top-8 -left-2 select-none pointer-events-none">
                {step.num}
              </span>
              <div className="relative">
                <p className="font-mono-label text-xs text-primary mb-3">{step.num}</p>
                <h3 className="font-serif-display text-2xl mb-3 text-foreground/95">{step.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{step.text}</p>
                {step.note && (
                  <p className="text-primary/50 text-sm italic mt-3">{step.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
