import { useLang } from "@/i18n/LanguageContext";
import { useReveal } from "@/hooks/useParallax";

const Team = () => {
  const { t } = useLang();
  const reveal = useReveal<HTMLDivElement>(0.15);

  const PEOPLE = [
    { name: t("team.1.name"), role: t("team.1.role"), bio: t("team.1.bio"), initials: "AG" },
    { name: t("team.2.name"), role: t("team.2.role"), bio: t("team.2.bio"), initials: "MA" },
    { name: t("team.3.name"), role: t("team.3.role"), bio: t("team.3.bio"), initials: "PL" },
    { name: t("team.4.name"), role: t("team.4.role"), bio: t("team.4.bio"), initials: "AA" },
  ];

  return (
    <section id="team" className="relative pt-20 md:pt-28 pb-20 md:pb-28 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">
            {t("team.kicker")}
          </p>
          <h2 className="font-display uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight max-w-4xl">
            {t("team.title.1")}
            <br />
            <span className="text-primary italic">{t("team.title.2")}</span>
          </h2>
        </div>

        <div ref={reveal.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PEOPLE.map((p, i) => (
            <div
              key={p.name}
              className="border border-border p-8 transition-all duration-700 hover:border-primary"
              style={{
                opacity: reveal.visible ? 1 : 0,
                transform: reveal.visible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <div className="aspect-square w-full mb-6 bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center border border-border">
                <span className="font-display uppercase text-7xl md:text-8xl tracking-tight text-primary">
                  {p.initials}
                </span>
              </div>
              <h3 className="font-display uppercase text-3xl tracking-tight mb-1 text-foreground">
                {p.name}
              </h3>
              <p className="text-xs uppercase tracking-[0.25em] font-bold text-primary mb-4">
                {p.role}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {p.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
