"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ClipboardList,
  Layers,
  Terminal,
  TestTube,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Requirement Analysis",
    description:
      "We deep-dive into your business goals, target audience, and technical needs to create a bulletproof project blueprint.",
    color: "from-blue-500 to-cyan-400",
    glow: "rgba(59,130,246,0.4)",
    duration: "1–2 weeks",
  },
  {
    number: "02",
    icon: Layers,
    title: "UI/UX Design",
    description:
      "Our designers craft intuitive wireframes and high-fidelity prototypes, iterating with you until the design feels perfect.",
    color: "from-violet-500 to-pink-500",
    glow: "rgba(139,92,246,0.4)",
    duration: "2–3 weeks",
  },
  {
    number: "03",
    icon: Terminal,
    title: "Development",
    description:
      "Our engineers build your product using modern, scalable architectures with clean, well-tested code — sprint by sprint.",
    color: "from-indigo-500 to-blue-500",
    glow: "rgba(99,102,241,0.4)",
    duration: "4–12 weeks",
  },
  {
    number: "04",
    icon: TestTube,
    title: "Testing & QA",
    description:
      "Rigorous automated and manual testing across devices, browsers and edge cases to ensure rock-solid reliability.",
    color: "from-emerald-500 to-teal-400",
    glow: "rgba(16,185,129,0.4)",
    duration: "1–2 weeks",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Deployment",
    description:
      "We deploy to production with zero-downtime pipelines, monitor performance, and provide post-launch support.",
    color: "from-orange-500 to-amber-400",
    glow: "rgba(249,115,22,0.4)",
    duration: "1 week",
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="process" className="section-padding relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-4 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
            Our Development{" "}
            <span className="gradient-text">Process</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            A proven, transparent process that delivers results on time and on
            budget — every time.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full timeline-line"
            />
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <TimelineStep
                  key={step.number}
                  step={step}
                  index={index}
                  isEven={isEven}
                  Icon={Icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineStep({
  step,
  index,
  isEven,
  Icon,
}: {
  step: (typeof steps)[0];
  index: number;
  isEven: boolean;
  Icon: React.ElementType;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      className={`relative flex items-center ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row gap-8`}
    >
      {/* Content card — desktop */}
      <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} hidden md:block`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.2 }}
          className="glass-card rounded-2xl p-6 border border-white/5 hover:border-indigo-500/20 transition-all group cursor-default"
          style={{
            marginLeft: isEven ? "auto" : "0",
            marginRight: isEven ? "0" : "auto",
            maxWidth: "380px",
          }}
        >
          {/* Duration badge */}
          <div
            className={`inline-flex items-center gap-1.5 text-xs font-medium text-white/40 bg-white/5 px-3 py-1 rounded-full mb-3 ${
              isEven ? "ml-auto" : ""
            } ${isEven ? "flex-row-reverse" : ""}`}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {step.duration}
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
            {step.title}
          </h3>
          <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
        </motion.div>
      </div>

      {/* Center dot */}
      <div className="relative z-10 flex-shrink-0">
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg relative`}
          style={{
            boxShadow: `0 0 30px ${step.glow}`,
          }}
        >
          <Icon className="w-7 h-7 text-white" />
          {/* Step number */}
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#080812] border border-white/10 flex items-center justify-center">
            <span className="text-[9px] font-bold text-white/60">{step.number}</span>
          </div>
        </motion.div>
      </div>

      {/* Content — right side desktop / mobile full */}
      <div className={`flex-1 ${isEven ? "md:text-left" : "md:text-right"}`}>
        {/* Mobile card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-card rounded-2xl p-6 border border-white/5 md:hidden"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 bg-white/5 px-3 py-1 rounded-full mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {step.duration}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
          <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
        </motion.div>

        {/* Desktop — empty opposite side */}
        <div className="hidden md:block" />
      </div>
    </motion.div>
  );
}
