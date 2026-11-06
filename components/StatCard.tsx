"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type StatCardProps = {
  /** e.g. "16+", "120", "1,500+", "98%". The number part counts up. */
  value: string;
  label: string;
  /** Icon path in /public. Defaults to the calendar icon from the design. */
  icon?: string;
  /** Intrinsic size of the icon SVG (its root width/height). */
  iconWidth?: number;
  iconHeight?: number;
  /** Count-up duration in seconds. */
  duration?: number;
};

function parseValue(value: string) {
  const match = value.match(/^(\D*)([\d,]*\.?\d+)(.*)$/);
  if (!match) return null;
  const [, prefix, num, suffix] = match;
  const target = parseFloat(num.replace(/,/g, ""));
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, suffix, target, decimals, grouped: num.includes(",") };
}

export default function StatCard({
  value,
  label,
  icon = "/images/icon-calendar.svg",
  iconWidth = 23.0417,
  iconHeight = 24.2083,
  duration = 2,
}: StatCardProps) {
  const parsed = useMemo(() => parseValue(value), [value]);
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!parsed || !inView || reduceMotion) return;
    const controls = animate(0, parsed.target, {
      duration,
      ease: "easeOut",
      onUpdate: setCurrent,
    });
    return () => controls.stop();
  }, [parsed, inView, reduceMotion, duration]);

  // With reduced motion, skip the count-up and show the final number.
  const shown = parsed && reduceMotion ? parsed.target : current;

  const display = parsed
    ? `${parsed.prefix}${shown.toLocaleString("en-US", {
        useGrouping: parsed.grouped,
        minimumFractionDigits: parsed.decimals,
        maximumFractionDigits: parsed.decimals,
      })}${parsed.suffix}`
    : value;

  return (
    <div className="flex items-center gap-4">
      <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-surface-brand">
        <Image src={icon} alt="" width={iconWidth} height={iconHeight} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p
          ref={ref}
          aria-label={value}
          className="text-h2 text-on-brand tabular-nums"
        >
          {display}
        </p>
        <p className="text-body-sm text-on-brand-muted">{label}</p>
      </div>
    </div>
  );
}
