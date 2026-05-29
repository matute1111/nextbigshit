import { useLang } from "@/i18n/LanguageContext";
import cannesPhoto from "@/assets/cannes-festival.jpg";

const CannesBadge = () => {
  const { t } = useLang();
  return (
    <section
      aria-label="Cannes Marché du Film"
      className="relative bg-background px-6 md:px-10 py-10 md:py-14 border-b border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative border border-primary/40 p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          <img
            src={cannesPhoto}
            alt="Festival de Cannes"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover max-h-[320px]"
          />
          <div>
            <span className="font-display uppercase text-xs tracking-[0.3em] text-primary block mb-2">
              ★ {t("clients.cannes.kicker")}
            </span>
            <p className="font-display uppercase text-2xl md:text-3xl tracking-tight leading-none text-foreground mb-4">
              {t("clients.cannes.tag")}
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t("clients.cannes.desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CannesBadge;
