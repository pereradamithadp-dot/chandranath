import SectionLabel from "@/components/SectionLabel";

const steps = [
  {
    title: "Audit Trainee",
    when: "First year",
    text: "Learn audit basics, prepare working papers and support tax filings.",
  },
  {
    title: "Audit Assistant",
    when: "Years 2 to 3",
    text: "Handle parts of audits yourself and meet clients with a senior.",
  },
  {
    title: "Audit Senior",
    when: "Year 4 onwards",
    text: "Lead small assignments, review junior work and advise clients.",
  },
];

export default function YourPath() {
  return (
    <section className="bg-surface-brand-soft py-12 lg:py-20">
      <div className="mx-auto flex max-w-page flex-col gap-12 px-4">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end lg:gap-16">
          <div className="flex flex-col gap-4">
            <SectionLabel tone="onBrand">YOUR PATH</SectionLabel>
            <h2 className="text-h2 text-on-brand">
              <span className="block">
                How you <span className="text-on-brand-muted">grow</span>
              </span>
              <span className="block">with us</span>
            </h2>
          </div>
          <p className="w-full max-w-[420px] text-body text-on-brand-muted">
            A clear path from trainee to senior. Your pace depends on your work
            and your exams.
          </p>
        </div>
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="flex min-w-0 flex-1 flex-col gap-4 rounded-lg border border-line bg-surface-200 p-6 sm:p-8"
            >
              <span aria-hidden className="h-1 w-12 rounded-pill bg-action" />
              <div className="flex items-center justify-between gap-4">
                <p className="text-h1 text-text-brand">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <span className="rounded-pill bg-surface-100 px-3 py-1 text-caption whitespace-nowrap text-text-brand">
                  {s.when}
                </span>
              </div>
              <h3 className="text-h4 text-ink">{s.title}</h3>
              <p className="text-body text-ink-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
