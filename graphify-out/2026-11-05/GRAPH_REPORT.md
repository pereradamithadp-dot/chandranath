# Graph Report - Project  (2026-11-05)

## Corpus Check
- 67 files · ~1,034,882 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .lock 1, (none) 1, .ico 1)

## Summary
- 266 nodes · 618 edges · 15 communities (14 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.7)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Careers & FAQ Pages
- Home & Services Pages
- Project Config & Deps
- Shared UI & Partner
- About Page
- Contact Page
- Forms & FAQ Accordion
- TypeScript Config
- Build Log & Design System
- Clients Page
- News Cards
- Contact Offices
- Root Layout & Fonts
- Next.js Agent Rules
- Section Heading

## God Nodes (most connected - your core abstractions)
1. `SectionLabel()` - 51 edges
2. `next` - 36 edges
3. `Button()` - 25 edges
4. `Footer()` - 20 edges
5. `Header()` - 19 edges
6. `compilerOptions` - 16 edges
7. `PageHero()` - 15 edges
8. `CtaBand()` - 14 edges
9. `Home()` - 13 edges
10. `AboutPage()` - 10 edges

## Surprising Connections (you probably didn't know these)
- `AboutPage()` --calls--> `PrecedentPartner()`  [EXTRACTED]
  app/about/page.tsx → components/about/PrecedentPartner.tsx
- `AboutPage()` --calls--> `CtaBand()`  [EXTRACTED]
  app/about/page.tsx → components/CtaBand.tsx
- `AboutPage()` --calls--> `Footer()`  [EXTRACTED]
  app/about/page.tsx → components/Footer.tsx
- `AboutPage()` --calls--> `Header()`  [EXTRACTED]
  app/about/page.tsx → components/Header.tsx
- `AboutPage()` --calls--> `PageHero()`  [EXTRACTED]
  app/about/page.tsx → components/PageHero.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Figma-to-code implementation workflow** — log_figma_design_file, log_components_from_figma, log_design_system, log_build_all_pages [INFERRED 0.85]

## Communities (15 total, 1 thin omitted)

### Community 0 - "Careers & FAQ Pages"
Cohesion: 0.11
Nodes (26): CareersPage(), metadata, FaqPage(), metadata, metadata, NewsPage(), Button(), ApplicationForm() (+18 more)

### Community 1 - "Home & Services Pages"
Cohesion: 0.06
Nodes (33): eslintConfig, dependencies, framer-motion, lucide-react, next, react, react-dom, devDependencies (+25 more)

### Community 2 - "Project Config & Deps"
Cohesion: 0.13
Nodes (24): Home(), metadata, ServicesPage(), HeroCarousel(), HomeClients(), row1, row2, HomeServices() (+16 more)

### Community 3 - "Shared UI & Partner"
Cohesion: 0.14
Nodes (14): positions, steps, FaqAccordion(), FaqAccordionProps, Item, FaqItem(), FaqItemProps, stats (+6 more)

### Community 4 - "About Page"
Cohesion: 0.18
Nodes (12): AboutPage(), metadata, Introduction(), stats, Offices(), Team(), Values, ContactInfoCard() (+4 more)

### Community 5 - "Contact Page"
Cohesion: 0.40
Nodes (6): HomeNews(), Featured(), NewsOverlayCard(), NewsOverlayCardProps, NewsRowCard(), NewsRowCardProps

### Community 6 - "Forms & FAQ Accordion"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 7 - "TypeScript Config"
Cohesion: 0.12
Nodes (17): Animations and icons (framer-motion, lucide-react), Initial component files (Button, Header, Footer, etc.), Build all pages (8 routes), Components rewritten from Figma, Design system tokens (globals.css), Figma file Chandranath Company Design System & Wireframes, Fonts Inter and Roboto, Footer credit (Design by Prablo 360 Team) (+9 more)

### Community 8 - "Build Log & Design System"
Cohesion: 0.15
Nodes (14): credentials, PrecedentPartner(), ButtonProps, sizes, variants, Eyebrow(), EyebrowProps, FeatureCheck() (+6 more)

### Community 9 - "Clients Page"
Cohesion: 0.18
Nodes (14): ContactPage(), metadata, ReachUs(), company, ContactRow(), Footer(), services, usefulLinks (+6 more)

### Community 10 - "News Cards"
Cohesion: 0.33
Nodes (6): ContactMain(), OfficeKey, offices, OfficesPanel(), ContactForm(), subjects

### Community 11 - "Contact Offices"
Cohesion: 0.33
Nodes (3): inter, metadata, roboto

### Community 12 - "Root Layout & Fonts"
Cohesion: 0.26
Nodes (8): ClientsPage(), metadata, ClientsIntro(), stats, clients, LogoGrid(), ClientTile(), ClientTileProps

### Community 13 - "Next.js Agent Rules"
Cohesion: 0.67
Nodes (3): node_modules/next/dist/docs guide, Next.js Agent Rules (breaking changes notice), Next.js docs check (Server vs Client Components)

## Knowledge Gaps
- **17 isolated node(s):** `react-dom`, `@tailwindcss/turbopack`, `@types/node`, `@types/react`, `@types/react-dom` (+12 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 122 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Build Log & Design System` to `Careers & FAQ Pages`, `Home & Services Pages`, `Project Config & Deps`, `Shared UI & Partner`, `About Page`, `Contact Page`, `Clients Page`, `News Cards`, `Contact Offices`, `Root Layout & Fonts`?**
  _High betweenness centrality (0.308) - this node is a cross-community bridge._
- **What connects `react-dom`, `@tailwindcss/turbopack`, `@types/node` to the rest of the system?**
  _17 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Careers & FAQ Pages` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Why does `SectionLabel()` connect `Project Config & Deps` to `Careers & FAQ Pages`, `Shared UI & Partner`, `About Page`, `Contact Page`, `Build Log & Design System`, `Clients Page`, `News Cards`, `Root Layout & Fonts`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **Should `Home & Services Pages` be split into smaller, more focused modules?**
  _Cohesion score 0.058823529411764705 - nodes in this community are weakly interconnected._
- **Should `Project Config & Deps` be split into smaller, more focused modules?**
  _Cohesion score 0.1253968253968254 - nodes in this community are weakly interconnected._
- **Should `Shared UI & Partner` be split into smaller, more focused modules?**
  _Cohesion score 0.14035087719298245 - nodes in this community are weakly interconnected._