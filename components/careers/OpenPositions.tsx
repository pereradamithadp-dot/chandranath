import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";

const jobs = [
  {
    title: "Audit Assistant",
    tags: ["Full time", "Panadura"],
    text: "Join our audit team and work on statutory audits for local businesses.",
  },
  {
    title: "Audit Trainee",
    tags: ["Full time", "Rathnapura"],
    text: "Learn audit and tax work alongside our Rathnapura team.",
  },
];

export default function OpenPositions() {
  return (
    <section className="bg-surface-200 py-12 lg:py-20">
      <div className="mx-auto flex max-w-page flex-col gap-12 px-4">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end lg:gap-16">
          <div className="flex flex-col gap-4">
            <SectionLabel>OPEN POSITIONS</SectionLabel>
            <h2 className="text-h2 text-ink">
              <span className="block">Current</span>
              <span className="block text-text-brand">vacancies</span>
            </h2>
          </div>
          <p className="w-full max-w-[420px] text-body text-ink-muted">
            Each position opens a short page with requirements and how to apply.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-line bg-surface-200">
          <ul className="divide-y divide-line">
            {jobs.map((j) => (
              <li
                key={j.title}
                className="flex flex-col items-start gap-4 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:gap-8"
              >
                <div className="flex w-full shrink-0 flex-col gap-2 lg:w-[320px]">
                  <h3 className="text-h4 text-ink lg:whitespace-nowrap">
                    {j.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {j.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-pill bg-tint px-3 py-1 text-caption whitespace-nowrap text-text-brand"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="min-w-0 flex-1 text-body text-ink-muted">
                  {j.text}
                </p>
                <Button href="#apply">View and apply</Button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-start gap-4 border-t border-line bg-surface-100 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:gap-8">
            <p className="min-w-0 flex-1 text-body text-ink">
              Don&apos;t see a suitable role? Send your CV and we will keep it on
              file.
            </p>
            <Button href="#apply" variant="secondary">
              Send your CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
