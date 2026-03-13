"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  Layers,
  Shield,
  HeartHandshake,
  TrendingUp,
  Clock,
  Award,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Agile sprints and streamlined workflows ensure your product ships on schedule without cutting corners.",
    color: "from-yellow-400 to-orange-400",
    glow: "rgba(251,191,36,0.25)",
  },
  {
    icon: Layers,
    title: "Modern Tech Stack",
    description:
      "We use battle-tested, cutting-edge technologies chosen for performance, scalability, and developer experience.",
    color: "from-blue-400 to-indigo-500",
    glow: "rgba(99,102,241,0.25)",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description:
      "Built to grow with your business — from MVP to millions of users without costly rewrites.",
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(52,211,153,0.25)",
  },
  {
    icon: Shield,
    title: "Secure Code",
    description:
      "Security best practices baked in from day one — OWASP compliance, data encryption, and regular audits.",
    color: "from-red-400 to-pink-500",
    glow: "rgba(248,113,113,0.25)",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description:
      "Your team doesn't disappear after launch. We provide ongoing maintenance, monitoring, and proactive updates.",
    color: "from-violet-400 to-purple-500",
    glow: "rgba(167,139,250,0.25)",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We hit our deadlines. 94% of our projects are delivered on time with transparent progress tracking throughout.",
    color: "from-cyan-400 to-blue-400",
    glow: "rgba(34,211,238,0.25)",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Every feature is tested rigorously before it reaches production — automated tests, code reviews, and QA cycles.",
    color: "from-amber-400 to-yellow-300",
    glow: "rgba(251,191,36,0.25)",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "We treat your project like it's our own. Full transparency, weekly updates, and a dedicated point of contact.",
    color: "from-pink-400 to-rose-500",
    glow: "rgba(244,114,182,0.25)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      {/* Bg decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/8 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400 mb-4 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            Why TechFolkSolution
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
            What Sets Us{" "}
            <span className="gradient-text">Apart</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re not just developers — we&apos;re your long-term technology partner,
            committed to your success.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="group relative glass-card rounded-2xl p-6 border border-white/5 overflow-hidden cursor-default"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 20% 20%, ${feature.glow} 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Text */}
                <h3 className="font-bold text-white text-base mb-2 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs text-white/45 leading-relaxed group-hover:text-white/55 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 glass-card rounded-3xl border border-white/5 p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Websites Delivered", sub: "live projects" },
              { value: "5+", label: "Mobile Apps Built", sub: "iOS & Android" },
              { value: "8+", label: "Happy Clients", sub: "& growing" },
              { value: "2+", label: "Years Experience", sub: "since 2022" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-3xl md:text-4xl font-bold gradient-text mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-semibold text-white/70 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-white/30">{stat.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
