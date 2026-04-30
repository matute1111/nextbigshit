const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">
            01 / Manifiesto
          </p>
          <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.85] tracking-tight">
            Somos la
            <br />
            <span className="text-primary">generación</span>
            <br />
            generativa.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground">
          <p>
            Creamos videos a la velocidad de la cultura — produciendo cantidades
            masivas de contenido que evoluciona en tiempo real.
          </p>
          <p>
            Publicamos, medimos, iteramos y volvemos a publicar. Siempre
            aprendiendo de audiencias reales con agentes de IA y herramientas
            generativas.
          </p>
          <p className="text-foreground font-semibold text-2xl md:text-3xl font-display uppercase tracking-tight">
            ¿Nuestro superpoder? <span className="text-primary">Capturar la atención.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
