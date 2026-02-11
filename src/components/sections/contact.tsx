"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CharReveal } from "@/components/animation/text-reveal";
import { Magnetic } from "@/components/animation/magnetic";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", value: "mack@mackgrissom.io", href: "mailto:mack@mackgrissom.io" },
  { label: "WhatsApp", value: "Message on WhatsApp", href: "https://wa.me/1XXXXXXXXXX" },
  { label: "LinkedIn", value: "linkedin.com/in/mackgrissom", href: "https://www.linkedin.com/in/mackgrissom/" },
  { label: "GitHub", value: "github.com/MackGrissom", href: "https://github.com/MackGrissom" },
  { label: "Instagram", value: "@mackgrissom", href: "https://www.instagram.com/mackgrissom/" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden py-20 md:py-32 lg:py-48">
      {/* Giant background CTA */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="select-none text-[20vw] font-bold uppercase leading-none tracking-tighter text-white/[0.02] md:text-[15vw]">
          Let&apos;s Talk
        </span>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-10 md:gap-16 md:grid-cols-2">
          {/* Left */}
          <div>
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-text-tertiary">
              Contact
            </span>
            <h2 className="mb-8 text-3xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
              <CharReveal>Let&apos;s work</CharReveal>
              <br />
              <span className="text-accent">
                <CharReveal delay={0.3}>together.</CharReveal>
              </span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-text-secondary">
              Have a project in mind or want to explore how AI can transform
              your business? Reach out — I&apos;m always open to discussing new
              opportunities.
            </p>
          </div>

          {/* Right — contact links */}
          <div className="flex flex-col justify-end">
            <div className="space-y-0">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                >
                  <Magnetic strength={0.1}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between border-b border-border py-5 transition-colors hover:border-accent/30"
                    >
                      <div>
                        <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-text-tertiary">
                          {link.label}
                        </span>
                        <span className="mt-1 block truncate text-xs font-medium text-text-secondary transition-colors group-hover:text-text-primary md:text-sm">
                          {link.value}
                        </span>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-text-tertiary transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                      />
                    </a>
                  </Magnetic>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
