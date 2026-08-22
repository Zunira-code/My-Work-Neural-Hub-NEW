import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/aegis-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Sectors", href: "#sectors" },
  { label: "Jobs", href: "#jobs" },
  { label: "Destinations", href: "#destinations" },
  { label: "Employers", href: "#employers" },
  { label: "Process", href: "#process" },
  { label: "Apply in Kenya", href: "#kenya" },
  { label: "Contact", href: "#contact" },

];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Utility bar */}
      <div className="hidden md:block bg-primary text-primary-foreground/90 text-xs">
        <div className="container-narrow px-4 md:px-8 h-9 flex items-center justify-between">
          <span>Licensed Kenyan recruitment agency · NEA compliant · Ethical, zero-exploitation placement</span>
          <a href="tel:+254716534393" className="inline-flex items-center gap-1.5 hover:text-primary-foreground transition">
            <Phone className="w-3.5 h-3.5" /> +254 716 534 393
          </a>
        </div>
      </div>

      <nav className={`transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-background/90 backdrop-blur-sm"}`}>
        <div className="container-narrow px-4 md:px-8 flex items-center justify-between h-16 lg:h-[72px]">
          <a href="#home" className="flex items-center gap-2.5 group shrink-0">
            <img src={logo} alt="Aegis Global Recruitment Agency logo" width={44} height={44}
              className="w-10 h-10 md:w-11 md:h-11 object-contain" />
            <div className="leading-none">
              <div className="font-display font-extrabold text-[15px] md:text-base text-foreground tracking-tight">
                AEGIS <span className="text-primary">GLOBAL</span>
              </div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">Recruitment Agency</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#jobs" className="px-4 py-2.5 rounded-md border border-primary/25 text-primary font-semibold text-sm hover:bg-muted transition">
              Find a Job
            </a>
            <a href="#employers" className="px-4 py-2.5 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:brightness-105 transition shadow-soft">
              Hire Talent
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-primary" aria-label="Toggle menu">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-background border-t border-border overflow-hidden">
              <div className="container-narrow px-4 py-5 flex flex-col gap-4">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80 hover:text-primary font-medium">
                    {l.label}
                  </a>
                ))}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a href="#jobs" onClick={() => setOpen(false)} className="px-4 py-3 rounded-md border border-primary/25 text-primary font-semibold text-sm text-center">Find a Job</a>
                  <a href="#employers" onClick={() => setOpen(false)} className="px-4 py-3 rounded-md bg-accent text-accent-foreground font-semibold text-sm text-center">Hire Talent</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
