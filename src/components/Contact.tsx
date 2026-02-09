import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal-contact");
    els?.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        }
      );
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Bericht van ${form.name}`);
    const body = encodeURIComponent(
      `Naam: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:noahbartels2@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputClasses = (field: string) =>
    `w-full bg-card border rounded-xl px-5 py-4 font-body text-foreground text-[15px] placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-500 ${
      focused === field
        ? "border-primary/50 shadow-[0_0_30px_hsl(38_92%_55%/0.06)]"
        : "border-border"
    }`;

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side */}
          <div>
            <div className="reveal-contact line-accent mb-6" />
            <span className="reveal-contact font-mono text-xs text-primary tracking-[0.3em] uppercase block mb-4">
              04 — Contact
            </span>
            <h2 className="reveal-contact font-display font-bold text-4xl md:text-6xl mb-6 leading-[1.05]">
              Laten we<br /><span className="text-gradient">samenwerken</span>
            </h2>
            <p className="reveal-contact font-body text-muted-foreground text-[15px] leading-[1.8] mb-10 max-w-md">
              Heb je een project in gedachten? Stuur me een bericht en ik neem zo snel
              mogelijk contact met je op.
            </p>
            <a
              href="mailto:noahbartels2@gmail.com"
              className="reveal-contact inline-flex items-center gap-2 font-body text-foreground hover:text-primary transition-colors duration-300 group"
            >
              noahbartels2@gmail.com
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="reveal-contact">
              <label className="block font-mono text-[11px] text-dim tracking-wider uppercase mb-3">
                Naam
              </label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                className={inputClasses("name")}
                placeholder="Jouw naam"
              />
            </div>
            <div className="reveal-contact">
              <label className="block font-mono text-[11px] text-dim tracking-wider uppercase mb-3">
                Email
              </label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className={inputClasses("email")}
                placeholder="jouw@email.nl"
              />
            </div>
            <div className="reveal-contact">
              <label className="block font-mono text-[11px] text-dim tracking-wider uppercase mb-3">
                Bericht
              </label>
              <textarea
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={`${inputClasses("message")} resize-none`}
                placeholder="Vertel me over je project..."
              />
            </div>
            <button
              type="submit"
              className="reveal-contact group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-body font-medium text-[15px] hover:shadow-[0_0_40px_hsl(38_92%_55%/0.25)] transition-all duration-500"
            >
              Verstuur bericht
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
