import SeedanceStamp from "./SeedanceStamp";
import { useLang } from "@/i18n/LanguageContext";
import { useParallax, useReveal } from "@/hooks/useParallax";

const Muses = () => {
  const { t } = useLang();
  const blob = useParallax<HTMLDivElement>(0.25);
  const orbP = useParallax<HTMLDivElement>(-0.15);
  const reveal = useReveal<HTMLDivElement>(0.2);

  return (
    <section
      id="muses"
      className="relative bg-background-deeper border-y border-border py-20 md:py-28 px-6 md:px-10 overflow-hidden"
    >
      <div
        ref={blob.ref}
        className="pointer-events-none absolute -top-20 right-0 w-[40vw] h-[40vw] rounded-full bg-secondary/20 blur-[120px] will-change-transform"
        style={{ transform: `translate3d(0, ${blob.offset}px, 0)` }}
      />
      <div
        ref={reveal.ref}
        className={`max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center relative z-10 reveal ${
          reveal.visible ? "is-visible" : ""
        }`}
      >
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary mb-6">
            {t("muses.kicker")}
          </p>
          <h2 className="font-display uppercase text-6xl md:text-8xl lg:text-9xl leading-[0.82] tracking-tight relative inline-block">
            <SeedanceStamp
              size="md"
              className="absolute -top-16 -left-6 md:-top-20 md:-left-10 rotate-[-12deg] z-10"
            />
            <span className="text-secondary relative">MUSES</span>
            <span className="block text-foreground">{t("muses.title.2")}</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            {t("muses.p1")}
          </p>
          <p className="mt-4 text-lg md:text-xl text-foreground leading-relaxed max-w-xl">
            {t("muses.p2")}
          </p>
        </div>
        <div
          ref={orbP.ref}
          className="md:col-span-5 relative will-change-transform"
          style={{ transform: `translate3d(0, ${orbP.offset}px, 0)` }}
        >
          <div className="aspect-square w-full max-w-sm mx-auto relative animate-float-slow">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-40" />
            <div className="relative w-full h-full rounded-full border-2 border-primary/40 flex items-center justify-center">
              <div className="absolute inset-6 rounded-full border border-secondary/40 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border border-primary/30 animate-[spin_22s_linear_infinite_reverse]" />
              <span className="font-display text-7xl md:text-8xl bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                ✦
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Muses;
