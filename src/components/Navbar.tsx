import { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.8 });

    tl.fromTo(logoRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8 })
      .fromTo(
        linksRef.current?.children || [],
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5 },
        "-=0.3"
      );
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between section-padding !py-4 backdrop-blur-xl bg-background/60"
    >
      <span ref={logoRef} className="font-display font-bold text-xl tracking-tight opacity-0">
        noah<span className="text-primary">.</span>
      </span>
      <div ref={linksRef} className="hidden md:flex items-center gap-10 font-body text-[13px] text-muted-foreground tracking-wide uppercase">
        {[
          { id: "over", label: "Over mij" },
          { id: "skills", label: "Skills" },
          { id: "diensten", label: "Diensten" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="relative hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.label}
          </button>
        ))}
      </div>
      <button
        ref={ctaRef}
        onClick={() => scrollTo("contact")}
        className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-[0_0_30px_hsl(38_92%_55%/0.3)] transition-all duration-500 opacity-0"
      >
        Let's talk
      </button>
    </nav>
  );
};

export default Navbar;
