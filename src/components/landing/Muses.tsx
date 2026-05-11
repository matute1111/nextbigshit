import SectionDivider from "./SectionDivider";
import { useLang } from "@/i18n/LanguageContext";
import { useParallax, useReveal } from "@/hooks/useParallax";
import musesMonitor from "@/assets/muses-monitor.png";

const Muses = () => {
  const { t } = useLang();
  const blob = useParallax<HTMLDivElement>(0.25);
  const orbP = useParallax<HTMLDivElement>(-0.15);
  const reveal = useReveal<HTMLDivElement>(0.2);

  return (
    <section
      id="muses"
      className="relative bg-background-deeper border-y border-border pt-20 md:pt-28 pb-0 px-6 md:px-10 overflow-hidden"
    >
      <div
        ref={blob.ref}
        className="pointer-events-none absolute -top-20 right-0 w-[40vw] h-[40vw] rounded-full bg-secondary/20 blur-[120px] will-change-transform"
        style={{ transform: `translate3d(0, ${blob.offset}px, 0)` }}
      />
      <div
        ref={reveal.ref}
        className={`max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center relative z-10 reveal ${
          reveal.visible ? "is-visible" : ""
        }`}
      >
        <div className="md:col-span-6">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary mb-6">
            {t("muses.kicker")}
          </p>
          <h2 className="font-display uppercase text-6xl md:text-7xl lg:text-8xl leading-[0.82] tracking-tight">
            <span className="text-foreground">{t("muses.title.2")}</span>
            <span className="block text-secondary">{t("muses.title.3")}</span>
            {t("muses.title.4") && (
              <span className="block text-secondary">{t("muses.title.4")}</span>
            )}
          </h2>
          <p className="mt-8 text-lg md:text-xl text-foreground leading-relaxed max-w-xl">
            {t("muses.p1")}
          </p>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            {t("muses.p2")}
          </p>

          {/* +60 agents counter */}
          <div className="mt-8 flex items-center gap-5 border-t border-border pt-6 max-w-xl">
            <span className="font-display text-6xl md:text-7xl text-secondary leading-none tabular-nums">
              +60
            </span>
            <span className="text-sm md:text-base uppercase tracking-[0.2em] font-bold text-muted-foreground leading-tight">
              Agentes de IA<br />
              en producción
            </span>
          </div>
        </div>
        <div
          ref={orbP.ref}
          className="md:col-span-6 relative will-change-transform"
          style={{ transform: `translate3d(0, ${orbP.offset}px, 0)` }}
        >
          <div className="relative w-full max-w-2xl mx-auto">
            <img
              src={musesMonitor}
              alt="Interfaz de Muses corriendo en un monitor"
              className="relative z-0 w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>

      {/* Seedance highlight band */}
      <div className="max-w-7xl mx-auto relative z-10 -mt-[86px] md:-mt-[70px]">
        <div className="border-y-2 border-secondary/40 py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <div className="flex-shrink-0">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary mb-2">★ Acceso directo · LATAM</p>
            <h3 className="font-display uppercase text-2xl md:text-3xl tracking-tight text-foreground leading-tight">
              {t("muses.seedance.title")}
            </h3>
          </div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed md:border-l md:border-border md:pl-10">
            {t("muses.seedance.desc")}
          </p>
        </div>
      </div>

      <SectionDivider text={t("disruption.shift")} highlight={t("disruption.shift.b")} className="!pt-16 md:!pt-20" />
    </section>
  );
};

export default Muses;
