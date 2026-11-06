# Work Log

## 2026-11-04

### Figma design review (read-only)
- Opened Figma file `QMBaTYGrpjUKIpYYup4GFJ`, node `66:2` (Chandranath – Company – Design System & Wireframes).
- Pulled metadata and an overview screenshot. No project files were changed in this step.

### Next.js docs check
- Read `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md` (required by AGENTS.md).
- All components below are Server Components (no state or browser APIs), so no `"use client"` is used.

### Component files created (components only, nothing else touched)
Location: `components/`

| File | Purpose |
| --- | --- |
| `Button.tsx` | Link-style button with primary / outline / light variants |
| `SectionHeading.tsx` | Eyebrow, title with red accent word, description |
| `Header.tsx` | Maroon top bar with logo, nav links and Contact button |
| `Footer.tsx` | Maroon footer with link columns and copyright |
| `PageHero.tsx` | Maroon page title banner used on inner pages |
| `CtaBand.tsx` | "Talk to us today" call-to-action band shown before the footer |
| `ServiceCard.tsx` | Card for a service with title, text and link |
| `StatCard.tsx` | Number and label stat tile |
| `FaqAccordion.tsx` | Accordion built on `<details>`/`<summary>` |
| `ContactForm.tsx` | Name / email / message form (no submit handler yet) |

### Notes and assumptions
- Brand maroon is approximated as `#8b1a2f` (hover `#6f1425`) from the screenshot. It is not taken from Figma variables. It is hard-coded in Tailwind classes and should be replaced with real tokens later.
- Nav labels, footer links and the `/about`, `/services`, `/clients`, `/news`, `/careers`, `/faq`, `/contact` routes are inferred from the page names in the design. These routes don't exist yet.
- Logo is plain text for now. No images were added.
- Not done (not requested): pages, layout changes, `globals.css` edits, fonts, images, routes, dependency installs, lint/build runs.

---

### Coding the components from Figma (request: "now code them")
Source nodes read with `get_design_context` (file `QMBaTYGrpjUKIpYYup4GFJ`, session `f363e8e3-6ba4-4761-a28b-d010fef0c60c`):
Navbar `66:4`, Footer `66:68`, CTA band `66:67`, Page hero `66:72`, Stat item `66:9`, Service letter card `76:1123`, FAQ item `66:306`, Message form `66:267`.

#### Assets downloaded into `public/images/` (no temporary Figma URLs left in code)
- `logo.png` (264×246), used by the Wordmark
- `page-hero.png` (1536×864), used as the PageHero background
- `service-audit.jpg` (1331×749), used as the ServiceCard photo. Figma served JPEG data, so it was renamed from `.png`
- `icon-calendar.svg`, used by StatCard
- `icon-chevron-down.svg`, used by the ContactForm subject select

#### Components rewritten to match Figma (`components/`)
- `Button.tsx`: variants `primary`, `onBrandSolid`, `onBrandOutline`; sizes `md` (44px) and `lg` (52px); 8px radius; 15px semibold
- `Wordmark.tsx` (NEW, shared by Header and Footer): logo image plus "CHANDRANATH & COMPANY / CHARTERED ACCOUNTANTS"; `default` and `onBrand` tones
- `Header.tsx`: crimson top bar (address, phone, email), white main bar with Wordmark, 6 nav links with active underline (`active` prop) and a Contact Us button
- `Footer.tsx`: brand band with About, Services, Company and Contact columns, social pills, divider and bottom row with useful links; real contact details from the design
- `CtaBand.tsx`: rounded brand card with title, text, and "Call us" / "Send a message" buttons
- `PageHero.tsx`: background photo, crimson gradient overlay, breadcrumb, H1 and lead
- `StatCard.tsx`: icon tile, value and label. The text is white because the design places it on the brand-coloured stats strip
- `ServiceCard.tsx`: photo panel, title, description and "Learn more →" link
- `FaqAccordion.tsx`: `<details>`-based accordion, first item open by default, "+" / "–" marker, keyboard accessible
- `ContactForm.tsx`: "How can we help?" form with full name, email, phone (+ helper text), subject select, message and Send button
- `SectionHeading.tsx`: restyled to the 34/42 Inter bold heading with a crimson accent word. Not verified against the Figma "Section label" / "Heading" nodes (not fetched)

#### Verification
- `npx tsc --noEmit` and `npx eslint components`: no errors.
- Not done: visual comparison in a browser (no page renders these yet).

#### Deviations and open items (not changed, because only components were requested)
- Colors are hard-coded hex values from the Figma tokens: action `#bd1f36`, surface-brand `#85182a`, on-brand-muted `#f3d3d8`, line `#e3d7d8`, ink `#1f1618`, ink-muted `#5c4f52`, line-strong `#8a7b7e`, ink-subtle `#6f6366`, crimson/800 `#641220`. They are not yet in `globals.css` as theme tokens.
- Fonts: the design uses Inter (headings/UI) and Roboto (body). They are not loaded, because `app/layout.tsx` still uses Geist and `globals.css` still sets Arial. Text will fall back until fonts are wired in.
- Routes (`/about`, `/services`, `/clients`, `/news`, `/careers`, `/faq`, `/contact`) don't exist yet, so links will 404.
- The Service card's big crimson initial letter from Figma was not reproduced: the Figma text layer is empty (zero-width character), so it renders as a photo only.
- The contact form has no submit handler.
- The Chat button (`70:1085`, fixed bottom right) was not built.

