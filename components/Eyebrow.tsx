type EyebrowProps = {
  children: string;
  /** "onBrand" chip for the crimson band, "default" tint chip on light backgrounds */
  tone?: "onBrand" | "default";
};

/** Small capital-letter chip above a heading, or used as a credential tag. */
export default function Eyebrow({ children, tone = "onBrand" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-pill px-3 py-2 text-eyebrow whitespace-nowrap ${
        tone === "onBrand"
          ? "bg-crimson-700 text-on-brand"
          : "bg-tint text-text-brand"
      }`}
    >
      {children}
    </span>
  );
}
