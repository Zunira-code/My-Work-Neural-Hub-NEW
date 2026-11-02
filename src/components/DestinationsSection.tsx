import { Globe2, Languages, FileCheck2, Stethoscope } from "lucide-react";
const DestinationsSection = () => (
  <section id="destinations" className="section bg-ink text-primary-foreground">
    <div className="container-narrow grid lg:grid-cols-2 gap-12">
      <div>
        <p className="text-sm font-semibold text-primary mb-3">OUR DESTINATION</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Germany. A new chapter in healthcare.</h2>
        <p className="text-primary-foreground/80 leading-relaxed">Our recruitment focus is Germany — connecting healthcare professionals from Kenya with opportunities in hospitals, clinics, care settings and health services, subject to employer needs and professional eligibility.</p>
        <div className="flex items-center gap-2 mt-6 text-sm"><Globe2 className="w-5 h-5 text-primary" />Kenya to Germany · Healthcare recruitment</div>
      </div>
      <div className="space-y-6">
        {[{ icon: FileCheck2, title: "Qualification recognition", text: "Your qualifications are assessed against the German requirements for your profession. Regulated roles need recognition and permission to practise." }, { icon: Languages, title: "German language preparation", text: "Language and professional communication requirements depend on your role and the responsible German authority." }, { icon: Stethoscope, title: "The right professional pathway", text: "Clinical Officers and other professionals receive an individual assessment; qualifications do not automatically transfer to an equivalent German role." }].map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-4"><Icon className="w-6 h-6 text-primary shrink-0 mt-1" /><div><h3 className="font-semibold text-lg mb-2">{title}</h3><p className="text-sm text-primary-foreground/80 leading-relaxed">{text}</p></div></div>)}
      </div>
    </div>
  </section>
);
export default DestinationsSection;
