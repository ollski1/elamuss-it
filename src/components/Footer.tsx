import logo from "@/assets/logo.png";

const Footer = () => {
  const navItems = [
    { label: "Elamus", href: "#experience" },
    { label: "Auto & Sõitja", href: "#car" },
    { label: "Hinnad", href: "#pricing" },
    { label: "Asukoht", href: "#location" },
    { label: "Kontakt", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6">
        {/* Main footer row — mirrors header layout */}
        <div className="flex flex-col md:flex-row items-center justify-between h-16 gap-4 md:gap-0">
          <a href="#" className="flex-shrink-0">
            <img src={logo} alt="Elamussõit" className="h-7" />
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.2em]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Elamussõit
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
