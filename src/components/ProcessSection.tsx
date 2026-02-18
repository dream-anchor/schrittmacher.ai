const steps = [
  {
    num: '01',
    title: 'Erstgespräch',
    text: '30 Minuten. Sie erzählen, was Sie brauchen. Wir sagen ehrlich, ob und wie wir helfen können.',
    note: 'Kein Buzzword-Bingo, versprochen.',
  },
  {
    num: '02',
    title: 'Analyse',
    text: 'Wir schauen uns an, was da ist und was fehlt. Ein Plan auf einer Seite. Kein 80-Folien-Deck.',
    note: null,
  },
  {
    num: '03',
    title: 'Umsetzung',
    text: 'Website in 2–4 Wochen. Workshop am selben Tag. Wir bauen. Sie sehen jeden Tag Fortschritt.',
    note: 'Ergebnisse, nicht Folien.',
  },
  {
    num: '04',
    title: 'Betreuung',
    text: 'Wir verschwinden nicht nach dem Launch. Updates, Erweiterungen, Fragen – wir sind da.',
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
