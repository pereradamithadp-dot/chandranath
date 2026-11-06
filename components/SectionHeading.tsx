type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  /** Word(s) shown in crimson after the title, e.g. "help" in "How can we help?" */
  accent?: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="mb-2 text-label text-text-brand">
          {eyebrow}
        </p>
      )}
      <h2 className="text-h2 text-ink">
        {title}
        {accent && <span className="text-text-brand"> {accent}</span>}
      </h2>
      {description && (
        <p className="mt-3 max-w-[720px] text-body-lg text-ink-muted">
          {description}
        </p>
      )}
    </div>
  );
}
