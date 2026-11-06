import Image from "next/image";

type PageHeroProps = {
  title: string;
  lead?: string;
  breadcrumb?: string;
  /** Background photo path in /public. */
  image?: string;
};

export default function PageHero({
  title,
  lead,
  breadcrumb,
  image = "/images/page-hero.png",
}: PageHeroProps) {
  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-surface-brand py-16">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(133,24,42,0.96)] via-[rgba(133,24,42,0.86)] via-60% to-[rgba(133,24,42,0.7)]" />
      <div className="relative flex w-full max-w-page flex-col gap-4 px-4">
        <p className="whitespace-pre text-caption text-on-brand-muted">
          {breadcrumb ?? `Home  /  ${title}`}
        </p>
        <h1 className="text-h1 text-on-brand">
          {title}
        </h1>
        {lead && (
          <p className="max-w-[720px] text-body-lg text-on-brand-muted">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
