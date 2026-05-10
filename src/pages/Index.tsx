import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import About from "@/components/landing/About";
import Verticals from "@/components/landing/Verticals";
import Stats from "@/components/landing/Stats";
import Services from "@/components/landing/Services";
import MicroDramas from "@/components/landing/MicroDramas";
import Muses from "@/components/landing/Muses";
import Differential from "@/components/landing/Differential";
import Clients from "@/components/landing/Clients";
import Team from "@/components/landing/Team";
import CTA from "@/components/landing/CTA";
import SiteHeader from "@/components/landing/SiteHeader";
import Preloader from "@/components/landing/Preloader";
import SiteFooter from "@/components/landing/SiteFooter";
import { LanguageProvider } from "@/i18n/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <Preloader />
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <SiteHeader />
        <Hero />
        <Marquee />
        <About />
        <Verticals />
        <Muses />
        <Stats />
        <MicroDramas />
        <Services />
        <Differential />
        <Clients />
        <Team />
        <CTA />
        <SiteFooter />
      </main>
    </LanguageProvider>
  );
};

export default Index;
