interface Props {
  text: string;
  highlight: string;
}

const SectionDivider = ({ text, highlight }: Props) => {
  return (
    <div className="relative z-10 px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-7xl mx-auto text-center">
        <h3
          className="font-display uppercase tracking-[-0.02em] leading-[0.9] text-foreground whitespace-nowrap"
          style={{ fontSize: "clamp(1.4rem, 4.8vw, 5rem)" }}
        >
          {text}
          <span className="text-primary italic">{highlight}</span>
        </h3>
      </div>
    </div>
  );
};

export default SectionDivider;
