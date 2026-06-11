type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="section-heading__label mono">
        {index} <span aria-hidden="true">//</span> {eyebrow}
      </span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
