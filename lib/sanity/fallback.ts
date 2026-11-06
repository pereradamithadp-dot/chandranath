import type { ClientItem, PostItem } from "./types";

/** Shown until a Sanity project is configured (NEXT_PUBLIC_SANITY_PROJECT_ID). */
export const fallbackPosts: PostItem[] = [
  { id: "1", category: "News", date: "1 November 2026", title: "Our new website is live", summary: "Read about our services, meet our team, find our Panadura and Rathnapura offices, and ask a question online.", image: "/images/home/about-office.png", featured: true },
  { id: "2", category: "Tax updates", date: "10 October 2026", title: "Staying on time with your tax returns", summary: "Keep your records in one place through the year and send them to us early, so your return is prepared without a rush.", image: "/images/news/tax-returns.png", featured: false },
  { id: "3", category: "News", date: "24 October 2026", title: "Preparing for your annual audit: a checklist", summary: "A short checklist to help you get ready for your annual audit.", image: "/images/home/mission.png", featured: false },
  { id: "4", category: "Events", date: "26 September 2026", title: "Photos from our events", summary: "Highlights from firm events and seminars.", image: "/images/news/hero.png", featured: false },
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
