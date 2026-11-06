import StatCard from "@/components/StatCard";

const stats = [
  { value: "16+", label: "Years of experience" },
  {
    value: "125+",
    label: "Clients served",
    icon: "/images/icons/users.svg",
    w: 24.2083,
    h: 20.125,
  },
  {
    value: "500+",
    label: "Assignments completed",
    icon: "/images/icons/briefcase.svg",
    w: 23.0417,
    h: 21.875,
  },
  {
    value: "2",
    label: "Offices in Sri Lanka",
    icon: "/images/icons/pin.svg",
    w: 18.375,
    h: 23.0417,
  },
];

export default function StatsStrip() {
  return (
    <section className="bg-surface-brand-soft py-12">
      <div className="mx-auto flex max-w-page items-center gap-6 px-4">
        {stats.map((s, i) => (
          <div key={s.label} className="flex flex-1 items-center gap-6">
            {i > 0 && (
              <span
                aria-hidden
                className="h-14 w-px shrink-0 bg-on-brand-muted opacity-35"
              />
            )}
            <div className="flex-1">
              <StatCard
                value={s.value}
                label={s.label}
                icon={s.icon}
                iconWidth={s.w}
                iconHeight={s.h}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
