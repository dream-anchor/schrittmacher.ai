const cards = [
  {
    before: 'Ihr Team redet seit Monaten über KI. Alle haben ChatGPT ausprobiert. Aber niemand weiß, wo man wirklich anfangen soll.',
    afterLabel: 'Nach einem Tag',
    afterHeadline: 'Jeder im Team hat 3 KI-Tools im Alltag.',
    afterText: 'Kein theoretisches Gelaber. Am Abend gehen alle nach Hause und machen Dinge, die sie morgens noch nicht konnten.',
    tag: 'Workshop · Tagesformat',
  },
  {
    before: 'Ihre Konferenz braucht einen KI-Speaker. Aber bitte keinen, bei dem nach 10 Minuten alle aufs Handy schauen.',
    afterLabel: 'Nach einer Keynote',
    afterHeadline: 'Ein Publikum, das nicht nur klatscht – sondern handelt.',
    afterText: 'Technologie + Entertainment von jemandem, der beides professionell macht. Kein Zufall. Kein Risiko.',
    tag: 'Keynote · Events & Konferenzen',
  },
  {
    before: 'Sie brauchen ein internes Tool, eine Automation, einen Prototypen. Ihre Agentur sagt: 6 Monate, 80.000 Euro.',
    afterLabel: 'Nach 1–2 Wochen',
    afterHeadline: 'Ein funktionierender Prototyp. Echte Software.',
    afterText: 'Vibe Coding: Wir beschreiben der KI, was wir brauchen – und bauen es. Kein PowerPoint. Code, der läuft.',
    tag: 'Vibe Coding · 1–2 Wochen',
  },
];

const TransformationSection = () => {
  return (
    <section id="transformation" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="mb-16 reveal">
          <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-foreground/35 mb-4">
            Was passiert, wenn wir kommen
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.1] text-foreground/95">
            Nicht was wir anbieten.<br />
            Was sich bei Ihnen ändert.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="reveal bg-card border border-border rounded-xl p-8 flex flex-col hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Before */}
              <div className="mb-6">
                <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-red-400/60 mb-3">Vorher</p>
                <p className="text-foreground/50 text-sm leading-relaxed italic">"{card.before}"</p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-foreground/35 text-xs">↓</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* After */}
              <div className="flex-1">
                <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-green-400/70 mb-3">{card.afterLabel}</p>
                <p className="font-serif-display text-2xl md:text-2xl text-foreground/95 mb-3 leading-snug">
                  "{card.afterHeadline}"
                </p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {card.afterText}
                </p>
              </div>

              {/* Tag */}
              <div className="mt-6 pt-4 border-t border-border">
                <span className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-primary bg-primary/10 px-3 py-1.5 rounded-md">
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
