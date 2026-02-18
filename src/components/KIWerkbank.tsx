import { useState, useEffect, useCallback } from 'react';

const chips = [
  'E-Mails automatisch beantworten',
  'Angebote schneller erstellen',
  'Dokumente zusammenfassen',
  'Social Media Content',
  'Daten analysieren',
];

const KIWerkbank = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [hours, setHours] = useState(0);
  const [savings, setSavings] = useState(0);

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
    const targetH = 4;
    const targetS = 3200;
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
          <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-4">Live-Demo</p>
          <h2 className="font-serif-display text-4xl md:text-5xl mb-4 leading-[1.1]">
            Beschreiben Sie ein Problem.<br />
            Wir zeigen, was KI daraus macht.
          </h2>
          <p className="text-muted-foreground">
            Keine Anmeldung. Kein Verkaufsgespräch. Einfach tippen.
          </p>
        </div>

        {/* Werkbank Box */}
        <div className="reveal bg-card border border-border rounded-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <span className="font-medium text-sm">KI-Werkbank</span>
            <span className="font-mono-label text-[10px] tracking-wider flex items-center gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              CLAUDE AI
            </span>
          </div>

          {/* Input area */}
          <div className="p-6">
            <textarea
              value={input}
              onChange={(e) => { setInput(e.target.value); setShowResult(false); }}
              placeholder={'Was kostet Sie gerade am meisten Zeit? Zum Beispiel:\n"Wir beantworten täglich 200 Kundenanfragen per Mail –\nimmer die gleichen 30 Fragen."'}
              className={`w-full bg-secondary/50 border border-border rounded-lg p-4 text-sm text-foreground placeholder:text-muted-foreground/60 resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow min-h-[100px] ${
                !input && !loading ? 'shadow-[0_0_20px_hsl(var(--gold)/0.08)]' : ''
              }`}
            />

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-4">
              {chips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleChip(chip)}
                  className="font-mono-label text-[10px] tracking-wider px-3 py-1.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
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
                <p className="font-medium text-foreground mb-1">KI-gestütztes E-Mail-Triage-System</p>
                <p className="text-sm text-muted-foreground">
                  Ein System das eingehende Mails automatisch kategorisiert,
                  Standardanfragen beantwortet und nur Sonderfälle an Ihr Team weiterleitet.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-5 border border-border">
                <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-primary mb-2">Quick Win</p>
                <p className="text-sm text-muted-foreground">Timeline: <span className="text-foreground font-medium">1–2 Wochen</span></p>
                <p className="text-sm text-muted-foreground">Empfohlener Service: <span className="text-foreground font-medium">Vibe Coding</span></p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-5 border border-border grid grid-cols-2 gap-6">
                <div>
                  <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-primary mb-1">Gespart pro Tag</p>
                  <p className="font-serif-display text-3xl text-foreground">~{hours} Stunden</p>
                </div>
                <div>
                  <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-primary mb-1">Monatliche Ersparnis</p>
                  <p className="font-serif-display text-3xl text-foreground">~{savings.toLocaleString('de-DE')} €</p>
                </div>
              </div>
              <a
                href="mailto:hallo@schrittmacher.ai"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors w-full justify-center"
              >
                Erstgespräch buchen →
              </a>
            </div>
          )}

          {/* Footer */}
          <div className="px-6 py-3 border-t border-border">
            <p className="font-mono-label text-[9px] tracking-wider text-muted-foreground/50 text-center">
              Powered by Claude AI · Ihre Daten werden nicht gespeichert · DSGVO-konform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KIWerkbank;
