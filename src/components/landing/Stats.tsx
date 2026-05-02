import { useLang } from "@/i18n/LanguageContext";
import { useCountUp, useReveal, useParallax } from "@/hooks/useParallax";

interface StatItem {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

const formatValue = (v: number, s: StatItem) => {
  const n =
    s.decimals && s.decimals > 0
      ? v.toFixed(s.decimals)
      : Math.floor(v).toLocaleString("en-US");
  return `${s.prefix ?? ""}${n}${s.suffix ?? ""}`;
};

const StatCell = ({ stat, start, index }: { stat: StatItem; start: boolean; index: number }) => {
  const value = useCountUp(stat.target, 2200, start);
  return (
    <div
      className="text-center border-l-2 border-primary/40 first:border-l-0 md:border-l-2 px-4 transition-all duration-700"
      style={{
        transform: start ? "translateY(0)" : "translateY(24px)",
        opacity: start ? 1 : 0,
        transitionDelay: `${index * 90}ms`,
      }}
    >
      <div className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground tracking-tight leading-none tabular-nums">
        {formatValue(value, stat)}
      </div>
      <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-muted-foreground">
        {stat.label}
      </div>
    </div>
  );
};

const Stats = () => {
  const { t } = useLang();
  const reveal = useReveal<HTMLDivElement>(0.25);
  const blob = useParallax<HTMLDivElement>(0.2);
  const ytReveal = useReveal<HTMLDivElement>(0.2);

  const STATS: StatItem[] = [
    { target: 350, prefix: "+", suffix: "K", label: t("stats.subs") },
    { target: 18, prefix: "+", suffix: "MM", label: t("stats.views") },
    { target: 1.8, prefix: "+", suffix: "K", decimals: 1, label: t("stats.videos") },
    { target: 365, label: t("stats.days") },
  ];

  return (
    <section
      ref={reveal.ref}
      className="relative bg-background-deeper border-y border-border py-20 md:py-28 px-6 md:px-10 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.05]" />
      <div
        ref={blob.ref}
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-primary/10 blur-[160px] will-change-transform"
        style={{ transform: `translate3d(-50%, ${blob.offset}px, 0)` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Single unified header for the whole "lab + traction" story */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">
            {t("stats.kicker")} · {t("yt.kicker")}
          </p>
          <h2 className="font-display uppercase text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.85] max-w-5xl mx-auto">
            {t("yt.title")}
            <span className="block text-primary italic mt-2 text-3xl md:text-5xl lg:text-6xl">
              {t("yt.headline")}
            </span>
          </h2>
        </div>

        {/* Counter grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 mb-14 md:mb-16">
          {STATS.map((s, i) => (
            <StatCell key={s.label} stat={s} start={reveal.visible} index={i} />
          ))}
        </div>

        {/* Connected description + CTA — no visual divider between traction & lab */}
        <div
          ref={ytReveal.ref}
          className="max-w-4xl mx-auto text-center transition-all duration-700"
          style={{
            opacity: ytReveal.visible ? 1 : 0,
            transform: ytReveal.visible ? "translateY(0)" : "translateY(28px)",
          }}
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            {t("yt.desc")}
          </p>
          <a
            href="https://www.youtube.com/@HistoriasInfinitasOK"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-5 font-display uppercase text-lg md:text-xl tracking-tight hover:bg-foreground transition-all duration-300 hover:-translate-y-0.5 shadow-orange"
          >
            @HistoriasInfinitasOK
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </div>

      {/* Section divider — unified style */}
      <div className="relative z-10 px-6 md:px-10 pt-10 md:pt-14 pb-0 -mb-[100px]">
        <div className="max-w-7xl mx-auto text-center">
          <h3
            className="font-display uppercase tracking-[-0.02em] leading-[0.9] text-foreground whitespace-nowrap"
            style={{ fontSize: "clamp(1.4rem, 4.8vw, 5rem)" }}
          >
            {t("stats.shift")}
            <span className="text-primary italic">{t("stats.shift.b")}</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Stats;
