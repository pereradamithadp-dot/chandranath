import { isSanityConfigured } from "@/sanity/env";
import { fallbackClients, fallbackPosts } from "./fallback";
import { getSanityClient } from "./client";
import { imageUrl } from "./image";
import type { ClientItem, PortableBlock, PostDetail, PostItem } from "./types";

export const SANITY_TAG = "sanity";

/**
 * Sanity fetches use Next's standard fetch cache (ISR), which OpenNext on
 * Cloudflare Workers supports. Production: refresh hourly (the Sanity webhook
 * refreshes instantly on publish). Development: refresh every second.
 *
 * Note: Next's "use cache" / cacheComponents hangs on the Workers runtime
 * (it relies on setTimeout behaviour Workers doesn't provide), so don't use it here.
 */
const cmsFetchOptions = {
  next: {
    revalidate: process.env.NODE_ENV === "development" ? 1 : 3600,
    tags: [SANITY_TAG],
  },
};

type RawPost = {
  _id: string;
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  excerpt: string;
  image: Parameters<typeof imageUrl>[0];
  featured?: boolean;
};

type RawPostDetail = RawPost & { body?: PortableBlock[] };

type RawClient = {
  _id: string;
  name: string;
  logo?: Parameters<typeof imageUrl>[0];
  showOnHome?: boolean;
};

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]
  | order(featured desc, publishedAt desc) {
    _id, "slug": slug.current, title, category, publishedAt, excerpt, image, featured
  }`;

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id, "slug": slug.current, title, category, publishedAt, excerpt, image, featured, body
}`;

const CLIENTS_QUERY = `*[_type == "client"] | order(order asc, name asc) {
  _id, name, logo, showOnHome
}`;

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export async function getPosts(): Promise<PostItem[]> {
  if (!isSanityConfigured) return fallbackPosts;

  const raw = await getSanityClient().fetch<RawPost[]>(POSTS_QUERY, {}, cmsFetchOptions);
  return raw.map(toPostItem);
}

export async function getPost(slug: string): Promise<PostDetail | null> {
  if (!isSanityConfigured) {
    const post = fallbackPosts.find((p) => p.slug === slug);
    return post ? { ...post, body: [] } : null;
  }

  const raw = await getSanityClient().fetch<RawPostDetail | null>(POST_QUERY, { slug }, cmsFetchOptions);
  return raw ? { ...toPostItem(raw), body: raw.body ?? [] } : null;
}

function toPostItem(p: RawPost): PostItem {
  return {
    id: p._id,
    slug: p.slug,
    href: `/news/${p.slug}`,
    category: p.category,
    date: dateFormat.format(new Date(p.publishedAt)),
    publishedAt: p.publishedAt,
    title: p.title,
    summary: p.excerpt,
    image: imageUrl(p.image, 1200),
    featured: Boolean(p.featured),
  };
}

export async function getClients(): Promise<ClientItem[]> {
  if (!isSanityConfigured) return fallbackClients;

  const raw = await getSanityClient().fetch<RawClient[]>(CLIENTS_QUERY, {}, cmsFetchOptions);
  return raw.map((c) => ({
    id: c._id,
    name: c.name,
    logo: c.logo ? imageUrl(c.logo, 400) : undefined,
    showOnHome: Boolean(c.showOnHome),
  }));
}
