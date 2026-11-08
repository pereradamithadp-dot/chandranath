"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

type MobileMenuProps = {
  links: { href: string; label: string }[];
  active: string;
};

/** Hamburger toggle + dropdown panel shown below the lg breakpoint. */
export default function MobileMenu({ links, active }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <div
          aria-hidden
          onClick={() => setOpen(false)}
          className="absolute inset-x-0 top-full z-40 h-screen bg-black/60"
        />
      )}
      {open && (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-50 border-b border-line bg-surface-200 px-4 pb-5 pt-2 shadow-md"
        >
          <ul className="mx-auto flex max-w-page flex-col">
            {links.map((l) => {
              const isActive = l.href === active;
              return (
                <li key={l.href} className="border-b border-line">
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block py-3 text-nav ${
                      isActive ? "text-text-brand" : "text-ink"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-action px-5 py-3 text-center text-button text-on-action shadow-[0_6px_18px_rgba(189,31,54,0.4)]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
