import { skillGroups } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <div className="skills-grid">
      {skillGroups.map((group, index) => (
        <Reveal key={group.title} delay={index * 70}>
          <article className="skill-group">
            <header className="skill-group__header">
              <span className="mono">{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
            </header>
            {group.hint ? <p className="skill-group__hint mono">{group.hint}</p> : null}
            <div className="badges">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
