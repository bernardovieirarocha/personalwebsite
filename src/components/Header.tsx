import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation, Language } from "@/i18n";

const LanguageToggle = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex items-center border border-border rounded-md overflow-hidden font-mono text-xs">
      <button
        onClick={() => setLanguage("pt")}
        className={`px-2 py-1.5 transition-colors ${language === "pt"
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
          }`}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1.5 transition-colors ${language === "en"
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
          }`}
      >
        EN
      </button>
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.about, number: "01" },
    { href: "#skills", label: t.nav.skills, number: "02" },
    { href: "#projects", label: t.nav.projects, number: "03" },
    { href: "#travel", label: t.nav.travel, number: "04" },
    { href: "#contact", label: t.nav.contact, number: "05" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${isMobileMenuOpen ? "" : "transition-all duration-300"} ${isMobileMenuOpen
        ? "bg-[#080A0D] border-b border-border"
        : isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
        }`}
    >
      <nav className="container px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group">
          <img
            src="/bernardologo.png"
            alt="BR Logo"
            className="h-10 w-10 rounded-full group-hover:scale-110 transition-transform duration-300"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary">{link.number}.</span> {link.label}
            </a>
          ))}
          <a
            href="https://bernardorocha.me"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-md border border-primary/50 text-primary font-mono text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {t.nav.resumeSite}
          </a>
          <LanguageToggle />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-background/95 backdrop-blur-lg z-40">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-lg text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-primary">{link.number}.</span> {link.label}
              </a>
            ))}
            <a
              href="https://bernardorocha.me"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md border border-primary text-primary font-mono text-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {t.nav.resumeSite}
            </a>
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
