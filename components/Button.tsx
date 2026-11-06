import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  /** primary = crimson; onBrand* variants are for use on the crimson brand band only */
  variant?: "primary" | "secondary" | "onBrandSolid" | "onBrandOutline";
  size?: "md" | "lg";
  className?: string;
};

const variants = {
  primary: "bg-action text-on-brand hover:bg-action-hover",
  secondary:
    "border-[1.5px] border-text-brand text-text-brand hover:bg-tint",
  onBrandSolid: "bg-surface-200 text-crimson-800 hover:bg-on-brand-muted",
  onBrandOutline:
    "border-[1.5px] border-on-brand text-on-brand hover:bg-on-brand hover:text-crimson-800",
};

const sizes = {
  md: "h-11 px-6",
  lg: "h-[52px] px-8",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md text-button whitespace-nowrap transition-colors duration-300 ease-in-out ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
