import { motion } from 'framer-motion';

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
          Webentwicklung · Workshops · Keynotes
        </motion.p>

        {/* Headline */}
        <h1 className="font-serif-display text-foreground/95 leading-[1.05] mb-8 max-w-5xl" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block mr-[0.25em]"
          >
            Sie
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.37, duration: 0.5 }}
            className="inline-block mr-[0.25em]"
          >
            warten.
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.5 }}
            className="inline-block mr-[0.25em]"
          >
            Auf
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.51, duration: 0.5 }}
            className="inline-block mr-[0.25em]"
          >
            Ihre
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.5 }}
            className="inline-block"
          >
            Agentur.
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="inline-block mr-[0.25em]"
          >
            Auf
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.5 }}
            className="inline-block mr-[0.25em]"
          >
            Ihren
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.79, duration: 0.5 }}
            className="inline-block"
          >
            Entwickler.
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.86, duration: 0.5 }}
            className="inline-block mr-[0.25em] italic text-primary"
          >
            Auf irgendwen.
          </motion.span>
        </h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-lg md:text-xl text-foreground/70 font-light max-w-2xl mb-10 leading-relaxed"
        >
          Wir bauen Websites, Web-Apps und digitale Lösungen mit KI.
          Und wir zeigen Ihnen, wie Sie es selbst können.
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
            Gespräch vereinbaren <span aria-hidden="true">→</span>
          </a>
          <a
            href="#duality"
            className="inline-flex items-center gap-2 border border-border text-foreground/80 px-7 py-3.5 rounded-lg font-medium hover:bg-secondary/50 transition-colors"
          >
            Unsere Geschichte <span aria-hidden="true">↓</span>
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
              <p className="font-serif-display text-3xl md:text-4xl text-foreground/95">30 Jahre</p>
              <p className="font-mono-label text-xs tracking-wider uppercase text-foreground/35 mt-1">Webentwicklung</p>
            </div>
            <div>
              <p className="font-serif-display text-3xl md:text-4xl text-foreground/95">82 Mio.</p>
              <p className="font-mono-label text-xs tracking-wider uppercase text-foreground/35 mt-1">TV-Zuschauer als Tech-Nick</p>
            </div>
            <div>
              <p className="font-serif-display text-3xl md:text-4xl text-foreground/95">100+</p>
              <p className="font-mono-label text-xs tracking-wider uppercase text-foreground/35 mt-1">Film- & TV-Produktionen</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
