"use client";

import { useId, useState } from "react";
import Button from "@/components/Button";
import FaqItem from "@/components/FaqItem";
import SectionLabel from "@/components/SectionLabel";

// Answers marked as placeholders were not in the design and must be supplied by the client.
const FALLBACK =
  "Please call +94 38 2237256 or send us a message and we will answer this for you.";

const groups = [
  {
    id: "general",
    title: "General",
    items: [
      {
        question: "What does a chartered accountant do?",
        answer:
          "A chartered accountant is a qualified professional who prepares and checks accounts, advises on tax and helps businesses manage risk. Our principal is a fellow member of the Institute of Chartered Accountants of Sri Lanka.",
      },
      {
        question: "Where are your offices?",
        answer:
          "Our Head Office is at No. 08, Kulathunga Road, Panadura. Our branch is at Ganegama, Pelwadiya, Rathnapura.",
      },
      {
        question: "How do I book a consultation?",
        answer:
          "Call +94 38 2237256 or send us a message from the Contact page. We reply within one working day.",
      },
    ],
  },
  {
    id: "audit",
    title: "Audit & Assurance",
    items: [
      { question: "Does my business need an audit?" },
      { question: "What should I prepare for an audit?" },
    ],
  },
  {
    id: "tax",
    title: "Tax Advisory",
    items: [
      { question: "Can you prepare and file my tax return?" },
      { question: "When are tax returns due?" },
    ],
  },
  {
    id: "outsourcing",
    title: "Outsourcing",
    items: [
      { question: "What work can I hand over to you?" },
      { question: "Is my information kept private?" },
    ],
  },
  {
    id: "working",
    title: "Working with us",
    items: [
      { question: "How are your fees decided?" },
      { question: "How soon will you reply?" },
    ],
  },
] as { id: string; title: string; items: { question: string; answer?: string }[] }[];

export default function FaqSection() {
  const baseId = useId();
  // One answer open at a time across the whole page.
  const [openId, setOpenId] = useState<string | null>("general-0");
  const [topic, setTopic] = useState("general");

  const jumpTo = (id: string) => {
    setTopic(id);
    document
      .getElementById(`faq-${id}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-surface-200 py-16">
      <div className="mx-auto flex max-w-page flex-col gap-10 px-4">
        <div className="flex items-end justify-between gap-16">
          <div className="flex flex-col gap-4">
            <SectionLabel>FAQS</SectionLabel>
            <h2 className="text-h2 text-ink">
              <span className="block">Answers to common</span>
              <span className="block text-text-brand">questions</span>
            </h2>
          </div>
          <p className="w-[420px] text-body text-ink-muted">
            Short answers about our services, fees, documents and working with
            us. Pick a topic to jump to it.
          </p>
        </div>

        <div className="flex items-start gap-12">
          <aside className="sticky top-6 flex w-[300px] shrink-0 flex-col gap-6">
            <nav
              aria-label="FAQ topics"
              className="flex flex-col gap-1 rounded-lg border border-line bg-surface-200 p-5"
            >
              <p className="text-caption whitespace-nowrap text-ink-muted">
                BROWSE BY TOPIC
              </p>
              {groups.map((g) => {
                const active = g.id === topic;
                return (
                  <button
                    key={g.id}
                    type="button"
                    aria-current={active}
                    onClick={() => jumpTo(g.id)}
                    className={`flex h-11 items-center justify-center rounded-md px-6 text-button whitespace-nowrap text-text-brand transition-colors hover:bg-tint ${
                      active ? "border-[1.5px] border-text-brand" : ""
                    }`}
                  >
                    {g.title}
                  </button>
                );
              })}
            </nav>

            <div className="flex flex-col gap-4 rounded-lg bg-surface-brand px-6 py-8">
              <p className="text-h4 text-on-brand">Need a quick answer?</p>
              <p className="text-body-sm text-on-brand-muted">
                Talk to our team in Panadura or Rathnapura.
              </p>
              <Button
                href="tel:+94382237256"
                variant="onBrandSolid"
                className="w-full"
              >
                Call +94 38 2237256
              </Button>
              <Button
                href="https://wa.me/94761950780"
                variant="onBrandOutline"
                className="w-full"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col gap-10">
            {groups.map((g) => (
              <div
                key={g.id}
                id={`faq-${g.id}`}
                className="flex scroll-mt-6 flex-col gap-3"
              >
                <h3 className="text-h3 text-ink">{g.title}</h3>
                {g.items.map((item, i) => {
                  const id = `${g.id}-${i}`;
                  return (
                    <FaqItem
                      key={item.question}
                      id={`${baseId}-${id}`}
                      question={item.question}
                      answer={item.answer ?? FALLBACK}
                      open={openId === id}
                      onToggle={() => setOpenId(openId === id ? null : id)}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
