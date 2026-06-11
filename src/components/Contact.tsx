import { useEffect, useRef, useState } from "react";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="contact" id="contato">
      <Reveal>
        <div className="contact__panel">
          <div className="contact__copy">
            <span className="section-heading__label mono">
              05 <span aria-hidden="true">//</span> contato
            </span>
            <h2>
              Vamos construir
              <br />
              algo<span className="accent">.</span>
            </h2>
            <p>
              Aberto a estágio, projetos e colaboração técnica em software, dados/ML,
              automação e segurança. Resposta mais rápida por e-mail ou LinkedIn.
            </p>
            <a className="contact__email mono" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>

          <div className="contact__actions">
            <button className="button button--primary" type="button" onClick={copyEmail}>
              {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
              {copied ? "E-mail copiado" : "Copiar e-mail"}
            </button>
            <a className="button button--ghost" href={`mailto:${profile.email}`}>
              <Mail size={17} aria-hidden="true" /> Enviar e-mail
            </a>
            <a className="button button--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={17} aria-hidden="true" /> LinkedIn
            </a>
            <a className="button button--ghost" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={17} aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
