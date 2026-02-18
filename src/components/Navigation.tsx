import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-medium tracking-tight">
          schrittmacher<span className="text-primary">.ai</span>
        </Link>
        <a
          href="mailto:hallo@schrittmacher.ai"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Erstgespräch buchen
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
