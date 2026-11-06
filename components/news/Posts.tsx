"use client";

import { useState } from "react";
import NewsCard from "@/components/NewsCard";
import SectionLabel from "@/components/SectionLabel";
import type { PostItem } from "@/lib/sanity/types";

const filters = ["All", "News", "Tax updates", "Events"] as const;

export default function Posts({ posts }: { posts: PostItem[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = posts.filter((p) => filter === "All" || p.category === filter);

  return (
    <section className="bg-surface-200 pb-16 pt-12">
      <div className="mx-auto flex max-w-page flex-col gap-10 px-4">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-4">
            <SectionLabel>ALL POSTS</SectionLabel>
            <h2 className="text-h2 text-ink">
              More news and <span className="text-text-brand">insights</span>
            </h2>
          </div>
          <div role="group" aria-label="Filter posts" className="flex gap-3">
            {filters.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className={`h-11 rounded-md px-6 text-button whitespace-nowrap transition-colors ${
                    active
                      ? "bg-action text-on-action"
                      : "border-[1.5px] border-text-brand text-text-brand hover:bg-tint"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {visible.length > 0 ? (
          <div className="grid grid-cols-3 gap-6">
            {visible.map((p) => (
              <NewsCard key={p.id} {...p} />
            ))}
          </div>
        ) : (
          <p className="text-body text-ink-muted">No posts in this category yet.</p>
        )}
      </div>
    </section>
  );
}
