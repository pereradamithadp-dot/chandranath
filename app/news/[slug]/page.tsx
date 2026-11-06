import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import ArticleBody from "@/components/news/ArticleBody";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { getPost, getPosts } from "@/lib/sanity/queries";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Chandranath & Company`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [post.image],
    },
  };
}

// The header, footer and a placeholder render instantly on navigation;
// the post itself streams in once the slug is known.
export default function NewsPostPage({ params }: PageProps<"/news/[slug]">) {
  return (
    <>
      <Header active="/news" />
      <main>
        <Suspense fallback={<PostSkeleton />}>
          <PostContent params={params} />
        </Suspense>
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}

async function PostContent({
  params,
}: {
  params: PageProps<"/news/[slug]">["params"];
}) {
  const { slug } = await params;
  const [post, all] = await Promise.all([getPost(slug), getPosts()]);
  if (!post) notFound();

  const more = all.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={post.title}
        breadcrumb={`Home  /  News & Events  /  ${post.category}`}
        image={post.image}
      />

      <article className="bg-surface-200 py-16">
        <div className="mx-auto flex max-w-[760px] flex-col gap-8 px-4">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span className="rounded-pill bg-action px-3 py-1 text-eyebrow text-on-action">
              {post.category.toUpperCase()}
            </span>
            <time className="text-caption text-ink-muted">{post.date}</time>
          </div>

          <p className="text-h4 text-ink">{post.summary}</p>

          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="(min-width: 800px) 760px, 100vw"
              className="object-cover"
            />
          </div>

          {post.body.length > 0 && <ArticleBody value={post.body} />}

          <Link
            href="/news"
            className="self-start whitespace-pre text-button text-text-brand hover:underline"
          >
            {"←  Back to all news and events"}
          </Link>
        </div>
      </article>

      {more.length > 0 && (
        <section className="bg-surface-200 pb-20">
          <div className="mx-auto flex max-w-page flex-col gap-10 px-4">
            <div className="flex flex-col gap-4">
              <SectionLabel>KEEP READING</SectionLabel>
              <h2 className="text-h2 text-ink">
                More news and <span className="text-text-brand">insights</span>
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {more.map((p) => (
                <NewsCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function PostSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading post">
      <section className="bg-surface-brand py-16">
        <div className="mx-auto flex max-w-page flex-col gap-4 px-4">
          <div className="h-4 w-56 animate-pulse rounded bg-white/20" />
          <div className="h-12 w-2/3 animate-pulse rounded bg-white/20" />
        </div>
      </section>
      <div className="bg-surface-200 py-16">
        <div className="mx-auto flex max-w-[760px] flex-col gap-8 px-4">
          <div className="h-6 w-48 animate-pulse rounded bg-line" />
          <div className="h-16 w-full animate-pulse rounded bg-line" />
          <div className="aspect-[3/2] w-full animate-pulse rounded-lg bg-line" />
        </div>
      </div>
    </div>
  );
}
