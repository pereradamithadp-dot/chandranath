import Image from "next/image";

type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export default function TeamCard({ name, role, bio, photo }: TeamCardProps) {
  return (
    <article className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-line bg-surface-200">
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(min-width: 1232px) 384px, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 p-6">
        <h3 className="text-h4 text-ink">{name}</h3>
        <p className="text-label text-text-brand">{role}</p>
        <p className="text-body-sm text-ink-muted">{bio}</p>
      </div>
    </article>
  );
}
