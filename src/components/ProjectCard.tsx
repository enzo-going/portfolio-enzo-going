import { useRef, type MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <article
      ref={ref}
      className={`project-card ${project.side ? "project-card--side" : ""}`}
      onMouseMove={handleMouseMove}
    >
      <div className="project-card__top">
        <span className="project-card__kind mono">{project.kindLabel}</span>
        <a
          className="project-card__link"
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir repositório ${project.name} no GitHub`}
        >
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>

      <h3 className="project-card__title">{project.name}</h3>
      <p className="project-card__repo mono">{project.repo}</p>
      <p className="project-card__description">{project.description}</p>

      <ul className="project-card__highlights">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="badges" aria-label="Stack do projeto">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </article>
  );
}
