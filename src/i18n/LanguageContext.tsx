import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, { es: string; en: string }>;

const DICT: Dict = {
  "meta.cities": {
    es: "GENNIAL.STUDIO",
    en: "GENNIAL.STUDIO",
  },
  "meta.tag": {
    es: "IA · VERTICAL · MICRODRAMAS",
    en: "AI · VERTICAL · MICRODRAMAS",
  },
  "hero.line1": { es: "THE NEXT", en: "THE NEXT" },
  "hero.big": { es: "BIG", en: "BIG" },
  "hero.shit": { es: "SH#!T", en: "SH#!T" },
  "hero.tag": {
    es: "IA vertical + microdramas. Producimos contenido viral a la velocidad de la cultura.",
    en: "Vertical AI + microdramas. We produce viral content at the speed of culture.",
  },
  "hero.scroll": { es: "scroll", en: "scroll" },
  "hero.manifesto": { es: "Manifesto / Studio Reel ↗", en: "Manifesto / Studio Reel ↗" },
  "nav.about": { es: "Manifiesto", en: "Manifesto" },
  "nav.services": { es: "Servicios", en: "Services" },
  "nav.muses": { es: "Muses", en: "Muses" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  "nav.live": { es: "Live", en: "Live" },
  "about.kicker": { es: "01 / Manifiesto", en: "01 / Manifesto" },
  "about.title.1": { es: "Somos la", en: "We are the" },
  "about.title.2": { es: "generación", en: "generative" },
  "about.title.3": { es: "generativa.", en: "generation." },
  "about.p1": {
    es: "Amamos el cine y amamos el arte: creemos en su poder para imaginar mundos, revelar conflictos humanos y construir nuevas formas de sensibilidad.",
    en: "We love cinema and we love art: we believe in their power to imagine worlds, reveal human conflicts, and build new forms of sensibility.",
  },
  "about.p2": {
    es: "Creemos en la tecnología y en la IA como una fuerza capaz de expandir la creación y abrir lenguajes narrativos inéditos.",
    en: "We believe in technology and AI as a force capable of expanding creation and opening unprecedented narrative languages.",
  },
  "about.p3.q": {
    es: "No usamos la IA para reemplazar la mirada artística:",
    en: "We don't use AI to replace the artistic gaze:",
  },
  "about.p3.a": {
    es: "la usamos para amplificarla y explorar el futuro de las historias.",
    en: "we use it to amplify it and explore the future of stories.",
  },
  "about.shift": {
    es: "Esto no es una tendencia. Es ",
    en: "This isn't a trend. It's ",
  },
  "about.shift.b": { es: "the next big shift.", en: "the next big shift." },
  "stats.kicker": { es: "03 / Tracción real", en: "03 / Real traction" },
  "stats.shift": { es: "Esto no es un experimento. Es ", en: "This isn't an experiment. It's " },
  "stats.shift.b": { es: "the next big leap.", en: "the next big leap." },
  "frontier.shift": { es: "Esto no es formato. Es ", en: "This isn't a format. It's " },
  "frontier.shift.b": { es: "the next frontier.", en: "the next frontier." },
  "disruption.shift": { es: "Esto no es futuro. Es ", en: "This isn't the future. It's " },
  "disruption.shift.b": { es: "the next big disruption.", en: "the next big disruption." },
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
    es: "Es nuestro canal de YouTube donde experimentamos con producción masiva de microdramas con IA. Publicamos, medimos y aprendemos en vivo. Es nuestro patio de pruebas para the next big SH#!T",
    en: "It's our YouTube channel where we experiment with massive AI microdrama production. We publish, measure, and learn live. Our playground for the next big SH#!T",
  },
  "yt.cta": { es: "Ver el canal ↗", en: "Watch the channel ↗" },
  "micro.kicker": { es: "04 / IA Vertical · Microdramas", en: "04 / Vertical AI · Microdramas" },
  "micro.title.1": { es: "Microdramas", en: "Microdramas" },
  "micro.title.2": { es: "en piloto automático.", en: "on autopilot." },
  "micro.intro": {
    es: "Automatizamos todo el proceso creativo: de la idea al episodio terminado en calidad cine, sin fricción y a costos mínimos.",
    en: "We automate the entire creative process: from idea to finished cinema-grade episode, frictionless and at minimal cost.",
  },
  "micro.step1.t": { es: "Estructura narrativa", en: "Narrative structure" },
  "micro.step1.d": {
    es: "La IA construye arcos, personajes y universos completos. Diseña la historia desde el primer hook hasta el cliffhanger final.",
    en: "AI builds full arcs, characters and universes. It designs the story from the first hook to the final cliffhanger.",
  },
  "micro.step2.t": { es: "Quiebre en microepisodios", en: "Break into microepisodes" },
  "micro.step2.d": {
    es: "Fragmentamos cada historia en cápsulas verticales con su propio ritmo, gancho y resolución. Pensadas para el scroll.",
    en: "We split each story into vertical capsules with their own rhythm, hook and payoff. Built for the scroll.",
  },
  "micro.step3.t": { es: "Producción calidad cine", en: "Cinema-grade production" },
  "micro.step3.d": {
    es: "Render automatizado con modelos de última generación. Fotografía, voces y sonido nivel pantalla grande, en minutos. Multilenguaje desde la incepción.",
    en: "Automated rendering with state-of-the-art models. Cinematography, voices and sound at big-screen quality, in minutes. Multilingual from inception.",
  },
  "micro.pill.1": { es: "Inmediato", en: "Instant" },
  "micro.pill.2": { es: "Automatizado", en: "Automated" },
  "micro.pill.3": { es: "Costo mínimo", en: "Minimal cost" },
  "micro.pill.4": { es: "Escala infinita", en: "Infinite scale" },
  "micro.intertitle.1": {
    es: "Esto no es humo. Es",
    en: "This isn't hype. It's",
  },
  "micro.intertitle.2": {
    es: "the next big sh#!t.",
    en: "the next big sh#!t.",
  },
  "micro.cta": { es: "Mira una serie", en: "Watch a series" },
  "services.kicker": { es: "05 / Servicios", en: "05 / Services" },
  "services.title.1": { es: "Una IP factory", en: "A disruptive" },
  "services.title.2": { es: "disruptiva.", en: "IP factory." },
  "services.intro": {
    es: "Transformamos ideas en productos de entretenimiento viral con IA. Nuestro modelo B2B2C crea canales y personajes para marcas.",
    en: "We turn ideas into viral entertainment products with AI. Our B2B2C model builds channels and characters for brands.",
  },
  "muses.kicker": { es: "02 / Tecnología propietaria", en: "02 / Proprietary tech" },
  "muses.title.2": { es: "automatiza.", en: "automates." },
  "muses.p1": {
    es: "Nuestro software propietario que automatiza procesos complejos de creación de contenido. Plug-and-play para integrar nuevas tecnologías emergentes.",
    en: "Our proprietary software that automates complex content creation processes. Plug-and-play to integrate emerging tech.",
  },
  "muses.p2": {
    es: "Aceleramos dramáticamente el tiempo de producción, publicación y feedback. Ideas → contenido viral en tiempo récord.",
    en: "We dramatically accelerate production, publishing, and feedback. Ideas → viral content in record time.",
  },
  "cta.kicker": { es: "06 / Revolución generativa", en: "06 / Generative revolution" },
  "cta.title.1": { es: "Build together", en: "Build together" },
  "cta.title.2": { es: "the next big S#!T", en: "the next big S#!T" },
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
