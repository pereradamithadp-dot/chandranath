import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Audit & Assurance",
    description:
      "Independent audits that give owners, lenders and regulators confidence in your accounts.",
    image: "/images/home/service-audit.jpg",
  },
  {
    title: "Tax Advisory",
    description:
      "Planning and filing for income tax, VAT and other levies, on time and in line with current rules.",
    image: "/images/home/service-tax.jpg",
  },
  {
    title: "Risk Advisory",
    description:
      "Reviews of controls and processes that find weak points before they become losses.",
    image: "/images/home/service-risk.jpg",
  },
  {
    title: "BPO Outsourcing",
    description:
      "Bookkeeping, payroll and reporting handled by our team so you can run the business.",
    image: "/images/home/service-bpo.jpg",
  },
  {
    title: "Company Secretarial Services",
    description:
      "Statutory filings, registers and board support so your company stays on the right side of the law.",
    image: "/images/home/mission.png",
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Accurate, up-to-date books and clear monthly reports so you always know where the business stands.",
    image: "/images/home/service-bpo.jpg",
  },
];

export default function HomeServices() {
  return (
    <section className="bg-surface-brand-soft py-12 lg:py-20">
      <div className="mx-auto flex max-w-page flex-col gap-12 px-4">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end lg:gap-16">
          <div className="flex w-full flex-col gap-4 lg:w-[560px]">
            <SectionLabel tone="onBrand">WHAT WE DO</SectionLabel>
            <h2 className="text-h2 text-on-brand">
              <span className="block">Services built</span>
              <span className="block text-on-brand-muted">on expertise</span>
            </h2>
          </div>
          <div className="flex w-full flex-col items-start gap-4 lg:w-[440px]">
            <p className="text-body text-on-brand-muted">
              Six services, each led by a chartered accountant and delivered by
              a qualified team in Panadura and Rathnapura.
            </p>
            <Button href="/services" variant="onBrandOutline">
              View all services
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} href="/services" {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
