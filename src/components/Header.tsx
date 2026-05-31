import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Formação", href: "#formacao" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#topo" aria-label="Ir para o início">
        <span className="brand-mark">EG</span>
        <span>Enzo Going</span>
      </a>

      <nav className="main-nav" aria-label="Navegação principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions" aria-label="Links externos">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="E-mail">
          <Mail size={18} />
        </a>
      </div>
    </header>
  );
}
