import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, { es: string; en: string }>;

const DICT: Dict = {
  "meta.cities": {
    es: "Gennial Studio",
    en: "Gennial Studio",
  },
  "meta.tag": {
    es: "IA · VERTICAL · MICRODRAMAS",
    en: "AI · VERTICAL · MICRODRAMAS",
  },
  "hero.line1": { es: "THE NEXT", en: "THE NEXT" },
  "hero.big": { es: "BIG", en: "BIG" },
  "hero.shit": { es: "SHIFT", en: "SHIFT" },
  "hero.tag": {
    es: "Creamos IPs, microdramas y canales de entretenimiento con IA. Del concepto al contenido publicado, medido y optimizado a la velocidad de la cultura.",
    en: "We create IPs, microdramas and entertainment channels with AI. From concept to published, measured and optimized content at the speed of culture.",
  },
  "hero.scroll": { es: "scroll", en: "scroll" },
  "hero.manifesto": { es: "Manifiesto / Studio Reel ↗", en: "Manifesto / Studio Reel ↗" },
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
    es: "Amamos el cine. Amamos el arte. Y creemos que la tecnología puede abrir una nueva etapa para las historias.",
    en: "We love cinema. We love art. And we believe technology can open a new chapter for storytelling.",
  },
  "about.p3.q": {
    es: "No usamos la IA para reemplazar la mirada artística.",
    en: "We don't use AI to replace the artistic gaze.",
  },
  "about.p3.a": {
    es: "La usamos para expandirla: para imaginar mundos, revelar conflictos humanos y explorar lenguajes narrativos que todavía no existen.",
    en: "We use it to expand it: to imagine worlds, reveal human conflicts and explore narrative languages that don't yet exist.",
  },
  "about.p2": {
    es: "La industria aprendió a producir para plataformas, algoritmos y hábitos de consumo cada vez más veloces. Nosotros queremos ir un paso más allá: no obedecer al algoritmo, sino entenderlo, hackearlo y construir nuevas formas de entretenimiento alrededor de él.",
    en: "The industry learned to produce for platforms, algorithms and ever-faster consumption habits. We want to go one step further: not obey the algorithm, but understand it, hack it, and build new forms of entertainment around it.",
  },
  "about.shift": {
    es: "Esto no es una tendencia. Es ",
    en: "This isn't a trend. It's ",
  },
  "about.shift.b": { es: "the next big shift.", en: "the next big shift." },

  "stats.kicker": { es: "03 / Tracción real · Nuestro laboratorio", en: "03 / Real traction · Our lab" },
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
    es: "Historias Infinitas es nuestro laboratorio vivo de producción generativa. Un canal donde experimentamos con microdramas, personajes, formatos y narrativas creadas con IA, publicadas directamente frente a audiencias reales. No testeamos en una sala cerrada: publicamos, medimos, aprendemos y volvemos a crear. Cada video es una hipótesis. Cada audiencia, una respuesta. Cada dato, una nueva decisión creativa.",
    en: "Historias Infinitas is our living lab of generative production. A channel where we experiment with microdramas, characters, formats and narratives built with AI, released directly in front of real audiences. We don't test in a closed room: we publish, measure, learn and create again. Every video is a hypothesis. Every audience, an answer. Every data point, a new creative decision.",
  },
  "yt.cta": { es: "Ver el canal ↗", en: "Watch the channel ↗" },

  "micro.kicker": { es: "04 / IA Vertical · Microdramas", en: "04 / Vertical AI · Microdramas" },
  "micro.title.1": { es: "Microdramas", en: "Microdramas" },
  "micro.title.2": { es: "diseñados para el scroll.", en: "designed for the scroll." },
  "micro.intro": {
    es: "Creamos series verticales pensadas para capturar atención desde el primer segundo. Historias de alto impacto emocional, estructura serial, cliffhangers constantes y producción optimizada para plataformas móviles. La IA nos permite acelerar cada etapa del proceso sin perder intención narrativa: concepto, personajes, episodios, imágenes, voces, edición y adaptación multilenguaje.",
    en: "We create vertical series designed to capture attention from the first second. High emotional impact stories, serial structure, constant cliffhangers and production optimized for mobile platforms. AI lets us accelerate every stage of the process without losing narrative intent: concept, characters, episodes, images, voices, editing and multilingual adaptation.",
  },
  "micro.step1.t": { es: "Estructura narrativa", en: "Narrative structure" },
  "micro.step1.d": {
    es: "Construimos arcos, personajes y universos completos. Cada historia nace con un conflicto claro, una promesa emocional y una progresión diseñada para sostener la atención.",
    en: "We build full arcs, characters and universes. Every story is born with a clear conflict, an emotional promise and a progression designed to sustain attention.",
  },
  "micro.step2.t": { es: "Microepisodios", en: "Microepisodes" },
  "micro.step2.d": {
    es: "Fragmentamos cada historia en cápsulas verticales con ritmo, gancho y resolución parcial. Cada episodio tiene una función: abrir deseo, revelar tensión y empujar al siguiente.",
    en: "We split each story into vertical capsules with rhythm, hook and partial payoff. Every episode has a job: open desire, reveal tension and push to the next.",
  },
  "micro.step3.t": { es: "Producción calidad cine", en: "Cinema-grade production" },
  "micro.step3.d": {
    es: "Usamos modelos de última generación para generar imagen, voz, sonido y edición con estándares visuales premium. Contenido serial en minutos. No en meses.",
    en: "We use state-of-the-art models to generate image, voice, sound and editing with premium visual standards. Serial content in minutes. Not months.",
  },
  "micro.intertitle.1": {
    es: "Esto no es humo. Es",
    en: "This isn't hype. It's",
  },
  "micro.intertitle.2": {
    es: "the next big sh#!t.",
    en: "the next big sh#!t.",
  },
  "micro.cta": { es: "Mirá una serie", en: "Watch a series" },

  "services.kicker": { es: "05 / Servicios", en: "05 / Services" },
  "services.title.1": { es: "Una IP factory", en: "A disruptive" },
  "services.title.2": { es: "disruptiva.", en: "IP factory." },
  "services.intro": {
    es: "Transformamos ideas, marcas y territorios narrativos en productos de entretenimiento capaces de vivir en redes, crecer con audiencias y escalar en múltiples formatos. No hacemos piezas sueltas: creamos sistemas narrativos. Nuestro modelo combina estrategia creativa, producción generativa, publicación constante y aprendizaje basado en datos.",
    en: "We turn ideas, brands and narrative territories into entertainment products that live on social, grow with audiences and scale across formats. We don't make one-offs: we build narrative systems. Our model blends creative strategy, generative production, constant publishing and data-driven learning.",
  },

  "muses.kicker": { es: "02 / Tecnología propietaria", en: "02 / Proprietary tech" },
  "muses.title.2": { es: "automatiza.", en: "automates." },
  "muses.title.3": { es: "La visión", en: "The vision" },
  "muses.title.4": { es: "dirige.", en: "directs." },
  "muses.p1": {
    es: "MUSES es nuestro software propietario para crear contenido narrativo con IA de punta, procesos automatizados y dirección creativa humana.",
    en: "MUSES is our proprietary software for creating narrative content with cutting-edge AI, automated processes and human creative direction.",
  },
  "muses.p2": {
    es: "Integra herramientas emergentes, modelos generativos y flujos de producción en un sistema plug-and-play capaz de acelerar todo el ciclo creativo.",
    en: "It integrates emerging tools, generative models and production flows into a plug-and-play system that accelerates the entire creative cycle.",
  },
  "muses.p3": {
    es: "De una idea puede construir personajes, arcos narrativos, episodios, imágenes, voces, videos y versiones multilenguaje.",
    en: "From a single idea it can build characters, story arcs, episodes, images, voices, videos and multilingual versions.",
  },
  "muses.p4": {
    es: "No reemplaza al creador. Le da una infraestructura para producir más rápido, probar más ideas y aprender con audiencias reales.",
    en: "It doesn't replace the creator. It gives them an infrastructure to produce faster, test more ideas and learn with real audiences.",
  },
  "muses.p5": {
    es: "Ideas → pilotos → publicación → medición → aprendizaje → nuevas historias.",
    en: "Ideas → pilots → publishing → measurement → learning → new stories.",
  },

  "cta.kicker": { es: "06 / Revolución generativa", en: "06 / Generative revolution" },
  "cta.title.1": { es: "Build together", en: "Build together" },
  "cta.title.2": { es: "the next big SH#!T", en: "the next big SH#!T" },
  "cta.desc": {
    es: "Tenés una marca, una IP, una idea o un universo posible. Nosotros podemos convertirlo en una prueba viva: un piloto, una serie, un canal o una máquina narrativa lista para salir al mundo. Creamos rápido. Publicamos rápido. Aprendemos rápido. Pero no confundimos velocidad con vacío: la tecnología acelera, la historia decide.",
    en: "You have a brand, an IP, an idea or a possible universe. We can turn it into a living test: a pilot, a series, a channel or a narrative machine ready to go out into the world. We create fast. We publish fast. We learn fast. But we don't confuse speed with emptiness: technology accelerates, the story decides.",
  },
  "cta.talk": { es: "Hablemos ↗", en: "Let's talk ↗" },
  "cta.reel": { es: "Ver el reel ↗", en: "Watch the reel ↗" },

  "service.01.t": { es: "Creación masiva con IA", en: "Massive AI creation" },
  "service.01.d": {
    es: "Producimos contenido a una escala imposible para los modelos tradicionales. Cientos de piezas por semana, con dirección creativa, consistencia estética y velocidad de publicación.",
    en: "We produce content at a scale impossible for traditional models. Hundreds of pieces per week, with creative direction, aesthetic consistency and publishing speed.",
  },
  "service.02.t": { es: "IP Factory", en: "IP Factory" },
  "service.02.d": {
    es: "Del boceto al piloto. Del piloto al canal. Del canal a una propiedad intelectual validada por audiencia real. Creamos personajes, universos, series y formatos con potencial de expansión.",
    en: "From sketch to pilot. From pilot to channel. From channel to an IP validated by a real audience. We create characters, universes, series and formats with expansion potential.",
  },
  "service.03.t": { es: "Modelo B2B2C", en: "B2B2C Model" },
  "service.03.d": {
    es: "Trabajamos con marcas, plataformas y partners que quieren construir audiencias propias a través de entretenimiento. Creamos canales, personajes y narrativas que conectan con comunidades reales, no sólo con targets.",
    en: "We work with brands, platforms and partners that want to build their own audiences through entertainment. We create channels, characters and narratives that connect with real communities, not just targets.",
  },
  "service.04.t": { es: "Multilenguaje", en: "Multilingual" },
  "service.04.d": {
    es: "Diseñamos contenidos para escalar globalmente desde el origen. Una misma IP puede hablar distintos idiomas, adaptarse a distintos mercados y crecer en múltiples territorios.",
    en: "We design content to scale globally from day one. A single IP can speak different languages, adapt to different markets and grow across territories.",
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
