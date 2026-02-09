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
    const bars = sectionRef.current?.querySelectorAll(".skill-bar-fill");
    const items = sectionRef.current?.querySelectorAll(".skill-item");

    items?.forEach((item, i) => {
      gsap.fromTo(
        item,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 88%" },
        }
      );
    });

    bars?.forEach((bar) => {
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: bar, start: "top 90%" },
        }
      );
    });
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-card/50">
      <div className="max-w-4xl">
        <div className="line-accent mb-4" />
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-12">
          Mijn <span className="text-gradient">skills</span>
        </h2>
        <div className="space-y-8">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="flex items-center justify-between mb-2">
                <span className="font-body font-medium text-foreground">
                  {skill.name}
                </span>
                <span className="font-body text-sm text-muted-foreground">
                  {skill.years} jaar ervaring
                </span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
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
