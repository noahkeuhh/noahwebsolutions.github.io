import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Is dit geschikt voor mijn bedrijf?",
        answer:
            "Absoluut. Of je nu een ZZP'er bent (zoals een coach, kapper of masseur) of een MKB-bedrijf runt: als je tijd verliest aan administratie, e-mails of handmatige lead-opvolging, dan is dit voor jou.",
    },
    {
        question: "Wat kost een automatisering of website?",
        answer:
            "Elk project is maatwerk. Een simpele 'one-pager' is voordeliger dan een compleet geautomatiseerd lead-systeem. Ik werk met projectprijzen, zodat je vooraf precies weet waar je aan toe bent. Geen verrassingen achteraf.",
    },
    {
        question: "Kan ik zelf later aanpassingen doen?",
        answer:
            "Zeker. Ik bouw websites vaak in systemen waar je zelf teksten en foto's kunt aanpassen. Voor complexe automatiseringen bied ik onderhoudspakketten aan, of ik leer je hoe je de basis zelf beheert.",
    },
    {
        question: "Hoe lang duurt een project?",
        answer:
            "Gemiddeld staat een nieuwe website of automatisering binnen 2 tot 4 weken live. Dit hangt af van de omvang van het project en hoe snel we kunnen schakelen.",
    },
];

const FAQ = () => {
    return (
        <section id="faq" className="section-padding">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase block mb-4">
                        Vragen?
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                        Veelgestelde <span className="text-gradient">vragen</span>
                    </h2>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, i) => (
                        <AccordionItem
                            key={i}
                            value={`item-${i}`}
                            className="border border-border bg-card rounded-lg px-4 data-[state=open]:border-primary/50 transition-colors"
                        >
                            <AccordionTrigger className="font-display font-medium text-lg hover:no-underline hover:text-primary transition-colors py-6 text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-6 text-[15px]">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQ;
