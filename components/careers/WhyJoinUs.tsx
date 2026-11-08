import Image from "next/image";
import FeatureCheck from "@/components/FeatureCheck";
import SectionLabel from "@/components/SectionLabel";

export default function WhyJoinUs() {
  return (
    <section className="bg-surface-200 py-12 lg:py-20">
      <div className="mx-auto flex max-w-page flex-col items-center gap-10 px-4 lg:flex-row lg:gap-16">
        <div className="relative h-[340px] w-full shrink-0 sm:h-[440px] lg:h-[520px] lg:w-[568px]">
          <div
            aria-hidden
            className="absolute left-[388px] top-[150px] hidden size-[180px] lg:block rounded-lg bg-surface-brand-soft"
          />
          <div className="absolute left-0 top-0 h-full w-full overflow-hidden lg:h-[420px] lg:w-[470px] rounded-lg">
            <Image
              src="/images/home/about-team.png"
              alt="The team at work"
              fill
              sizes="470px"
              className="object-cover"
            />
          </div>
          <div className="absolute left-[258px] top-[290px] hidden h-[220px] w-[300px] lg:block overflow-hidden rounded-lg border-8 border-surface-200">
            <Image
              src="/images/news/hero.png"
              alt="A training session"
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 flex flex-col gap-1 rounded-md bg-surface-brand px-5 py-4 lg:bottom-auto lg:left-6 lg:top-[330px] lg:px-6 lg:py-5 shadow-md">
            <p className="text-h4 text-on-brand">Learn from an FCA</p>
            <p className="text-body-sm text-on-brand-muted">
              Hands-on training from day one
            </p>
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-6">
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
          <div className="flex w-full flex-col items-stretch gap-4 sm:flex-row sm:gap-6">
            <FeatureCheck
              title="Learn on real work"
              text="Audits, tax filings and advisory work from your first month."
            />
            <FeatureCheck
              title="Guidance from seniors"
              text="A chartered accountant reviews your work and explains why."
            />
          </div>
          <div className="flex w-full flex-col items-stretch gap-4 sm:flex-row sm:gap-6">
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
