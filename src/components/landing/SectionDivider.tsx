interface Props {
  text: string;
  highlight: string;
  className?: string;
}

const SectionDivider = ({ text, highlight, className = "" }: Props) => {
  return (
    <div className={`relative z-10 px-6 md:px-10 py-10 md:py-14 ${className}`}>
      <div className="max-w-7xl mx-auto text-center">
        <h3
          className="font-display uppercase tracking-[-0.02em] leading-[0.9] text-foreground md:whitespace-nowrap"
          style={{ fontSize: "clamp(1.4rem, 4.8vw, 5rem)" }}
        >
          <span className="block md:inline">{text}</span>
          <span className="block md:inline text-primary italic">{highlight}</span>
        </h3>
      </div>
    </div>
  );
};

export default SectionDivider;
