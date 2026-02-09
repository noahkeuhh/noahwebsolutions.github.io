import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "4+", label: "Jaar ervaring" },
  { value: "50+", label: "Projecten" },
  { value: "19", label: "Jaar oud" },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
    if (!els) return;

    els.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        }
      );
    });

    // Stat counters
    const statEls = sectionRef.current?.querySelectorAll(".stat-card");
    statEls?.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: i * 0.12,
          ease: "back.out(1.5)",
          scrollTrigger: { trigger: el, start: "top 88%" },
        }
      );
    });
  }, []);

  return (
    <section id="over" ref={sectionRef} className="section-padding">
      <div className="max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
          <div>
            <div className="reveal line-accent mb-6" />
            <span className="reveal font-mono text-xs text-primary tracking-[0.3em] uppercase block mb-4">
              01 — Over mij
            </span>
            <h2 className="reveal font-display font-bold text-4xl md:text-6xl mb-10 leading-[1.05]">
              Code meets<br /><span className="text-gradient">creativiteit</span>
            </h2>
            <div className="reveal space-y-6 text-muted-foreground font-body text-[15px] leading-[1.8] max-w-xl">
              <p>
                Hey, ik ben Noah — een 19-jarige freelance web developer en designer.
                Al vanaf mijn 15e ben ik bezig met het bouwen van websites en applicaties.
                Wat begon als een hobby is uitgegroeid tot mijn passie en werk.
              </p>
              <p>
                Ik combineer technische kennis met een scherp oog voor design. Of het nu
                gaat om een snelle landingspagina of een complexe webapp — ik lever
                kwaliteit met aandacht voor detail en gebruikerservaring.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex lg:flex-col gap-4 lg:gap-5 flex-wrap">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="stat-card flex-1 lg:w-48 p-6 rounded-2xl bg-card border border-border text-center"
              >
                <span
                  ref={(el) => { numberRefs.current[i] = el; }}
                  className="font-display text-4xl md:text-5xl font-bold text-gradient block mb-1"
                >
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
