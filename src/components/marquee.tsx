"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type MarqueeProps = {
  text: string;
  repeat?: number;
  className?: string;
  separator?: string;
};

export function Marquee({
  text,
  repeat = 8,
  className = "",
  separator = " — ",
}: MarqueeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const repeated = Array(repeat)
    .fill(null)
    .map((_, i) => (
      <span key={i} className="whitespace-nowrap">
        {text}
        <span className="mx-4 text-text-tertiary md:mx-8">{separator}</span>
      </span>
    ));

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className={`overflow-hidden border-y border-border py-6 ${className}`}
    >
      <div className="animate-marquee flex text-2xl font-bold uppercase tracking-tighter text-text-primary/10 md:text-4xl lg:text-6xl">
        {repeated}
        {repeated}
      </div>
    </motion.div>
  );
}
