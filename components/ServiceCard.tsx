"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  /** Photo path in /public shown in the top panel. */
  image?: string;
};

export default function ServiceCard({
  title,
  description,
  href,
  image = "/images/service-audit.jpg",
}: ServiceCardProps) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="flex flex-col overflow-hidden rounded-lg border border-line bg-surface-200"
    >
      <div className="relative h-[150px] w-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          variants={{ rest: { scale: 1 }, hover: { scale: 1.1 } }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1200px) 282px, 50vw"
            className="object-cover"
          />
        </motion.div>
      </div>
      <div className="flex flex-col gap-3 p-6">
        <h3 className="text-h4 text-ink">{title}</h3>
        <p className="text-body-sm text-ink-muted">{description}</p>
        <Link
          href={href}
          className="whitespace-pre text-button text-text-brand hover:underline"
        >
          {"Learn more  →"}
        </Link>
      </div>
    </motion.div>
  );
}
