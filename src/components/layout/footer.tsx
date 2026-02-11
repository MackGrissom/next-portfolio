"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Magnetic } from "@/components/animation/magnetic";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleBackToTop = () => {
    const lenis = (window as unknown as Record<string, { scrollTo: (target: number) => void }>).__lenis;
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer ref={ref} className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-8 md:px-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs text-text-tertiary"
          >
            &copy; {new Date().getFullYear()} Mack Grissom. All rights reserved.
          </motion.p>

          <div className="flex items-center gap-4 md:gap-8">
            {[
              { label: "GitHub", href: "https://github.com/MackGrissom" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/mackgrissom/" },
              { label: "Instagram", href: "https://www.instagram.com/mackgrissom/" },
            ].map((s) => (
              <Magnetic key={s.label} strength={0.2}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium uppercase tracking-[0.15em] text-text-tertiary transition-colors hover:text-text-primary"
                >
                  {s.label}
                </a>
              </Magnetic>
            ))}
          </div>

          <Magnetic>
            <button
              onClick={handleBackToTop}
              className="text-xs font-medium uppercase tracking-[0.15em] text-text-tertiary transition-colors hover:text-accent"
            >
              Back to top ↑
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
