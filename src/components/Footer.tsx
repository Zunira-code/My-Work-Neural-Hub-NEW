import { Home } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-narrow py-12 px-4 md:px-8 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
              <Home className="w-5 h-5" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-serif text-xl text-primary leading-none">Amani Homes</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">Peace · Dignity · Home</div>
            </div>
          </div>
          <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
            Renovating abandoned homes in Nairobi and providing dignified, affordable housing for families who need it most.
          </p>
        </div>

        <div>
          <div className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Explore</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-primary transition">About</a></li>
            <li><a href="#homes" className="hover:text-primary transition">Our Homes</a></li>
            <li><a href="#involved" className="hover:text-primary transition">Get Involved</a></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Westlands, Nairobi</li>
            <li>+254 716534393</li>
            <li>linkedin@mywork.co.ke</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-narrow py-5 px-4 md:px-8 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Amani Homes Ltd. Registered in Kenya. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary transition">Privacy</a>
            <a href="#" className="hover:text-primary transition">Terms</a>
            <a href="#" className="hover:text-primary transition">Impact Report</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
