"use client";

import { useState } from "react";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";

const offices = {
  panadura: {
    tab: "Panadura",
    title: "Panadura (Head Office)",
    lines: [
      "No. 08, Kulathunga Road, Panadura",
      "Tel +94 38 2237256",
      "Mobile +94 76 1950780",
      "+94 76 2557685",
      "info@chandranath.com",
    ],
    mapLabel: "Panadura office",
    mapQuery: "No. 08, Kulathunga Road, Panadura, Sri Lanka",
    tel: "tel:+94382237256",
    directions:
      "https://www.google.com/maps/search/?api=1&query=No.+08+Kulathunga+Road+Panadura",
  },
  rathnapura: {
    tab: "Rathnapura",
    title: "Rathnapura (Branch)",
    lines: [
      "Ganegama, Pelwadiya, Rathnapura",
      "Tel +94 719103351",
      "branch@chandranath.com",
    ],
    mapLabel: "Rathnapura office",
    mapQuery: "Ganegama, Pelwadiya, Rathnapura, Sri Lanka",
    tel: "tel:+94719103351",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Ganegama+Pelwadiya+Rathnapura",
  },
};

type OfficeKey = keyof typeof offices;

export default function OfficesPanel() {
  const [active, setActive] = useState<OfficeKey>("panadura");
  const office = offices[active];

  return (
    <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-5">
      <div className="flex w-full flex-col gap-4">
        <SectionLabel>OUR OFFICES</SectionLabel>
        <h2 className="text-h3 text-ink">
          <span className="block">Two offices,</span>
          <span className="block text-text-brand">one trusted team</span>
        </h2>
      </div>

      <div role="group" aria-label="Choose an office" className="flex flex-wrap gap-3">
        {(Object.keys(offices) as OfficeKey[]).map((key) => {
          const isActive = key === active;
          return (
            <button
              key={key}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(key)}
              className={`h-11 rounded-md px-6 text-button whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-action text-on-action"
                  : "border-[1.5px] border-text-brand text-text-brand hover:bg-tint"
              }`}
            >
              {offices[key].tab}
            </button>
          );
        })}
      </div>

      {(Object.keys(offices) as OfficeKey[]).map((key) => (
        <div
          key={key}
          className="flex w-full flex-col gap-3 rounded-lg border border-line bg-surface-200 p-5 sm:p-8"
        >
          <h3 className="text-h4 text-ink">{offices[key].title}</h3>
          <p className="whitespace-pre-line text-body-sm text-ink-muted">
            {offices[key].lines.join("\n")}
          </p>
        </div>
      ))}

      <div className="relative h-[240px] w-full overflow-hidden rounded-lg border border-line bg-surface-100">
        <iframe
          key={active}
          title={`Map showing the ${office.mapLabel}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&z=15&output=embed`}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="pointer-events-none absolute left-3 top-3 rounded-md bg-surface-200 px-3 py-2 text-label whitespace-nowrap text-ink shadow-md">
          {office.mapLabel}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button href={office.directions} variant="secondary">
          Get directions
        </Button>
        <Button href={office.tel}>Call office</Button>
      </div>
    </div>
  );
}
