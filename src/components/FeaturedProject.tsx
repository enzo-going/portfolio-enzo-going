import { ArrowUpRight, Play } from "lucide-react";
import { Github } from "./BrandIcons";
import type { Project } from "../data/portfolio";

type FeaturedProjectProps = {
  project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="featured" id={project.id}>
      <div className="featured__content">
        <span className="featured__badge mono">★ projeto flagship — {project.kindLabel.toLowerCase()}</span>
        <h3 className="featured__title">{project.name}</h3>
        <p className="featured__tagline">{project.tagline}</p>

        <dl className="featured__rows">
          <div>
            <dt className="mono">problema</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt className="mono">abordagem</dt>
            <dd>{project.approach}</dd>
          </div>
        </dl>

        <ul className="featured__highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="featured__footer">
          <div className="badges" aria-label="Stack do projeto">
            {project.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className="featured__actions">
            {project.demo ? (
              <a className="button button--ghost" href={project.demo.href} target="_blank" rel="noreferrer">
                <Play size={16} aria-hidden="true" /> {project.demo.label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ) : null}
            <a className="button button--primary" href={project.link} target="_blank" rel="noreferrer">
              <Github size={17} aria-hidden="true" /> Ver repositório
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {project.image ? (
        <div className="featured__visual">
          <a className="featured__shot" href={project.demo?.href ?? project.link} target="_blank" rel="noreferrer">
            <img src={project.image.src} alt={project.image.alt} width={960} height={1200} loading="lazy" decoding="async" />
          </a>
          <span className="featured__visual-note mono">print do dashboard publicado</span>
        </div>
      ) : null}
    </article>
  );
}
