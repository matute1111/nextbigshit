import { useLang } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLang();
  return (
    <section id="about" className="relative py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">
            {t("about.kicker")}
          </p>
          <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.85] tracking-tight">
            {t("about.title.1")}
            <br />
            <span className="text-primary">{t("about.title.2")}</span>
            <br />
            {t("about.title.3")}
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p className="text-foreground font-semibold text-2xl md:text-3xl font-display uppercase tracking-tight">
            {t("about.p3.q")} <span className="text-primary">{t("about.p3.a")}</span>
          </p>
          <p className="text-foreground text-xl md:text-2xl font-display uppercase tracking-tight pt-4 border-t border-border">
            {t("about.shift")}
            <span className="text-primary italic">{t("about.shift.b")}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
