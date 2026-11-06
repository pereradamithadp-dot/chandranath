import Image from "next/image";

type FeatureCheckProps = {
  title: string;
  text: string;
};

export default function FeatureCheck({ title, text }: FeatureCheckProps) {
  return (
    <div className="flex min-w-0 flex-1 items-start gap-4">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-pill bg-tint">
        <Image src="/images/icons/check.svg" alt="" width={14.6667} height={10.5417} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="text-button text-ink">{title}</p>
        <p className="text-body-sm text-ink-muted">{text}</p>
      </div>
    </div>
  );
}
