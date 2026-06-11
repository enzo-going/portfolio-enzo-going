import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { profile } from "../data/portfolio";

const navItems = [
  { label: "Sobre", href: "#sobre", index: "01" },
  { label: "Projetos", href: "#projetos", index: "02" },
  { label: "Skills", href: "#skills", index: "03" },
  { label: "Trajetória", href: "#trajetoria", index: "04" },
  { label: "Contato", href: "#contato", index: "05" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#topo" onClick={() => setMenuOpen(false)}>
        <span className="brand__mark">EG</span>
        <span className="brand__name">enzo.going</span>
      </a>

      <nav className="main-nav" aria-label="Navegação principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            <span className="main-nav__index">{item.index}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions" aria-label="Links externos">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={17} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={17} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="E-mail">
          <Mail size={17} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`}>
        <nav aria-label="Navegação móvel">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span className="main-nav__index">{item.index}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-nav__footer">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>E-mail</a>
        </div>
      </div>
    </header>
  );
}
