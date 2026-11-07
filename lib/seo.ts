import type { Metadata } from "next";

/** Public site URL. Override with NEXT_PUBLIC_SITE_URL (no trailing slash). */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://chandranathandcompany.com"
).replace(/\/$/, "");

export const SITE_NAME = "Chandranath & Company";

export const SITE_DESCRIPTION =
  "Chartered accountants in Panadura and Rathnapura, Sri Lanka. Audit, tax and advice for hotels, plantations, traders, manufacturers and investment companies.";

/** Default social share image (1536×864), relative to metadataBase. */
export const DEFAULT_OG_IMAGE = "/images/page-hero.png";

/**
 * Metadata for one page: title (the root layout's template adds
 * "| Chandranath & Company"), description, canonical URL and matching
 * Open Graph / Twitter tags.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
}: {
  title: string;
  description: string;
  /** Route path, e.g. "/about". */
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: SITE_NAME,
      locale: "en_LK",
      url: path,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
