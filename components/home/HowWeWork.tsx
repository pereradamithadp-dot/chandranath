import SectionLabel from "@/components/SectionLabel";

const steps = [
  {
    title: "Understand your business",
    text: "We meet you to learn how your business runs and what you need from us.",
  },
  {
    title: "Agree the scope",
    text: "You receive a clear proposal covering the work, the timeline and the fee.",
  },
  {
    title: "Do the work",
    text: "Qualified staff carry out the work, reviewed by a chartered accountant.",
  },
  {
    title: "Report and advise",
    text: "We explain what we found in plain language and agree the next steps.",
  },
];

export default function HowWeWork() {
  return (
    <section className="group/process bg-surface-200 py-8">
      <div className="mx-auto max-w-page px-4">
        <div className="flex flex-col gap-8 rounded-lg border border-line bg-surface-100 p-6 sm:p-10 lg:gap-12 lg:p-16">
          <div className="flex flex-col items-center gap-4">
            <SectionLabel>OUR PROCESS</SectionLabel>
            <h2 className="text-h2 text-ink">
              How we work <span className="text-text-brand">with you</span>
            </h2>
          </div>
          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex min-w-0 flex-1 flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-pill bg-action text-h4 text-on-action">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden
                      className="relative h-0.5 min-w-px flex-1 overflow-hidden bg-line"
                    >
                      {/* Fills left to right, one connector after another, while the section is hovered. */}
                      <span
                        style={{ "--d": `${i * 600}ms` } as React.CSSProperties}
                        className="absolute inset-0 origin-left scale-x-0 bg-action transition-transform duration-[600ms] ease-in-out group-hover/process:scale-x-100 group-hover/process:[transition-delay:var(--d)]"
                      />
                    </span>
                  )}
                </div>
                <p className="text-h4 text-ink">{s.title}</p>
                <p className="text-body-sm text-ink-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
