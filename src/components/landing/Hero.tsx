const Hero = () => {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-gradient-to-b from-background-deeper via-background to-background">
      {/* noise overlay */}
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.07] mix-blend-overlay" />
      {/* glow blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[50vw] h-[50vw] rounded-full bg-secondary/15 blur-[140px]" />

      {/* top meta strip */}
      <div className="relative z-10 px-6 md:px-10 flex items-center justify-between text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold text-muted-foreground">
        <span>EST. 2024 — Buenos Aires / Madrid / LA</span>
        <span className="hidden md:inline">IA · Vertical · Microdramas</span>
        <span>N°/001</span>
      </div>

      {/* THE GIANT TYPE */}
      <div className="relative z-10 px-3 md:px-6 flex flex-col items-stretch justify-center flex-1">
        <h1
          className="font-display uppercase text-foreground leading-[0.74] tracking-[-0.065em] text-center select-none w-full"
          style={{ fontSize: "clamp(5.5rem, 28vw, 36rem)" }}
        >
          <span className="block">THE NEXT</span>
          <span className="block">
            BIG <span className="text-primary italic" style={{ fontFamily: "'Archivo Black', Impact, sans-serif" }}>SHIT</span>
          </span>
        </h1>
      </div>

      {/* bottom row */}
      <div className="relative z-10 px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        <p className="text-sm md:text-base max-w-xs text-muted-foreground leading-snug">
          IA vertical + microdramas. Producimos contenido viral a la velocidad de la cultura.
        </p>
        <div className="flex justify-center">
          <a
            href="#about"
            className="group inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold text-foreground"
          >
            <span>scroll</span>
            <span className="block w-px h-12 bg-foreground/40 group-hover:bg-primary transition-colors" />
          </a>
        </div>
        <div className="md:text-right text-xs uppercase tracking-[0.25em] font-semibold text-foreground">
          <span className="inline-block px-3 py-1.5 border border-primary text-primary">
            Manifesto / Studio Reel ↗
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
