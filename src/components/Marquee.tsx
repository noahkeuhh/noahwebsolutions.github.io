import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      trackRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: trackRef.current, start: "top 90%" },
      }
    );
  }, []);

  const items = [
    "Web Development",
    "UI/UX Design",
    "React",
    "TypeScript",
    "Next.js",
    "C#",
    "Python",
    "Frontend",
    "Backend",
    "Responsive Design",
  ];

  return (
    <div ref={trackRef} className="py-8 border-y border-border/50 overflow-hidden opacity-0">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span className="font-display text-2xl md:text-4xl font-bold text-foreground/10 whitespace-nowrap hover:text-primary/40 transition-colors duration-500 cursor-default">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-primary/30" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
