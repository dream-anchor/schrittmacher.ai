const WendeSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[700px] mx-auto px-6 text-center reveal">
        <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-foreground/35 mb-10">
          Warum wir das hier machen
        </p>

        <div className="space-y-6 text-lg text-foreground/75 leading-relaxed">
          <p>
            30 Jahre lang habe ich Webprojekte verantwortet.
            Ich habe verstanden was meine Kunden brauchen.
            Ich hatte die Lösungen im Kopf.
          </p>

          <p className="text-xl text-foreground/90 font-medium py-4">
            Aber ich konnte sie nie selbst bauen.
          </p>

          <p>
            Ich war abhängig. Von Programmierern, die keine
            Zeit hatten. Von Designern, die nicht verstanden
            was ich meinte. Von Agenturen, die zu langsam waren.
          </p>

          <p className="text-xl text-primary font-medium py-2">
            Dann kam KI. Und alles änderte sich.
          </p>

          <p>
            Jetzt baue ich selbst. Schneller und besser als
            jedes Team das ich je beauftragt habe. Und ich
            zeige anderen, wie sie das Gleiche tun können.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WendeSection;
