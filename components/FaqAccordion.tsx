"use client";

import { useId, useState } from "react";
import FaqItem from "./FaqItem";

type Item = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: Item[];
  /** Index of the item that starts open, or null for all closed. */
  defaultOpen?: number | null;
};

export default function FaqAccordion({
  items,
  defaultOpen = 0,
}: FaqAccordionProps) {
  // Only one answer can be open at a time.
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <FaqItem
          key={item.question}
          id={`${baseId}-${i}`}
          question={item.question}
          answer={item.answer}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
