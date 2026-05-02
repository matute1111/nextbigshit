import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import About from "@/components/landing/About";
import Stats from "@/components/landing/Stats";
import Services from "@/components/landing/Services";
import Muses from "@/components/landing/Muses";
import CTA from "@/components/landing/CTA";
import SiteHeader from "@/components/landing/SiteHeader";
import SiteFooter from "@/components/landing/SiteFooter";
import SectionDivider from "@/components/landing/SectionDivider";
import { LanguageProvider, useLang } from "@/i18n/LanguageContext";

const FrontierDivider = () => {
  const { t } = useLang();
  return <SectionDivider text={t("frontier.shift")} highlight={t("frontier.shift.b")} className="-mt-[100px] -mb-[35px]" />;
};

const DisruptionDivider = () => {
  const { t } = useLang();
  return <SectionDivider text={t("disruption.shift")} highlight={t("disruption.shift.b")} className="mt-[20px]" />;
};

const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <SiteHeader />
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Services />
        <FrontierDivider />
        <Muses />
        <DisruptionDivider />
        <CTA />
        <SiteFooter />
      </main>
    </LanguageProvider>
  );
};

export default Index;
