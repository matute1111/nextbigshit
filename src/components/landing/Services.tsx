import { useLang } from "@/i18n/LanguageContext";
import { useReveal, useParallax } from "@/hooks/useParallax";

const Services = () => {
  const { t } = useLang();
  const reveal = useReveal<HTMLDivElement>(0.15);
  const headerP = useParallax<HTMLDivElement>(0.08);

  const SERVICES = [
    { n: "01", title: t("service.01.t"), desc: t("service.01.d") },
    { n: "02", title: t("service.02.t"), desc: t("service.02.d") },
    { n: "03", title: t("service.03.t"), desc: t("service.03.d") },
    { n: "04", title: t("service.04.t"), desc: t("service.04.d") },
  ];
  return (
    <section id="services" className="relative pt-20 md:pt-28 pb-6 md:pb-10 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerP.ref}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8 will-change-transform"
          style={{ transform: `translate3d(0, ${headerP.offset}px, 0)` }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">
              {t("services.kicker")}
            </p>
            <h2 className="font-display uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight max-w-3xl">
              {t("services.title.1")}
              <br />
              <span className="text-stroke-orange">{t("services.title.2")}</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-muted-foreground text-lg leading-relaxed">
            {t("services.intro")}
          </p>
        </div>

        <div ref={reveal.ref} className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
          {SERVICES.map((s, i) => (
            <div
              key={s.n}
              className={`group p-8 md:p-14 border-b border-border transition-all duration-700 ${
                i % 2 === 0 ? "md:border-r" : ""
              } hover:bg-primary hover:text-primary-foreground`}
              style={{
                opacity: reveal.visible ? 1 : 0,
                transform: reveal.visible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <div className="flex items-baseline gap-6 mb-6">
                <span className="font-display text-2xl text-primary group-hover:text-primary-foreground transition-colors">
                  {s.n}
                </span>
                <h3 className="font-display uppercase text-3xl md:text-4xl tracking-tight">
                  {s.title}
                </h3>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground group-hover:text-primary-foreground/90 max-w-md transition-colors">
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
