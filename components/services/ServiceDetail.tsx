import Image from "next/image";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";

type ServiceDetailProps = {
  number: string;
  title: string;
  description: string;
  items: string[];
  cta: string;
  ctaHref?: string;
  image: string;
  badge: string;
  /** Photo on the left inside a soft panel (services 02 and 04). */
  panel?: boolean;
  /** Left offset of the floating badge, in px, when the photo is on the left. */
  badgeLeft?: number;
};

export default function ServiceDetail({
  number,
  title,
  description,
  items,
  cta,
  ctaHref = "/contact",
  image,
  badge,
  panel = false,
  badgeLeft,
}: ServiceDetailProps) {
  const media = (
    <div className="relative h-[300px] w-full shrink-0 sm:h-[400px] lg:h-[460px] lg:w-[520px]">
      <div
        className={`absolute top-0 h-[260px] w-full overflow-hidden rounded-lg sm:h-[360px] lg:h-[420px] lg:w-[480px] ${
          panel ? "left-0" : "lg:left-10"
        }`}
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="480px"
          className="object-cover"
        />
      </div>
      <div
        className="absolute bottom-0 left-4 flex items-center gap-4 rounded-lg bg-surface-200 px-4 py-4 shadow-md sm:px-6 sm:py-5 lg:bottom-auto lg:top-[368px] lg:left-[var(--bl)]"
        style={{ "--bl": `${panel ? (badgeLeft ?? 248) : 0}px` } as React.CSSProperties}
      >
        <p className="text-h1 text-text-brand">{number}</p>
        <p className="w-[130px] text-button sm:w-[150px] text-ink">{badge}</p>
      </div>
    </div>
  );

  const text = (
    <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-5">
      <SectionLabel>{`SERVICE ${number}`}</SectionLabel>
      <h2 className="text-h2 text-ink">{title}</h2>
      <p className="text-body-lg text-ink-muted">{description}</p>
      <ul className="grid w-full grid-cols-1 gap-x-4 sm:grid-cols-2 gap-y-3">
        {items.map((item) => (
          <li key={item} className="flex min-w-0 items-start gap-3">
            <span className="flex size-[26px] shrink-0 items-center justify-center rounded-pill bg-tint">
              <Image
                src="/images/icons/check-small.svg"
                alt=""
                width={16}
                height={16}
              />
            </span>
            <span className="text-body-sm text-ink">{item}</span>
          </li>
        ))}
      </ul>
      <Button href={ctaHref}>{cta}</Button>
    </div>
  );

  return (
    <section
      id={`service-${number}`}
      className={`bg-surface-200 ${panel ? "py-12" : number === "01" ? "py-8" : "py-12"}`}
    >
      <div className="mx-auto max-w-page px-4">
        {panel ? (
          <div className="flex flex-col items-center gap-10 rounded-lg bg-surface-100 p-5 sm:p-8 lg:flex-row lg:gap-16 lg:p-12">
            {media}
            {text}
          </div>
        ) : (
          <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-16">
            {text}
            {media}
          </div>
        )}
      </div>
    </section>
  );
}
