"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "@/components/animation/text-reveal";
import { testimonials } from "@/data/site";

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      className="border-b border-border py-6 md:py-10 lg:py-14"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-2">
            <span className="text-4xl font-bold leading-none text-accent/30 md:text-6xl">&ldquo;</span>
          </div>
          <div className="md:col-span-7">
            <p className="text-base font-medium leading-relaxed tracking-tight md:text-lg lg:text-xl">
              {t.quote}
            </p>
          </div>
          <div className="md:col-span-3 md:text-right">
            <p className="text-sm font-semibold">{t.name}</p>
            <p className="mt-1 text-xs text-text-tertiary">
              {t.position}
              {t.company && `, ${t.company}`}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-text-tertiary">
            Testimonials
          </span>
          <h2 className="text-2xl font-bold tracking-tighter md:text-4xl lg:text-6xl">
            <TextReveal>Kind words from clients</TextReveal>
          </h2>
        </div>
      </div>

      <div className="border-t border-border">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} t={t} index={i} />
        ))}
      </div>
    </section>
  );
}