---

### Design system (request: "create design system")
Variables read from Figma node `66:3` with `get_variable_defs`. Token names mirror the Figma variables.

#### `app/globals.css` (rewritten)
- `@theme` color tokens: `crimson-600/700/800`, `surface-brand`, `surface-brand-soft`, `surface-100`, `surface-200`, `tint`, `ink`, `ink-muted`, `ink-subtle`, `text-brand`, `on-brand`, `on-brand-muted`, `action`, `action-hover`, `on-action`, `line`, `line-strong`
- Radius tokens: `sm` 4px, `md` 8px, `lg` 14px, `pill` 999px
- Shadow token: `shadow-md`. Layout token: `max-w-page` (1200px)
- Font tokens: `font-heading` (Inter), `font-body` (Roboto)
- Type-style utilities from the Figma text styles: `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-h4`, `text-eyebrow`, `text-wordmark`, `text-nav`, `text-button`, `text-label`, `text-body-lg`, `text-body`, `text-body-sm`, `text-caption`. Figma letter-spacing is in percent, so it is converted to `em`.
- Body now uses the surface and ink tokens and the Roboto body font. The default dark-mode block was removed, because the design is light only.
- Spacing is not redefined: the Figma `space-*` scale (4/8/12/16/20/24/32/40/48/64/80/96) matches Tailwind's default 4px scale (`1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24`).

#### `app/layout.tsx`
- Geist and Geist Mono replaced by Inter (`--font-inter`) and Roboto 400 (`--font-roboto`) via `next/font/google`.

#### Components switched from hard-coded values to tokens
- All hex colors, font-size/line-height classes, radii and `max-w-[1200px]` in `components/*.tsx` now use the tokens above.
- Radius rename: old `rounded-lg` (8px) is now `rounded-md`, old 14px is now `rounded-lg`, and `rounded` is now `rounded-sm`, to match the Figma radius scale.
- Still literal: the PageHero gradient `rgba(133,24,42,…)` (a transparency ramp of `surface-brand`), and layout sizes such as `h-[52px]`, `w-[400px]`.

#### Verification
- `npx tsc --noEmit`, `npx eslint components app`, `npx next build`: all pass.
- Not done: visual check in a browser.
- Not done (not requested): pages, routes, metadata title ("Create Next App" is unchanged).

---

### Preview page (request: "place all components in app/page.tsx")
- Replaced the default Next.js starter in `app/page.tsx` with a preview page that renders every component: Header, PageHero, StatCard (on a brand band), SectionHeading, ServiceCard, Button variants, Wordmark (both tones), FaqAccordion, ContactForm, CtaBand and Footer.
- Sample FAQ text and copy are placeholders for checking only. Layout is a simple stack of labelled sections, not the final Figma page.
- `npx tsc --noEmit` and `npx eslint app components`: no errors. Not viewed in a browser by me.

---

### Fix: prerender error in Footer
- Error: `Route "/": Next.js encountered the unstable value new Date() while prerendering` at `components/Footer.tsx` (Cache Components is enabled).
- Fix: replaced `new Date().getFullYear()` with a fixed `copyrightYear = 2026` constant, which matches the Figma footer text ("© 2026"). The year must be updated by hand each year (or made dynamic later with `"use cache"` / a client component).
- `tsc` and `next build` re-run (results below in chat).

---

### Animations and icons (request: framer-motion, hover/count-up/FAQ/footer icons)
- Installed: `framer-motion` ^14.9.0 and `lucide-react` ^1.67.0 (`npm install`, so `package.json` and `package-lock.json` changed).
- `ServiceCard.tsx` (now a client component): image zooms to 1.1x on card hover (0.5s ease-out) inside an `overflow-hidden` frame.
- `StatCard.tsx` (now a client component): the number counts up from 0 when the card scrolls into view (once, 2s ease-out). Keeps prefix/suffix (`16+`, `98%`), comma grouping and decimals. With "reduce motion" on, the final number is shown without animation. The full value is in `aria-label`.
- `FaqAccordion.tsx` (now a client component): only one answer open at a time (opening one closes the others; clicking the open one closes it). Height/opacity animation via `AnimatePresence`. Uses `<button aria-expanded aria-controls>` and `role="region"`. The earlier `<details>` version was replaced. `defaultOpen` can now be `null` (all closed).
- `Footer.tsx` (still a Server Component): lucide icons added to the contact column through a small `ContactRow` helper: `MapPin` (both addresses), `Phone` (Tel lines), `Smartphone` (mobile numbers), `Mail` (both emails).
- Verification: `tsc`, `eslint components app` and `next build` pass (an ESLint `set-state-in-effect` error in StatCard was fixed by deriving the reduced-motion value instead of setting state in the effect). Not viewed in a browser.
- Note: an earlier combined shell command failed with a quoting error and made no changes. The files were then written with the file tools.

