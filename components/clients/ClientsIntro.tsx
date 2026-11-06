import SectionLabel from "@/components/SectionLabel";

const stats = [
  { value: "125+", label: "Clients served" },
  { value: "500+", label: "Assignments completed" },
  { value: "16+", label: "Years of experience" },
];

export default function ClientsIntro() {
  return (
    <section className="bg-surface-200 pb-10 pt-20">
      <div className="mx-auto flex max-w-page items-end justify-between gap-16 px-4">
        <div className="flex flex-col gap-4">
          <SectionLabel>OUR CLIENTS</SectionLabel>
          <h2 className="text-h2 text-ink">
            <span className="block">Trusted by 125+</span>
            <span className="block text-text-brand">
              businesses across Sri Lanka
            </span>
          </h2>
        </div>
        <div className="flex items-center gap-8">
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
    </section>
  );
}
