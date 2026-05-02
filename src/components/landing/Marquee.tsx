const ITEMS = [
  "IA VERTICAL",
  "MICRODRAMAS",
  "THE NEXT BIG SH#@!",
  "IP FACTORY",
  "B2B2C",
  "THE NEXT BIG SHIFT",
  "VIRAL AT SCALE",
  "GENERATIVE NATIVES",
];

const Marquee = () => {
  const loop = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <section className="relative bg-primary text-primary-foreground border-y-2 border-primary-foreground/10 overflow-hidden py-5">
      <div className="marquee">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-10 px-10">
            <span className="font-display text-3xl md:text-5xl uppercase tracking-tight whitespace-nowrap">
              {t}
            </span>
            <span className="text-2xl md:text-4xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
