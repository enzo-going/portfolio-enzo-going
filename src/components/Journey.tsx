import { timeline } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Journey() {
  return (
    <div className="journey">
      {timeline.map((entry, index) => (
        <Reveal key={entry.org} delay={index * 90}>
          <article className="journey__item">
            <div className="journey__marker" aria-hidden="true">
              <span className="journey__node" />
              {index < timeline.length - 1 ? <span className="journey__line" /> : null}
            </div>
            <div className="journey__body">
              <span className="journey__period mono">{entry.period}</span>
              <h3>{entry.org}</h3>
              <p className="journey__role">{entry.role}</p>
              <p className="journey__description">{entry.description}</p>
              <div className="badges badges--subtle">
                {entry.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
