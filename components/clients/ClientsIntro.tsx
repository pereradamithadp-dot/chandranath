import SectionLabel from "@/components/SectionLabel";

const stats = [
  { value: "125+", label: "Clients served" },
  { value: "500+", label: "Assignments completed" },
  { value: "16+", label: "Years of experience" },
];

export default function ClientsIntro() {
  return (
    <section className="bg-surface-200 pb-8 pt-12 lg:pt-20">
      <div className="mx-auto flex max-w-page flex-col items-start justify-between gap-8 px-4 lg:flex-row lg:items-end lg:gap-16">
        <div className="flex flex-col gap-4">
          <SectionLabel>OUR CLIENTS</SectionLabel>
          <h2 className="text-h2 text-ink">
            <span className="block">Trusted by 125+</span>
            <span className="block text-text-brand">
              businesses across Sri Lanka
            </span>
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-6 sm:gap-8">
              {i > 0 && <span aria-hidden className="h-12 w-px bg-line" />}
              <div className="flex flex-col gap-1 whitespace-nowrap">
                <p className="text-h2 text-text-brand">{s.value}</p>
                <p className="text-caption text-ink-muted">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
