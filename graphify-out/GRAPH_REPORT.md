# Graph Report - Project  (2026-11-05)

## Corpus Check
- 69 files · ~1,035,261 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .lock 1, (none) 1, .ico 1)

## Summary
- 273 nodes · 632 edges · 14 communities (13 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.7)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- about/page.tsx
- Home & Services Pages
- Project Config & Deps
- Shared UI & Partner
- Offices.tsx
- SectionLabel
- Forms & FAQ Accordion
- TypeScript Config
- Build Log & Design System
- Button
- Posts.tsx
- app/page.tsx
- Next.js Agent Rules
- Section Heading

## God Nodes (most connected - your core abstractions)
1. `SectionLabel()` - 51 edges
2. `next` - 36 edges
3. `Button()` - 25 edges
4. `Footer()` - 20 edges
5. `Header()` - 19 edges
6. `compilerOptions` - 16 edges
7. `Home()` - 15 edges
8. `PageHero()` - 15 edges
9. `CtaBand()` - 14 edges
10. `AboutPage()` - 10 edges

## Surprising Connections (you probably didn't know these)
- `AboutPage()` --calls--> `Introduction()`  [EXTRACTED]
  app/about/page.tsx → components/about/Introduction.tsx
- `AboutPage()` --calls--> `Offices()`  [EXTRACTED]
  app/about/page.tsx → components/about/Offices.tsx
- `AboutPage()` --calls--> `PrecedentPartner()`  [EXTRACTED]
  app/about/page.tsx → components/about/PrecedentPartner.tsx
- `AboutPage()` --calls--> `Team()`  [EXTRACTED]
  app/about/page.tsx → components/about/Team.tsx
- `AboutPage()` --calls--> `Values`  [EXTRACTED]
  app/about/page.tsx → components/about/Values.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Figma-to-code implementation workflow** — log_figma_design_file, log_components_from_figma, log_design_system, log_build_all_pages [INFERRED 0.85]

## Communities (14 total, 1 thin omitted)

### Community 0 - "about/page.tsx"
Cohesion: 0.16
Nodes (24): AboutPage(), metadata, ClientsPage(), metadata, ContactPage(), metadata, FaqPage(), metadata (+16 more)

### Community 1 - "Home & Services Pages"
Cohesion: 0.06
Nodes (34): eslintConfig, dependencies, framer-motion, lucide-react, next, react, react-dom, devDependencies (+26 more)

### Community 2 - "Project Config & Deps"
Cohesion: 0.15
Nodes (14): metadata, ServicesPage(), HomeServices(), services, IndustryTile(), IndustryTileProps, Industries, IndustriesProps (+6 more)

### Community 3 - "Shared UI & Partner"
Cohesion: 0.14
Nodes (14): positions, steps, FaqSection(), groups, FaqAccordion(), FaqAccordionProps, Item, FaqItem() (+6 more)

### Community 4 - "Offices.tsx"
Cohesion: 0.26
Nodes (8): Offices(), ReachUs(), ContactInfoCard(), ContactInfoCardProps, icons, SocialLinks(), SocialLinksProps, socials

### Community 5 - "SectionLabel"
Cohesion: 0.13
Nodes (19): Introduction(), stats, Values, ClientsIntro(), stats, ContactMain(), OfficeKey, offices (+11 more)

### Community 6 - "Forms & FAQ Accordion"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 7 - "TypeScript Config"
Cohesion: 0.12
Nodes (17): Animations and icons (framer-motion, lucide-react), Initial component files (Button, Header, Footer, etc.), Build all pages (8 routes), Components rewritten from Figma, Design system tokens (globals.css), Figma file Chandranath Company Design System & Wireframes, Fonts Inter and Roboto, Footer credit (Design by Prablo 360 Team) (+9 more)

### Community 8 - "Build Log & Design System"
Cohesion: 0.13
Nodes (14): inter, metadata, roboto, credentials, PrecedentPartner(), Eyebrow(), EyebrowProps, FeatureCheck() (+6 more)

### Community 9 - "Button"
Cohesion: 0.15
Nodes (15): CareersPage(), metadata, Team(), Button(), ButtonProps, sizes, variants, ApplicationForm() (+7 more)

### Community 10 - "Posts.tsx"
Cohesion: 0.47
Nodes (4): filters, Posts, NewsCard(), NewsCardProps

### Community 12 - "app/page.tsx"
Cohesion: 0.12
Nodes (19): Home(), clients, LogoGrid(), ClientTile(), ClientTileProps, HeroCarousel(), HomeClients(), row1 (+11 more)

### Community 13 - "Next.js Agent Rules"
Cohesion: 0.67
Nodes (3): node_modules/next/dist/docs guide, Next.js Agent Rules (breaking changes notice), Next.js docs check (Server vs Client Components)

## Knowledge Gaps
- **17 isolated node(s):** `react-dom`, `@tailwindcss/turbopack`, `@types/node`, `@types/react`, `@types/react-dom` (+12 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 125 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Build Log & Design System` to `about/page.tsx`, `Home & Services Pages`, `Project Config & Deps`, `Shared UI & Partner`, `Offices.tsx`, `SectionLabel`, `Button`, `Posts.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.295) - this node is a cross-community bridge._
- **What connects `react-dom`, `@tailwindcss/turbopack`, `@types/node` to the rest of the system?**
  _17 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Home & Services Pages` be split into smaller, more focused modules?**
  _Cohesion score 0.05714285714285714 - nodes in this community are weakly interconnected._
- **Why does `SectionLabel()` connect `SectionLabel` to `Project Config & Deps`, `Shared UI & Partner`, `Offices.tsx`, `Build Log & Design System`, `Button`, `Posts.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Should `Shared UI & Partner` be split into smaller, more focused modules?**
  _Cohesion score 0.14035087719298245 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Shared UI & Partner` to `Home & Services Pages`, `SectionLabel`, `Build Log & Design System`, `Button`, `Posts.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Should `SectionLabel` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._