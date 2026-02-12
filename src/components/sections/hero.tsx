"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CharReveal } from "@/components/animation/text-reveal";
import { Magnetic } from "@/components/animation/magnetic";
import { AsciiPlasma, AsciiMatrixRain } from "@/components/ascii-plasma";

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
      {/* Matrix rain background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 2, duration: 2 }}
        className="pointer-events-none absolute inset-0 hidden select-none overflow-hidden md:block"
      >
        <AsciiMatrixRain color="#c8ff00" size={14} width={150} height={60} />
      </motion.div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative w-full px-6 md:px-10"
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 flex items-center gap-2 md:gap-4"
          >
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-text-secondary">
              AI Consultant &amp; Software Engineer
            </span>
          </motion.div>

          {/* Giant name */}
          <h1 className="text-[clamp(2.5rem,10vw,12rem)] font-bold leading-[0.85] tracking-[-0.04em]">
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
            className="mt-8 flex flex-col gap-6 border-t border-border pt-6 md:mt-12 md:flex-row md:items-end md:justify-between md:pt-8"
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

      {/* ASCII Plasma animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="absolute right-0 top-1/2 hidden -translate-y-1/2 overflow-hidden md:block lg:right-6"
      >
        <AsciiPlasma color="#c8ff00" hoverColor="#ffffff" size={14} width={55} height={30} />
      </motion.div>
    </section>
  );
}
