import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Do I have to pay to be placed?", a: "No. Aegis Global operates a candidate-zero-fee model — employers pay our recruitment fee. You are only responsible for your own personal costs such as passport, and in some routes medicals, which we tell you about upfront in writing." },
  { q: "Which qualifications do I need as a caregiver or healthcare assistant?", a: "Most destinations require a certificate in nursing, community health or care work, plus documented hands-on experience. We also accept strong practical experience and can route you into a top-up certification before departure." },
  { q: "How long does the whole process take?", a: "Typically 8 to 16 weeks from your first interview to departure, depending on the destination's visa processing times. Gulf routes are usually fastest; UK, Ireland and Canada take longer due to sponsorship checks." },
  { q: "Do I need to speak a foreign language?", a: "For the UK, Ireland, Canada, the Gulf and cruise lines, professional English is sufficient and we assess it during screening. For Germany and Poland we support candidates through basic language training before departure." },
  { q: "Is Aegis Global a licensed agency?", a: "Yes. We operate as a Kenyan-registered recruitment agency in line with National Employment Authority requirements, and every overseas contract we place is attested and lodged before departure." },
  { q: "What support do I get after I travel?", a: "Every placed candidate is assigned a welfare officer who checks in through your first year, plus a 24/7 emergency line and direct escalation to your employer's HR if anything goes wrong." },
  { q: "Can employers request a specific number of workers?", a: "Yes. We run bulk mobilisation campaigns for cohorts of 10 to 500, including sourcing, screening, training, documentation and staggered deployment schedules." },
  { q: "What happens if a placement doesn't work out?", a: "Permanent placements carry a 90-day replacement guarantee for employers, and we support candidates in redeployment where a contract ends early through no fault of their own." },
];

const FAQSection = () => {
  return (
    <section className="section bg-gradient-soft">
      <div className="container-narrow max-w-3xl">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3">FAQs</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary text-balance">Questions we get asked every week</h2>
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
