type SectionLabelProps = {
  children: string;
  /** "default" on light backgrounds, "onBrand" on the crimson band */
  tone?: "default" | "onBrand";
};

/** Accent rule + capital label above a section heading. */
export default function SectionLabel({
  children,
  tone = "default",
}: SectionLabelProps) {
  const onBrand = tone === "onBrand";
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden
        className={`h-0.5 w-8 ${onBrand ? "bg-on-brand" : "bg-text-brand"}`}
      />
      <p
        className={`text-eyebrow whitespace-nowrap ${
          onBrand ? "text-on-brand" : "text-text-brand"
        }`}
      >
        {children}
      </p>
    </div>
  );
}
