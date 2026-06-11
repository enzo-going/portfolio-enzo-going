import { Code2, Database, ShieldCheck, Workflow } from "lucide-react";
import { Contact } from "./components/Contact";
import { FeaturedProject } from "./components/FeaturedProject";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { Marquee } from "./components/Marquee";
import { ProjectCard } from "./components/ProjectCard";
import { Reveal } from "./components/Reveal";
import { SectionHeading } from "./components/SectionHeading";
import { Skills } from "./components/Skills";
import { projects } from "./data/portfolio";

const focusAreas = [
  { icon: Code2, label: "Software", detail: "POO, arquitetura, testes" },
  { icon: Database, label: "Dados & ML", detail: "pipelines, validação, EDA" },
  { icon: ShieldCheck, label: "Segurança", detail: "redes e fundamentos" },
  { icon: Workflow, label: "Automação", detail: "rotinas e fluxos reais" },
];

export default function App() {
  const featured = projects.find((project) => project.featured);
  const regular = projects.filter((project) => !project.featured && !project.side);
  const side = projects.filter((project) => project.side);

  return (
    <div className="app-shell">
      <Header />

      <main>
        <Hero />
        <Marquee />

        <section className="section" id="sobre">
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="sobre"
              title="Base sólida, construída em projetos reais"
              description="Perfil em formação com método: entender o problema, estruturar os dados, validar hipóteses, testar e documentar — em vez de só empilhar tecnologia."
            />
          </Reveal>
          <div className="about">
            <Reveal>
              <div className="about__text">
                <p>
                  Sou estudante de Ciência da Computação na Universidade Católica de
                  Santos, com base prática em desenvolvimento de software, estruturas
                  de dados, Python, C, bancos de dados, automação e segurança da
                  informação — e experiência real em ambiente de TI no CAMPS Santos.
                </p>
                <p>
                  Meu diferencial é tratar cada projeto como engenharia: o pipeline de
                  ML tem validação temporal para não vazar dados, o sistema de
                  documentos resolve um fluxo administrativo que existe de verdade e a
                  refatoração do simulador é protegida por testes.
                </p>
              </div>
            </Reveal>
            <div className="about__grid" aria-label="Áreas de foco">
              {focusAreas.map((area, index) => (
                <Reveal key={area.label} delay={index * 80}>
                  <div className="focus-tile">
                    <area.icon size={20} aria-hidden="true" />
                    <strong>{area.label}</strong>
                    <span>{area.detail}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projetos">
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="projetos"
              title="Projetos com problema, abordagem e resultado"
              description="Do machine learning aplicado à automação em produção interna — código público, documentado e organizado."
            />
          </Reveal>

          {featured ? (
            <Reveal>
              <FeaturedProject project={featured} />
            </Reveal>
          ) : null}

          <div className="project-grid">
            {regular.map((project, index) => (
              <Reveal key={project.id} delay={index * 90}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          {side.length > 0 ? (
            <div className="side-projects">
              <p className="side-projects__label mono">+ projetos laterais</p>
              <div className="project-grid project-grid--side">
                {side.map((project) => (
                  <Reveal key={project.id}>
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
              </div>
            </div>
          ) : null}
        </section>

        <section className="section" id="skills">
          <Reveal>
            <SectionHeading
              index="03"
              eyebrow="skills"
              title="Tecnologias organizadas por área"
              description="Sem barrinhas de porcentagem: o que está em uso nos projetos e o que está em evolução, dito com honestidade."
            />
          </Reveal>
          <Skills />
        </section>

        <section className="section" id="trajetoria">
          <Reveal>
            <SectionHeading
              index="04"
              eyebrow="trajetória"
              title="Formação e prática, em paralelo"
              description="Universidade para os fundamentos, ambiente real de TI para a prática — e projetos conectando os dois."
            />
          </Reveal>
          <Journey />
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
