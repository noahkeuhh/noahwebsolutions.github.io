import { Check } from "lucide-react";

const details = [
    {
        title: "Websites die werken",
        description:
            "Een mooie website is leuk, maar een website die klanten oplevert is beter. Ik focus op snelheid, vindbaarheid (SEO) en conversie.",
        features: [
            "Razendsnelle laadtijden (Google loves it)",
            "Mobiel-vriendelijk design",
            "SEO-technisch perfect ingericht",
            "Eenvoudig zelf aanpasbaar (indien gewenst)",
        ],
    },
    {
        title: "Slimme Automatiseringen",
        description:
            "Waarom handmatig doen wat automatisch kan? Bespaar uren per week door processen te koppelen.",
        features: [
            "Automatische e-mail opvolging",
            "Facturen automatisch genereren en versturen",
            "Koppel je agenda aan je website",
            "Notificaties in WhatsApp of Slack bij nieuwe leads",
        ],
    },
    {
        title: "Business Lead Systems",
        description:
            "Een constante stroom aan nieuwe klanten, zonder dat je er elke dag mee bezig hoeft te zijn.",
        features: [
            "Geautomatiseerde lead funnels",
            "CRM integraties (Pipedrive, HubSpot, etc.)",
            "Klantretentie systemen",
            "Data-inzichten & rapportages",
        ],
    },
];

const ServiceDetails = () => {
    return (
        <section className="section-padding pt-0">
            <div className="max-w-6xl">
                <div className="grid md:grid-cols-3 gap-8">
                    {details.map((detail, i) => (
                        <div
                            key={detail.title}
                            className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:bg-card hover:border-primary/20 transition-all duration-300"
                        >
                            <h3 className="font-display font-bold text-xl mb-4 text-foreground">
                                {detail.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                {detail.description}
                            </p>
                            <ul className="space-y-3">
                                {detail.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
