import Image from "next/image";

type IndustryTileProps = {
  title: string;
  text: string;
  image: string;
};

export default function IndustryTile({ title, text, image }: IndustryTileProps) {
  return (
    <div className="relative h-[380px] min-w-0 flex-1 overflow-hidden rounded-lg">
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 1232px) 220px, 20vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(31,22,24,0)] from-35% to-[rgba(31,22,24,0.88)]" />
      <div className="absolute inset-x-5 bottom-6 flex flex-col gap-1">
        <p className="text-h4 text-on-brand">{title}</p>
        <p className="text-body-sm text-on-brand-muted">{text}</p>
      </div>
    </div>
  );
}
