import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import About from "@/components/landing/About";
import Stats from "@/components/landing/Stats";
import Services from "@/components/landing/Services";
import Muses from "@/components/landing/Muses";
import CTA from "@/components/landing/CTA";
import SiteHeader from "@/components/landing/SiteHeader";
import SiteFooter from "@/components/landing/SiteFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <Services />
      <Muses />
      <CTA />
      <SiteFooter />
    </main>
  );
};

export default Index;
