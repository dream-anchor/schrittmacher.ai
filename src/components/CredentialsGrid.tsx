const credentials = [
  { year: '1996', title: 'Erster Code geschrieben', detail: 'HTML · PHP · MySQL' },
  { year: '2003', title: 'TYPO3-Forum gegründet', detail: 'Eines der größten in Europa' },
  { year: '2013', title: '"Tech-Nick" bei Saturn', detail: '82 Mio. TV-Zuschauer' },
  { year: '3.676', title: 'GitHub-Commits', detail: '6 Plattformen live' },
  { year: '2025', title: 'schrittmacher.ai gegründet', detail: 'Mit Stefanie Sick' },
  { year: '30+', title: 'Jahre Programmiererfahrung', detail: 'Von PHP bis KI' },
  { year: '∞', title: 'Kaffee getrunken', detail: 'Minimum 4 pro Tag' },
  { year: '1', title: 'Mission', detail: 'Technick verbindet' },
];

const CredentialsGrid = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border rounded-xl overflow-hidden reveal">
          {credentials.map((item, i) => (
            <div
              key={i}
              className={`p-6 md:p-8 ${
                i < credentials.length - (credentials.length % 4 || 4) ? 'border-b' : ''
              } ${
                (i + 1) % 4 !== 0 ? 'lg:border-r' : ''
              } ${
                i % 2 === 0 ? 'sm:border-r lg:border-r-0' : ''
              } ${
                (i + 1) % 4 !== 0 ? '' : ''
              } border-border`}
            >
              <p className="font-serif-display text-3xl md:text-4xl text-foreground mb-2">{item.year}</p>
              <p className="text-sm text-foreground/80 mb-1">{item.title}</p>
              <p className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-muted-foreground">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsGrid;
