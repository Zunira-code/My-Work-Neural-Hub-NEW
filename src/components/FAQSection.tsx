import { healthcareFaqs } from "@/lib/recruitment";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = healthcareFaqs;

const FAQSection = () => {
  return (
    <section className="section bg-gradient-soft">
      <div className="container-narrow max-w-3xl">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3">FAQs</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary text-balance">Your Germany healthcare questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
