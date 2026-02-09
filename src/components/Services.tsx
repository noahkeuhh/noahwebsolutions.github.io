import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Palette, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites en webapplicaties gebouwd met moderne technologieën. Snel, responsive en SEO-geoptimaliseerd.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Strakke, gebruiksvriendelijke interfaces die jouw merk versterken. Van wireframe tot pixel-perfect design.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    icon: Rocket,
    title: "Full-Stack Solutions",
    description:
      "Complete oplossingen van frontend tot backend. Databases, APIs, authenticatie — alles uit één hand.",
    tags: ["APIs", "Databases", "C#", "Python"],
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".service-card");
    cards?.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        }
      );
    });
  }, []);

  return (
    <section id="diensten" ref={sectionRef} className="section-padding">
      <div className="max-w-6xl">
        <div className="line-accent mb-6" />
        <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase block mb-4">
          03 — Diensten
        </span>
        <h2 className="font-display font-bold text-4xl md:text-6xl mb-14 leading-[1.05]">
          Wat ik <span className="text-gradient">doe</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="service-card group relative p-8 md:p-10 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 cursor-default"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                borderColor: hoveredIndex === i ? "hsl(38 92% 55% / 0.3)" : undefined,
                boxShadow: hoveredIndex === i ? "0 0 60px hsl(38 92% 55% / 0.08)" : undefined,
              }}
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 0%, hsl(38 92% 55% / 0.06) 0%, transparent 60%)",
                }}
              />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors duration-500">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-[1.8] mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-dim tracking-wider uppercase px-3 py-1.5 rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
