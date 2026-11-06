import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";

const stats = [
  { value: "16+", label: "Years of experience" },
  { value: "125+", label: "Clients served" },
  { value: "500+", label: "Assignments completed" },
];

export default function Introduction() {
  return (
    <section className="bg-surface-200 py-24">
      <div className="mx-auto flex max-w-page items-center gap-16 px-4">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
          <SectionLabel>WHO WE ARE</SectionLabel>
          <h2 className="text-h2 text-ink">
            <span className="block">A firm built on trust,</span>
            <span className="block text-text-brand">since 2010.</span>
          </h2>
          <p className="text-body text-ink-muted">
            CHANDRANATH &amp; COMPANY is a firm of chartered accountants
            registered in 2010 in Panadura. We provide audit and assurance, tax
            advisory, risk advisory and business process outsourcing services to
            businesses and individuals.
          </p>
          <p className="text-body text-ink-muted">
            Our branch in Pelwadiya, Rathnapura serves clients across the
            Sabaragamuwa Province.
          </p>
          <div className="flex w-full items-center gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                {i > 0 && <span aria-hidden className="h-12 w-px bg-line" />}
                <div className="flex flex-col gap-1 whitespace-nowrap">
                  <p className="text-h2 text-text-brand">{s.value}</p>
                  <p className="text-caption text-ink-muted">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[520px] w-[560px] shrink-0">
          <div className="absolute left-[140px] top-0 h-[460px] w-[420px] overflow-hidden rounded-lg">
            <Image
              src="/images/home/about-office.png"
              alt="Chandranath & Company office building"
              fill
              sizes="420px"
              className="object-cover"
            />
          </div>
          <div className="absolute left-0 top-[290px] h-[220px] w-[280px] overflow-hidden rounded-lg border-8 border-surface-200">
            <Image
              src="/images/home/industry-investments.png"
              alt="A client meeting"
              fill
              sizes="280px"
              className="object-cover"
            />
          </div>
          <div className="absolute left-5 top-[60px] flex flex-col gap-1 rounded-lg bg-surface-200 px-6 py-5 whitespace-nowrap shadow-md">
            <p className="text-h3 text-text-brand">Since 2010</p>
            <p className="text-caption text-ink-muted">Panadura, Sri Lanka</p>
          </div>
        </div>
      </div>
    </section>
  );
}
