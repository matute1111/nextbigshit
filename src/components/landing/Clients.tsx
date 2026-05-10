import { useLang } from "@/i18n/LanguageContext";
import { useReveal } from "@/hooks/useParallax";

const CLIENTS = [
  "Guapaletas",
  "Magnaverum",
  "La Abuela Goye",
  "Persicco",
  "Flixxo",
  "Bennu.tv",
];

const Clients = () => {
  const { t } = useLang();
  const reveal = useReveal<HTMLDivElement>(0.2);

  return (
    <section id="clients" className="relative pt-20 md:pt-28 pb-20 md:pb-28 px-6 md:px-10 overflow-hidden bg-background-deeper border-y border-border">
      <div ref={reveal.ref} className={`max-w-7xl mx-auto reveal ${reveal.visible ? "is-visible" : ""}`}>
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">
            {t("clients.kicker")}
          </p>
          <h2 className="font-display uppercase text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight">
            {t("clients.title")}
          </h2>
        </div>

        {/* Logo strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border mb-12">
          {CLIENTS.map((name) => (
            <div
              key={name}
              className="bg-background flex items-center justify-center px-4 py-8 md:py-10 group hover:bg-primary/5 transition-colors"
            >
              <span className="font-display uppercase text-xl md:text-2xl tracking-tight text-foreground/80 group-hover:text-primary transition-colors text-center">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Cannes credential */}
        <div className="border border-primary/40 p-6 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="flex-shrink-0">
            <span className="font-display uppercase text-xs tracking-[0.3em] text-primary block mb-2">
              ★ Selección oficial
            </span>
            <p className="font-display uppercase text-2xl md:text-3xl tracking-tight leading-none text-foreground">
              {t("clients.cannes.tag")}
            </p>
          </div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed md:border-l md:border-border md:pl-10">
            {t("clients.cannes.desc")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
