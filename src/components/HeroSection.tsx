import { motion } from 'framer-motion';

const words = [
  { text: 'Die ', accent: false },
  { text: 'meisten ', accent: false },
  { text: 'KI-Berater', accent: false },
  { text: '\n', accent: false },
  { text: 'können ', accent: false },
  { text: 'reden.', accent: true },
  { text: '\n', accent: false },
  { text: 'Wir ', accent: false },
  { text: 'können ', accent: false },
  { text: 'bauen.', accent: true },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-mesh overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono-label text-xs tracking-[0.2em] uppercase text-primary/70 mb-8"
        >
          KI-Beratung · München
        </motion.p>

        {/* Headline */}
        <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 max-w-4xl">
          {words.map((word, i) => {
            if (word.text === '\n') {
              return <br key={i} />;
            }
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                className={`inline-block mr-[0.25em] ${
                  word.accent ? 'italic text-primary' : 'text-foreground'
                }`}
              >
                {word.text}
              </motion.span>
            );
          })}
        </h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mb-10 leading-relaxed"
        >
          Workshops, Keynotes und Vibe Coding für Unternehmen,
          die KI nicht nur verstehen, sondern einsetzen wollen. Ab morgen.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <a
            href="mailto:hallo@schrittmacher.ai"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Kostenloses Erstgespräch <span aria-hidden="true">→</span>
          </a>
          <a
            href="#transformation"
            className="inline-flex items-center gap-2 border border-border text-foreground/80 px-7 py-3.5 rounded-lg font-medium hover:bg-secondary/50 transition-colors"
          >
            Was heißt das konkret? <span aria-hidden="true">↓</span>
          </a>
        </motion.div>

        {/* Proof Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="border-t border-border/50 pt-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl">
            <div>
              <p className="font-serif-display text-3xl md:text-4xl text-foreground">30 Jahre</p>
              <p className="font-mono-label text-xs tracking-wider uppercase text-muted-foreground mt-1">Code-Erfahrung</p>
            </div>
            <div>
              <p className="font-serif-display text-3xl md:text-4xl text-foreground">82 Mio.</p>
              <p className="font-mono-label text-xs tracking-wider uppercase text-muted-foreground mt-1">TV-Zuschauer als Tech-Nick</p>
            </div>
            <div>
              <p className="font-serif-display text-3xl md:text-4xl text-foreground">Netflix</p>
              <p className="font-mono-label text-xs tracking-wider uppercase text-muted-foreground mt-1">Drehbuchautor</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
