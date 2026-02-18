const cards = [
  {
    before: 'Sie brauchen eine Website, ein Tool, eine Lösung. Aber Ihre Agentur ist zu langsam, zu teuer, oder versteht nicht was Sie meinen.',
    afterLabel: 'Das Ergebnis',
    afterHeadline: 'Ihre Lösung. Gebaut von jemandem, der Sie versteht.',
    afterText: 'Websites, Web-Apps, interne Tools, Automationen. Maßgeschneidert, kein Template. Von jemandem mit 30 Jahren Erfahrung darin, Kundenbedürfnisse in funktionierende Software zu übersetzen.',
    tag: 'Webentwicklung',
  },
  {
    before: 'Für jede kleine Änderung an Ihrer Website müssen Sie jemanden anrufen. Jedes Bild, jeder Text, jede Kleinigkeit – Wartezeit, Kosten, Frust.',
    afterLabel: 'Das Ergebnis',
    afterHeadline: 'Sie machen es selbst. Ohne Code. Ohne Agentur. Ab morgen.',
    afterText: 'In einem Tag lernen Sie und Ihr Team, wie Sie mit KI Ihre Website pflegen, Texte schreiben, Bilder erstellen, Prototypen bauen. Am Abend können Sie Dinge, die morgens noch unmöglich schienen.',
    tag: 'Workshop · Tagesformat',
  },
  {
    before: 'Ihre Konferenz braucht einen Speaker. Aber bitte keinen, bei dem nach 10 Minuten alle aufs Handy schauen.',
    afterLabel: 'Das Ergebnis',
    afterHeadline: 'Ein Publikum, das gesehen hat wie jemand live eine Website baut.',
    afterText: 'Keine Slides. Keine Theorie. Antoine baut auf der Bühne in Echtzeit – mit KI, vor den Augen des Publikums. Technologie + Entertainment von jemandem, der beides professionell macht.',
    tag: 'Keynote · Live-Demo',
  },
];

const TransformationSection = () => {
  return (
    <section id="transformation" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="mb-16 reveal">
          <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-foreground/35 mb-4">
            Drei Wege
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.1] text-foreground/95">
            Raus aus der Abhängigkeit.<br />
            Rein in die Umsetzung.
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
                <p className="font-serif-display text-2xl text-foreground/95 mb-3 leading-snug">
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