---

### Build all pages (request: "build all pages now")
Built from the Figma frames in node `66:2` (all 8 desktop pages), reading each section with `get_design_context`. Build result: `npx tsc --noEmit`, `npx eslint app components` and `npx next build` all pass; 8 routes are generated: `/`, `/about`, `/services`, `/clients`, `/news`, `/careers`, `/contact`, `/faq`.

#### Pages (`app/`)
- `app/page.tsx` (Home): replaced the earlier component preview page with the real Home page
- `app/about/page.tsx`, `app/services/page.tsx`, `app/clients/page.tsx`, `app/news/page.tsx`, `app/careers/page.tsx`, `app/contact/page.tsx`, `app/faq/page.tsx`
- Each page sets its own `metadata` title/description and passes `active` to `Header`. Hero text, breadcrumb and hero photo come from the Figma Page hero of that page.
- CTA band is on every page except Careers and Contact, matching the design.

#### Section components added (`components/`)
- `home/`: HeroCarousel (3 slides, arrows and dots, no autoplay), StatsStrip (count-up), AboutCompany, HomeServices, HowWeWork, VisionMission, HomeClients, HomeNews
- `about/`: Introduction, PrecedentPartner, Team, Values, Offices
- `services/`: Overview, ServiceDetail (4 services, alternating layout)
- `clients/`: ClientsIntro, LogoGrid (18 clients, 12 with logos)
- `news/`: Featured, Posts (client component with working All / News / Tax updates / Events filter)
- `careers/`: WhyJoinUs, YourPath, OpenPositions, ApplicationForm (client component; file name shown after choosing a CV)
- `contact/`: ReachUs, ContactMain, OfficesPanel (client component; Panadura/Rathnapura tabs switch the map label, "Call office" and "Get directions")
- `faq/`: FaqSection (client component; topic buttons scroll to a group; only one answer open across the whole page)
- `sections/Industries.tsx`: shared by Home, Services and Clients (props for the two heading lines, description and spacing)

#### Shared components added
`Eyebrow` (onBrand and default tint chips), `SectionLabel`, `FeatureCheck`, `IndustryTile`, `ClientTile`, `NewsOverlayCard`, `NewsRowCard`, `NewsCard`, `TeamCard`, `ContactInfoCard`, `SocialLinks`, `FaqItem`.

#### Changed existing files
- `Button.tsx`: new `secondary` variant (crimson outline).
- `StatCard.tsx`: `iconWidth` / `iconHeight` props so each SVG keeps its own intrinsic size.
- `FaqAccordion.tsx`: now built on the new `FaqItem` (same single-open behaviour).
- `Footer.tsx`: social pills replaced by `SocialLinks`.
- `ClientTile.tsx`: name-only variant (no logo) added.
- `app/globals.css`: `--container-page` changed from 1200px to 1232px so content is 1200px wide inside the 16px gutters.

#### Assets downloaded into `public/images/` (no temporary Figma URLs in code)
- `home/` (about, services, industries, vision/mission, principal), `about/` (portraits), `clients/` (12 logos), `news/` (hero, tax-returns), `contact/map.svg`, `icons/` (check, check-small, chevrons, eye, target, pin, briefcase, users, contact phone/mail/pin).
- Photos reused across pages are the same Figma images (same asset hash), stored once.

#### Content and behaviour decisions to review
- Hero carousel: the design shows one finished slide plus two dots. Slides 2 and 3 repeat slide 1 until real content is supplied.
- FAQ: Figma only has answers for the first 3 questions (partly written from other facts in the design: offices, 1-working-day reply). The other 10 questions show a neutral "please call or send a message" answer. The client must supply real answers.
- News: "Load more" is not rendered, because there are only 3 older posts and nothing further to load. The 3 post cards are filterable.
- Careers: "View and apply" and "Send your CV" scroll to the application form on the same page (`#apply`). The design says each job opens its own page; no job detail pages exist.
- Forms (Contact, Careers): fields and required/validation attributes are in place, but there is no submit handler or backend yet.
- Links: WhatsApp uses `https://wa.me/94761950780` (the mobile number from the footer); Facebook and LinkedIn link to `#` (no URLs in the design). "Get directions" opens a Google Maps search for the address.
- Team and partner photos in Figma are small (about 205-232 px wide), so they look soft at full size.
- Page images: About uses the default hero photo; hero photos on other pages were matched by asset hash to files already downloaded.
- Chat button (fixed bottom right, node `70:1085`): still not built.
- Not checked in a browser: layout and pixel comparison against Figma were not done.

---

### Footer credit
- Added a centered line "Design by Prablo 360 Team" under the copyright / useful-links row in `components/Footer.tsx` (same caption style and muted colour). It shows on every page. Not in the Figma design.
