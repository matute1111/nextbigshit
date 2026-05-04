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

  return (
    <section
      id="muses"
      className="relative bg-background-deeper border-y border-border pt-4 pb-0 md:pt-0 md:pb-28 md:-mt-[18px] px-6 md:px-10 overflow-hidden"
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
          <h2 className="font-display uppercase text-6xl md:text-8xl lg:text-9xl leading-[0.82] tracking-tight">
            <span className="text-secondary">MUSES</span>
            <span className="block text-foreground">{t("muses.title.2")}</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            {t("muses.p1")}
          </p>
          <p className="mt-4 text-lg md:text-xl text-foreground leading-relaxed max-w-xl">
            {t("muses.p2")}
          </p>
        </div>
        <div
          ref={orbP.ref}
          className="md:col-span-6 relative will-change-transform -mt-2 md:mt-[100px]"
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
      <div className="-mt-[160px] md:mt-0">
        <SectionDivider text={t("disruption.shift")} highlight={t("disruption.shift.b")} />
      </div>
    </section>
  );
};

export default Muses;
