import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "../data/portfolio";

type FeaturedProjectProps = {
  project: Project;
};

/* Visual abstrato (não é screenshot): mapa de risco estilizado + linha de tendência */
function RiskVisual() {
  const cells = [
    0.12, 0.3, 0.08, 0.5, 0.2, 0.75, 0.15, 0.4,
    0.25, 0.1, 0.62, 0.18, 0.88, 0.3, 0.55, 0.1,
    0.4, 0.7, 0.2, 0.35, 0.1, 0.5, 0.28, 0.66,
    0.15, 0.45, 0.3, 0.8, 0.22, 0.12, 0.58, 0.35,
  ];

  return (
    <svg
      className="featured__svg"
      viewBox="0 0 320 240"
      role="img"
      aria-label="Visual abstrato representando um mapa de risco e uma curva de tendência"
    >
      <g>
        {cells.map((value, index) => {
          const x = 8 + (index % 8) * 39;
          const y = 8 + Math.floor(index / 8) * 39;
          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={33}
              height={33}
              rx={2}
              className="featured__cell"
              style={{ opacity: 0.08 + value * 0.55, animationDelay: `${index * 90}ms` }}
            />
          );
        })}
      </g>
      <polyline
        className="featured__spark"
        points="8,196 50,188 92,192 134,170 176,176 218,148 260,156 312,118"
        fill="none"
      />
      <g className="mono featured__axis">
        <text x="8" y="232">
          t-n
        </text>
        <text x="290" y="232">
          t+1
        </text>
      </g>
    </svg>
  );
}

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
          <a className="button button--primary" href={project.link} target="_blank" rel="noreferrer">
            <Github size={17} aria-hidden="true" /> Ver repositório
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="featured__visual">
        <RiskVisual />
        <span className="featured__visual-note mono">visual abstrato — não é screenshot</span>
      </div>
    </article>
  );
}
