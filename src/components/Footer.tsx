import { ShieldCheck } from "lucide-react";

const cols = [
  { title: "Job Seekers", links: [["Browse jobs", "#jobs"], ["Our sectors", "#sectors"], ["Destinations", "#destinations"], ["How it works", "#process"]] },
  { title: "Employers", links: [["Hire talent", "#employers"], ["Bulk mobilisation", "#employers"], ["Compliance support", "#employers"], ["Request shortlist", "#contact"]] },
  { title: "Company", links: [["Success stories", "#insights"], ["Contact us", "#contact"], ["Ethical charter", "#destinations"]] },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow px-4 md:px-8 py-14 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-md bg-accent text-accent-foreground flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" strokeWidth={2.4} />
            </div>
            <div className="leading-none">
              <div className="font-display font-extrabold text-base">AEGIS GLOBAL</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-primary-foreground/60 mt-1">Recruitment Agency</div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
            A Nairobi-based recruitment agency placing Kenyan caregivers, healthcare assistants, receptionists,
            baristas and mixologists into verified jobs worldwide.
          </p>
          <div className="mt-5 space-y-1.5 text-sm text-primary-foreground/75">
            <div>Westlands, Nairobi, Kenya</div>
            <a href="tel:+254716534393" className="block hover:text-accent transition">+254 716 534 393</a>
            <a href="mailto:linkedin@mywork.co.ke" className="block hover:text-accent transition">linkedin@mywork.co.ke</a>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <div className="font-semibold text-sm uppercase tracking-wider mb-4 text-accent">{c.title}</div>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              {c.links.map(([label, href]) => (
                <li key={label}><a href={href} className="hover:text-primary-foreground transition">{label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-narrow px-4 md:px-8 py-5 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Aegis Global Recruitment Agency. Registered in Kenya. All rights reserved.</div>
          <div>Ethical recruitment · Licensed and NEA compliant</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
