import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const sections = [
  {
    title: '1. Verantwortlicher',
    text: 'Dream & Anchor Handelsgesellschaft mbH\nNördliche Münchner Straße 27a, 82031 Grünwald\nE-Mail: hallo@schrittmacher.ai',
  },
  {
    title: '2. Erhobene Daten',
    text: 'Beim Besuch unserer Website werden automatisch folgende Daten erhoben: IP-Adresse (anonymisiert), Browsertyp und -version, Betriebssystem, Referrer-URL, Zeitpunkt des Zugriffs. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.',
  },
  {
    title: '3. Cookies & Local Storage',
    text: 'Wir verwenden keine Tracking-Cookies. Zur Verbesserung der Nutzererfahrung speichern wir im Local Storage Ihres Browsers lediglich: ob Sie die Seite bereits besucht haben (Besuchszähler). Diese Daten sind nicht personenbezogen und werden nicht an Dritte übermittelt.',
  },
  {
    title: '4. Kontaktaufnahme',
    text: 'Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zum Zweck der Bearbeitung Ihrer Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.',
  },
  {
    title: '5. KI-Werkbank',
    text: 'Bei Nutzung der KI-Werkbank auf unserer Website werden Ihre Eingaben an die Anthropic API (Claude) übermittelt, um eine Analyse zu generieren. Anthropic verarbeitet diese Daten gemäß ihrer eigenen Datenschutzrichtlinie. Wir speichern Ihre Eingaben nicht dauerhaft. Die Nutzung ist freiwillig und erfordert keine Registrierung.',
  },
  {
    title: '6. Hosting',
    text: 'Diese Website wird bei Cloudflare Pages gehostet. Beim Aufruf der Seite werden Server-Logfiles gespeichert. Cloudflare verarbeitet Daten gemäß ihrer Datenschutzrichtlinie.',
  },
  {
    title: '7. Ihre Rechte',
    text: 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Zudem haben Sie ein Widerspruchsrecht gegen die Verarbeitung sowie ein Recht auf Datenübertragbarkeit. Kontakt: hallo@schrittmacher.ai',
  },
  {
    title: '8. Analyse-Tools',
    text: 'Wir verwenden keine US-amerikanischen Tracking-Dienste wie Google Analytics oder Facebook Pixel. Wenn wir in Zukunft Analyse-Tools einsetzen, werden diese DSGVO-konform sein (z.B. Plausible oder Umami) und ohne Cookies arbeiten.',
  },
];

const Datenschutz = () => {
  return (
    <div className="noise-overlay">
      <Navigation />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <h1 className="font-serif-display text-4xl md:text-5xl mb-12">Datenschutzerklärung</h1>
        <div className="space-y-8">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-lg font-medium text-foreground mb-3">{s.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{s.text}</p>
            </section>
          ))}
          <p className="font-mono-label text-[10px] tracking-[0.2em] uppercase text-muted-foreground pt-4">
            Stand: Februar 2025
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
