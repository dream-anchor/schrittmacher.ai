import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Was kostet eine Website?',
    a: 'Jedes Projekt ist anders – Umfang, Funktionen, CMS-Anforderungen. Im kostenlosen Erstgespräch klären wir in 30 Minuten, was sinnvoll ist und was es kostet. Keine versteckten Kosten, keine Überraschungen.',
  },
  {
    q: 'Was genau baut ihr?',
    a: 'Websites, Web-Apps, interne Tools, Automationen. Alles was im Browser läuft. Auf modernem Stack: React, TypeScript, Supabase, Cloudflare. Maßgeschneidert, kein Template von der Stange.',
  },
  {
    q: 'Was ist der Unterschied zu einer klassischen Agentur?',
    a: 'Geschwindigkeit und Direktheit. Keine Projektmanager, keine Zwischenebenen. Sie reden direkt mit dem, der baut. Und weil wir KI als Werkzeug nutzen, sind wir 10-50 Mal schneller als ein klassisches Entwicklerteam.',
  },
  {
    q: 'Was lernt man im Workshop?',
    a: 'Hängt davon ab was Sie brauchen. "Meine Website, meine Regeln" – Sie lernen Ihre Website selbst zu pflegen, ohne Code. "Vom Briefing zum Prototyp" – Sie bauen an einem Tag eine funktionierende App. "KI für mein Team" – Ihr Team spart ab morgen eine Stunde pro Tag.',
  },
  {
    q: 'Brauche ich technisches Vorwissen?',
    a: 'Nein. Antoine hat 82 Millionen TV-Zuschauern Technik erklärt. Ihr Team schafft er auch.',
  },
  {
    q: 'Nur in München?',
    a: 'Webentwicklung läuft komplett remote. Workshops und Keynotes: deutschlandweit. Für Keynotes auch international.',
  },
];

const FAQSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 reveal">
          <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-foreground/35 mb-4">
            Häufige Fragen
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl text-foreground/95">FAQ</h2>
        </div>

        <Accordion type="single" collapsible className="reveal">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground/95 hover:no-underline py-5">
                <span className="text-base">{faq.q}</span>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
