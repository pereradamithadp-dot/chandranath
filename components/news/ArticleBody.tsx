import Image from "next/image";
import { PortableText, type PortableTextComponents } from "next-sanity";
import { imageUrl } from "@/lib/sanity/image";
import type { PortableBlock } from "@/lib/sanity/types";

type BodyImage = { asset?: { _ref: string }; alt?: string };

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-body-lg text-ink-muted">{children}</p>,
    h2: ({ children }) => <h2 className="mt-6 text-h3 text-ink">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-4 text-h4 text-ink">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-action pl-5 text-body-lg text-ink">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="flex list-disc flex-col gap-2 pl-6 text-body-lg text-ink-muted">{children}</ul>,
    number: ({ children }) => <ol className="flex list-decimal flex-col gap-2 pl-6 text-body-lg text-ink-muted">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const href: string = value?.href ?? "#";
      const external = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          className="text-text-brand underline underline-offset-2 hover:no-underline"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: { value: BodyImage }) =>
      value.asset ? (
        <figure className="relative my-2 aspect-[3/2] w-full overflow-hidden rounded-lg">
          <Image
            src={imageUrl(value, 1600)}
            alt={value.alt ?? ""}
            fill
            sizes="(min-width: 800px) 760px, 100vw"
            className="object-cover"
          />
        </figure>
      ) : null,
  },
};

export default function ArticleBody({ value }: { value: PortableBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      <PortableText value={value} components={components} />
    </div>
  );
}
