import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, { es: string; en: string }>;

const DICT: Dict = {
  "meta.cities": {
    es: "EST. 2024 — BUENOS AIRES / MADRID / MONTEVIDEO",
    en: "EST. 2024 — BUENOS AIRES / MADRID / MONTEVIDEO",
  },
  "meta.tag": {
    es: "IA · VERTICAL · MICRODRAMAS",
    en: "AI · VERTICAL · MICRODRAMAS",
  },
  "hero.line1": { es: "THE NEXT", en: "THE NEXT" },
  "hero.big": { es: "BIG", en: "BIG" },
  "hero.shit": { es: "SH#@!", en: "SH#@!" },
  "hero.tag": {
    es: "IA vertical + microdramas. Producimos contenido viral a la velocidad de la cultura.",
    en: "Vertical AI + microdramas. We produce viral content at the speed of culture.",
  },
  "hero.scroll": { es: "scroll", en: "scroll" },
  "hero.manifesto": { es: "Manifesto / Studio Reel ↗", en: "Manifesto / Studio Reel ↗" },
  "nav.about": { es: "Nosotros", en: "About" },
  "nav.services": { es: "Servicios", en: "Services" },
  "nav.muses": { es: "Muses", en: "Muses" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  "nav.live": { es: "Live", en: "Live" },
  "about.kicker": { es: "01 / Manifiesto", en: "01 / Manifesto" },
  "about.title.1": { es: "Somos la", en: "We are the" },
  "about.title.2": { es: "generación", en: "generative" },
  "about.title.3": { es: "generativa.", en: "generation." },
  "about.p1": {
    es: "Creamos videos a la velocidad de la cultura — produciendo cantidades masivas de contenido que evoluciona en tiempo real.",
    en: "We create videos at the speed of culture — producing massive amounts of content that evolves in real time.",
  },
  "about.p2": {
    es: "Publicamos, medimos, iteramos y volvemos a publicar. Siempre aprendiendo de audiencias reales con agentes de IA y herramientas generativas.",
    en: "We publish, measure, iterate, and publish again. Always learning from real audiences with AI agents and generative tools.",
  },
  "about.p3.q": { es: "¿Nuestro superpoder?", en: "Our superpower?" },
  "about.p3.a": { es: "Capturar la atención.", en: "Capturing attention." },
  "about.shift": {
    es: "Esto no es una tendencia. Es ",
    en: "This isn't a trend. It's ",
  },
  "about.shift.b": { es: "the next big shift.", en: "the next big shift." },
  "stats.kicker": { es: "02 / Tracción real", en: "02 / Real traction" },
  "stats.subs": { es: "Suscriptores", en: "Subscribers" },
  "stats.views": { es: "Reproducciones", en: "Views" },
  "stats.videos": { es: "Videos creados", en: "Videos created" },
  "stats.days": { es: "Días no-stop", en: "Days non-stop" },
  "yt.kicker": { es: "Nuestro laboratorio", en: "Our lab" },
  "yt.title": {
    es: "Historias Infinitas",
    en: "Historias Infinitas",
  },
  "yt.headline": {
    es: "donde la tracción se hace en vivo.",
    en: "where traction happens live.",
  },
  "yt.desc": {
    es: "Es nuestro canal de YouTube donde experimentamos con producción masiva de microdramas con IA. Publicamos, medimos y aprendemos en vivo. Es nuestro patio de pruebas para the next big SH#@!",
    en: "It's our YouTube channel where we experiment with massive AI microdrama production. We publish, measure, and learn live. Our playground for the next big SH#@!",
  },
  "yt.cta": { es: "Ver el canal ↗", en: "Watch the channel ↗" },
  "services.kicker": { es: "03 / Servicios", en: "03 / Services" },
  "services.title.1": { es: "Una IP factory", en: "A disruptive" },
  "services.title.2": { es: "disruptiva.", en: "IP factory." },
  "services.intro": {
    es: "Transformamos ideas en productos de entretenimiento viral con IA. Nuestro modelo B2B2C crea canales y personajes para marcas.",
    en: "We turn ideas into viral entertainment products with AI. Our B2B2C model builds channels and characters for brands.",
  },
  "muses.kicker": { es: "04 / Tecnología propietaria", en: "04 / Proprietary tech" },
  "muses.title.2": { es: "automatiza.", en: "automates." },
  "muses.p1": {
    es: "Nuestro software propietario que automatiza procesos complejos de creación de contenido. Plug-and-play para integrar nuevas tecnologías emergentes.",
    en: "Our proprietary software that automates complex content creation processes. Plug-and-play to integrate emerging tech.",
  },
  "muses.p2": {
    es: "Aceleramos dramáticamente el tiempo de producción, publicación y feedback. Ideas → contenido viral en tiempo récord.",
    en: "We dramatically accelerate production, publishing, and feedback. Ideas → viral content in record time.",
  },
  "cta.kicker": { es: "05 / Revolución generativa", en: "05 / Generative revolution" },
  "cta.title.1": { es: "Build the next", en: "Build the next" },
  "cta.title.2": { es: "big SH#@!", en: "big SH#@!" },
  "cta.desc": {
    es: "Trabajemos juntos en tu idea para hacerla realidad. Te respondemos rápido, prometido.",
    en: "Let's work together to make your idea real. We reply fast, promise.",
  },
  "cta.reel": { es: "Ver el reel ↗", en: "Watch the reel ↗" },
  "service.01.t": { es: "Creación masiva con IA", en: "Massive AI creation" },
  "service.01.d": {
    es: "Tecnología de vanguardia para producir contenido a escala nunca vista. Cientos de piezas por semana.",
    en: "Cutting-edge tech to produce content at unseen scale. Hundreds of pieces per week.",
  },
  "service.02.t": { es: "IP Factory", en: "IP Factory" },
  "service.02.d": {
    es: "Del boceto al video: desarrollamos propiedad intelectual, la probamos en redes y pivotamos hasta el máximo engagement.",
    en: "From sketch to video: we develop IP, test it on socials, and pivot until peak engagement.",
  },
  "service.03.t": { es: "Modelo B2B2C", en: "B2B2C Model" },
  "service.03.d": {
    es: "Creamos canales de contenido para marcas con propiedades intelectuales propias o branded content personalizado.",
    en: "We build content channels for brands with proprietary IP or custom branded content.",
  },
  "service.04.t": { es: "Multilenguaje", en: "Multilingual" },
  "service.04.d": {
    es: "Alcanza una audiencia global creando contenidos en múltiples lenguajes de una sola vez.",
    en: "Reach a global audience creating content in multiple languages at once.",
  },
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof DICT) => string;
}

const LanguageContext = createContext<Ctx | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");
  const t = (key: keyof typeof DICT) => DICT[key]?.[lang] ?? String(key);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
