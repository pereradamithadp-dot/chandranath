import SectionLabel from "@/components/SectionLabel";

const values = [
  {
    title: "Integrity",
    text: "We say what we find, even when it is not what you hoped.",
  },
  {
    title: "Competence",
    text: "Qualified people do your work and review it.",
  },
  {
    title: "Confidentiality",
    text: "Your records stay private, always.",
  },
  {
    title: "Timeliness",
    text: "We meet the deadlines that matter to you and to the authorities.",
  },
];

export default function Values() {
  return (
    <section className="bg-surface-brand-soft py-20">
      <div className="mx-auto flex max-w-page flex-col gap-12 px-4">
        <div className="flex items-end justify-between gap-16">
          <div className="flex flex-col gap-4">
            <SectionLabel tone="onBrand">OUR VALUES</SectionLabel>
            <h2 className="text-h2 text-on-brand">
              <span className="block">The principles behind</span>
              <span className="block text-on-brand-muted">every engagement</span>
            </h2>
          </div>
          <p className="w-[400px] text-body text-on-brand-muted">
            How we work with every client, large or small.
          </p>
        </div>
        <ul className="flex items-stretch gap-6">
          {values.map((v, i) => (
            <li
              key={v.title}
              className="flex min-w-0 flex-1 flex-col gap-3 rounded-lg border border-white/25 bg-white/10 p-8"
            >
              <p className="text-h1 text-on-brand-muted opacity-50">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-h4 text-on-brand">{v.title}</h3>
              <p className="text-body-sm text-on-brand-muted">{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
