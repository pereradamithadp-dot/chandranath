// Seeds Sanity with the site's original news posts and clients.
// Run: npm run seed:sanity   (needs SANITY_API_WRITE_TOKEN in .env.local)
// Safe to re-run: documents are only created if missing, and article text is
// only added to posts that have none, so edits made in the Studio are kept.
import { createReadStream } from "node:fs";
import path from "node:path";
import { createClient } from "@sanity/client";
import { articles } from "./articles.mjs";

const { NEXT_PUBLIC_SANITY_PROJECT_ID: projectId, NEXT_PUBLIC_SANITY_DATASET: dataset = "production", SANITY_API_WRITE_TOKEN: token } = process.env;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2025-01-01", useCdn: false });

const posts = [
  { title: "Our new website is live", category: "News", publishedAt: "2026-11-01", featured: true, image: "home/about-office.png",
    excerpt: "Read about our services, meet our team, find our Panadura and Rathnapura offices, and ask a question online." },
  { title: "Preparing for your annual audit: a checklist", category: "News", publishedAt: "2026-10-24", image: "home/mission.png",
    excerpt: "A short checklist to help you get ready for your annual audit." },
  { title: "Staying on time with your tax returns", category: "Tax updates", publishedAt: "2026-10-10", image: "news/tax-returns.png",
    excerpt: "Keep your records in one place through the year and send them to us early, so your return is prepared without a rush." },
  { title: "Photos from our events", category: "Events", publishedAt: "2026-09-26", image: "news/hero.png",
    excerpt: "Highlights from firm events and seminars." },
  { title: "Our Rathnapura branch", category: "News", publishedAt: "2026-09-12", image: "home/vision.png",
    excerpt: "Serving clients across the Sabaragamuwa Province from Pelwadiya, Rathnapura." },
  { title: "Keeping good records for VAT", category: "Tax updates", publishedAt: "2026-08-29", image: "home/about-team.png",
    excerpt: "Simple habits that make your VAT returns faster and more accurate." },
];

// Order = position in this list; the first six with showOnHome appear on the home page.
const clients = [
  { name: "Saru Blue Sapphire Hotel", logo: "saru-blue-sapphire.png", showOnHome: true },
  { name: "SARU Property Development (Pvt) Ltd" },
  { name: "SARU Investments (Pvt) Ltd" },
  { name: "Anoma Chemicals, Embilipitiya" },
  { name: "Anru Trading", logo: "anru-trading.png", showOnHome: true },
  { name: "C Y International", logo: "cy-international.png", showOnHome: true },
  { name: "C H E Investments (Pvt) Ltd", logo: "che-investments.png", showOnHome: true },
  { name: "Chethana Investments (Pvt) Ltd", logo: "chethana-investments.png", showOnHome: true },
  { name: "Chethana Trust Investments (Pvt) Ltd" },
  { name: "Flash International" },
  { name: "G S Auto Spares (Pvt) Ltd", logo: "gs-auto-spares.png", showOnHome: true },
  { name: "International Crop Science (Pvt) Ltd", logo: "international-crop-science.png" },
  { name: "Milla Plantations (Pvt) Ltd", logo: "milla-plantations.png" },
  { name: "Millavitiya Ceylon Tea (Pvt) Ltd", logo: "millavitiya-ceylon-tea.png" },
  { name: "Royal Reach Family Resort", logo: "royal-reach.png" },
  { name: "Top Notch Water System (Pvt) Ltd" },
  { name: "TRS Investments (Pvt) Ltd" },
  { name: "Asset Grameen (Pvt) Ltd" },
];

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 96);
const imagesDir = path.join(process.cwd(), "public", "images");

async function uploadImage(relPath) {
  const file = path.join(imagesDir, relPath);
  const asset = await client.assets.upload("image", createReadStream(file), { filename: path.basename(file) });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

let keyCount = 0;
const key = () => `k${(keyCount++).toString(36)}`;
const span = (text) => ({ _type: "span", _key: key(), text, marks: [] });

/** Converts the compact format in articles.mjs to Sanity Portable Text. */
function toPortableText(rows) {
  return rows.flatMap(([kind, content]) =>
    kind === "ul"
      ? content.map((item) => ({ _type: "block", _key: key(), style: "normal", listItem: "bullet", level: 1, markDefs: [], children: [span(item)] }))
      : [{ _type: "block", _key: key(), style: kind === "h2" ? "h2" : "normal", markDefs: [], children: [span(content)] }],
  );
}

const tx = client.transaction();

for (const p of posts) {
  const slug = slugify(p.title);
  const id = `post-${slug}`;
  console.log(`post   ${p.title}`);
  tx.createIfNotExists({
    _id: id,
    _type: "post",
    title: p.title,
    slug: { _type: "slug", current: slug },
    category: p.category,
    publishedAt: p.publishedAt,
    excerpt: p.excerpt,
    featured: Boolean(p.featured),
    image: await uploadImage(p.image),
  });
  if (articles[p.title]) {
    tx.patch(id, (patch) => patch.setIfMissing({ body: toPortableText(articles[p.title]) }));
  }
}

for (const [i, c] of clients.entries()) {
  console.log(`client ${c.name}`);
  tx.createIfNotExists({
    _id: `client-${slugify(c.name)}`,
    _type: "client",
    name: c.name,
    order: (i + 1) * 10,
    showOnHome: Boolean(c.showOnHome),
    ...(c.logo ? { logo: await uploadImage(path.join("clients", c.logo)) } : {}),
  });
}

await tx.commit();
console.log(`\nDone: ${posts.length} posts, ${clients.length} clients in ${projectId}/${dataset}.`);
