import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Featured from "@/components/news/Featured";
import Posts from "@/components/news/Posts";
import PageHero from "@/components/PageHero";
import { getPosts } from "@/lib/sanity/queries";

export const metadata: Metadata = pageMetadata({
  title: "News & Events",
  description:
    "Updates from our firm, notes on tax and audit matters, and photos from our events.",
  path: "/news",
});

export default async function NewsPage() {
  const posts = await getPosts();

  return (
    <>
      <Header active="/news" />
      <main>
        <PageHero
          title="News & Events"
          lead="Updates from our firm, notes on tax and audit matters, and photos from our events."
          image="/images/news/hero.png"
        />
        <Featured posts={posts.slice(0, 3)} />
        <Posts posts={posts} />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
