const STATS = [
  { value: "100K+", label: "Suscriptores" },
  { value: "17M+", label: "Reproducciones" },
  { value: "2.5K+", label: "Videos creados" },
  { value: "365", label: "Días no-stop" },
];

const Stats = () => {
  return (
    <section className="relative bg-background-deeper border-y border-border py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.05]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-12 text-center">
          02 / Tracción real
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
      </div>
    </section>
  );
};

export default Stats;
