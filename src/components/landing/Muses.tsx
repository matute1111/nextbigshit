import SeedanceStamp from "./SeedanceStamp";

const Muses = () => {
  return (
    <section id="muses" className="relative bg-background-deeper border-y border-border py-28 md:py-40 px-6 md:px-10 overflow-hidden">
      <div className="pointer-events-none absolute -top-20 right-0 w-[40vw] h-[40vw] rounded-full bg-secondary/20 blur-[120px]" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center relative z-10">
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary mb-6">
            04 / Tecnología propietaria
          </p>
          <h2 className="font-display uppercase text-6xl md:text-8xl lg:text-9xl leading-[0.82] tracking-tight">
            <span className="text-secondary">MUSES</span>
            <span className="block text-foreground">automatiza.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            Nuestro software propietario que automatiza procesos complejos de
            creación de contenido. Plug-and-play para integrar nuevas tecnologías
            emergentes.
          </p>
          <p className="mt-4 text-lg md:text-xl text-foreground leading-relaxed max-w-xl">
            Aceleramos dramáticamente el tiempo de producción, publicación y
            feedback. Ideas → contenido viral en tiempo récord.
          </p>
        </div>
        <div className="md:col-span-5 relative">
          <div className="aspect-square w-full max-w-sm mx-auto relative animate-float-slow">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-40" />
            <div className="relative w-full h-full rounded-full border-2 border-primary/40 flex items-center justify-center">
              <div className="absolute inset-6 rounded-full border border-secondary/40" />
              <div className="absolute inset-12 rounded-full border border-primary/30" />
              <span className="font-display text-7xl md:text-8xl bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                ✦
              </span>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <SeedanceStamp size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Muses;
