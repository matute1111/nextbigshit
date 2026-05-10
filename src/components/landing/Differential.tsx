import { useLang } from "@/i18n/LanguageContext";
import { useReveal } from "@/hooks/useParallax";

const Differential = () => {
  const { t } = useLang();
  const reveal = useReveal<HTMLDivElement>(0.15);

  const ITEMS = [
    { n: "01", t: t("diff.1.t"), d: t("diff.1.d") },
    { n: "02", t: t("diff.2.t"), d: t("diff.2.d") },
    { n: "03", t: t("diff.3.t"), d: t("diff.3.d") },
    { n: "04", t: t("diff.4.t"), d: t("diff.4.d") },
  ];

  return (
    <section id="differential" className="relative pt-20 md:pt-28 pb-20 md:pb-28 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">
            {t("diff.kicker")}
          </p>
          <h2 className="font-display uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight max-w-3xl">
            {t("diff.title.1")}
            <br />
            <span className="text-primary italic">{t("diff.title.2")}</span>
          </h2>
        </div>

        <div ref={reveal.ref} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {ITEMS.map((it, i) => (
            <div
              key={it.n}
              className="bg-background p-8 md:p-12 transition-all duration-700"
              style={{
                opacity: reveal.visible ? 1 : 0,
                transform: reveal.visible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="flex items-baseline gap-5 mb-4">
                <span className="font-display text-2xl text-primary">{it.n}</span>
                <h3 className="font-display uppercase text-2xl md:text-3xl tracking-tight leading-tight">
                  {it.t}
                </h3>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground md:pl-12">
                {it.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differential;
