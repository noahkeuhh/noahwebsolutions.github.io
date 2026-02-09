import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="section-padding !py-10 border-t border-border/50">
      <div className="max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display font-bold text-xl tracking-tight">
          noah<span className="text-primary">.</span>
        </span>
        <p className="font-mono text-[11px] text-dim tracking-wider uppercase">
          © {new Date().getFullYear()} Noah Bartels
        </p>
        <button
          onClick={scrollTop}
          className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground tracking-wider uppercase hover:text-primary transition-colors duration-300 group"
        >
          Terug naar boven
          <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
