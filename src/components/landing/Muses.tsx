import SeedanceStamp from "./SeedanceStamp";
import SectionDivider from "./SectionDivider";
import { useLang } from "@/i18n/LanguageContext";
import { useParallax, useReveal } from "@/hooks/useParallax";
import musesMonitor from "@/assets/muses-monitor.png";

const Muses = () => {
  const { t } = useLang();
  const blob = useParallax<HTMLDivElement>(0.25);
  const orbP = useParallax<HTMLDivElement>(-0.15);
  const reveal = useReveal<HTMLDivElement>(0.2);
  const modulesReveal = useReveal<HTMLDivElement>(0.15);

  const MODULES = [
    { name: t("muses.mod.1.name"), status: t("muses.mod.1.status"), desc: t("muses.mod.1.desc") },
    { name: t("muses.mod.2.name"), status: t("muses.mod.2.status"), desc: t("muses.mod.2.desc") },
    { name: t("muses.mod.3.name"), status: t("muses.mod.3.status"), desc: t("muses.mod.3.desc") },
    { name: t("muses.mod.4.name"), status: t("muses.mod.4.status"), desc: t("muses.mod.4.desc") },
    { name: t("muses.mod.5.name"), status: t("muses.mod.5.status"), desc: t("muses.mod.5.desc") },
    {
      name: "MUSES FUTURE",
      status: "CONCEPTO",
      desc: "Estamos diseñando el futuro del audiovisual. Todo está por venir.",
    },
  ];

  const statusClass = (s: string) =>
    s === "LIVE"
      ? "bg-primary text-primary-foreground"
      : s === "BETA"
      ? "bg-secondary text-secondary-foreground"
      : "border border-foreground/40 text-foreground/70";

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
            <span className="block text-foreground">{t("muses.title.3")}</span>
            <span className="block text-secondary">{t("muses.title.4")}</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-foreground leading-relaxed max-w-xl">
            {t("muses.p1")}
          </p>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            {t("muses.p2")}
          </p>

          {/* +20 agents counter */}
          <div className="mt-8 flex items-center gap-5 border-t border-border pt-6 max-w-xl">
            <span className="font-display text-6xl md:text-7xl text-secondary leading-none tabular-nums">
              +20
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
            <SeedanceStamp
              size="lg"
              className="absolute z-20 -top-[158px] -right-4 md:-top-[110px] md:-right-6 rotate-[-12deg] w-36 h-36 md:w-52 md:h-52 lg:w-60 lg:h-60 pointer-events-none drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </div>

      {/* Seedance highlight band */}
      <div className="max-w-7xl mx-auto relative z-10 mt-16 md:mt-20">
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

      {/* Modules grid */}
      <div ref={modulesReveal.ref} className="max-w-7xl mx-auto relative z-10 mt-16 md:mt-20">
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary mb-8">
          {t("muses.modules.title")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {MODULES.map((m, i) => (
            <div
              key={m.name}
              className="bg-background-deeper p-6 md:p-8 transition-all duration-700"
              style={{
                opacity: modulesReveal.visible ? 1 : 0,
                transform: modulesReveal.visible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 90}ms`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display uppercase text-xl md:text-2xl tracking-tight text-foreground">
                  {m.name}
                </h4>
                <span className={`text-[10px] uppercase tracking-[0.2em] font-bold px-2 py-1 ${statusClass(m.status)}`}>
                  {m.status}
                </span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <SectionDivider text={t("disruption.shift")} highlight={t("disruption.shift.b")} className="!pt-16 md:!pt-20" />
    </section>
  );
};

export default Muses;
