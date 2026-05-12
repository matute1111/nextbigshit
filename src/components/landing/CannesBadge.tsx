import { useLang } from "@/i18n/LanguageContext";
import logoCannes from "@/assets/clients/festival-cannes.png";

const CannesBadge = () => {
  const { t } = useLang();
  return (
    <section
      aria-label="Cannes Marché du Film"
      className="relative bg-background px-6 md:px-10 py-10 md:py-14 border-b border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden border border-primary/40 p-6 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <img
            src={logoCannes}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 h-[180%] w-auto opacity-30 object-contain"
          />
          <div className="relative flex-shrink-0">
            <span className="font-display uppercase text-xs tracking-[0.3em] text-primary block mb-2">
              ★ {t("clients.cannes.kicker")}
            </span>
            <p className="font-display uppercase text-2xl md:text-3xl tracking-tight leading-none text-foreground">
              {t("clients.cannes.tag")}
            </p>
          </div>
          <p className="relative text-base md:text-lg text-muted-foreground leading-relaxed md:border-l md:border-border md:pl-10">
            {t("clients.cannes.desc")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CannesBadge;
