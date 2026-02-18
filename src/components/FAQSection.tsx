import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Was genau baut ihr?',
    a: 'Websites, Web-Apps, interne Tools, Automationen – alles was im Browser läuft. Auf modernem Stack: React, TypeScript, Supabase, Cloudflare. Maßgeschneidert, kein Template von der Stange. Von der Restaurant-Website bis zum internen Management-System.',
  },
  {
    q: 'Was ist der Unterschied zu einer klassischen Agentur?',
    a: 'Direktheit und Erfahrung. Keine Projektmanager, keine Zwischenebenen. Sie reden mit dem, der baut – und der seit 30 Jahren versteht, was Unternehmen brauchen. Dazu nutzen wir KI als Werkzeug, was uns deutlich schneller macht als klassische Teams.',
  },
  {
    q: 'Was lernt man im Workshop?',
    a: 'Das hängt davon ab, was Sie brauchen. "Meine Website, meine Regeln" – Sie lernen Ihre Website selbst zu pflegen, ohne Code, ohne Agentur. "Vom Briefing zum Prototyp" – Sie bauen an einem Tag eine funktionierende App mit KI. "KI für mein Team" – Jeder im Team spart ab morgen mindestens eine Stunde pro Tag.',
  },
  {
    q: 'Brauche ich technisches Vorwissen?',
    a: 'Nein. Antoine hat 82 Millionen TV-Zuschauern Technik erklärt. Ihr Team schafft er auch.',
  },
  {
    q: 'Nur in München?',
    a: 'Webentwicklung läuft komplett remote. Workshops und Keynotes deutschlandweit.',
  },
  {
    q: 'Was kostet das?',
    a: 'Jedes Projekt ist anders. Im kostenlosen Erstgespräch klären wir in 30 Minuten, was sinnvoll ist und was es kostet. Keine versteckten Kosten, keine Überraschungen.',
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
