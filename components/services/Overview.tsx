import SectionLabel from "@/components/SectionLabel";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Audit & Assurance",
    description:
      "Independent audits that give owners, lenders and regulators confidence in your accounts.",
    image: "/images/home/service-audit.jpg",
    href: "#service-01",
  },
  {
    title: "Tax Advisory",
    description:
      "Planning and filing for income tax, VAT and other levies, on time and in line with current rules.",
    image: "/images/home/service-tax.jpg",
    href: "#service-02",
  },
  {
    title: "Risk Advisory",
    description:
      "Reviews of controls and processes that find weak points before they become losses.",
    image: "/images/home/service-risk.jpg",
    href: "#service-03",
  },
  {
    title: "BPO Outsourcing",
    description:
      "Bookkeeping, payroll and reporting handled by our team so you can run the business.",
    image: "/images/home/service-bpo.jpg",
    href: "#service-04",
  },
];

export default function Overview() {
  return (
    <section className="bg-surface-200 py-20">
      <div className="mx-auto flex max-w-page flex-col gap-12 px-4">
        <div className="flex flex-col items-center gap-4">
          <SectionLabel>WHAT WE DO</SectionLabel>
          <h2 className="text-center text-h2 text-ink">
            <span className="block">Four services.</span>
            <span className="block text-text-brand">One trusted team.</span>
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
