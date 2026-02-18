import { useState, useEffect, useCallback } from 'react';

const chips = [
  'Website selbst pflegen',
  'Internes Tool bauen',
  'Angebote automatisieren',
  'Social Media Content',
  'Dokumente zusammenfassen',
];

const KIWerkbank = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [hours, setHours] = useState(0);
  const [savings, setSavings] = useState(0);
  const [focused, setFocused] = useState(false);

  const handleChip = (text: string) => {
    setInput(text);
    setShowResult(false);
  };

  const handleAnalyze = useCallback(() => {
    if (!input.trim() || loading) return;
    setLoading(true);
    setShowResult(false);
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 2500);
  }, [input, loading]);

  // CountUp animation
  useEffect(() => {
    if (!showResult) {
      setHours(0);
      setSavings(0);
      return;
    }
    const targetH = 5;
    const targetS = 1200;
    const steps = 40;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setHours(Math.round((step / steps) * targetH * 10) / 10);
      setSavings(Math.round((step / steps) * targetS));
      if (step >= steps) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [showResult]);

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Intro */}
        <div className="text-center mb-12 reveal">
          <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-foreground/35 mb-4">Live-Demo</p>
          <h2 className="font-serif-display text-4xl md:text-5xl mb-4 leading-[1.1] text-foreground/95">
            Beschreiben Sie Ihr Problem.<br />
            Wir zeigen, was möglich ist.
          </h2>
          <p className="text-foreground/70">
            Keine Anmeldung. Kein Verkaufsgespräch. Einfach tippen.
          </p>
        </div>

        {/* Werkbank Box */}
        <div className={`reveal bg-card border border-border rounded-xl overflow-hidden transition-shadow duration-[3000ms] ${
          focused ? 'shadow-[0_0_30px_hsl(var(--gold)/0.12)]' : 'werkbank-pulse'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <span className="font-medium text-sm text-foreground/95">KI-Werkbank</span>
            <span className="font-mono-label text-[10px] tracking-wider flex items-center gap-2 text-foreground/35">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              CLAUDE AI
            </span>
          </div>

          {/* Input area */}
          <div className="p-6">
            <textarea
              value={input}
              onChange={(e) => { setInput(e.target.value); setShowResult(false); }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder={'Woran scheitern Sie gerade? Zum Beispiel:\n\'Unsere Agentur braucht 2 Wochen für jede Textänderung auf der Website.\''}
              className="w-full bg-secondary/70 border border-border rounded-lg p-4 text-sm text-foreground placeholder:text-foreground/40 resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow min-h-[100px]"
            />

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-4">
              {chips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleChip(chip)}
                  className="font-mono-label text-[10px] tracking-wider px-3 py-1.5 rounded-md border border-border text-foreground/45 hover:text-foreground/80 hover:border-primary/40 transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Analyze button */}
            <div className="flex justify-end mt-4">
              <button
                onClick={handleAnalyze}
                disabled={!input.trim() || loading}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    Analysiere
                    <span className="inline-flex gap-0.5">
                      <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
                      <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
                      <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
                    </span>
                  </>
                ) : (
                  <>Analysieren ✦</>
                )}
              </button>
            </div>
          </div>

          {/* Results */}
          {showResult && (
            <div className="border-t border-border p-6 space-y-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-500">
              <div className="bg-secondary/50 rounded-lg p-5 border border-border">
                <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-primary mb-2">Lösung</p>
                <p className="font-medium text-foreground/95 mb-1">KI-gestütztes Website-Management</p>
                <p className="text-sm text-foreground/70">
                  Ein System bei dem Sie Texte, Bilder und Inhalte
                  selbst ändern – per natürlicher Sprache, ohne Code,
                  ohne auf Ihre Agentur zu warten.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-5 border border-border">
                <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-primary mb-2">Weg dahin</p>
                <p className="text-sm text-foreground/70">Timeline: <span className="text-foreground/95 font-medium">Workshop: 1 Tag · Umsetzung: 1–2 Wochen</span></p>
                <p className="text-sm text-foreground/70">Empfehlung: <span className="text-foreground/95 font-medium">Tagesworkshop + Umsetzungsbegleitung</span></p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-5 border border-border grid grid-cols-2 gap-6">
                <div>
                  <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-primary mb-1">Gespart pro Woche</p>
                  <p className="font-serif-display text-3xl text-foreground/95">~{hours} Stunden</p>
                </div>
                <div>
                  <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-primary mb-1">Monatliche Ersparnis</p>
                  <p className="font-serif-display text-3xl text-foreground/95">~{savings.toLocaleString('de-DE')} €</p>
                </div>
              </div>
              <a
                href="mailto:hallo@schrittmacher.ai"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors w-full justify-center"
              >
                Gespräch vereinbaren →
              </a>
            </div>
          )}

          {/* Footer */}
          <div className="px-6 py-3 border-t border-border">
            <p className="font-mono-label text-[9px] tracking-wider text-foreground/25 text-center">
              Powered by Claude AI · Ihre Daten werden nicht gespeichert · DSGVO-konform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KIWerkbank;
