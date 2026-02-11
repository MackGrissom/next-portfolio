"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { TextReveal } from "@/components/animation/text-reveal";

type ProjectRow = {
  slug: string;
  title: string;
  category: string;
  year: string;
  tags: string[];
};

const featuredProjects: ProjectRow[] = [
  { slug: "executive-leaderboard", title: "Executive Leaderboard", category: "Full-Stack Platform", year: "2024", tags: ["Next.js", "Supabase", "Stripe"] },
  { slug: "soulpunx", title: "SoulPunx", category: "Record Label Website", year: "2024", tags: ["Next.js", "Sanity CMS", "React"] },
  { slug: "tutorboost", title: "TutorBoost", category: "EdTech Platform", year: "2024", tags: ["React", "Node.js", "Education"] },
  { slug: "dock-appeal", title: "Dock Appeal", category: "Shopify E-Commerce", year: "2024", tags: ["Shopify", "E-Commerce", "Design"] },
  { slug: "sumorize", title: "Sumorize", category: "AI Article Summarizer", year: "2023", tags: ["React", "Redux", "GPT-4"] },
  { slug: "simply-ai", title: "SimplyAI", category: "AI Toolkit Startup", year: "2023", tags: ["React", "Tailwind", "Redux"] },
  { slug: "empower-advocacy", title: "Empower Advocacy", category: "Consultant Landing Page", year: "2023", tags: ["React", "Tailwind", "Figma"] },
  { slug: "precision-stoneworks", title: "Precision Stoneworks", category: "Business Landing Page", year: "2023", tags: ["React", "Tailwind", "Vite"] },
  { slug: "full-circle-web-design", title: "Full Circle Design", category: "Agency Website", year: "2023", tags: ["React", "Node.js", "Tailwind"] },
  { slug: "quantum", title: "Quantum", category: "Robotics Mock-up", year: "2023", tags: ["Next.js", "React"] },
];

function ProjectItem({ project, index }: { project: ProjectRow; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="border-b border-border py-5 transition-colors duration-300 md:py-10">
          <div className="mx-auto flex max-w-[1400px] flex-row items-center gap-3 px-6 md:gap-4 md:px-10">
            {/* Number */}
            <span className="w-12 shrink-0 text-xs font-medium text-text-tertiary">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Title */}
            <h3 className="flex-1 text-xl font-bold tracking-tight transition-all duration-500 group-hover:translate-x-3 group-hover:text-accent md:text-3xl lg:text-5xl">
              {project.title}
            </h3>

            {/* Category */}
            <span className="hidden shrink-0 text-sm text-text-secondary transition-opacity group-hover:opacity-100 md:block md:opacity-50">
              {project.category}
            </span>

            {/* Year */}
            <span className="hidden shrink-0 text-sm text-text-tertiary md:block">
              {project.year}
            </span>

            {/* Arrow */}
            <ArrowUpRight
              size={20}
              className="shrink-0 text-text-tertiary transition-all duration-300 group-hover:rotate-45 group-hover:text-accent"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-32">
      {/* Section header */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-text-tertiary">
              Selected Work
            </span>
            <h2 className="text-2xl font-bold tracking-tighter md:text-4xl lg:text-6xl">
              <TextReveal>Featured Projects</TextReveal>
            </h2>
          </div>
          <span className="hidden text-7xl font-bold text-text-primary/5 md:block">
            ({featuredProjects.length})
          </span>
        </div>
      </div>

      {/* Project rows */}
      <div className="border-t border-border">
        {featuredProjects.map((project, i) => (
          <ProjectItem key={project.slug} project={project} index={i} />
        ))}
      </div>

      {/* NDA Notice */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex items-start gap-4 rounded-2xl border border-border bg-white/[0.02] p-6 md:items-center md:p-8"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 text-accent">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-tight">Additional projects under NDA</p>
            <p className="mt-1 text-xs leading-relaxed text-text-secondary">
              Several client projects are protected by non-disclosure agreements. Live links and detailed case studies are available upon request for serious inquiries.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
