import { useEffect, useRef } from "react";
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
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Strakke, gebruiksvriendelijke interfaces die jouw merk versterken. Van wireframe tot pixel-perfect design.",
  },
  {
    icon: Rocket,
    title: "Full-Stack Solutions",
    description:
      "Complete oplossingen van frontend tot backend. Databases, APIs, authenticatie — alles uit één hand.",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".service-card");
    cards?.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        }
      );
    });
  }, []);

  return (
    <section id="diensten" ref={sectionRef} className="section-padding">
      <div className="max-w-5xl">
        <div className="line-accent mb-4" />
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-12">
          Wat ik <span className="text-gradient">doe</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:border-glow"
            >
              <service.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display font-semibold text-xl mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
