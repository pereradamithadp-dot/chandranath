import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import HideNetlifyBadge from "@/components/HideNetlifyBadge";
import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Chartered Accountants`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "chartered accountants",
    "chartered accountants Sri Lanka",
    "chartered accountants Panadura",
    "chartered accountants Rathnapura",
    "audit",
    "tax services",
    "tax advisory",
    "accounting firm",
    "Chandranath & Company",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/** Business details for search engines (schema.org AccountingService). */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  description: SITE_DESCRIPTION,
  email: "info@chandranath.com",
  telephone: "+94 38 2237256",
  foundingDate: "2010",
  areaServed: "LK",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 08, Kulathunga Road",
    addressLocality: "Panadura",
    addressCountry: "LK",
  },
  department: {
    "@type": "AccountingService",
    name: `${SITE_NAME} – Rathnapura Branch`,
    email: "branch@chandranath.com",
    telephone: "+94 719103351",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ganegama, Pelwadiya",
      addressLocality: "Rathnapura",
      addressCountry: "LK",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <HideNetlifyBadge />
      </body>
    </html>
  );
}
