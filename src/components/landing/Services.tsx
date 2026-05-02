import { useLang } from "@/i18n/LanguageContext";

const Services = () => {
  const { t } = useLang();
  const SERVICES = [
    { n: "01", title: t("service.01.t"), desc: t("service.01.d") },
    { n: "02", title: t("service.02.t"), desc: t("service.02.d") },
    { n: "03", title: t("service.03.t"), desc: t("service.03.d") },
    { n: "04", title: t("service.04.t"), desc: t("service.04.d") },
  ];
  return (
    <section id="services" className="relative py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">
              {t("services.kicker")}
            </p>
            <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.85] tracking-tight max-w-3xl">
              {t("services.title.1")}
              <br />
              <span className="text-stroke-orange">{t("services.title.2")}</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-muted-foreground text-lg leading-relaxed">
            {t("services.intro")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
          {SERVICES.map((s, i) => (
            <div
              key={s.n}
              className={`group p-8 md:p-12 border-b border-border ${
                i % 2 === 0 ? "md:border-r" : ""
              } hover:bg-primary hover:text-primary-foreground transition-colors duration-300`}
            >
              <div className="flex items-baseline gap-6 mb-6">
                <span className="font-display text-2xl text-primary group-hover:text-primary-foreground">
                  {s.n}
                </span>
                <h3 className="font-display uppercase text-3xl md:text-4xl tracking-tight">
                  {s.title}
                </h3>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground group-hover:text-primary-foreground/90 max-w-md">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
