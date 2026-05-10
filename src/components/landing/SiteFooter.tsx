const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-background-deeper px-6 md:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <a href="#" className="font-display uppercase text-4xl md:text-5xl tracking-tight leading-none text-foreground" aria-label="Gennial Studio">
          Gennial<span className="text-primary">.</span>
        </a>
        <div className="text-xs uppercase tracking-[0.25em] font-semibold text-muted-foreground flex flex-wrap gap-x-6 gap-y-2">
          <span>© {new Date().getFullYear()} Gennial Studio</span>
          <span>The Next Big SH#!T ™</span>
          <a href="mailto:info@gennial.ai" className="hover:text-primary transition-colors">
            info@gennial.ai
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
