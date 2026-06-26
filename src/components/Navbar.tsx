import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Homes", href: "#homes" },
  { label: "How It Works", href: "#how" },
  { label: "Impact", href: "#impact" },
  { label: "Get Involved", href: "#involved" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-secondary transition-colors">
            <Home className="w-5 h-5" strokeWidth={2.5} />
          </div>
          <div>
            <div className={`font-serif text-xl leading-none ${scrolled ? "text-primary" : "text-primary-foreground"}`}>Amani Homes</div>
            <div className={`text-[10px] uppercase tracking-widest mt-0.5 ${scrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>Peace · Dignity · Home</div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className={`text-sm font-medium transition-colors ${scrolled ? "text-foreground/80 hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"}`}>
              {l.label}
            </a>
          ))}
          <a href="#involved" className="px-5 py-2.5 rounded-md bg-secondary text-secondary-foreground font-semibold text-sm hover:brightness-110 transition shadow-soft">
            Apply for Housing
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className={`lg:hidden ${scrolled ? "text-primary" : "text-primary-foreground"}`} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden">
            <div className="container mx-auto py-5 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80 hover:text-primary font-medium">
                  {l.label}
                </a>
              ))}
              <a href="#involved" onClick={() => setOpen(false)} className="px-5 py-3 rounded-md bg-secondary text-secondary-foreground font-semibold text-sm text-center">
                Apply for Housing
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
