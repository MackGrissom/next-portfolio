"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CharReveal } from "@/components/animation/text-reveal";
import { Magnetic } from "@/components/animation/magnetic";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const lenis = (window as unknown as Record<string, { scrollTo: (el: HTMLElement, opts: Record<string, unknown>) => void }>).__lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -80 });
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-end overflow-hidden pb-12 md:pb-20"
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="w-full px-6 md:px-10"
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-text-secondary">
              AI Consultant &amp; Software Engineer
            </span>
          </motion.div>

          {/* Giant name */}
          <h1 className="text-[clamp(3rem,12vw,12rem)] font-bold leading-[0.85] tracking-[-0.04em]">
            <CharReveal delay={0.4}>MACK</CharReveal>
            <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.3)]">
              <CharReveal delay={0.6}>GRISSOM</CharReveal>
            </span>
          </h1>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-sm leading-relaxed text-text-secondary md:text-base">
              I build premium digital experiences and AI solutions that
              transform businesses. Currently available for select projects.
            </p>

            <div className="flex items-center gap-6">
              <Magnetic>
                <button
                  onClick={() => handleScroll("work")}
                  className="group flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-text-primary"
                >
                  <span>Selected Work</span>
                  <motion.span
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-accent"
                  >
                    ↓
                  </motion.span>
                </button>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating year badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 md:block md:right-10"
      >
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-text-tertiary [writing-mode:vertical-lr]">
          &copy; 2024 — Portfolio
        </span>
      </motion.div>
    </section>
  );
}
