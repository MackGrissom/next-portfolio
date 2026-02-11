"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "@/components/animation/text-reveal";

const services = [
  { num: "01", title: "AI Strategy &\nConsulting", description: "AI readiness assessments, custom solution architecture, and LLM integration with OpenAI, Anthropic, and more." },
  { num: "02", title: "Full-Stack\nDevelopment", description: "End-to-end web applications with React, Next.js, TypeScript, Node.js, and modern cloud infrastructure." },
  { num: "03", title: "AI-Powered\nAutomation", description: "Intelligent chatbots, business process automation, and AI-powered data analysis to streamline operations." },
  { num: "04", title: "Enterprise\nSolutions", description: "Custom enterprise applications, legacy system modernization, third-party integrations, and security compliance." },
  { num: "05", title: "Technical\nConsultation", description: "Technology stack selection, architecture review, code quality audits, and digital transformation strategy." },
  { num: "06", title: "Mobile\nDevelopment", description: "React Native apps, progressive web apps, mobile-first design, and app store optimization." },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      className="group border-b border-border py-10 transition-colors hover:bg-white/[0.02] md:border-b-0 md:border-r md:p-10 md:last:border-r-0"
    >
      <span className="mb-6 block text-xs font-medium text-accent">{service.num}</span>
      <h3 className="mb-4 whitespace-pre-line text-xl font-bold tracking-tight md:text-2xl">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-text-secondary">{service.description}</p>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-20 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-text-tertiary">
              Services
            </span>
            <h2 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
              <TextReveal>What I do</TextReveal>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-text-secondary md:text-right">
            Transform your business with cutting-edge AI and custom software solutions
            designed to drive growth and efficiency.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-3">
          {services.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.num} service={s} index={i} />
          ))}
        </div>
        <div className="mx-auto grid max-w-[1400px] border-t border-border md:grid-cols-3">
          {services.slice(3).map((s, i) => (
            <ServiceCard key={s.num} service={s} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
