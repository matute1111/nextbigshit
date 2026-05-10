import { useLang } from "@/i18n/LanguageContext";
import { useReveal, useParallax } from "@/hooks/useParallax";

const Verticals = () => {
  const { t } = useLang();
  const reveal = useReveal<HTMLDivElement>(0.2);
  const blob = useParallax<HTMLDivElement>(0.2);

  return (
    <section
      id="verticals"
      className="relative pt-20 md:pt-28 pb-20 md:pb-28 px-6 md:px-10 overflow-hidden bg-background-deeper border-y border-border"
    >
      <div
        ref={blob.ref}
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-primary/10 blur-[160px] will-change-transform"
        style={{ transform: `translate3d(-50%, ${blob.offset}px, 0)` }}
      />
      <div ref={reveal.ref} className={`max-w-7xl mx-auto relative z-10 reveal ${reveal.visible ? "is-visible" : ""}`}>
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">
            {t("vert.kicker")}
          </p>
          <h2 className="font-display uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight max-w-5xl mx-auto">
            {t("vert.title.1")}
            <br />
            <span className="text-primary italic">{t("vert.title.2")}</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("vert.intro")}
          </p>
        </div>

        {/* Two verticals — symmetrical */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {/* STUDIO */}
          <div className="bg-background p-8 md:p-12 group hover:bg-primary/5 transition-colors">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4">
              {t("vert.studio.tag")}
            </p>
            <h3 className="font-display uppercase text-4xl md:text-5xl tracking-tight leading-[0.9] mb-3">
              <span className="text-foreground">Gennial</span>
              <span className="text-primary">.Studio</span>
            </h3>
            <p className="font-display uppercase text-lg md:text-xl text-primary italic mb-6">
              {t("vert.studio.shift")}
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              {t("vert.studio.desc")}
            </p>
          </div>

          {/* LAB */}
          <div className="bg-background p-8 md:p-12 group hover:bg-secondary/5 transition-colors">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary mb-4">
              {t("vert.lab.tag")}
            </p>
            <h3 className="font-display uppercase text-4xl md:text-5xl tracking-tight leading-[0.9] mb-3">
              <span className="text-foreground">Gennial</span>
              <span className="text-secondary">.Lab</span>
            </h3>
            <p className="font-display uppercase text-lg md:text-xl text-secondary italic mb-6">
              {t("vert.lab.shift")}
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              {t("vert.lab.desc")}
            </p>
          </div>
        </div>

        {/* Loop badge */}
        <div className="flex justify-center mt-10">
          <span className="inline-flex items-center gap-3 border border-primary/40 px-5 py-3 text-xs md:text-sm uppercase tracking-[0.25em] font-bold text-foreground">
            <span className="text-primary text-2xl leading-none">∞</span>
            {t("vert.loop")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Verticals;
