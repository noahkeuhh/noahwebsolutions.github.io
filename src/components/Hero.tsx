import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(orbRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 2, ease: "power2.out" })
      .fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1 }, 0.3)
      .fromTo(tagRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.6)
      .fromTo(
        headingRef.current?.querySelectorAll(".word") || [],
        { y: 120, opacity: 0, rotateX: 40 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.08 },
        0.7
      )
      .fromTo(subRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 1.4)
      .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.8);

    // Floating orb animation
    gsap.to(orbRef.current, {
      y: -20,
      x: 10,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Scroll indicator bounce
    gsap.to(scrollRef.current?.querySelector(".scroll-dot"), {
      y: 8,
      duration: 1.2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center section-padding pt-32 overflow-hidden"
    >
      {/* Ambient orb */}
      <div
        ref={orbRef}
        className="absolute top-1/4 right-[10%] w-[400px] h-[400px] rounded-full opacity-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(38 92% 55% / 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-6xl">
        <div ref={lineRef} className="w-16 h-[2px] bg-primary mb-8 origin-left" />
        <div ref={tagRef} className="flex items-center gap-3 mb-8">
          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase">
            Beschikbaar voor projecten
          </span>
        </div>
        <h1
          ref={headingRef}
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.92] tracking-[-0.02em] mb-10"
          style={{ perspective: "1000px" }}
        >
          <span className="word inline-block">Ik</span>{" "}
          <span className="word inline-block">bouw</span>{" "}
          <span className="word inline-block text-gradient">digitale</span>
          <br />
          <span className="word inline-block">ervaringen</span>{" "}
          <span className="word inline-block text-gradient">die</span>
          <br />
          <span className="word inline-block">opvallen</span>
          <span className="word inline-block text-primary">.</span>
        </h1>
        <p
          ref={subRef}
          className="font-body text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed"
        >
          19-jarige developer met een passie voor clean code en strak design.
          Van concept tot lancering — ik regel het.
        </p>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
        <span className="font-mono text-[10px] text-muted-foreground tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <div className="scroll-dot absolute top-0 left-0 w-full h-3 bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
