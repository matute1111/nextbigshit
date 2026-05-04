import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";

const SiteHeader = () => {
  const { t, lang, setLang } = useLang();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY;
      if (y < 80) {
        setHidden(false);
      } else if (goingDown && y - lastY > 4) {
        setHidden(true);
      } else if (!goingDown && lastY - y > 4) {
        setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/40 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#" className="font-display text-3xl tracking-tight text-foreground">
          GENNIAL<span className="text-primary">.</span>STUDIO
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-semibold text-foreground">
          <a href="#about" className="hover:text-primary transition-colors">{t("nav.about")}</a>
          <a href="#services" className="hover:text-primary transition-colors">{t("nav.services")}</a>
          <a href="#muses" className="hover:text-primary transition-colors">{t("nav.muses")}</a>
          <a href="#contact" className="hover:text-primary transition-colors">{t("nav.contact")}</a>
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-bold text-foreground border border-foreground/40 px-2 py-1 hover:border-primary hover:text-primary transition-colors"
            aria-label="Toggle language"
          >
            <span className={lang === "es" ? "text-primary" : ""}>ES</span>
            <span className="opacity-40">/</span>
            <span className={lang === "en" ? "text-primary" : ""}>EN</span>
          </button>
          <a
            href="mailto:info@gennial.ai"
            className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-foreground"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-flicker" />
            {t("nav.live")}
          </a>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
