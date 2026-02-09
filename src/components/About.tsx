import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
    if (!els) return;

    els.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        }
      );
    });
  }, []);

  return (
    <section id="over" ref={sectionRef} className="section-padding">
      <div className="max-w-4xl">
        <div className="reveal line-accent mb-4" />
        <h2 className="reveal font-display font-bold text-3xl md:text-5xl mb-8">
          Over <span className="text-gradient">mij</span>
        </h2>
        <div className="reveal grid md:grid-cols-2 gap-10 text-muted-foreground font-body leading-relaxed">
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
    </section>
  );
};

export default About;
