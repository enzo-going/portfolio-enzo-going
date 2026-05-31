import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`project-card ${project.level === "lateral" ? "is-side" : ""}`}>
      <div className="project-card__topline">
        <span>{project.level === "lateral" ? "Projeto lateral" : "Projeto principal"}</span>
        <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.title}`}>
          <ArrowUpRight size={18} />
        </a>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="project-card__emphasis">{project.emphasis}</p>
      <div className="badges" aria-label="Tecnologias">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
    </article>
  );
}
