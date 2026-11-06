import Image from "next/image";
import FeatureCheck from "@/components/FeatureCheck";
import SectionLabel from "@/components/SectionLabel";

export default function WhyJoinUs() {
  return (
    <section className="bg-surface-200 py-20">
      <div className="mx-auto flex max-w-page items-center gap-16 px-4">
        <div className="relative h-[520px] w-[568px] shrink-0">
          <div
            aria-hidden
            className="absolute left-[388px] top-[150px] size-[180px] rounded-lg bg-surface-brand-soft"
          />
          <div className="absolute left-0 top-0 h-[420px] w-[470px] overflow-hidden rounded-lg">
            <Image
              src="/images/home/about-team.png"
              alt="The team at work"
              fill
              sizes="470px"
              className="object-cover"
            />
          </div>
          <div className="absolute left-[258px] top-[290px] h-[220px] w-[300px] overflow-hidden rounded-lg border-8 border-surface-200">
            <Image
              src="/images/news/hero.png"
              alt="A training session"
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
          <div className="absolute left-6 top-[330px] flex flex-col gap-1 rounded-md bg-surface-brand px-6 py-5 whitespace-nowrap shadow-md">
            <p className="text-h4 text-on-brand">Learn from an FCA</p>
            <p className="text-body-sm text-on-brand-muted">
              Hands-on training from day one
            </p>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
          <div className="flex flex-col gap-4">
            <SectionLabel>WHY JOIN US</SectionLabel>
            <h2 className="text-h2 text-ink">
              <span className="block">Build your career</span>
              <span className="block">
                with a <span className="text-text-brand">trusted firm</span>
              </span>
            </h2>
          </div>
          <p className="text-body-lg text-ink-muted">
            Join a growing practice in Panadura and Rathnapura. You work on real
            assignments for 125+ clients and learn from a chartered accountant.
          </p>
          <div className="flex w-full items-stretch gap-6">
            <FeatureCheck
              title="Learn on real work"
              text="Audits, tax filings and advisory work from your first month."
            />
            <FeatureCheck
              title="Guidance from seniors"
              text="A chartered accountant reviews your work and explains why."
            />
          </div>
          <div className="flex w-full items-stretch gap-6">
            <FeatureCheck
              title="Varied clients"
              text="Hospitality, trading, plantations, manufacturing and investment."
            />
            <FeatureCheck
              title="A respectful workplace"
              text="People are treated fairly and listened to."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
