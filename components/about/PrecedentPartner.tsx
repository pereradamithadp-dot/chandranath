import Image from "next/image";
import Eyebrow from "@/components/Eyebrow";
import FeatureCheck from "@/components/FeatureCheck";
import SectionLabel from "@/components/SectionLabel";

const credentials = ["B.SC. MGT. SPECIAL (HONS)", "FCA", "ACMA", "ACPM", "MAAT"];

export default function PrecedentPartner() {
  return (
    <section className="bg-surface-200 py-16">
      <div className="mx-auto flex max-w-page items-center gap-20 px-4">
        <div className="relative h-[540px] w-[460px] shrink-0">
          <div
            aria-hidden
            className="absolute left-20 top-20 h-[460px] w-[380px] rounded-lg bg-surface-brand-soft"
          />
          <div className="absolute left-0 top-0 h-[460px] w-[380px] overflow-hidden rounded-lg">
            <Image
              src="/images/about/damitha.png"
              alt="Damitha Chandranath Perera"
              fill
              sizes="380px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
          <SectionLabel>PRECEDENT PARTNER</SectionLabel>
          <h2 className="text-h2 text-ink">Damitha Chandranath Perera</h2>
          <ul className="flex flex-wrap gap-2">
            {credentials.map((c) => (
              <li key={c}>
                <Eyebrow tone="default">{c}</Eyebrow>
              </li>
            ))}
          </ul>
          <p className="text-body-lg text-ink-muted">
            Fellow member of the Institute of Chartered Accountants of Sri Lanka,
            with 16 years of post-qualification experience. He leads the firm
            from its Head Office in Panadura.
          </p>
          <div className="flex w-full gap-6">
            <FeatureCheck
              title="Fellow member"
              text="Institute of Chartered Accountants of Sri Lanka"
            />
            <FeatureCheck
              title="16 years"
              text="Post-qualification experience"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
