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
    <div className="relative h-[460px] w-[520px] shrink-0">
      <div
        className={`absolute top-0 h-[420px] w-[480px] overflow-hidden rounded-lg ${
          panel ? "left-0" : "left-10"
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
        className="absolute top-[368px] flex items-center gap-4 rounded-lg bg-surface-200 px-6 py-5 shadow-md"
        style={{ left: panel ? (badgeLeft ?? 248) : 0 }}
      >
        <p className="text-h1 text-text-brand">{number}</p>
        <p className="w-[150px] text-button text-ink">{badge}</p>
      </div>
    </div>
  );

  const text = (
    <div className="flex min-w-0 flex-1 flex-col items-start gap-5">
      <SectionLabel>{`SERVICE ${number}`}</SectionLabel>
      <h2 className="text-h2 text-ink">{title}</h2>
      <p className="text-body-lg text-ink-muted">{description}</p>
      <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-3">
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
          <div className="flex items-center gap-16 rounded-lg bg-surface-100 p-12">
            {media}
            {text}
          </div>
        ) : (
          <div className="flex items-center gap-16">
            {text}
            {media}
          </div>
        )}
      </div>
    </section>
  );
}
