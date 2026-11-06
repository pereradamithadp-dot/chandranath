import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";

export default function VisionMission() {
  return (
    <section className="bg-surface-200 py-20">
      <div className="mx-auto flex max-w-page flex-col gap-12 px-4">
        <div className="flex flex-col items-center gap-4">
          <SectionLabel>VISION AND MISSION</SectionLabel>
          <h2 className="text-h2 text-ink">
            What <span className="text-text-brand">guides</span> our work
          </h2>
        </div>
        <div className="flex items-stretch gap-6">
          <article className="group/card flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-line bg-surface-200 transition-colors duration-500 ease-in-out hover:border-surface-brand-soft hover:bg-surface-brand-soft">
            <div className="relative h-[260px] w-full overflow-hidden">
              <Image
                src="/images/home/vision.png"
                alt=""
                fill
                sizes="588px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 p-10">
              <div className="flex items-center gap-4 [&_p]:transition-colors [&_p]:duration-500 [&_span[aria-hidden]]:duration-500 [&_span[aria-hidden]]:transition-colors  group-hover/card:[&_p]:text-on-brand group-hover/card:[&_span[aria-hidden]]:bg-on-brand">
                <span className="flex size-[52px] items-center justify-center rounded-pill bg-action">
                  <Image
                    src="/images/icons/eye.svg"
                    alt=""
                    width={22}
                    height={16}
                  />
                </span>
                <SectionLabel>OUR VISION</SectionLabel>
              </div>
              <h3 className="text-h3 text-ink transition-colors duration-500 ease-in-out group-hover/card:text-on-brand">Our vision</h3>
              <p className="text-body-lg text-ink-muted transition-colors duration-500 ease-in-out group-hover/card:text-on-brand-muted">
                Simplifying financial functions and delivering exceptional
                results to clients with accurate work and honest advice.
              </p>
            </div>
          </article>
          <article className="group/card flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-surface-brand-soft bg-surface-brand-soft transition-colors duration-500 ease-in-out hover:border-line hover:bg-surface-200">
            <div className="relative h-[260px] w-full overflow-hidden">
              <Image
                src="/images/home/mission.png"
                alt=""
                fill
                sizes="588px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 p-10">
              <div className="flex items-center gap-4 [&_p]:transition-colors [&_p]:duration-500 [&_span[aria-hidden]]:duration-500 [&_span[aria-hidden]]:transition-colors group-hover/card:[&_p]:text-text-brand group-hover/card:[&_span[aria-hidden]]:bg-text-brand">
                <span className="flex size-[52px] items-center justify-center rounded-pill bg-surface-200 transition-colors duration-500 ease-in-out group-hover/card:bg-tint">
                  <Image
                    src="/images/icons/target.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </span>
                <SectionLabel tone="onBrand">OUR MISSION</SectionLabel>
              </div>
              <h3 className="text-h3 text-on-brand transition-colors duration-500 ease-in-out group-hover/card:text-ink">Our mission</h3>
              <p className="text-body-lg text-on-brand-muted transition-colors duration-500 ease-in-out group-hover/card:text-ink-muted">
                Providing audit, tax and assurance services of a high
                professional standard through qualified staff, and ensuring
                compliance with existing regulatory requirements.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
