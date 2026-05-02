import { useLang } from "@/i18n/LanguageContext";

const Stats = () => {
  const { t } = useLang();
  const STATS = [
    { value: "+350K", label: t("stats.subs") },
    { value: "+18MM", label: t("stats.views") },
    { value: "+1.8K", label: t("stats.videos") },
    { value: "365", label: t("stats.days") },
  ];
  return (
    <section className="relative bg-background-deeper border-y border-border py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.05]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-12 text-center">
          {t("stats.kicker")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center border-l-2 border-primary/40 first:border-l-0 md:border-l-2 px-4">
              <div className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground tracking-tight leading-none">
                {s.value}
              </div>
              <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* YouTube channel callout */}
        <div className="mt-20 md:mt-28 max-w-4xl mx-auto text-center border-t border-border pt-16">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">
            {t("yt.kicker")}
          </p>
          <h3 className="font-display uppercase text-4xl md:text-6xl tracking-tight text-foreground mb-6">
            {t("yt.title")}
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            {t("yt.desc")}
          </p>
          <a
            href="https://www.youtube.com/@HistoriasInfinitasOK"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 font-display uppercase text-lg tracking-tight hover:bg-foreground transition-colors"
          >
            @HistoriasInfinitasOK
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;
