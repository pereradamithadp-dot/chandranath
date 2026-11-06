import Link from "next/link";
import NewsOverlayCard from "@/components/NewsOverlayCard";
import NewsRowCard from "@/components/NewsRowCard";
import SectionLabel from "@/components/SectionLabel";
import { getPosts } from "@/lib/sanity/queries";

export default async function HomeNews() {
  const [lead, ...rest] = await getPosts();
  const rows = rest.slice(0, 2);
  if (!lead) return null;

  return (
    <section className="bg-surface-200 py-20">
      <div className="mx-auto flex max-w-page flex-col gap-12 px-4">
        <div className="flex items-end justify-between gap-16">
          <div className="flex flex-col gap-4">
            <SectionLabel>NEWS &amp; EVENTS</SectionLabel>
            <h2 className="text-h2 text-ink">
              Latest news and <span className="text-text-brand">insights</span>
            </h2>
          </div>
          <Link
            href="/news"
            className="flex h-11 items-center px-6 text-button whitespace-pre text-text-brand hover:underline"
          >
            {"All news and events  →"}
          </Link>
        </div>
        <div className="flex items-stretch gap-6">
          <NewsOverlayCard
            category={lead.category}
            date={lead.date}
            title={lead.title}
            excerpt={lead.summary}
            image={lead.image}
            href={lead.href}
          />
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            {rows.map((p) => (
              <NewsRowCard
                key={p.id}
                category={p.category}
                date={p.date}
                title={p.title}
                image={p.image}
                href={p.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
