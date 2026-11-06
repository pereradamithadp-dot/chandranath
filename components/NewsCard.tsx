import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  category: string;
  date: string;
  title: string;
  summary: string;
  image: string;
  href?: string;
};

export default function NewsCard({
  category,
  date,
  title,
  summary,
  image,
  href = "/news",
}: NewsCardProps) {
  return (
    <article className="relative flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-line bg-surface-200">
      <div className="relative h-[180px] w-full overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          sizes="384px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center gap-3 whitespace-nowrap">
          <span className="text-label text-text-brand">{category}</span>
          <time className="text-caption text-ink-muted">{date}</time>
        </div>
        <h3 className="text-h4 text-ink">
          <Link href={href} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h3>
        <p className="text-body-sm text-ink-muted">{summary}</p>
      </div>
    </article>
  );
}
