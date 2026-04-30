interface SeedanceStampProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const SIZES = {
  sm: "w-24 h-24 text-[8px]",
  md: "w-36 h-36 text-[10px]",
  lg: "w-52 h-52 text-xs",
};

const SeedanceStamp = ({ className = "", size = "md" }: SeedanceStampProps) => {
  const text = "SEEDANCE 2.0 INSIDE • SEEDANCE 2.0 INSIDE • ";
  return (
    <div className={`relative ${SIZES[size]} ${className}`}>
      <div className="absolute inset-0 rounded-full border-2 border-primary animate-[spin_18s_linear_infinite]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="seedance-circle"
              d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
            />
          </defs>
          <text className="fill-primary font-black uppercase tracking-[0.25em]" style={{ fontSize: "18px" }}>
            <textPath href="#seedance-circle">{text + text}</textPath>
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-primary">
        <span className="font-display text-3xl leading-none">✦</span>
        <span className="font-black uppercase tracking-widest mt-1 text-[10px]">v2.0</span>
        <span className="font-black uppercase tracking-widest text-[8px] opacity-70">inside</span>
      </div>
    </div>
  );
};

export default SeedanceStamp;
