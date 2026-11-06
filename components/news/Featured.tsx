import NewsOverlayCard from "@/components/NewsOverlayCard";
import NewsRowCard from "@/components/NewsRowCard";
import SectionLabel from "@/components/SectionLabel";
import type { PostItem } from "@/lib/sanity/types";

export default function Featured({ posts }: { posts: PostItem[] }) {
  const [lead, ...rest] = posts;
  const rows = rest.slice(0, 2);
  if (!lead) return null;

  return (
    <section className="bg-surface-200 pb-12 pt-20">
      <div className="mx-auto flex max-w-page flex-col gap-12 px-4">
        <div className="flex items-end justify-between gap-16">
          <div className="flex flex-col gap-4">
            <SectionLabel>FEATURED</SectionLabel>
            <h2 className="text-h2 text-ink">
              <span className="block">Latest from</span>
              <span className="block text-text-brand">the firm</span>
            </h2>
          </div>
          <p className="w-[420px] text-body text-ink-muted">
            News from CHANDRANATH &amp; COMPANY, practical notes on tax and
            audit, and photos from our events.
          </p>
        </div>
        <div className="flex items-stretch gap-6">
          <NewsOverlayCard
            category={lead.category}
            date={lead.date}
            title={lead.title}
            excerpt={lead.summary}
            image={lead.image}
          />
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            {rows.map((p) => (
              <NewsRowCard
                key={p.id}
                category={p.category}
                date={p.date}
                title={p.title}
                image={p.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
