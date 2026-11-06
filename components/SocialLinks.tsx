const socials = [
  { label: "WhatsApp", icon: "W", href: "https://wa.me/94761950780" },
  { label: "Facebook", icon: "f", href: "#" },
  { label: "LinkedIn", icon: "in", href: "#" },
];

type SocialLinksProps = {
  /** "onBrand" on the crimson footer, "default" on light backgrounds */
  tone?: "default" | "onBrand";
};

export default function SocialLinks({ tone = "default" }: SocialLinksProps) {
  const onBrand = tone === "onBrand";
  return (
    <ul className="flex flex-wrap gap-3">
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            className={`flex items-center gap-2 rounded-pill border py-1 pl-1 pr-3 text-caption ${
              onBrand
                ? "border-on-brand-muted text-on-brand"
                : "border-line text-ink"
            }`}
          >
            <span
              aria-hidden
              className={`flex size-7 items-center justify-center rounded-pill text-label ${
                onBrand
                  ? "bg-surface-100 text-text-brand"
                  : "bg-surface-brand text-on-brand"
              }`}
            >
              {s.icon}
            </span>
            {s.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
