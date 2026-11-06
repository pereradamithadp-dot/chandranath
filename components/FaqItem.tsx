"use client";

import { AnimatePresence, motion } from "framer-motion";

type FaqItemProps = {
  id: string;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
};

/** One accordion row. Open/closed state is owned by the parent so only one can be open. */
export default function FaqItem({
  id,
  question,
  answer,
  open,
  onToggle,
}: FaqItemProps) {
  const buttonId = `${id}-q`;
  const panelId = `${id}-a`;
  return (
    <div className="rounded-md border border-line bg-surface-200">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-h4 text-ink"
        >
          <span className="flex-1">{question}</span>
          <span aria-hidden className="shrink-0 text-text-brand">
            {open ? "–" : "+"}
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-body-sm text-ink-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
