import { useLang } from "@/i18n/LanguageContext";
import { useParallax, useReveal } from "@/hooks/useParallax";

const About = () => {
  const { t } = useLang();
  const titleP = useParallax<HTMLDivElement>(0.12);
  const reveal = useReveal<HTMLDivElement>(0.2);

  return (
    <section id="about" className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
        <div
          ref={titleP.ref}
          className="md:col-span-5 md:sticky md:top-32 md:self-start will-change-transform"
          style={{ transform: `translate3d(0, ${titleP.offset}px, 0)` }}
        >
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">
            {t("about.kicker")}
          </p>
          <h2 className="font-display uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight">
            {t("about.title.1")}
            <br />
            <span className="text-primary italic">{t("about.title.2")}</span>
            <br />
            {t("about.title.3")}
          </h2>
        </div>
        <div
          ref={reveal.ref}
          className={`md:col-span-6 md:col-start-7 space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground reveal ${
            reveal.visible ? "is-visible" : ""
          }`}
        >
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p className="text-foreground font-semibold text-2xl md:text-3xl font-display uppercase tracking-tight">
            {t("about.p3.q")} <span className="text-primary">{t("about.p3.a")}</span>
          </p>
          <p className="text-foreground text-xl md:text-2xl font-display uppercase tracking-tight pt-6 border-t border-border">
            {t("about.shift")}
            <span className="text-primary italic">{t("about.shift.b")}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
