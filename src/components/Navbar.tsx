import { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between section-padding !py-5 backdrop-blur-md bg-background/70 border-b border-border/50"
    >
      <span className="font-display font-bold text-xl tracking-tight">
        noah<span className="text-primary">.</span>
      </span>
      <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
        {["over", "skills", "diensten", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className="hover:text-primary transition-colors duration-300 capitalize"
          >
            {item === "over" ? "Over mij" : item}
          </button>
        ))}
      </div>
      <button
        onClick={() => scrollTo("contact")}
        className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Let's talk
      </button>
    </nav>
  );
};

export default Navbar;
