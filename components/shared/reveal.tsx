"use client";

import { motion } from "motion/react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

// globals.css shows [data-reveal] at rest under prefers-reduced-motion.
export const Reveal = function ({
  children,
  className,
  delay = 0,
  y = 28,
}: Props) {
  return (
    <motion.div
      data-reveal
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
