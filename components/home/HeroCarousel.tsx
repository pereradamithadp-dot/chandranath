"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";

type Slide = {
  image: string;
  eyebrow: string;
  title: string[];
  text: string;
};

const slides: Slide[] = [
  {
    image: "/images/page-hero.png",
    eyebrow: "CHARTERED ACCOUNTANTS IN PANADURA",
    title: ["Accounts you", "can rely on."],
    text: "Audit, tax and advisory services for businesses and individuals.",
  },
  {
    image: "/images/home/service-audit.jpg",
    eyebrow: "AUDIT & ASSURANCE",
    title: ["Clear audits,", "confident decisions."],
    text: "Independent statutory and internal audits that give owners, lenders and regulators confidence in your numbers.",
  },
  {
    image: "/images/home/service-tax.jpg",
    eyebrow: "TAX & COMPLIANCE",
    title: ["Tax filed right,", "on time."],
    text: "Returns, planning and advice that keep you compliant and make sure you pay no more than you owe.",
  },
  {
    image: "/images/home/service-risk.jpg",
    eyebrow: "RISK & ADVISORY",
    title: ["Protect what", "you have built."],
    text: "Practical risk reviews and business advice for trading, manufacturing, plantation and hospitality clients.",
  },
  {
    image: "/images/home/service-bpo.jpg",
    eyebrow: "BOOKKEEPING & BPO",
    title: ["Your books,", "handled for you."],
    text: "Outsourced bookkeeping, payroll and reporting so you can focus on running your business.",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const go = (i: number) => setIndex((i + slides.length) % slides.length);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative h-[600px] w-full sm:h-[640px] overflow-hidden bg-crimson-800"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(100,18,32,0.94)] via-[rgba(100,18,32,0.74)] via-55% to-[rgba(100,18,32,0.12)]" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-page items-center px-4">
              <div className="flex w-[660px] max-w-full flex-col items-start gap-5 pb-8 sm:gap-6 sm:pb-0">
                <Eyebrow>{slide.eyebrow}</Eyebrow>
                <h1 className="text-display text-on-brand">
                  {slide.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="text-body-lg text-on-brand-muted">{slide.text}</p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" variant="onBrandSolid" size="lg">
                    Book a consultation
                  </Button>
                  <Button href="/services" variant="onBrandOutline" size="lg">
                    Our services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute left-8 top-1/2 hidden size-12 sm:flex -translate-y-1/2 items-center justify-center rounded-pill bg-surface-200 transition-colors duration-300 ease-in-out hover:bg-on-brand-muted"
      >
        <Image
          src="/images/icons/chevron-left.svg"
          alt=""
          width={7.75}
          height={13.75}
        />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-8 top-1/2 hidden size-12 sm:flex -translate-y-1/2 items-center justify-center rounded-pill bg-surface-200 transition-colors duration-300 ease-in-out hover:bg-on-brand-muted"
      >
        <Image
          src="/images/icons/chevron-right.svg"
          alt=""
          width={7.75}
          height={13.75}
        />
      </button>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-pill bg-surface-200 transition-all ${
              i === index ? "w-8" : "w-2 opacity-55"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
