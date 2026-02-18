import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Impressum = () => {
  return (
    <div className="noise-overlay">
      <Navigation />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <h1 className="font-serif-display text-4xl md:text-5xl mb-12">Impressum</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground [&_strong]:text-foreground">
          <section>
            <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">Angaben gemäß § 5 TMG</p>
            <p><strong>Dream & Anchor Handelsgesellschaft mbH</strong><br />
            Nördliche Münchner Straße 27a<br />
            82031 Grünwald</p>
          </section>
          <section>
            <p><strong>Vertreten durch:</strong> Antoine Monot, Geschäftsführer</p>
          </section>
          <section>
            <p><strong>Kontakt:</strong><br />
            Telefon: +49 89 909015 3943<br />
            Mobil: +49 176 93106999<br />
            E-Mail: hallo@schrittmacher.ai</p>
          </section>
          <section>
            <p><strong>Registereintrag:</strong><br />
            Handelsregister: Amtsgericht München<br />
            Registernummer: HRB 241987</p>
          </section>
          <section>
            <p><strong>Umsatzsteuer-ID:</strong><br />
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: wird ergänzt</p>
          </section>
          <section>
            <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
            Antoine Monot<br />
            Nördliche Münchner Straße 27a<br />
            82031 Grünwald</p>
          </section>
          <section>
            <p><strong>Streitschlichtung:</strong><br />
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a><br />
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
