import { cacheLife, cacheTag } from "next/cache";
import { isSanityConfigured } from "@/sanity/env";
import { fallbackClients, fallbackPosts } from "./fallback";
import { getSanityClient } from "./client";
import { imageUrl } from "./image";
import type { ClientItem, PostItem } from "./types";

export const SANITY_TAG = "sanity";

type RawPost = {
  _id: string;
  title: string;
  category: string;
  publishedAt: string;
  excerpt: string;
  image: Parameters<typeof imageUrl>[0];
  featured?: boolean;
};

type RawClient = {
  _id: string;
  name: string;
  logo?: Parameters<typeof imageUrl>[0];
  showOnHome?: boolean;
};

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]
  | order(featured desc, publishedAt desc) {
    _id, title, category, publishedAt, excerpt, image, featured
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
  "use cache";
  cacheTag(SANITY_TAG);
  cacheLife("hours");

  if (!isSanityConfigured) return fallbackPosts;

  const raw = await getSanityClient().fetch<RawPost[]>(POSTS_QUERY);
  return raw.map((p) => ({
    id: p._id,
    category: p.category,
    date: dateFormat.format(new Date(p.publishedAt)),
    title: p.title,
    summary: p.excerpt,
    image: imageUrl(p.image, 1200),
    featured: Boolean(p.featured),
  }));
}

export async function getClients(): Promise<ClientItem[]> {
  "use cache";
  cacheTag(SANITY_TAG);
  cacheLife("hours");

  if (!isSanityConfigured) return fallbackClients;

  const raw = await getSanityClient().fetch<RawClient[]>(CLIENTS_QUERY);
  return raw.map((c) => ({
    id: c._id,
    name: c.name,
    logo: c.logo ? imageUrl(c.logo, 400) : undefined,
    showOnHome: Boolean(c.showOnHome),
  }));
}
