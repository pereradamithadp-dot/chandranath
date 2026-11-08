import Link from "next/link";
import Button from "./Button";
import Wordmark from "./Wordmark";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Our Clients" },
  { href: "/news", label: "News & Events" },
  // Hidden for now; uncomment to show Careers again.
  // { href: "/careers", label: "Careers" },
];

const cta =
  "shadow-[0_6px_18px_rgba(189,31,54,0.4)] ring-2 ring-action/20 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(189,31,54,0.5)]";

type HeaderProps = {
  /** href of the current page, e.g. "/about" */
  active?: string;
};

export default function Header({ active = "/" }: HeaderProps) {
  return (
    <header className="sticky -top-[54px] z-50 w-full shadow-sm sm:-top-[34px]">
      <div className="bg-surface-brand py-2 text-caption text-on-brand">
        <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-0.5 px-4 text-center sm:flex-row sm:text-left">
          <p>No. 08, Kulathunga Road, Panadura</p>
          <p className="sm:whitespace-pre">
            Tel +94 38 2237256 <span className="hidden sm:inline">{"  |  "}</span>
            <span className="sm:hidden"> · </span>
            info@chandranath.com
          </p>
        </div>
      </div>
      <div className="relative border-b border-line bg-surface-200 py-4">
        <div className="mx-auto flex max-w-page items-center justify-between gap-3 px-4">
          <Link href="/" aria-label="Chandranath & Company home" className="min-w-0">
            <Wordmark />
          </Link>
          <MobileMenu links={links} active={active} />
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((l) => {
              const isActive = l.href === active;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`border-b-2 py-2 text-nav whitespace-nowrap ${
                    isActive
                      ? "border-text-brand text-text-brand"
                      : "border-transparent text-ink hover:text-text-brand"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Button href="/contact" className={cta}>
              Contact Us
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
