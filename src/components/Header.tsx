import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n";

const LanguageToggle = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className="flex items-center overflow-hidden rounded-md border border-border font-mono text-xs"
    >
      {(["pt", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          aria-pressed={language === code}
          className={`px-2.5 py-1.5 uppercase transition-colors duration-fast ${
            language === code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trava o scroll do fundo enquanto o menu mobile está aberto.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#about", label: t.nav.about, number: "01" },
    { href: "#experience", label: t.nav.experience, number: "02" },
    { href: "#skills", label: t.nav.skills, number: "03" },
    { href: "#projects", label: t.nav.projects, number: "04" },
    { href: "#contact", label: t.nav.contact, number: "05" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-base ${
        isScrolled || isMobileMenuOpen
          ? "border-b border-border bg-background/85 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container flex h-20 items-center justify-between px-6">
        <a href="#" aria-label={t.nav.about}>
          <img src="/bernardologo.webp" alt="" width={36} height={36} className="h-9 w-9 rounded-full" />
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="-mx-1 inline-flex items-center px-1 py-2 font-mono text-xs text-muted-foreground transition-colors duration-fast hover:text-foreground"
            >
              <span className="text-primary">{link.number}</span> {link.label}
            </a>
          ))}
          <Link
            to="/resume"
            className="rounded-md border border-border-strong px-3 py-1.5 font-mono text-xs text-primary transition-colors duration-fast hover:bg-primary hover:text-primary-foreground"
          >
            {t.nav.resumeSite}
          </Link>
          <LanguageToggle />
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-20 bg-background md:hidden">
          <div className="container flex flex-col items-start gap-6 px-6 pt-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-[44px] items-center font-mono text-base text-muted-foreground transition-colors duration-fast hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-primary">{link.number}</span> {link.label}
              </a>
            ))}
            <Link
              to="/resume"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-md border border-border-strong px-4 py-2 font-mono text-sm text-primary"
            >
              {t.nav.resumeSite}
            </Link>
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
