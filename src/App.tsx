import {
  ArrowRight,
  Clipboard,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Header } from "./components/Header";
import { ProjectCard } from "./components/ProjectCard";
import { SectionHeading } from "./components/SectionHeading";
import { profile, projects, skillGroups } from "./data/portfolio";

const currentFocus = [
  "Software Development",
  "Dados / Machine Learning",
  "Segurança da Informação",
  "Projetos aplicados",
  "Ciência da Computação na UniSantos",
];

function copyEmail() {
  void navigator.clipboard?.writeText(profile.email);
}

export default function App() {
  return (
    <div className="app-shell" id="topo">
      <Header />

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-copy">
              <span className="eyebrow">Portfolio // tecnologia aplicada</span>
              <h1 id="hero-title">{profile.name}</h1>
              <p className="hero-title">{profile.title}</p>
              <p className="hero-text">
                Estudante de Ciência da Computação na Universidade Católica de Santos,
                em evolução prática com projetos de software, dados, machine learning,
                automação e segurança da informação.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projetos">
                  Ver projetos <ArrowRight size={18} />
                </a>
                <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub
                </a>
                <a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a className="button button-ghost" href="#contato">
                  <Mail size={18} /> Contato
                </a>
              </div>
            </div>

            <aside className="focus-card" aria-label="Foco atual">
              <div className="focus-card__header">
                <span>Foco atual</span>
                <strong>Evolução técnica</strong>
              </div>
              <ul>
                {currentFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Experiência prática em TI, projetos acadêmicos aplicados e evolução
                contínua em software, dados e segurança.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-band about-band" id="sobre">
          <SectionHeading
            eyebrow="Sobre"
            title="Construindo base técnica com projetos reais"
            description="Um perfil em formação, com foco em aprender bem os fundamentos e aplicar esse conhecimento em problemas concretos."
          />
          <div className="about-layout">
            <p>
              Sou estudante de Ciência da Computação na UniSantos e venho desenvolvendo
              uma base prática em desenvolvimento de software, estruturas de dados,
              Python, C, bancos de dados, automação e segurança da informação. Também
              venho acumulando experiência prática em ambiente de TI, conectando rotina
              técnica, organização e resolução de problemas com aprendizado acadêmico.
            </p>
            <p>
              Tenho interesse especial em sistemas reais, machine learning aplicado,
              análise de dados, segurança e automação. Uso projetos como forma de
              construir repertório técnico com método: entender o problema, estruturar
              dados, testar hipóteses, validar resultados, documentar decisões e melhorar
              o código de forma incremental.
            </p>
            <div className="focus-grid" aria-label="Áreas de interesse">
              <span><Code2 size={18} /> Software</span>
              <span><Database size={18} /> Dados e ML</span>
              <span><ShieldCheck size={18} /> Segurança</span>
              <span><Workflow size={18} /> Automação</span>
            </div>
          </div>
        </section>

        <section className="content-band" id="projetos">
          <SectionHeading
            eyebrow="Projetos"
            title="Projetos em destaque"
            description="Trabalhos que mostram evolução em software, dados, documentação técnica e aplicação prática."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="content-band skills-band" id="skills">
          <SectionHeading
            eyebrow="Skills"
            title="Tecnologias e fundamentos"
            description="Organização por áreas para deixar claro onde há prática atual e onde há evolução em andamento."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="badges">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-band split-band" id="formacao">
          <div>
            <SectionHeading eyebrow="Formação" title="Ciência da Computação" />
            <article className="timeline-item">
              <GraduationCap size={24} />
              <div>
                <h3>Universidade Católica de Santos / UniSantos</h3>
                <p>
                  Graduação em andamento, com foco atual em desenvolvimento de software,
                  dados, segurança da informação e projetos acadêmicos aplicados.
                </p>
              </div>
            </article>
          </div>

          <div>
            <SectionHeading eyebrow="Prática" title="Experiência em ambiente de TI" />
            <article className="timeline-item">
              <Clipboard size={24} />
              <div>
                <h3>CAMPS Santos</h3>
                <p>
                  Experiência prática em ambiente de TI, apoio a rotinas técnicas,
                  organização de sistemas e documentos, além de automação de processos
                  quando aplicável.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-band" id="contato">
          <div>
            <span className="eyebrow">Contato</span>
            <h2>Aberto a conexões técnicas, projetos e colaboração prática.</h2>
            <p>
              Projetos acadêmicos, desenvolvimento aplicado, dados, automação e evolução
              prática com acompanhamento técnico.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
            <button className="button button-ghost" type="button" onClick={copyEmail}>
              <Mail size={18} /> Copiar e-mail
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
