import type { ClientItem, PostItem } from "./types";

/** Shown until a Sanity project is configured (NEXT_PUBLIC_SANITY_PROJECT_ID). */
export const fallbackPosts: PostItem[] = [
  { id: "1", slug: "our-new-website-is-live", href: "/news/our-new-website-is-live", category: "News", date: "1 November 2026", title: "Our new website is live", summary: "Read about our services, meet our team, find our Panadura and Rathnapura offices, and ask a question online.", image: "/images/home/about-office.png", featured: true },
  { id: "3", slug: "preparing-for-your-annual-audit-a-checklist", href: "/news/preparing-for-your-annual-audit-a-checklist", category: "News", date: "24 October 2026", title: "Preparing for your annual audit: a checklist", summary: "A short checklist to help you get ready for your annual audit.", image: "/images/home/mission.png", featured: false },
  { id: "2", slug: "staying-on-time-with-your-tax-returns", href: "/news/staying-on-time-with-your-tax-returns", category: "Tax updates", date: "10 October 2026", title: "Staying on time with your tax returns", summary: "Keep your records in one place through the year and send them to us early, so your return is prepared without a rush.", image: "/images/news/tax-returns.png", featured: false },
  { id: "4", slug: "photos-from-our-events", href: "/news/photos-from-our-events", category: "Events", date: "26 September 2026", title: "Photos from our events", summary: "Highlights from firm events and seminars.", image: "/images/news/hero.png", featured: false },
  { id: "5", slug: "our-rathnapura-branch", href: "/news/our-rathnapura-branch", category: "News", date: "12 September 2026", title: "Our Rathnapura branch", summary: "Serving clients across the Sabaragamuwa Province from Pelwadiya, Rathnapura.", image: "/images/home/vision.png", featured: false },
  { id: "6", slug: "keeping-good-records-for-vat", href: "/news/keeping-good-records-for-vat", category: "Tax updates", date: "29 August 2026", title: "Keeping good records for VAT", summary: "Simple habits that make your VAT returns faster and more accurate.", image: "/images/home/about-team.png", featured: false },
];

export const fallbackClients: ClientItem[] = [
  { id: "1", name: "Saru Blue Sapphire Hotel", logo: "/images/clients/saru-blue-sapphire.png", showOnHome: true },
  { id: "2", name: "SARU Property Development (Pvt) Ltd", showOnHome: false },
  { id: "3", name: "SARU Investments (Pvt) Ltd", showOnHome: false },
  { id: "4", name: "Anoma Chemicals, Embilipitiya", showOnHome: false },
  { id: "5", name: "Anru Trading", logo: "/images/clients/anru-trading.png", showOnHome: true },
  { id: "6", name: "C Y International", logo: "/images/clients/cy-international.png", showOnHome: true },
  { id: "7", name: "C H E Investments (Pvt) Ltd", logo: "/images/clients/che-investments.png", showOnHome: true },
  { id: "8", name: "Chethana Investments (Pvt) Ltd", logo: "/images/clients/chethana-investments.png", showOnHome: true },
  { id: "9", name: "Chethana Trust Investments (Pvt) Ltd", showOnHome: false },
  { id: "10", name: "Flash International", showOnHome: false },
  { id: "11", name: "G S Auto Spares (Pvt) Ltd", logo: "/images/clients/gs-auto-spares.png", showOnHome: true },
  { id: "12", name: "International Crop Science (Pvt) Ltd", logo: "/images/clients/international-crop-science.png", showOnHome: false },
  { id: "13", name: "Milla Plantations (Pvt) Ltd", logo: "/images/clients/milla-plantations.png", showOnHome: false },
  { id: "14", name: "Millavitiya Ceylon Tea (Pvt) Ltd", logo: "/images/clients/millavitiya-ceylon-tea.png", showOnHome: false },
  { id: "15", name: "Royal Reach Family Resort", logo: "/images/clients/royal-reach.png", showOnHome: false },
  { id: "16", name: "Top Notch Water System (Pvt) Ltd", showOnHome: false },
  { id: "17", name: "TRS Investments (Pvt) Ltd", showOnHome: false },
  { id: "18", name: "Asset Grameen (Pvt) Ltd", showOnHome: false },
];
