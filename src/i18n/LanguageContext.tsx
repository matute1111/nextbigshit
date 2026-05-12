import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, { es: string; en: string }>;

const DICT: Dict = {
  "meta.cities": {
    es: "Gennial · AI-Native Content Studio",
    en: "Gennial · AI-Native Content Studio",
  },
  "meta.tag": {
    es: "Studio + Lab · IP Factory · Vertical AI",
    en: "Studio + Lab · IP Factory · Vertical AI",
  },
  "hero.line1": { es: "THE NEXT", en: "THE NEXT" },
  "hero.big": { es: "BIG", en: "BIG" },
  "hero.shit": { es: "SHIFT", en: "SHIFT" },
  "hero.tag": {
    es: "STUDIO+LAB. Un loop permanente que acumula inteligencia con cada frame.",
    en: "STUDIO+LAB. A permanent loop that gets smarter with every frame.",
  },
  "hero.scroll": { es: "scroll", en: "scroll" },
  "hero.manifesto": { es: "Manifiesto / Studio Reel ↗", en: "Manifesto / Studio Reel ↗" },
  "nav.about": { es: "Manifiesto", en: "Manifesto" },
  "nav.verticals": { es: "Verticales", en: "Verticals" },
  "nav.services": { es: "Servicios", en: "Services" },
  "nav.muses": { es: "Muses", en: "Muses" },
  "nav.cases": { es: "Casos", en: "Cases" },
  "nav.team": { es: "Equipo", en: "Team" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  "nav.live": { es: "Live", en: "Live" },

  "about.kicker": { es: "02 / Manifiesto", en: "02 / Manifesto" },
  "about.title.1": { es: "Por qué", en: "Why we" },
  "about.title.2": { es: "lo", en: "do" },
  "about.title.3": { es: "hacemos.", en: "it." },
  "about.p1": {
    es: "La industria audiovisual aprendió a obedecer al algoritmo. Nosotros preferimos hackearlo.",
    en: "The audiovisual industry learned to obey the algorithm. We prefer to hack it.",
  },
  "about.p2": {
    es: "Amamos el cine, el arte y las historias que revelan algo profundo sobre lo humano. También creemos que la IA puede abrir una nueva etapa creativa: más veloz, más experimental, más impredecible.",
    en: "We love cinema, art and stories that reveal something deep about the human. We also believe AI can open a new creative stage: faster, more experimental, more unpredictable.",
  },
  "about.p3.q": {
    es: "No usamos IA para reemplazar la mirada artística.",
    en: "We don't use AI to replace the artistic gaze.",
  },
  "about.p3.a": {
    es: "La usamos para multiplicarla.",
    en: "We use it to multiply it.",
  },
  "about.shift": {
    es: "Esto no es una tendencia. Es ",
    en: "This isn't a trend. It's ",
  },
  "about.shift.b": { es: "the next big shift.", en: "the next big shift." },

  // ===== VERTICALS (NEW) =====
  "vert.kicker": { es: "01 / Qué es Gennial", en: "01 / What is Gennial" },
  "vert.title.1": { es: "Dos verticales", en: "Two verticals" },
  "vert.title.2": { es: "en loop permanente.", en: "in permanent loop." },
  "vert.intro": {
    es: "Estudio audiovisual AI-nativo y laboratorio. Un loop permanente que se vuelve más inteligente con cada frame.",
    en: "AI-native audiovisual studio and lab. A permanent loop that gets smarter with every frame.",
  },
  "about.quote": {
    es: "Somos la __generación generativa__. No usamos la IA para reemplazar la mirada artística. La usamos para __multiplicarla__.",
    en: "We are the __generative generation__. We don't use AI to replace the artistic gaze. We use it to __multiply it__.",
  },
  "muses.agents.label": {
    es: "Agentes de IA\nen producción",
    en: "AI agents\nin production",
  },
  "stats.intro.short": {
    es: "Publicamos, medimos, aprendemos y volvemos a crear.",
    en: "We publish, measure, learn and create again.",
  },
  "vert.studio.tag": { es: "Vertical creativa", en: "Creative vertical" },
  "vert.studio.name": { es: "Gennial.Studio", en: "Gennial.Studio" },
  "vert.studio.shift": { es: "the next big HIT", en: "the next big HIT" },
  "vert.studio.desc": {
    es: "Producimos contenido audiovisual para marcas, creadores y plataformas. Personajes, universos narrativos y ecosistemas de contenido construidos para ser virales. No somos una agencia: somos una IP factory.",
    en: "We produce audiovisual content for brands, creators and platforms. Characters, narrative universes and content ecosystems built to go viral. We're not an agency — we're an IP factory.",
  },
  "vert.lab.tag": { es: "Vertical tecnológica", en: "Tech vertical" },
  "vert.lab.name": { es: "Gennial.Lab", en: "Gennial.Lab" },
  "vert.lab.shift": { es: "the next big LEAP", en: "the next big LEAP" },
  "vert.lab.desc": {
    es: "Desarrollamos las herramientas de IA generativa que hacen posible todo lo que Studio produce en volumen y escala — y las ponemos a disposición de la industria. El sistema acumula inteligencia con cada frame.",
    en: "We develop the generative AI tools that power everything Studio produces at volume and scale — and we make them available to the industry. The system gets smarter with every frame.",
  },
  "vert.loop": { es: "Studio ↔ Lab · loop permanente", en: "Studio ↔ Lab · permanent loop" },

  // ===== STATS / CASE STUDIES =====
  "stats.kicker": { es: "04 / Casos de éxito · Tracción real", en: "04 / Proof in action · Real traction" },
  "stats.title.1": { es: "Contenido viral", en: "Viral content" },
  "stats.title.2": { es: "a la velocidad de la cultura.", en: "at the speed of culture." },
  "stats.intro": {
    es: "No testeamos en una sala cerrada. Publicamos, medimos, aprendemos y volvemos a crear. Cada video es una hipótesis. Cada audiencia, una respuesta.",
    en: "We don't test in a closed room. We publish, measure, learn and create again. Every video is a hypothesis. Every audience, an answer.",
  },
  "case.guapo.tag": { es: "Brand IP · Guapaletas", en: "Brand IP · Guapaletas" },
  "case.guapo.name": { es: "Guapo Capibara", en: "Guapo Capibara" },
  "case.guapo.desc": {
    es: "Carpincho embajador de marca. Un personaje con identidad propia que vive en redes como un creador de contenido.",
    en: "Capybara brand ambassador. A character with its own identity, living on social like a creator.",
  },
  "case.hi.tag": { es: "IP propia · Flagship channel", en: "Owned IP · Flagship channel" },
  "case.hi.name": { es: "Historias Infinitas", en: "Historias Infinitas" },
  "case.hi.desc": {
    es: "Nuestra fábrica de personajes. Canal flagship de contenido infantil y familiar. Probamos personajes, temas y formatos en tiempo real.",
    en: "Our character factory. Flagship kids and family channel. We test characters, themes and formats in real time.",
  },
  "stats.shift": { es: "Esto no es un experimento. Es ", en: "This isn't an experiment. It's " },
  "stats.shift.b": { es: "the next big leap.", en: "the next big leap." },
  "frontier.shift": { es: "Esto no es formato. Es ", en: "This isn't a format. It's " },
  "frontier.shift.b": { es: "the next frontier.", en: "the next frontier." },
  "disruption.shift": { es: "Esto no es futuro. Es ", en: "This isn't the future. It's " },
  "disruption.shift.b": { es: "the next big disruption.", en: "the next big disruption." },

  "yt.kicker": { es: "Nuestro laboratorio vivo", en: "Our living lab" },
  "yt.cta": { es: "Ver el canal ↗", en: "Watch the channel ↗" },
  "ig.cta": { es: "Ver en Instagram ↗", en: "See on Instagram ↗" },

  "micro.kicker": { es: "05 / IA Vertical · Microdramas", en: "05 / Vertical AI · Microdramas" },
  "micro.title.1": { es: "Microdramas", en: "Microdramas" },
  "micro.title.2": { es: "diseñados para el scroll.", en: "designed for the scroll." },
  "micro.intro": {
    es: "Series verticales pensadas para capturar atención desde el primer segundo. Alto impacto emocional, estructura serial, cliffhangers constantes. La IA acelera cada etapa sin perder intención narrativa: concepto, personajes, episodios, voces, edición y adaptación multilenguaje.",
    en: "Vertical series built to capture attention from second one. High emotional impact, serial structure, constant cliffhangers. AI accelerates every stage without losing narrative intent.",
  },
  "micro.step1.t": { es: "Estructura narrativa", en: "Narrative structure" },
  "micro.step1.d": {
    es: "Construimos arcos, personajes y universos completos. Cada historia nace con un conflicto claro, una promesa emocional y una progresión diseñada para sostener la atención.",
    en: "We build full arcs, characters and universes. Every story is born with a clear conflict, an emotional promise and a progression designed to sustain attention.",
  },
  "micro.step2.t": { es: "Microepisodios", en: "Microepisodes" },
  "micro.step2.d": {
    es: "Fragmentamos cada historia en cápsulas verticales con ritmo, gancho y resolución parcial. Cada episodio tiene una función: abrir deseo, revelar tensión y empujar al siguiente.",
    en: "We split each story into vertical capsules with rhythm, hook and partial payoff.",
  },
  "micro.step3.t": { es: "Producción calidad cine", en: "Cinema-grade production" },
  "micro.step3.d": {
    es: "Modelos de última generación para imagen, voz, sonido y edición con estándares premium. Contenido serial en minutos. No en meses.",
    en: "State-of-the-art models for image, voice, sound and editing. Serial content in minutes, not months.",
  },
  "micro.intertitle.1": { es: "Esto no es humo. Es", en: "This isn't hype. It's" },
  "micro.intertitle.2": { es: "the next big sh#!t.", en: "the next big sh#!t." },
  "micro.cta": { es: "Mirá una serie", en: "Watch a series" },

  // ===== SERVICES (reframed by audience) =====
  "services.kicker": { es: "06 / Posicionamiento · Para quién", en: "06 / Positioning · Who for" },
  "services.title.1": { es: "Lo decimos distinto", en: "We say it differently" },
  "services.title.2": { es: "según quién escuche.", en: "depending on who's listening." },
  "services.intro": {
    es: "Trabajamos con marcas, creadores, plataformas e inversores. Una sola fábrica narrativa. Cuatro formas de capturar valor.",
    en: "We work with brands, creators, platforms and investors. One narrative factory. Four ways to capture value.",
  },

  "service.01.t": { es: "Para Marcas", en: "For Brands" },
  "service.01.d": {
    es: "Personajes y universos con identidad narrativa propia. Del brief al primer episodio en días. Velocidad para subirse a cualquier tendencia y construir audiencia propia desde el contenido.",
    en: "Characters and universes with their own narrative identity. From brief to first episode in days. Speed to ride any trend and build owned audiences through content.",
  },
  "service.02.t": { es: "Para Creadores", en: "For Creators" },
  "service.02.d": {
    es: "Amplificamos la visión creativa con tecnología. Más volumen, más velocidad, sin perder la voz. Una infraestructura para producir más rápido, probar más ideas y aprender con audiencias reales.",
    en: "We amplify creative vision with technology. More volume, more speed, same voice. Infrastructure to produce faster, test more ideas and learn with real audiences.",
  },
  "service.03.t": { es: "Para Plataformas", en: "For Platforms" },
  "service.03.d": {
    es: "Contenido narrativo seriado que vive dentro del ecosistema del cliente y construye audiencia propia. Canales, personajes y narrativas que conectan con comunidades reales, no sólo con targets.",
    en: "Serialized narrative content that lives within the client's ecosystem and builds its own audience. Channels, characters and narratives connecting with real communities.",
  },
  "service.04.t": { es: "Para Inversores", en: "For Investors" },
  "service.04.d": {
    es: "Clientes activos, audiencias reales y validación de la industria global. Un modelo escalable con riesgo controlado: tecnología propietaria, IPs propias y demanda B2B activa.",
    en: "Active clients, real audiences and global industry validation. A scalable model with controlled risk: proprietary tech, owned IPs and active B2B demand.",
  },

  // ===== MUSES (expanded) =====
  "muses.kicker": { es: "03 / COMO LO HACEMOS - GENNIAL.LAB", en: "03 / HOW WE DO IT - GENNIAL.LAB" },
  "muses.title.2": { es: "MUSES", en: "MUSES" },
  "muses.title.3": { es: "AUTOMATIZA", en: "AUTOMATES" },
  "muses.title.4": { es: "", en: "" },
  "muses.p1": {
    es: "MUSES es el sistema propietario de producción audiovisual de Gennial.Lab. +60 agentes de IA que automatizan el ciclo completo de creación de contenido narrativo.",
    en: "MUSES is Gennial.Lab's proprietary audiovisual production system. 60+ AI agents that automate the full cycle of narrative content creation.",
  },
  "muses.p2": {
    es: "Diferentes módulos que responden a necesidades del negocio y oportunidades comerciales. De una idea: personajes, arcos, episodios, imágenes, voces, videos y versiones multilenguaje.",
    en: "Different modules that respond to business needs and commercial opportunities. From a single idea: characters, arcs, episodes, images, voices, videos and multilingual versions.",
  },
  "muses.seedance.title": { es: "Powered by Seedance 2.0 · ByteDance", en: "Powered by Seedance 2.0 · ByteDance" },
  "muses.seedance.desc": {
    es: "El modelo dominante a nivel global para producción de video narrativo. Gennial es el primer estudio en Latinoamérica con acceso directo.",
    en: "The dominant model globally for narrative video production. Gennial is the first studio in Latin America with direct access.",
  },
  "muses.modules.title": { es: "Los módulos", en: "The modules" },
  "muses.mod.1.name": { es: "Muses Studio", en: "Muses Studio" },
  "muses.mod.1.status": { es: "LIVE", en: "LIVE" },
  "muses.mod.1.desc": {
    es: "El motor de producción. Concepto, guión, publicación y medición. El análisis mejora el siguiente output.",
    en: "The production engine. Concept, script, publishing and measurement. Analysis feeds the next output.",
  },
  "muses.mod.2.name": { es: "Muses Micro", en: "Muses Micro" },
  "muses.mod.2.status": { es: "LIVE", en: "LIVE" },
  "muses.mod.2.desc": {
    es: "Un prompt. Una serie completa. Genera biblia de producción con personajes, locaciones y storylines episódicos.",
    en: "One prompt. A full series. Generates a production bible with characters, locations and episodic storylines.",
  },
  "muses.mod.3.name": { es: "Muses React", en: "Muses React" },
  "muses.mod.3.status": { es: "BETA", en: "BETA" },
  "muses.mod.3.desc": {
    es: "Personajes sintéticos para livestreams. Reaccionan en vivo a eventos y comentan con autonomía narrativa.",
    en: "Synthetic characters for livestreams. React live to events and comment with narrative autonomy.",
  },
  "muses.mod.4.name": { es: "Muses Focus", en: "Muses Focus" },
  "muses.mod.4.status": { es: "CONCEPTO", en: "CONCEPT" },
  "muses.mod.4.desc": {
    es: "Focus group sintético. Simula cómo responde tu audiencia antes de publicar.",
    en: "Synthetic focus group. Simulates how your audience will respond before publishing.",
  },
  "muses.mod.5.name": { es: "Muses Scan", en: "Muses Scan" },
  "muses.mod.5.status": { es: "CONCEPTO", en: "CONCEPT" },
  "muses.mod.5.desc": {
    es: "Inteligencia visual frame a frame. Puntúa la intensidad emocional de cada momento del video.",
    en: "Frame-by-frame visual intelligence. Scores the emotional intensity of every moment of the video.",
  },

  // ===== DIFFERENTIAL (NEW) =====
  "diff.kicker": { es: "07 / El diferencial", en: "07 / The edge" },
  "diff.title.1": { es: "Lo que nos separa", en: "What separates us" },
  "diff.title.2": { es: "del mercado.", en: "from the market." },
  "diff.1.t": { es: "Continuidad narrativa sin iteración manual", en: "Narrative continuity without manual iteration" },
  "diff.1.d": {
    es: "Series con coherencia narrativa a través de episodios sin intervención manual. Un proceso original que no existe en el mercado.",
    en: "Series with narrative coherence across episodes without manual intervention. An original process that doesn't exist in the market.",
  },
  "diff.2.t": { es: "El loop Studio ↔ Lab", en: "The Studio ↔ Lab loop" },
  "diff.2.d": {
    es: "Cada producción alimenta el desarrollo del Lab. Cada herramienta del Lab mejora la próxima producción. El sistema acumula inteligencia con cada frame.",
    en: "Every production feeds the Lab. Every Lab tool improves the next production. The system gets smarter with every frame.",
  },
  "diff.3.t": { es: "Muses sobre Seedance 2.0", en: "Muses on Seedance 2.0" },
  "diff.3.d": {
    es: "Muses corre sobre el modelo dominante a nivel global para producción de video narrativo. Primer estudio en Latinoamérica con acceso directo.",
    en: "Muses runs on the dominant global model for narrative video. First studio in Latin America with direct access.",
  },
  "diff.4.t": { es: "Human in the loop", en: "Human in the loop" },
  "diff.4.d": {
    es: "Cada personaje y episodio pasa por un equipo creativo que supervisa, cura y decide. La IA produce a escala. Los humanos garantizan que valga la pena ver.",
    en: "Every character and episode goes through a creative team that supervises, curates and decides. AI produces at scale. Humans make sure it's worth watching.",
  },

  // ===== CLIENTS (NEW) =====
  "clients.kicker": { es: "08 / Clientes & validación", en: "08 / Clients & validation" },
  "clients.title": { es: "Marcas y partners activos.", en: "Active brands & partners." },
  "clients.cannes.kicker": { es: "GENNIAL ON TOUR", en: "GENNIAL ON TOUR" },
  "clients.cannes.tag": { es: "Cannes Marché du Film 2026", en: "Cannes Marché du Film 2026" },
  "clients.cannes.desc": {
    es: "Gennial estará presente en el festival de cine más importante del mundo, con una keynote de nuestro CEO Adrián Garelik y una demo de MUSES.MICRO, la factoria de microseries verticales automatizada.",
    en: "Gennial will be present at the world's most important film festival, with a keynote by our CEO Adrián Garelik and a demo of MUSES.MICRO, the automated vertical microseries factory.",
  },

  // ===== TEAM (NEW) =====
  "team.kicker": { es: "09 / El equipo", en: "09 / The team" },
  "team.title.1": { es: "Los humanos", en: "The humans" },
  "team.title.2": { es: "del loop.", en: "in the loop." },
  "team.1.name": { es: "Adrian Garelik", en: "Adrian Garelik" },
  "team.1.role": { es: "CEO & Co-fundador", en: "CEO & Co-founder" },
  "team.1.bio": {
    es: "Emprendedor serial en tecnología y entretenimiento, acreditado en producciones de Netflix, HBO y Disney. Founder de Flixxo.",
    en: "Serial entrepreneur in tech and entertainment, credited on Netflix, HBO and Disney productions. Founder of Flixxo.",
  },
  "team.2.name": { es: "Mati Albaca", en: "Mati Albaca" },
  "team.2.role": { es: "Co-fundador & CTO", en: "Co-founder & CTO" },
  "team.2.bio": {
    es: "Arquitecto del stack generativo de Gennial. Lidera el desarrollo de Muses y la infraestructura de producción audiovisual con +20 agentes de IA.",
    en: "Architect of Gennial's generative stack. Leads the development of Muses and the audiovisual production infrastructure with 20+ AI agents.",
  },
  "team.3.name": { es: "Pedro Levati", en: "Pedro Levati" },
  "team.3.role": { es: "Director Creativo", en: "Creative Director" },
  "team.3.bio": {
    es: "Guionista y director audiovisual. Profesor de guión en Universidad del Cine y ETER. Jurado en el INCAA. Créditos en Amazon Prime y Flixxo/Luzu TV.",
    en: "Screenwriter and audiovisual director. Screenplay professor at Universidad del Cine and ETER. INCAA jury. Credits at Amazon Prime and Flixxo/Luzu TV.",
  },
  "team.4.name": { es: "Ana Alderete", en: "Ana Alderete" },
  "team.4.role": { es: "CMO", en: "CMO" },
  "team.4.bio": {
    es: "Lidera la estrategia de marca, posicionamiento y go-to-market de Gennial. Conecta producto, narrativa y audiencia para que cada IP encuentre su mercado.",
    en: "Leads Gennial's brand strategy, positioning and go-to-market. Connects product, narrative and audience so every IP finds its market.",
  },

  // ===== CTA =====
  "cta.kicker": { es: "10 / Revolución generativa", en: "10 / Generative revolution" },
  "cta.title.1": { es: "Build together", en: "Build together" },
  "cta.title.2": { es: "the next big SH!FT", en: "the next big SH!FT" },
  "cta.desc": {
    es: "Tenés una marca, una IP, una idea o un universo posible. Lo convertimos en una prueba viva: un piloto, una serie, un canal o una máquina narrativa lista para salir al mundo. Creamos rápido. Publicamos rápido. Aprendemos rápido. Pero no confundimos velocidad con vacío: la tecnología acelera, la historia decide.",
    en: "You have a brand, an IP, an idea or a possible universe. We turn it into a living test: a pilot, a series, a channel or a narrative machine ready to ship. We create fast. We publish fast. We learn fast. But we don't confuse speed with emptiness: tech accelerates, story decides.",
  },
  "cta.talk": { es: "Book a demo", en: "Book a demo" },
  "cta.reel": { es: "Ver el reel ↗", en: "Watch the reel ↗" },
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
