const projects = [
  {
    name: 'ristorantestoria.de',
    description: 'Website + Event-System für ein Münchner Restaurant. Maßgeschneidertes CMS. Eigene Workflows.',
    detail: 'React · Supabase · 730+ Commits',
  },
  {
    name: 'paterbrown.com',
    description: 'Tour-Website mit eigenem Admin-System. Veranstaltungen, Termine, Pressematerial.',
    detail: 'Lovable · Cloudflare · Admin-Panel',
  },
  {
    name: 'CreatorOS',
    description: 'Betriebssystem für Content-Projekte. Planung, Produktion, Veröffentlichung.',
    detail: 'React · Supabase · Cloudflare Workers',
  },
  {
    name: 'Serial Mailer',
    description: 'Eigenes Mailing-System. Von der Idee zum fertigen Tool – mit KI.',
    detail: 'React · Supabase · 397+ Commits',
  },
];

const ProjectsSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="mb-12 reveal">
          <p className="font-mono-label text-[10px] tracking-[0.25em] uppercase text-foreground/45 mb-4">
            Echte Projekte
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl text-foreground/93 mb-4">
            Gebaut. Nicht geredet.
          </h2>
          <p className="text-foreground/60">
            Alles mit KI. Alles in den letzten Monaten.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {projects.map((project, i) => (
            <div
              key={i}
              className="border border-border/50 bg-white/[0.03] rounded-xl p-6 hover:bg-white/[0.05] transition-colors duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="font-medium text-foreground/90 mb-2">{project.name}</p>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4">{project.description}</p>
              <p className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-foreground/35">
                {project.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
