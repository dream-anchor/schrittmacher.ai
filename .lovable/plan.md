

# schrittmacher.ai – Website-Neubau

## Überblick
Eine hochwertige One-Pager-Website für schrittmacher.ai mit Drei-Akt-Dramaturgie, warmem Dark-Mode-Design und editorial-inspirierter Typografie. Zusätzlich separate Seiten für Impressum und Datenschutz.

---

## Design-System
- **Dark Mode** mit warmem Blauschwarz-Hintergrund, Gold/Amber-Akzentfarbe, abgestuften Weißtönen
- **Typografie:** Serif (z.B. Playfair Display) für Headlines, DM Sans für Body, JetBrains Mono für Labels
- **Atmosphäre:** Subtile Gradient-Mesh-Hintergründe, Film-Grain-Noise-Texture, Cursor-Glow auf Desktop
- **Animationen:** Scroll-Reveal, gestaffelte Hero-Headline, Hover-Effekte – alles mit `prefers-reduced-motion`-Support

---

## Seitenstruktur

### Navigation (fixiert)
- Links: "schrittmacher.ai" (Logo mit farbigem ".ai")
- Rechts: Ein einziger CTA-Button "Erstgespräch buchen →"
- Blur-Hintergrund beim Scrollen

### Akt 1: Die Provokation
1. **Hero Section** – Große Serif-Headline mit goldenen Akzentwörtern, Subtitle, zwei CTAs, Proof-Bar mit Zahlen (28 Jahre, 82 Mio., Netflix)
2. **Duality Section** – Zwei-Spalten-Layout "Der Programmierer | Der Entertainer" mit subtilen Farbunterschieden (kühl/blau vs. warm/gold), verbunden durch "Technick verbindet."

### Akt 2: Der Beweis
3. **Transformation Section** – Drei Vorher/Nachher-Karten (Workshop, Keynote, Vibe Coding) mit dramatischem visuellem Kontrast
4. **KI-Werkbank** – Interaktives Demo-Element mit Textarea, klickbaren Chips und animiertem Dummy-Ergebnis (Lösungsvorschlag, Timeline, ROI mit CountUp)
5. **Credentials Grid** – 8 Zellen mit Meilensteinen (1996–2025), responsive Grid-Layout
6. **Zitat** – Volle Breite, zentriert, großes Serif-Kursiv-Zitat
7. **Prozess** – "Vier Schritte. Null Bullshit." als 4-Spalten-Grid mit großen Hintergrund-Nummern
8. **FAQ** – 6 Fragen als Accordion mit Plus/Minus-Icon

### Akt 3: Die Entscheidung
9. **CTA Section** – "Bereit?" mit warmem Gold-Glow, mailto/tel-Buttons, Kontaktdaten
10. **Footer** – Einzeilig mit Copyright, Impressum/Datenschutz/LinkedIn-Links

---

## Separate Seiten
- **/impressum** – Rechtliche Angaben gemäß § 5 TMG
- **/datenschutz** – DSGVO-konforme Datenschutzerklärung

## SEO
- Schema.org JSON-LD (Organization, Services, FAQPage)
- Meta-Tags, Open Graph, Twitter Cards in index.html

---

## Technische Hinweise
- Kein Backend nötig (die KI-Werkbank zeigt Dummy-Ergebnisse)
- React Router für Impressum/Datenschutz
- Google Fonts für Typografie
- Alle Inhalte sind statisch, kein CMS

