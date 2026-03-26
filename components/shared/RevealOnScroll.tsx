"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface RevealOnScrollProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export default function RevealOnScroll({
  children,
  variants = fadeUp,
  className,
  delay = 0,
}: RevealOnScrollProps) {
  const delayedVariants: Variants = delay
    ? {
        hidden: variants.hidden,
        visible: {
          ...(typeof variants.visible === "object" ? variants.visible : {}),
          transition: {
            ...(typeof variants.visible === "object" &&
            "transition" in variants.visible
              ? (variants.visible as { transition?: object }).transition
              : {}),
            delay,
          },
        },
      }
    : variants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={delayedVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
