import bytedanceLogo from "@/assets/bytedance.svg";

interface SeedanceStampProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const SIZES = {
  sm: "w-20 h-20",
  md: "w-32 h-32",
  lg: "w-44 h-44",
};

const SeedanceStamp = ({ className = "", size = "md" }: SeedanceStampProps) => {
  const text = "SEEDANCE INSIDE V2.0 • SEEDANCE INSIDE V2.0 • ";
  // Circumference for r=78 ≈ 490
  const circumference = 2 * Math.PI * 78;
  return (
    <div className={`relative ${SIZES[size]} ${className}`}>
      <div className="absolute inset-0 animate-[spin_18s_linear_infinite]">
        <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
          <defs>
            <path
              id="seedance-circle"
              d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
            />
          </defs>
          <text
            className="fill-primary font-black uppercase"
            style={{ fontSize: "16px", letterSpacing: "0.14em" }}
          >
            <textPath
              href="#seedance-circle"
              startOffset="0"
              textLength={circumference}
              lengthAdjust="spacingAndGlyphs"
            >
              {text}
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={bytedanceLogo}
          alt="Bytedance"
          className="w-[42%] h-[42%] object-contain"
        />
      </div>
    </div>
  );
};

export default SeedanceStamp;

