import Button from "./Button";

type CtaBandProps = {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CtaBand({
  title = "Talk to us today",
  text = "Call +94 76 1950780, or visit us at No. 08, Kulathunga Road, Panadura.",
  primaryLabel = "Call us",
  primaryHref = "tel:+94761950780",
  secondaryLabel = "Send a message",
  secondaryHref = "/contact",
}: CtaBandProps) {
  return (
    <section className="bg-surface-200 py-16">
      <div className="mx-auto flex max-w-page items-center justify-between gap-8 rounded-lg bg-surface-brand px-16 py-12">
        <div className="flex w-[640px] max-w-full flex-col gap-3">
          <h2 className="text-h2 text-on-brand">
            {title}
          </h2>
          <p className="text-body-lg text-on-brand-muted">{text}</p>
        </div>
        <div className="flex gap-4">
          <Button href={primaryHref} variant="onBrandSolid" size="lg">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="onBrandOutline" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
