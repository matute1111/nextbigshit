import { useEffect, useRef, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { useParallax, useReveal } from "@/hooks/useParallax";
import longArm from "@/assets/long-arm.png";

const About = () => {
  const { t } = useLang();
  const titleP = useParallax<HTMLDivElement>(0.45);
  const reveal = useReveal<HTMLDivElement>(0.2);

  // Arm slides in from the right, then back out to the right as you keep scrolling
  const armRef = useRef<HTMLDivElement | null>(null);
  const [armProgress, setArmProgress] = useState(0); // 0 hidden right, 1 fully in, 0 hidden right again

  useEffect(() => {
    let raf = 0;
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = armRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2 - vh / 2;
      const range = vh * 0.6;
      const norm = Math.max(-1, Math.min(1, center / range));
      const p = Math.max(0, 1 - Math.abs(norm));
      setArmProgress(p);
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

  // Subtle slide: only ~25% in/out instead of fully off-screen
  const armTranslate = (1 - armProgress) * 25;

  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <div className="px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
        <div
          ref={titleP.ref}
          className="md:col-span-5 md:sticky md:top-32 md:self-start will-change-transform"
          style={{ transform: `translate3d(0, ${titleP.offset}px, 0)` }}
        >
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">
            {t("about.kicker")}
          </p>
          <h2 className="font-display uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tight">
            {t("about.title.1")}
            <br />
            <span className="text-primary italic">{t("about.title.2")}</span>
            <br />
            {t("about.title.3")}
          </h2>
        </div>
        <div
          ref={reveal.ref}
          className={`md:col-span-6 md:col-start-7 space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground reveal ${
            reveal.visible ? "is-visible" : ""
          }`}
        >
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p className="text-foreground font-semibold text-2xl md:text-3xl font-display uppercase tracking-tight">
            {t("about.p3.q")} <span className="text-primary">{t("about.p3.a")}</span>
          </p>
          <p className="text-foreground text-xl md:text-2xl font-display uppercase tracking-tight pt-6 border-t border-border">
            {t("about.shift")}
            <span className="text-primary italic">{t("about.shift.b")}</span>
          </p>
        </div>
      </div>
      </div>

      {/* Long arm — pinned to right edge, slides in then back out on scroll, slightly overlaps the heading */}
      <div
        ref={armRef}
        className="pointer-events-none relative -mt-16 md:-mt-40 w-screen flex justify-end overflow-hidden"
      >
        <div
          className="will-change-transform"
          style={{
            transform: `translate3d(${armTranslate}%, 0, 0)`,
          }}
        >
          <img
            src={longArm}
            alt="Brazo largo sosteniendo un teléfono con contenido generativo"
            className="block w-[60vw] md:w-[55vw] max-w-none h-auto object-contain object-right drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
