import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const ENQUIRY_EMAIL = "linkedin@mywork.co.ke";

const enquirySchema = z.object({
  name: z.string().trim().nonempty({ message: "Please enter your full name" }).max(100),
  phone: z.string().trim().nonempty({ message: "Please enter a phone or WhatsApp number" }).max(30),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  iam: z.string().max(50),
  role: z.string().max(50),
  message: z.string().trim().max(1000).optional(),
});


const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
  </svg>
);

const MailIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
);

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    iam: "Job seeker",
    role: "Caregiver",
    message: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = enquirySchema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Check your details", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    const d = parsed.data;
    setSending(true);
    try {
      const eventId = crypto.randomUUID();
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "enquiry-notification",
          recipientEmail: ENQUIRY_EMAIL,
          idempotencyKey: `enquiry-notification-${eventId}`,
          templateData: {
            name: d.name,
            email: d.email,
            phone: d.phone,
            iam: d.iam,
            role: d.role,
            message: d.message,
          },
        },
      });
      if (error) throw error;

      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "enquiry-confirmation",
          recipientEmail: d.email,
          idempotencyKey: `enquiry-confirmation-${eventId}`,
          templateData: { name: d.name, role: d.role },
        },
      });

      toast({
        title: "Enquiry sent",
        description: "Thank you — our Nairobi team will reply within one working day.",
      });
      setForm({ name: "", phone: "", email: "", iam: "Job seeker", role: "Caregiver", message: "" });
    } catch {
      toast({
        title: "Could not send enquiry",
        description: `Please try again, or email us directly at ${ENQUIRY_EMAIL}.`,
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };


  return (

    <section id="contact" className="section bg-background">
      <div className="container-narrow grid lg:grid-cols-[1fr_1.1fr] gap-12">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3">Get in Touch</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4 text-balance">Start your application or brief us on a vacancy</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Our Nairobi team responds to every enquiry within one working day.
          </p>

          <div className="space-y-3">
            <a href="https://wa.me/254716534393" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:shadow-card hover:border-primary/25 transition group">
              <div className="w-11 h-11 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <div className="font-semibold text-foreground group-hover:text-primary transition">+254 716 534 393</div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="mailto:linkedin@mywork.co.ke"
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:shadow-card hover:border-primary/25 transition group">
              <div className="w-11 h-11 rounded-lg bg-primary/8 text-primary flex items-center justify-center shrink-0">
                <MailIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-semibold text-foreground group-hover:text-primary transition">linkedin@mywork.co.ke</div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-muted/50">
              <div className="w-11 h-11 rounded-lg bg-primary/8 text-primary flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Office</div>
                <div className="font-semibold text-foreground">Westlands, Nairobi, Kenya</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-muted/50">
              <div className="w-11 h-11 rounded-lg bg-primary/8 text-primary flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Opening hours</div>
                <div className="font-semibold text-foreground">Mon – Fri, 8:00am – 5:30pm EAT</div>
              </div>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card">
          <h3 className="font-display font-semibold text-xl text-foreground mb-6">Send us your details</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Full name</label>
              <input id="name" value={form.name} onChange={set("name")} maxLength={100} required className="mt-1.5 w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-ring/30" />
            </div>
            <div>
              <label htmlFor="phone" className="text-xs font-semibold text-muted-foreground">Phone / WhatsApp</label>
              <input id="phone" value={form.phone} onChange={set("phone")} maxLength={30} required className="mt-1.5 w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-ring/30" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</label>
              <input id="email" type="email" value={form.email} onChange={set("email")} maxLength={255} required className="mt-1.5 w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-ring/30" />
            </div>
            <div>
              <label htmlFor="iam" className="text-xs font-semibold text-muted-foreground">I am a…</label>
              <select id="iam" value={form.iam} onChange={set("iam")} className="mt-1.5 w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-ring/30">
                <option>Job seeker</option>
                <option>Employer</option>
                <option>Partner agency</option>
              </select>
            </div>
            <div>
              <label htmlFor="role" className="text-xs font-semibold text-muted-foreground">Role of interest</label>
              <select id="role" value={form.role} onChange={set("role")} className="mt-1.5 w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-ring/30">
                <option>Caregiver</option>
                <option>Healthcare Assistant</option>
                <option>Receptionist</option>
                <option>Barista</option>
                <option>Mixologist</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="msg" className="text-xs font-semibold text-muted-foreground">Message</label>
              <textarea id="msg" rows={4} value={form.message} onChange={set("message")} maxLength={1000} className="mt-1.5 w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-ring/30 resize-none" />
            </div>

          </div>

          <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-glow transition">
            Submit enquiry <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-[11px] text-muted-foreground mt-3 text-center">
            Our Nairobi team replies within one working day.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
