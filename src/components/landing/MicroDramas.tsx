import { useEffect, useRef, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { useParallax, useReveal } from "@/hooks/useParallax";
import SectionDivider from "./SectionDivider";
import longArm from "@/assets/long-arm-replacement.png";
import microdramaHands from "@/assets/microdrama-hands.png";

const MicroDramas = () => {
  const { t } = useLang();
  const reveal = useReveal<HTMLDivElement>(0.15);
  const blob = useParallax<HTMLDivElement>(0.2);

  // Mobile arm: slides in from left then back out as section leaves (same as About)
  const armRef = useRef<HTMLDivElement | null>(null);
  const [armTranslate, setArmTranslate] = useState(25);

  // Desktop hands: come out from above the grid, scroll down and hide behind it
  const handsRef = useRef<HTMLDivElement | null>(null);
  const [handsTranslate, setHandsTranslate] = useState(0);

  useEffect(() => {
    let raf = 0;
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;

      const armEl = armRef.current;
      if (armEl) {
        const rect = armEl.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - vh / 2;
        // Subtle downward drift so the image slides behind the table on scroll.
        const offset = Math.max(0, Math.min(180, -center * 0.18));
        setArmTranslate(offset);
      }

      const handsEl = handsRef.current;
      if (handsEl) {
        const rect = handsEl.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - vh / 2;
        // Move down as we scroll (positive offset). Cap so it eases.
        const offset = Math.max(-40, Math.min(120, -center * 0.18));
        setHandsTranslate(offset);
      }
    };
    const onScroll = () => {
      if (!ticking) {
        raf = requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const STEPS = [
    { n: "01", title: t("micro.step1.t"), desc: t("micro.step1.d") },
    { n: "02", title: t("micro.step2.t"), desc: t("micro.step2.d") },
    { n: "03", title: t("micro.step3.t"), desc: t("micro.step3.d") },
  ];

  return (
    <section
      id="microdramas"
      className="relative pt-20 md:pt-28 px-6 md:px-10 overflow-hidden"
    >
      <div
        ref={blob.ref}
        className="pointer-events-none absolute -top-40 -left-20 w-[60vw] h-[60vw] rounded-full bg-primary/10 blur-[160px] will-change-transform"
        style={{ transform: `translate3d(0, ${blob.offset}px, 0)` }}
      />

      <div ref={reveal.ref} className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">
            {t("micro.kicker")}
          </p>
          <h2 className="font-display uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight md:max-w-[50%] md:pr-6">
            {t("micro.title.1")}
            <br />
            <span className="text-primary italic">{t("micro.title.2")}</span>
          </h2>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed md:max-w-[50%] md:pr-6">
            {t("micro.intro")}
          </p>
        </div>

        {/* Mobile hands — in flow below intro, slides down behind the table on scroll */}
        <div
          ref={armRef}
          className="md:hidden pointer-events-none relative mt-[-40px] -mb-12 flex justify-center z-0 overflow-visible"
        >
          <img
            src={microdramaHands}
            alt="Tres manos sosteniendo teléfonos con escenas de microdramas"
            className="block w-[85%] h-auto object-contain will-change-transform drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
            style={{ transform: `translate3d(0, ${armTranslate}px, 0)` }}
          />
        </div>

        {/* Desktop hands — emerge above the grid, slide down and hide behind it on scroll */}
        <div className="relative">

          {/* Desktop hands */}
          <div
            ref={handsRef}
            className="hidden md:flex pointer-events-none absolute inset-x-0 -top-[29.375rem] lg:-top-[33.375rem] justify-center z-0 overflow-visible pl-[8%]"
          >
            <img
              src={microdramaHands}
              alt="Tres manos sosteniendo teléfonos con escenas de microdramas"
              className="block w-[49vw] max-w-[574px] h-auto object-contain will-change-transform drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] ml-[250px]"
              style={{ transform: `translate3d(0, ${handsTranslate}px, 0)` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border mb-14 relative z-10">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className="bg-background p-8 md:p-10 transition-all duration-700"
                style={{
                  opacity: reveal.visible ? 1 : 0,
                  transform: reveal.visible ? "translateY(0)" : "translateY(40px)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                <span className="font-display text-2xl text-primary">{s.n}</span>
                <h3 className="font-display uppercase text-2xl md:text-3xl tracking-tight mt-4 mb-4">
                  {s.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>


        <div className="flex flex-col items-center text-center gap-8">
          <a
            href="https://www.youtube.com/@HistoriasInfinitasOK"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-5 font-display uppercase text-xl tracking-tight hover:bg-foreground transition-all duration-300 hover:-translate-y-0.5 shadow-orange"
          >
            {t("micro.cta")}
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </div>
      <SectionDivider text={t("micro.intertitle.1") + " "} highlight={t("micro.intertitle.2")} />
    </section>
  );
};

export default MicroDramas;
