import Image from "next/image";
import Link from "next/link";

type NewsOverlayCardProps = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  href?: string;
};

export default function NewsOverlayCard({
  category,
  date,
  title,
  excerpt,
  image,
  href = "/news",
}: NewsOverlayCardProps) {
  return (
    <article className="relative h-[400px] w-full shrink-0 sm:h-[460px] lg:w-[588px] overflow-hidden rounded-lg">
      <Image
        src={image}
        alt=""
        fill
        sizes="588px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(31,22,24,0)] from-25% to-[rgba(31,22,24,0.9)]" />
      <div className="absolute inset-x-5 bottom-5 sm:inset-x-8 sm:bottom-8 flex flex-col items-start gap-3">
        <div className="flex items-center gap-3">
          <span className="rounded-pill bg-action px-3 py-1 text-eyebrow whitespace-nowrap text-on-action">
            {category.toUpperCase()}
          </span>
          <time className="text-caption whitespace-nowrap text-on-brand-muted">
            {date}
          </time>
        </div>
        <h3 className="text-h3 text-on-brand">
          <Link href={href} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h3>
        <p className="text-body text-on-brand-muted">{excerpt}</p>
      </div>
    </article>
  );
}
