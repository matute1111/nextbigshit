import { useLang } from "@/i18n/LanguageContext";
import { useReveal } from "@/hooks/useParallax";
import adrianImg from "@/assets/team-adrian.jpg";
import matiImg from "@/assets/team-mati.jpg";
import anaImg from "@/assets/team-ana.jpg";
import pedroImg from "@/assets/team-pedro.jpg";

const Team = () => {
  const { t } = useLang();
  const reveal = useReveal<HTMLDivElement>(0.15);

  const PEOPLE = [
    { name: t("team.1.name"), role: t("team.1.role"), bio: t("team.1.bio"), initials: "AG", photo: adrianImg },
    { name: t("team.2.name"), role: t("team.2.role"), bio: t("team.2.bio"), initials: "MA", photo: matiImg },
    { name: t("team.3.name"), role: t("team.3.role"), bio: t("team.3.bio"), initials: "PL", photo: pedroImg },
    { name: t("team.4.name"), role: t("team.4.role"), bio: t("team.4.bio"), initials: "AA", photo: anaImg },
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
              <div className="relative aspect-square w-full mb-6 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/10 border border-border group">
                <img
                  src={p.photo}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 transition-all duration-700 group-hover:grayscale-0"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-primary/30 mix-blend-color transition-opacity duration-700 group-hover:opacity-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 right-4 font-display uppercase text-5xl tracking-tight text-primary/80 mix-blend-screen">
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
