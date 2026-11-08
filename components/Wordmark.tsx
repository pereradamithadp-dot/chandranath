import Image from "next/image";

type WordmarkProps = {
  /** "default" for light backgrounds, "onBrand" for the crimson band */
  tone?: "default" | "onBrand";
};

export default function Wordmark({ tone = "default" }: WordmarkProps) {
  const onBrand = tone === "onBrand";
  return (
    <div className="group/logo flex items-center gap-3">
      <Image
        src="/images/logo.png"
        alt="Chandranath & Company logo"
        width={52}
        height={48}
        className="h-10 w-[43px] shrink-0 rounded-sm sm:h-12 sm:w-[52px] object-contain transition-transform duration-500 ease-in-out group-hover/logo:scale-110 group-hover/logo:-rotate-6"
        priority
      />
      <div className="flex min-w-0 flex-col gap-1">
        <span
          className={`text-wordmark whitespace-nowrap max-[420px]:text-[15px] max-[420px]:leading-5 transition-colors duration-300 ease-in-out ${
            onBrand
              ? "text-on-brand group-hover/logo:text-on-brand-muted"
              : "text-text-brand group-hover/logo:text-action-hover"
          }`}
        >
          CHANDRANATH &amp; COMPANY
        </span>
        <span
          className={`text-caption max-[420px]:text-[10px] ${
            onBrand ? "text-on-brand-muted" : "text-ink-muted"
          }`}
        >
          CHARTERED ACCOUNTANTS
        </span>
      </div>
    </div>
  );
}
