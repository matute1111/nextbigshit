import SeedanceStamp from "./SeedanceStamp";

const SiteHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-start justify-between px-6 md:px-10 py-5">
        <div className="flex flex-col gap-2">
          <a href="#" className="font-display text-2xl md:text-3xl tracking-tight text-foreground">
            GENNIAL<span className="text-primary">.</span>
          </a>
          <SeedanceStamp size="sm" className="-ml-2" />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-semibold text-foreground">
          <a href="#about" className="hover:text-primary transition-colors">Nosotros</a>
          <a href="#services" className="hover:text-primary transition-colors">Servicios</a>
          <a href="#muses" className="hover:text-primary transition-colors">Muses</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contacto</a>
        </nav>
        <a
          href="mailto:info@gennial.ai"
          className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-foreground"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-flicker" />
          Live
        </a>
      </div>
    </header>
  );
};

export default SiteHeader;
