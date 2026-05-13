import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import CannesBadge from "@/components/landing/CannesBadge";
import About from "@/components/landing/About";
import Verticals from "@/components/landing/Verticals";
import Stats from "@/components/landing/Stats";
import MicroDramas from "@/components/landing/MicroDramas";
import Muses from "@/components/landing/Muses";
import Differential from "@/components/landing/Differential";
import Team from "@/components/landing/Team";
import CTA from "@/components/landing/CTA";
import SiteHeader from "@/components/landing/SiteHeader";
import Preloader from "@/components/landing/Preloader";
import SiteFooter from "@/components/landing/SiteFooter";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <LanguageProvider>
      <Helmet>
        <title>Gennial Studio — The Next Big Shift</title>
        <meta name="description" content="Gennial Studio: IA STUDIO+LAB. Vertical microdramas y contenido viral a la velocidad de la cultura." />
        <link rel="canonical" href="https://gennial.ai/" />
        <meta property="og:url" content="https://gennial.ai/" />
      </Helmet>
      <Preloader />
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <SiteHeader />
        <Hero />
        <Marquee />
        <CannesBadge />
        <Verticals />
        <About />
        <Muses />
        <Stats />
        <MicroDramas />
        <Differential />
        <Team />
        <CTA />
        <SiteFooter />
      </main>
    </LanguageProvider>
  );
};

export default Index;
