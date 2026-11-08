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
    <section className="bg-surface-200 px-4 py-10 lg:py-16">
      <div className="mx-auto flex max-w-page flex-col items-start justify-between gap-8 rounded-lg bg-surface-brand px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:px-16 lg:py-12">
        <div className="flex w-[640px] max-w-full flex-col gap-3">
          <h2 className="text-h2 text-on-brand">
            {title}
          </h2>
          <p className="text-body-lg text-on-brand-muted">{text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Button href={primaryHref} variant="onBrandSolid" size="lg" className="w-full sm:w-auto">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="onBrandOutline" size="lg" className="w-full sm:w-auto">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
