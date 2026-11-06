"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** "up" slides up, "scale" grows in, "blur" sharpens into focus */
  effect?: "up" | "scale" | "blur";
  delay?: number;
};

const hidden = {
  up: { opacity: 0, y: 56 },
  scale: { opacity: 0, scale: 0.94, y: 24 },
  blur: { opacity: 0, y: 24, filter: "blur(12px)" },
};
const shown = {
  up: { opacity: 1, y: 0 },
  scale: { opacity: 1, scale: 1, y: 0 },
  blur: { opacity: 1, y: 0, filter: "blur(0px)" },
};

/** Reveals its children once, the first time they scroll into view. */
export default function Reveal({
  children,
  effect = "up",
  delay = 0,
}: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial={hidden[effect]}
      whileInView={shown[effect]}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
