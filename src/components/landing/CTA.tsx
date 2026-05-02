import { useLang } from "@/i18n/LanguageContext";
import { useParallax, useReveal } from "@/hooks/useParallax";

const CTA = () => {
  const { t } = useLang();
  const blob = useParallax<HTMLDivElement>(0.3);
  const titleP = useParallax<HTMLDivElement>(-0.1);
  const reveal = useReveal<HTMLDivElement>(0.2);

  return (
    <section id="contact" className="relative py-24 md:py-36 px-6 md:px-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.06]" />
      <div
        ref={blob.ref}
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[60vw] bg-primary/15 blur-[160px] will-change-transform"
        style={{ transform: `translate3d(0, calc(-50% + ${blob.offset}px), 0)` }}
      />
      <div
        ref={reveal.ref}
        className={`max-w-7xl mx-auto relative z-10 text-center reveal ${
          reveal.visible ? "is-visible" : ""
        }`}
      >
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-8">
          {t("cta.kicker")}
        </p>
        <div
          ref={titleP.ref}
          className="will-change-transform"
          style={{ transform: `translate3d(0, ${titleP.offset}px, 0)` }}
        >
          <h2
            className="font-display uppercase leading-[0.82] tracking-[-0.03em]"
            style={{ fontSize: "clamp(3rem, 12vw, 13rem)" }}
          >
            <span className="block text-foreground">{t("cta.title.1")}</span>
            <span className="block text-primary italic">{t("cta.title.2")}</span>
          </h2>
        </div>
        <p className="mt-12 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
          {t("cta.desc")}
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:info@gennial.ai"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-5 font-display uppercase text-xl tracking-tight hover:bg-foreground transition-all duration-300 hover:-translate-y-0.5 shadow-orange"
          >
            info@gennial.ai
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
          <a
            href="https://www.youtube.com/@HistoriasInfinitasOK"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border-2 border-foreground text-foreground px-8 py-5 font-display uppercase text-xl tracking-tight hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-0.5"
          >
            {t("cta.reel")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
