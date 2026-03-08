const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm text-background/60">
          © {new Date().getFullYear()} My Work Neural Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
