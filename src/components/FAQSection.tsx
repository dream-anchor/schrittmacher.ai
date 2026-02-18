import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Was kostet ein KI-Workshop?',
    a: 'Der KI-Kickstart (Halbtag) startet ab 3.500 €, die ganztägige KI-Werkstatt ab 5.000 €, und die zweitägige KI-Transformation ab 9.000 €. Der genaue Preis hängt von Teamgröße, Ort und Inhalten ab. Im Erstgespräch klären wir das in 30 Minuten.',
  },
  {
    q: 'Was ist Vibe Coding?',
    a: 'Software bauen in natürlicher Sprache statt in reinem Code. Statt monatelanger Entwicklung liefern wir in Tagen funktionsfähige Prototypen.',
  },
  {
    q: 'Brauche ich technisches Vorwissen?',
    a: 'Nein. Null. Nada. Antoine hat jahrelang Technik im Fernsehen für 82 Millionen Zuschauer erklärt – Ihr Team schafft er auch.',
  },
  {
    q: 'Was unterscheidet euch von anderen KI-Beratungen?',
    a: 'Antoine ist Programmierer UND professioneller Entertainer. Unsere Workshops sind nicht trocken. Unsere Keynotes nicht langweilig. Und unsere Lösungen nicht theoretisch.',
  },
  {
    q: 'Nur in München?',
    a: 'Workshops und Keynotes: deutschlandweit. Vibe-Coding-Projekte laufen oft remote.',
  },
  {
    q: 'Wie schnell liefert ihr Ergebnisse?',
    a: 'Workshop: am selben Tag. Prototyp: 1–2 Wochen.',
  },
];

const FAQSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 reveal">
          <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-4">
            Häufige Fragen
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl">FAQ</h2>
        </div>

        <Accordion type="single" collapsible className="reveal">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                <span className="text-base">{faq.q}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
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
