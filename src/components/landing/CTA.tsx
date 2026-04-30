const CTA = () => {
  return (
    <section id="contact" className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.06]" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[60vw] bg-primary/15 blur-[160px]" />
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-8">
          05 / Revolución generativa
        </p>
        <h2
          className="font-display uppercase leading-[0.82] tracking-[-0.03em]"
          style={{ fontSize: "clamp(3rem, 13vw, 14rem)" }}
        >
          <span className="block text-foreground">Build the next</span>
          <span className="block text-primary italic">big shit.</span>
        </h2>
        <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
          Trabajemos juntos en tu idea para hacerla realidad. Te respondemos
          rápido, prometido.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:info@gennial.ai"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-5 font-display uppercase text-xl tracking-tight hover:bg-foreground transition-colors"
          >
            info@gennial.ai
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
          <a
            href="https://www.youtube.com/@HistoriasInfinitasOK"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border-2 border-foreground text-foreground px-8 py-5 font-display uppercase text-xl tracking-tight hover:bg-foreground hover:text-background transition-colors"
          >
            Ver el reel ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
