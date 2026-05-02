interface SeedanceStampProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const SIZES = {
  sm: "w-24 h-24",
  md: "w-36 h-36",
  lg: "w-52 h-52",
};

const SeedanceStamp = ({ className = "", size = "md" }: SeedanceStampProps) => {
  const text = "SEEDANCE INSIDE • SEEDANCE INSIDE • ";
  return (
    <div className={`relative ${SIZES[size]} ${className}`}>
      <div className="absolute inset-0 animate-[spin_18s_linear_infinite]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="seedance-circle"
              d="M 100, 100 m -82, 0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
            />
          </defs>
          <text className="fill-primary font-black uppercase" style={{ fontSize: "20px", letterSpacing: "0.18em" }}>
            <textPath href="#seedance-circle">{text + text}</textPath>
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-primary leading-none">
        <span className="font-display text-4xl">✦</span>
        <span className="font-black uppercase tracking-widest mt-1.5 text-sm">v2.0</span>
      </div>
    </div>
  );
};

export default SeedanceStamp;
