import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const LanguageToggle = () => {
  const { language, setLanguage, t } = useTranslation();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
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
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Trava o scroll do fundo enquanto o menu está aberto.
   *
   * É layout effect, não effect, de propósito: os itens são âncoras (#about).
   * Num passive effect a restauração do overflow só rodava DEPOIS que o browser
   * já tinha tentado rolar até a âncora — com o body ainda travado, o salto se
   * perdia e o clique parecia não fazer nada. Layout effect fecha antes.
   */
  useIsomorphicLayoutEffect(() => {
    if (!isMobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMobileMenuOpen]);

  // Esc fecha e devolve o foco ao botão, senão o foco fica solto no documento.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsMobileMenuOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isMobileMenuOpen]);

  /**
   * O painel é md:hidden: ao girar o celular ou alargar a janela ele some da
   * tela, mas o estado continuava `true` e o body continuava travado — a página
   * ficava sem scroll, sem nada visível explicando por quê.
   */
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const desktop = window.matchMedia("(min-width: 768px)");
    const handleChange = () => desktop.matches && setIsMobileMenuOpen(false);
    handleChange();
    desktop.addEventListener("change", handleChange);
    return () => desktop.removeEventListener("change", handleChange);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-base ${
          isScrolled || isMobileMenuOpen
            ? "border-b border-border bg-background/85 backdrop-blur"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container flex h-20 items-center justify-between px-6">
          <a href="#" aria-label={t.nav.about}>
            <img
              src="/bernardologo.webp"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-full"
            />
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="-mx-1 inline-flex items-center gap-1.5 px-1 py-2 font-mono text-xs text-muted-foreground transition-colors duration-fast hover:text-foreground"
              >
                {link.label}
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
            ref={toggleRef}
            type="button"
            className="grid h-11 w-11 place-items-center text-foreground md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </header>

      {/*
        IRMÃO do <header>, não filho — e é isso que conserta o menu.

        O header ganha `backdrop-blur` sempre que o menu abre, e um elemento com
        `backdrop-filter` vira bloco de contenção para descendentes `position:
        fixed` (Filter Effects, mesmo comportamento de `transform`). Como filho,
        o painel media `top-20 bottom-0` contra a caixa do header, de 80px de
        altura: 80 − 80 − 0 = altura ZERO. Ele abria colapsado numa faixa nula
        logo abaixo da barra. Fora do header, o bloco de contenção volta a ser a
        viewport e `top-20 bottom-0` significa o que aparenta significar.
      */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="menu-panel fixed inset-x-0 bottom-0 top-20 z-40 flex flex-col overflow-y-auto overscroll-contain bg-background md:hidden"
        >
          <nav aria-label={t.nav.menu} className="container px-6">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-border">
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="flex min-h-[3.5rem] items-center font-mono text-base text-foreground transition-colors duration-fast hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="container mt-auto flex items-center justify-between gap-4 px-6 py-8">
            <Link
              to="/resume"
              onClick={closeMenu}
              className="rounded-md border border-border-strong px-4 py-2 font-mono text-sm text-primary"
            >
              {t.nav.resumeSite}
            </Link>
            <LanguageToggle />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
