export type PostItem = {
  id: string;
  slug: string;
  /** Link to the post's own page. */
  href: string;
  category: string;
  /** Formatted for display, e.g. "10 October 2026". */
  date: string;
  /** ISO publish date, used for the sitemap. */
  publishedAt?: string;
  title: string;
  summary: string;
  image: string;
  featured: boolean;
};

export type ClientItem = {
  id: string;
  name: string;
  logo?: string;
  showOnHome: boolean;
};

export type PortableBlock = { _type: string; _key: string; [key: string]: unknown };

export type PostDetail = PostItem & {
  /** Sanity Portable Text; empty when no article has been written. */
  body: PortableBlock[];
};
