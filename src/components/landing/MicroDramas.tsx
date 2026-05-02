import { useLang } from "@/i18n/LanguageContext";
import { useParallax, useReveal } from "@/hooks/useParallax";

const MicroDramas = () => {
  const { t } = useLang();
  const reveal = useReveal<HTMLDivElement>(0.15);
  const blob = useParallax<HTMLDivElement>(0.2);

  const STEPS = [
    { n: "01", title: t("micro.step1.t"), desc: t("micro.step1.d") },
    { n: "02", title: t("micro.step2.t"), desc: t("micro.step2.d") },
    { n: "03", title: t("micro.step3.t"), desc: t("micro.step3.d") },
  ];

  const PILLS = [
    t("micro.pill.1"),
    t("micro.pill.2"),
    t("micro.pill.3"),
    t("micro.pill.4"),
  ];

  return (
    <section
      id="microdramas"
      className="relative py-20 md:py-28 px-6 md:px-10 overflow-hidden"
    >
      <div
        ref={blob.ref}
        className="pointer-events-none absolute -top-40 -left-20 w-[60vw] h-[60vw] rounded-full bg-primary/10 blur-[160px] will-change-transform"
        style={{ transform: `translate3d(0, ${blob.offset}px, 0)` }}
      />

      <div
        ref={reveal.ref}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">
              {t("micro.kicker")}
            </p>
            <h2 className="font-display uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight max-w-3xl">
              {t("micro.title.1")}
              <br />
              <span className="text-primary italic">{t("micro.title.2")}</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-muted-foreground text-lg leading-relaxed">
            {t("micro.intro")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border mb-14">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="bg-background p-8 md:p-10 transition-all duration-700"
              style={{
                opacity: reveal.visible ? 1 : 0,
                transform: reveal.visible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <span className="font-display text-2xl text-primary">{s.n}</span>
              <h3 className="font-display uppercase text-2xl md:text-3xl tracking-tight mt-4 mb-4">
                {s.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {PILLS.map((p) => (
            <span
              key={p}
              className="px-5 py-2 border-2 border-foreground/20 rounded-full font-display uppercase text-sm tracking-wider text-foreground/80"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center text-center gap-6">
          <p className="font-display uppercase text-2xl md:text-4xl tracking-tight max-w-3xl">
            {t("micro.intertitle.1")}{" "}
            <span className="text-primary italic">{t("micro.intertitle.2")}</span>
          </p>
          <a
            href="https://www.youtube.com/@HistoriasInfinitas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display uppercase tracking-wider text-sm rounded-full hover:opacity-90 transition-opacity"
          >
            {t("micro.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default MicroDramas;
