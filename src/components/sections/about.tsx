"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal, ScrollRevealParagraph } from "@/components/animation/text-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
  "PostgreSQL", "Supabase", "Figma", "AI/ML", "Ruby on Rails",
  "Redux", "Framer Motion", "Shopify", "Sanity CMS",
];

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section id="about" ref={containerRef} className="relative overflow-hidden py-20 md:py-32 lg:py-48">
      {/* Large background text */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span className="select-none text-[20vw] font-bold uppercase leading-none tracking-tighter text-white/[0.02]">
          About
        </span>
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Left column */}
          <div className="md:col-span-4">
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-text-tertiary">
              About
            </span>
            <h2 className="text-2xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              <TextReveal>Building the future of web.</TextReveal>
            </h2>

            {/* Photo */}
            <FadeIn delay={0.3}>
              <div className="mt-10 aspect-[3/4] overflow-hidden rounded-2xl bg-surface">
                <Image
                  src="/images/mack.jpg"
                  alt="Mack Grissom"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </FadeIn>
          </div>

          {/* Right column */}
          <div className="md:col-span-7 md:col-start-6">
            <div className="space-y-12 pt-0 md:pt-24">
              <ScrollRevealParagraph className="text-lg font-medium leading-relaxed tracking-tight md:text-2xl lg:text-3xl">
                I&apos;m Mack, a full-stack developer and AI consultant who partners with forward-thinking companies to build products that matter.
              </ScrollRevealParagraph>

              <FadeIn delay={0.2}>
                <p className="text-base leading-relaxed text-text-secondary">
                  With 4+ years of experience and 50+ projects delivered, I specialize
                  in React, Next.js, and AI integrations. From strategy to deployment,
                  I create solutions that scale with your business. When I&apos;m not
                  coding, I&apos;m exploring — 20+ countries and counting.
                </p>
              </FadeIn>

              {/* Stats */}
              <FadeIn delay={0.3}>
                <div className="grid grid-cols-3 gap-4 border-t border-border pt-8 md:gap-8">
                  <div>
                    <p className="text-2xl font-bold tracking-tighter text-accent md:text-4xl lg:text-5xl">50+</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-text-tertiary">Projects</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold tracking-tighter text-accent md:text-4xl lg:text-5xl">40+</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-text-tertiary">Clients</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold tracking-tighter text-accent md:text-4xl lg:text-5xl">4+</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-text-tertiary">Years</p>
                  </div>
                </div>
              </FadeIn>

              {/* Skills */}
              <FadeIn delay={0.4}>
                <div className="border-t border-border pt-8">
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-text-tertiary">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent hover:text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
