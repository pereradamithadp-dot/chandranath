import Image from "next/image";

type ClientTileProps = {
  name: string;
  /** Logo path in /public. Omit for clients without a logo (name only). */
  logo?: string;
};

export default function ClientTile({ name, logo }: ClientTileProps) {
  return (
    <div className="group/tile flex h-32 min-w-0 flex-1 flex-col items-center justify-center gap-2 rounded-md border border-line bg-surface-200 p-3 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-action hover:bg-tint hover:shadow-md">
      {logo ? (
        <>
          <div className="relative h-16 w-[156px] max-w-full">
            <Image
              src={logo}
              alt=""
              fill
              sizes="156px"
              className="object-contain transition-transform duration-500 ease-in-out group-hover/tile:scale-110"
            />
          </div>
          <p className="text-center text-caption text-ink-muted">{name}</p>
        </>
      ) : (
        <p className="w-full text-center text-label text-ink">{name}</p>
      )}
    </div>
  );
}
