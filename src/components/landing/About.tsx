import { useEffect, useRef, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { useParallax, useReveal } from "@/hooks/useParallax";
import longArm from "@/assets/long-arm.png";

const About = () => {
  const { t } = useLang();
  const titleP = useParallax<HTMLDivElement>(0);
  const reveal = useReveal<HTMLDivElement>(0.2);

  // Arm follows scroll at the same speed as the sticky title:
  // slides in from the left while the section enters, then back out as it leaves.
  const armRef = useRef<HTMLDivElement | null>(null);
  const [armTranslate, setArmTranslate] = useState(25);

  useEffect(() => {
    let raf = 0;
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = armRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // distance from viewport center, normalized like useParallax
      const center = rect.top + rect.height / 2 - vh / 2;
      // Anchored to the LEFT edge. Static while in view, slides LEFT (under the edge) only as it leaves upward.
      const norm = center / vh; // negative when leaving above viewport
      const t = norm < 0 ? Math.max(-40, norm * 50) : 0; // only negative or zero, never positive
      setArmTranslate(t);
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

  // Negative when section is below viewport center (push off-screen left), 0 at center, positive as it leaves

  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <div className="px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
        <div
          ref={titleP.ref}
          className="md:col-span-5 will-change-transform"
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
        </div>
      </div>
      </div>

      {/* Long arm — pinned to LEFT edge, slides in then back out on scroll, slightly overlaps the heading */}
      <div
        ref={armRef}
        className="pointer-events-none relative -mt-32 md:-mt-[14.5rem] lg:-mt-[20.5rem] w-screen flex justify-start overflow-hidden"
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
            className="block w-[60vw] md:w-[55vw] max-w-none h-auto object-contain object-left drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>

      {/* Section divider — unified style */}
      <div className="relative z-10 px-6 md:px-10 pt-10 md:pt-14 pb-0 -mb-[100px]">
        <div className="max-w-7xl mx-auto text-center">
          <h3
            className="font-display uppercase tracking-[-0.02em] leading-[0.9] text-foreground whitespace-nowrap"
            style={{ fontSize: "clamp(1.4rem, 4.8vw, 5rem)" }}
          >
            {t("about.shift")}
            <span className="text-primary italic">{t("about.shift.b")}</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
