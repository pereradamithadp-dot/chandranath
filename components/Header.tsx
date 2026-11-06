import Link from "next/link";
import Button from "./Button";
import Wordmark from "./Wordmark";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Our Clients" },
  { href: "/news", label: "News & Events" },
  { href: "/careers", label: "Careers" },
];

type HeaderProps = {
  /** href of the current page, e.g. "/about" */
  active?: string;
};

export default function Header({ active = "/" }: HeaderProps) {
  return (
    <header className="w-full">
      <div className="bg-surface-brand py-2 text-caption text-on-brand">
        <div className="mx-auto flex max-w-page items-center justify-between px-4">
          <p>No. 08, Kulathunga Road, Panadura</p>
          <p className="whitespace-pre">
            Tel +94 38 2237256 {"  |  "} info@chandranath.com
          </p>
        </div>
      </div>
      <div className="border-b border-line bg-surface-200 py-4">
        <div className="mx-auto flex max-w-page items-center justify-between px-4">
          <Link href="/" aria-label="Chandranath & Company home">
            <Wordmark />
          </Link>
          <nav className="flex items-center gap-6">
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
            <Button href="/contact">Contact Us</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
