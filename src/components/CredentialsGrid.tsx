const credentials = [
  { year: '1996', title: 'Erste Website gebaut', detail: 'Mit 21 Jahren', row: 'top' },
  { year: '2004', title: 'TYPO3-Forum gegründet', detail: 'Eines der größten in Europa', row: 'top' },
  { year: '2013', title: '"Tech-Nick" bei Saturn', detail: '82 Mio. TV-Zuschauer', row: 'top' },
  { year: '2014', title: '"Ein Fall für zwei" (ZDF)', detail: 'Seit über 10 Jahren', row: 'top' },
  { year: '2025', title: 'schrittmacher.ai gegründet', detail: 'Mit Stefanie Sick', row: 'bottom' },
  { year: '30+', title: 'Jahre Webentwicklung', detail: 'Von HTML bis KI', row: 'bottom' },
  { year: '2.500+', title: 'Commits auf GitHub', detail: 'Websites · Apps · Tools', row: 'bottom' },
  { year: '1', title: 'Mission', detail: 'Technick verbindet', row: 'bottom' },
];

const CredentialsGrid = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border rounded-xl overflow-hidden reveal">
          {credentials.map((item, i) => (
            <div
              key={i}
              className={`p-6 md:p-8 hover:bg-secondary/30 transition-colors duration-300 ${
                i < credentials.length - (credentials.length % 4 || 4) ? 'border-b' : ''
              } ${
                (i + 1) % 4 !== 0 ? 'lg:border-r' : ''
              } ${
                i % 2 === 0 ? 'sm:border-r lg:border-r-0' : ''
              } border-border`}
            >
              <p className={`font-serif-display text-3xl md:text-4xl mb-2 ${
                item.row === 'top' ? 'text-foreground/60' : 'text-foreground/90'
              }`}>{item.year}</p>
              <p className="text-sm text-foreground/70 mb-1">{item.title}</p>
              <p className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-foreground/35">
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
