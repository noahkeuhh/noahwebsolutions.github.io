import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1, delay: 0.3 })
      .fromTo(
        tagRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        headingRef.current?.querySelectorAll(".word") || [],
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
        "-=0.6"
      )
      .fromTo(
        subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      );
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center section-padding pt-32"
    >
      <div className="max-w-5xl">
        <div ref={lineRef} className="line-accent mb-6 origin-left" />
        <div ref={tagRef} className="flex items-center gap-3 mb-6">
          <span className="text-primary font-body text-sm tracking-widest uppercase">
            Freelance Web Developer & Designer
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
        <h1
          ref={headingRef}
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8"
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
          className="font-body text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed"
        >
          19-jarige developer met een passie voor clean code en strak design.
          Van concept tot lancering — ik regel het.
        </p>
      </div>
    </section>
  );
};

export default Hero;
