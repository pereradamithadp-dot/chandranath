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
  {
    title: "Company Secretarial Services",
    description:
      "Statutory filings, registers and board support so your company stays on the right side of the law.",
    image: "/images/home/mission.png",
    href: "#service-05",
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Accurate, up-to-date books and clear monthly reports so you always know where the business stands.",
    image: "/images/home/service-bpo.jpg",
    href: "#service-06",
  },
];

export default function Overview() {
  return (
    <section className="bg-surface-200 py-12 lg:py-20">
      <div className="mx-auto flex max-w-page flex-col gap-12 px-4">
        <div className="flex flex-col items-center gap-4">
          <SectionLabel>WHAT WE DO</SectionLabel>
          <h2 className="text-center text-h2 text-ink">
            <span className="block">Six services.</span>
            <span className="block text-text-brand">One trusted team.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
