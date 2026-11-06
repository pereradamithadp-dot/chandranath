import Link from "next/link";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SocialLinks from "./SocialLinks";
import Wordmark from "./Wordmark";

const services = [
  "Audit & Assurance",
  "Tax Advisory",
  "Risk Advisory",
  "Business Process Outsourcing (BPO) Operations",
];

const company = [
  { href: "/about", label: "About Us" },
  { href: "/clients", label: "Our Clients" },
  { href: "/news", label: "News & Events" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact Us" },
];

const usefulLinks = [
  "Inland Revenue Department",
  "Central Bank of Sri Lanka",
  "CA Sri Lanka",
  "Securities and Exchange Commission",
];

const muted = "text-on-brand-muted";

function ContactRow({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2">
      <Icon aria-hidden className="mt-0.5 size-4 shrink-0 text-on-brand" />
      <div className="min-w-0">{children}</div>
    </div>
  );
}
// Fixed value (matches the Figma design). new Date() is not allowed during prerender with Cache Components.
const copyrightYear = 2026;

export default function Footer() {
  return (
    <footer className="bg-surface-brand pb-8 pt-16 text-on-brand">
      <div className="mx-auto flex max-w-page flex-col gap-12 px-4">
        <div className="flex gap-12">
          <div className="flex w-[400px] flex-col gap-3">
            <Wordmark tone="onBrand" />
            <p className={`text-body-sm ${muted}`}>
              Chartered accountants in Panadura. Registered in 2010, with a
              branch in Rathnapura.
            </p>
          </div>

          <div className="flex w-[210px] flex-col gap-3 text-body-sm">
            <p className="text-label">Services</p>
            {services.map((s) => (
              <p key={s} className={muted}>
                {s}
              </p>
            ))}
          </div>

          <div className="flex w-[170px] flex-col gap-3 text-body-sm">
            <p className="text-label">Company</p>
            {company.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`hover:text-on-brand ${muted}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className={`flex min-w-0 flex-1 flex-col gap-3 text-body-sm ${muted}`}>
            <p className="text-label text-on-brand">Contact</p>
            <ContactRow icon={MapPin}>
              <p>No. 08, Kulathunga Road, Panadura</p>
            </ContactRow>
            <ContactRow icon={Phone}>
              <p>Tel +94 38 2237256</p>
            </ContactRow>
            <ContactRow icon={Smartphone}>
              <p>
                Mobile +94 76 1950780
                <br />
                +94 76 2557685
              </p>
            </ContactRow>
            <ContactRow icon={Mail}>
              <p>info@chandranath.com</p>
            </ContactRow>
            <ContactRow icon={MapPin}>
              <p>Rathnapura Branch: Ganegama, Pelwadiya, Rathnapura</p>
            </ContactRow>
            <ContactRow icon={Phone}>
              <p>Tel +94 719103351</p>
            </ContactRow>
            <ContactRow icon={Mail}>
              <p>branch@chandranath.com</p>
            </ContactRow>
            <SocialLinks tone="onBrand" />
          </div>
        </div>

        <div className="h-px w-full bg-on-brand-muted opacity-30" />

        <div className={`flex items-center justify-between text-caption ${muted}`}>
          <p>
            © {copyrightYear} CHANDRANATH &amp; COMPANY, Chartered
            Accountants. All rights reserved.
          </p>
          <p className="whitespace-pre">
            Useful links: {usefulLinks.join("  ·  ")}
          </p>
        </div>

        <p className={`text-center text-caption ${muted}`}>
          Design by Prablo 360 Team
        </p>
      </div>
    </footer>
  );
}
