import Image from "next/image";

const icons = {
  phone: { src: "/images/icons/contact-phone.svg", w: 19, h: 19 },
  mail: { src: "/images/icons/contact-mail.svg", w: 20.0002, h: 16 },
  pin: { src: "/images/icons/contact-pin.svg", w: 16, h: 20 },
};

type ContactInfoCardProps = {
  icon: keyof typeof icons;
  title: string;
  /** Large line, e.g. a phone number. */
  value?: string;
  /** Smaller lines under the value. Use "\n" for line breaks. */
  note?: string;
};

export default function ContactInfoCard({
  icon,
  title,
  value,
  note,
}: ContactInfoCardProps) {
  const i = icons[icon];
  return (
    <div className="flex w-full items-center gap-4 rounded-lg border border-line bg-surface-200 p-6">
      <span className="flex size-[52px] shrink-0 items-center justify-center rounded-pill bg-surface-brand-soft">
        <Image src={i.src} alt="" width={i.w} height={i.h} />
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="text-label text-ink-muted">{title}</p>
        {value && <p className="text-h4 text-ink">{value}</p>}
        {note && (
          <p className="whitespace-pre-line text-body-sm text-ink-muted">
            {note}
          </p>
        )}
      </div>
    </div>
  );
}
