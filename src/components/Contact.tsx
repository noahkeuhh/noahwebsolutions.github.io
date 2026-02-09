import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal-contact");
    els?.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: i * 0.1,
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

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-card/50">
      <div className="max-w-2xl">
        <div className="reveal-contact line-accent mb-4" />
        <h2 className="reveal-contact font-display font-bold text-3xl md:text-5xl mb-4">
          Laten we <span className="text-gradient">praten</span>
        </h2>
        <p className="reveal-contact font-body text-muted-foreground mb-10">
          Heb je een project in gedachten? Stuur me een bericht en ik neem zo snel
          mogelijk contact met je op.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="reveal-contact">
            <label className="block font-body text-sm text-muted-foreground mb-2">
              Naam
            </label>
            <input
              type="text"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="Jouw naam"
            />
          </div>
          <div className="reveal-contact">
            <label className="block font-body text-sm text-muted-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="jouw@email.nl"
            />
          </div>
          <div className="reveal-contact">
            <label className="block font-body text-sm text-muted-foreground mb-2">
              Bericht
            </label>
            <textarea
              required
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
              placeholder="Vertel me over je project..."
            />
          </div>
          <button
            type="submit"
            className="reveal-contact flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-medium hover:opacity-90 transition-opacity"
          >
            Verstuur <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
