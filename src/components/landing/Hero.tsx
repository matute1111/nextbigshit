import { useLang } from "@/i18n/LanguageContext";
import { useParallax } from "@/hooks/useParallax";
import heroHand from "@/assets/hero-hand.png";

const Hero = () => {
  const { t } = useLang();
  const blob1 = useParallax<HTMLDivElement>(0.25);
  const blob2 = useParallax<HTMLDivElement>(-0.18);
  const titleParallax = useParallax<HTMLDivElement>(-0.08);
  const metaParallax = useParallax<HTMLDivElement>(-0.08);
  const handParallax = useParallax<HTMLDivElement>(-0.22);

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between pt-14 pb-4 md:pt-20 md:pb-8 gap-3 md:gap-0 overflow-hidden bg-gradient-to-b from-background-deeper via-background to-background">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.07] mix-blend-overlay" />
      <div
        ref={blob1.ref}
        className="pointer-events-none absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full bg-primary/20 blur-[140px] will-change-transform"
        style={{ transform: `translate3d(0, ${blob1.offset}px, 0)` }}
      />
      <div
        ref={blob2.ref}
        className="pointer-events-none absolute -bottom-40 -right-40 w-[50vw] h-[50vw] rounded-full bg-secondary/15 blur-[140px] will-change-transform"
        style={{ transform: `translate3d(0, ${blob2.offset}px, 0)` }}
      />

      {/* top meta strip */}
      <div
        ref={metaParallax.ref}
        className="relative z-10 px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold text-muted-foreground will-change-transform"
        style={{ transform: `translate3d(0, ${metaParallax.offset}px, 0)` }}
      >
        <span>{t("meta.cities")}</span>
        <span className="hidden md:inline">{t("meta.tag")}</span>
        <span>N°/001</span>
      </div>

      {/* Hand holding phone — the actual NEXT BIG SH#@! */}
      <div
        ref={handParallax.ref}
        className="pointer-events-none absolute -right-[12%] md:-right-[6%] bottom-0 h-[48%] md:h-[78%] z-20 will-change-transform"
        style={{ transform: `translate3d(0, ${handParallax.offset}px, 0)` }}
      >
        <div className="h-full w-full animate-hand-rise opacity-0" style={{ animationFillMode: "forwards" }}>
          <img
            src={heroHand}
            alt="Mano sosteniendo un teléfono con videos generados por IA"
            className="h-full w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>

      {/* THE GIANT TYPE — sized to never overflow */}
      <div
        ref={titleParallax.ref}
        className="relative z-10 px-3 md:px-6 md:pr-[12%] lg:pr-[15%] flex flex-col items-center justify-center flex-1 w-full will-change-transform"
        style={{ transform: `translate3d(0, ${titleParallax.offset}px, 0)` }}
      >
        <h1 className="font-display uppercase text-foreground leading-[0.82] md:leading-[0.78] tracking-[-0.05em] md:tracking-[-0.06em] text-center select-none w-full max-w-full">
          <span
            className="block animate-hero-in opacity-0"
            style={{
              fontSize: "clamp(4.5rem, 22vw, 22rem)",
              animationDelay: "120ms",
              animationFillMode: "forwards",
            }}
          >
            THE NEXT
          </span>
          <span
            className="block whitespace-nowrap animate-hero-in opacity-0"
            style={{
              fontSize: "clamp(4.5rem, 25vw, 26rem)",
              animationDelay: "320ms",
              animationFillMode: "forwards",
            }}
          >
            BIG{" "}
            <span className="text-primary">
              SH#@!
            </span>
          </span>
        </h1>
      </div>

      {/* bottom row */}
      <div className="relative z-30 px-6 md:px-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 items-end animate-fade-in-up">
        <p className="text-xs md:text-base max-w-xs text-muted-foreground leading-snug">
          {t("hero.tag")}
        </p>
        <div className="hidden md:flex justify-center">
          <a
            href="#about"
            className="group inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold text-foreground"
          >
            <span>{t("hero.scroll")}</span>
            <span className="block w-px h-12 bg-foreground/40 group-hover:bg-primary transition-colors animate-scroll-line" />
          </a>
        </div>
        <div className="md:text-right text-xs uppercase tracking-[0.25em] font-semibold text-foreground">
          <span className="inline-block px-3 py-1.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
            {t("hero.manifesto")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
