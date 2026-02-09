import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "JavaScript / TypeScript", years: 4, level: 95 },
  { name: "HTML & CSS", years: 4, level: 98 },
  { name: "React / Next.js", years: 3, level: 85 },
  { name: "C#", years: 3, level: 80 },
  { name: "Python", years: 2, level: 70 },
  { name: "UI/UX Design", years: 4, level: 90 },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".skill-item");
    const bars = sectionRef.current?.querySelectorAll(".skill-bar-fill");

    items?.forEach((item, i) => {
      gsap.fromTo(
        item,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          delay: i * 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 90%" },
        }
      );
    });

    bars?.forEach((bar) => {
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: { trigger: bar, start: "top 92%" },
        }
      );
    });
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="max-w-4xl">
        <div className="line-accent mb-6" />
        <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase block mb-4">
          02 — Skills
        </span>
        <h2 className="font-display font-bold text-4xl md:text-6xl mb-14 leading-[1.05]">
          Tech <span className="text-gradient">stack</span>
        </h2>
        <div className="space-y-7">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item group">
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-body font-medium text-foreground text-[15px] group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </span>
                <span className="font-mono text-xs text-dim">
                  {skill.years}jr
                </span>
              </div>
              <div className="h-[3px] bg-secondary rounded-full overflow-hidden">
                <div
                  className="skill-bar-fill h-full rounded-full origin-left"
                  style={{
                    width: `${skill.level}%`,
                    background:
                      "linear-gradient(90deg, hsl(38, 92%, 55%), hsl(28, 95%, 50%))",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
