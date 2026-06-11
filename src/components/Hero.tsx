import { ArrowDownRight, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

type TerminalLine = {
  prompt?: boolean;
  ok?: boolean;
  done?: boolean;
  text: string;
};

const terminalLines: TerminalLine[] = [
  { prompt: true, text: "python run_pipeline.py --split temporal" },
  { ok: true, text: "ingest      dados heterogêneos · country-year" },
  { ok: true, text: "features    engenharia temporal · lags" },
  { ok: true, text: "validate    treino no passado, teste no futuro" },
  { ok: true, text: "train       modelos supervisionados · sklearn" },
  { ok: true, text: "report      métricas + dashboard" },
  { done: true, text: "pipeline concluído — sem vazamento de dados" },
];

export function Hero() {
  return (
    <section className="hero" id="topo" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow" />
        <div className="hero__lines" />
      </div>

      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow mono">
            <span className="blink" aria-hidden="true">
              ▍
            </span>
            portfólio — {profile.location.toLowerCase()}
          </p>

          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-line">Enzo</span>
            <span className="hero__title-line hero__title-line--accent">
              Going<span className="hero__dot">.</span>
            </span>
          </h1>

          <p className="hero__role">{profile.role}</p>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__actions">
            <a className="button button--primary" href="#projetos">
              Ver projetos <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="button button--ghost" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={17} aria-hidden="true" /> GitHub
            </a>
            <a className="button button--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={17} aria-hidden="true" /> LinkedIn
            </a>
            <a className="button button--ghost" href="#contato">
              <Mail size={17} aria-hidden="true" /> Contato
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="terminal">
            <div className="terminal__bar">
              <span className="terminal__dot" />
              <span className="terminal__dot" />
              <span className="terminal__dot" />
              <span className="terminal__file mono">conflict-risk — pipeline.log</span>
            </div>
            <div className="terminal__body mono">
              {terminalLines.map((line, index) => (
                <p
                  key={line.text}
                  className={`terminal__line ${line.done ? "is-done" : ""}`}
                  style={{ animationDelay: `${500 + index * 420}ms` }}
                >
                  {line.prompt ? (
                    <span className="terminal__prompt">$ </span>
                  ) : line.ok ? (
                    <span className="terminal__ok">[ok] </span>
                  ) : (
                    <span className="terminal__check">✓ </span>
                  )}
                  {line.text}
                </p>
              ))}
            </div>
          </div>

          <div className="hero__chip hero__chip--top mono">
            ml aplicado <span>flagship</span>
          </div>
          <div className="hero__chip hero__chip--bottom mono">
            validação temporal <span>sem leakage</span>
          </div>
        </div>
      </div>

      <a className="hero__scroll mono" href="#sobre">
        scroll <ArrowDownRight size={14} aria-hidden="true" />
      </a>
    </section>
  );
}
