import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Lightbulb, Hammer, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        icon: Search,
        title: "1. Analyse",
        description:
            "We duiken in jouw bedrijf. Waar verlies je tijd? Waar laat je leads liggen? We brengen de knelpunten in kaart.",
    },
    {
        icon: Lightbulb,
        title: "2. Strategie",
        description:
            "Geen one-size-fits-all. Ik ontwikkel een plan op maat dat naadloos aansluit op jouw doelen en bestaande systemen.",
    },
    {
        icon: Hammer,
        title: "3. Implementatie",
        description:
            "Ik bouw de website, zet de automatiseringen op en koppel alles aan elkaar. Jij hoeft nergens naar om te kijken.",
    },
    {
        icon: TrendingUp,
        title: "4. Groei",
        description:
            "Na lancering stopt het niet. We monitoren de resultaten en optimaliseren waar nodig voor maximale ROI.",
    },
];

const Process = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const stepEls = sectionRef.current?.querySelectorAll(".process-step");
        stepEls?.forEach((el, i) => {
            gsap.fromTo(
                el,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: i * 0.2,
                    ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" },
                }
            );
        });
    }, []);

    return (
        <section id="werkwijze" ref={sectionRef} className="section-padding bg-secondary/30 relative">
            <div className="max-w-6xl">
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase block mb-4">
                        Hoe ik werk
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                        Van probleem naar <span className="text-gradient">oplossing</span>
                    </h2>
                    <p className="text-muted-foreground font-body leading-relaxed">
                        Geen vage beloftes, maar een helder stappenplan. Zo zorgen we ervoor dat techniek voor jou werkt, in plaats van andersom.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-[2px] bg-border -z-10" />

                    {steps.map((step, i) => (
                        <div key={step.title} className="process-step relative bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-border md:bg-transparent md:border-none md:p-0">
                            <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 mx-auto relative z-10 shadow-lg group hover:border-primary/50 transition-colors duration-300">
                                <step.icon className="w-8 h-8 text-primary" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
