import Image from "next/image";
import Button from "@/components/Button";
import FeatureCheck from "@/components/FeatureCheck";
import SectionLabel from "@/components/SectionLabel";

export default function AboutCompany() {
  return (
    <section className="bg-surface-200 py-24">
      <div className="mx-auto flex max-w-page items-center gap-16 px-4">
        <div className="relative size-[560px] shrink-0">
          <div className="absolute left-0 top-0 h-[500px] w-[440px] overflow-hidden rounded-lg">
            <Image
              src="/images/home/about-office.png"
              alt="Chandranath & Company office building"
              fill
              sizes="440px"
              className="object-cover"
            />
          </div>
          <div className="absolute left-[260px] top-[320px] h-[240px] w-[300px] overflow-hidden rounded-lg border-8 border-surface-200">
            <Image
              src="/images/home/about-team.png"
              alt="The team at work"
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
          <div className="absolute left-[330px] top-10 flex w-[220px] flex-col gap-1 rounded-lg bg-surface-brand-soft p-6 shadow-md">
            <p className="text-h1 text-on-brand">16+</p>
            <p className="text-body-sm text-on-brand-muted">
              Years of trusted practice in Panadura
            </p>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
          <SectionLabel>ABOUT THE COMPANY</SectionLabel>
          <h2 className="text-h2 text-ink">
            <span className="block">Registered in 2010.</span>
            <span className="block text-text-brand">Trusted ever since.</span>
          </h2>
          <p className="text-body text-ink-muted">
            CHANDRANATH &amp; COMPANY is a firm of chartered accountants serving
            businesses and individuals from Panadura and Rathnapura. The firm is
            led by Damitha Chandranath Perera, a fellow member of CA Sri Lanka
            with 16 years of post-qualification experience.
          </p>
          <div className="flex w-full gap-6">
            <FeatureCheck
              title="Chartered accountant-led"
              text="Fellow member of CA Sri Lanka"
            />
            <FeatureCheck title="Two offices" text="Panadura and Rathnapura" />
          </div>
          <div className="flex w-full gap-6">
            <FeatureCheck
              title="Four core services"
              text="Audit, tax, risk and outsourcing"
            />
            <FeatureCheck title="125+ clients" text="Across many industries" />
          </div>
          <div className="flex w-full items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <Image
                src="/images/home/principal.png"
                alt="Damitha Chandranath Perera"
                width={56}
                height={56}
                className="size-14 rounded-pill object-cover"
              />
              <div className="flex flex-col whitespace-nowrap">
                <p className="text-button text-ink">Damitha Chandranath Perera</p>
                <p className="text-caption text-ink-muted">
                  Precedent Partner, FCA
                </p>
              </div>
            </div>
            <Button href="/about" variant="secondary">
              About the company
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
