import { useEffect, useState } from "react";
import heroHand from "@/assets/hero-hand.png";
import longArm from "@/assets/long-arm-replacement.png";

const CRITICAL_IMAGES = [heroHand, longArm];

const preload = (src: string) =>
  new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timeout = setTimeout(() => !cancelled && setLoaded(true), 6000);

    Promise.all(CRITICAL_IMAGES.map(preload)).then(() => {
      if (!cancelled) setLoaded(true);
    });

    document.body.style.overflow = "hidden";
    return () => {
      cancelled = true;
      clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    document.body.style.overflow = "";
    const t = setTimeout(() => setHidden(true), 500);
    return () => clearTimeout(t);
  }, [loaded]);

  if (hidden) return null;

  return (
    <div
      aria-hidden={loaded}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${
        loaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="font-display uppercase text-3xl md:text-5xl tracking-tight text-foreground">
          THE NEXT <span className="text-primary">BIG SH#!T</span>
        </div>
        <div className="h-[2px] w-40 overflow-hidden bg-border">
          <div className="h-full w-1/3 bg-primary animate-[preloader-slide_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
      <style>{`
        @keyframes preloader-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
