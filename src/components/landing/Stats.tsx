import { useEffect, useRef, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { useCountUp, useReveal, useParallax } from "@/hooks/useParallax";
import SectionDivider from "./SectionDivider";
import guapoCapybara from "@/assets/guapo-capybara.png";

interface Metric {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

const formatValue = (v: number, m: Metric) => {
  const n =
    m.decimals && m.decimals > 0
      ? v.toFixed(m.decimals)
      : Math.floor(v).toLocaleString("en-US");
  return `${m.prefix ?? ""}${n}${m.suffix ?? ""}`;
};

const MetricCell = ({ metric, start, index, accent }: { metric: Metric; start: boolean; index: number; accent: "primary" | "secondary" }) => {
  const value = useCountUp(metric.target, 2000, start);
  return (
    <div
      className="transition-all duration-700"
      style={{
        opacity: start ? 1 : 0,
        transform: start ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className={`font-display text-3xl md:text-5xl lg:text-6xl tracking-tight leading-none tabular-nums ${accent === "primary" ? "text-primary" : "text-secondary"}`}>
        {formatValue(value, metric)}
      </div>
      <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground">
        {metric.label}
      </div>
    </div>
  );
};

const Stats = () => {
  const { t } = useLang();
  const reveal = useReveal<HTMLDivElement>(0.2);
  const blob = useParallax<HTMLDivElement>(0.2);

  // Capybara: drifts down behind the table on scroll (same feel as MicroDramas hands)
  const capyRef = useRef<HTMLDivElement | null>(null);
  const [capyTranslate, setCapyTranslate] = useState(0);

  useEffect(() => {
    let raf = 0;
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = capyRef.current;
      if (!el) return;
      const vh = window.innerHeight;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - vh / 2;
      const offset = Math.max(-40, Math.min(140, -center * 0.18));
      setCapyTranslate(offset);
    };
    const onScroll = () => {
      if (!ticking) {
        raf = requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const GUAPO: Metric[] = [
    { target: 2.3, prefix: "+", suffix: "M", decimals: 1, label: "Views Instagram" },
    { target: 9.5, suffix: "%", decimals: 1, label: "Engagement rate" },
    { target: 90, suffix: "%", label: "No-seguidores" },
    { target: 9, prefix: "×", label: "Consultas comerciales" },
  ];

  const HI: Metric[] = [
    { target: 350, prefix: "+", suffix: "K", label: "Suscriptores" },
    { target: 18, prefix: "+", suffix: "M", label: "Reproducciones" },
    { target: 1.8, prefix: "+", suffix: "K", decimals: 1, label: "Videos publicados" },
    { target: 365, label: "Días non-stop" },
  ];

  return (
    <section
      id="cases"
      ref={reveal.ref}
      className="relative bg-background-deeper border-y border-border pt-20 md:pt-28 pb-0 px-6 md:px-10 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.05]" />
      <div
        ref={blob.ref}
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-primary/10 blur-[160px] will-change-transform"
        style={{ transform: `translate3d(-50%, ${blob.offset}px, 0)` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14 md:mb-20 relative">
          {/* Capybara — sits to the right of the title and gets covered by the table below */}
          <div
            ref={capyRef}
            className="pointer-events-none absolute -right-[100px] w-[94%] sm:w-[80%] md:w-[77%] lg:w-[67%] max-w-[1032px] z-0 overflow-visible"
            style={{ bottom: "calc(-60% + 100px)" }}
          >
            <img
              src={guapoCapybara}
              alt="Carpincho Guapo mostrando un teléfono con contenido viral"
              className="block w-full h-auto object-contain will-change-transform drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
              style={{ transform: `translate3d(0, ${capyTranslate}px, 0)` }}
            />
          </div>
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">
              {t("stats.kicker")}
            </p>
            <h2 className="font-display uppercase text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.85] max-w-[60%]">
              {t("stats.title.1")}
              <br />
              <span className="text-primary italic">{t("stats.title.2")}</span>
            </h2>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {t("stats.intro")}
            </p>
          </div>
        </div>

        {/* Two case studies */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border mb-14 md:mb-16">

          {/* GUAPO */}
          <div className="bg-background p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-3">
              {t("case.guapo.tag")}
            </p>
            <h3 className="font-display uppercase text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 text-foreground">
              {t("case.guapo.name")}
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              {t("case.guapo.desc")}
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 pt-8 border-t border-border">
              {GUAPO.map((m, i) => (
                <MetricCell key={m.label} metric={m} start={reveal.visible} index={i} accent="primary" />
              ))}
            </div>
          </div>

          {/* HISTORIAS INFINITAS */}
          <div className="bg-background p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary mb-3">
              {t("case.hi.tag")}
            </p>
            <h3 className="font-display uppercase text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 text-foreground">
              {t("case.hi.name")}
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              {t("case.hi.desc")}
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 pt-8 border-t border-border">
              {HI.map((m, i) => (
                <MetricCell key={m.label} metric={m} start={reveal.visible} index={i + 4} accent="secondary" />
              ))}
            </div>
            <a
              href="https://www.youtube.com/@HistoriasInfinitasOK"
              target="_blank"
              rel="noreferrer"
              className="mt-8 group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-bold text-foreground hover:text-secondary transition-colors"
            >
              {t("yt.cta")}
            </a>
          </div>
        </div>
      </div>

      <SectionDivider text={t("stats.shift")} highlight={t("stats.shift.b")} />
    </section>
  );
};

export default Stats;
