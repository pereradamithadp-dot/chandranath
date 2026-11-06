import Image from "next/image";
import Link from "next/link";

type NewsRowCardProps = {
  category: string;
  date: string;
  title: string;
  image: string;
  href?: string;
};

export default function NewsRowCard({
  category,
  date,
  title,
  image,
  href = "/news",
}: NewsRowCardProps) {
  return (
    <article className="flex min-h-0 w-full flex-1 items-center gap-5 rounded-lg border border-line bg-surface-200 p-4">
      <div className="relative h-[136px] w-[180px] shrink-0 overflow-hidden rounded-md">
        <Image
          src={image}
          alt=""
          fill
          sizes="180px"
          className="object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-center gap-3 whitespace-nowrap">
          <span className="text-label text-text-brand">{category}</span>
          <time className="text-caption text-ink-muted">{date}</time>
        </div>
        <h3 className="text-h4 text-ink">{title}</h3>
        <Link href={href} className="whitespace-pre text-button text-text-brand hover:underline">
          {"Read more  →"}
        </Link>
      </div>
    </article>
  );
}
