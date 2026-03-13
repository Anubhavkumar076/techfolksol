"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
} from "framer-motion";
import {
  Globe,
  Smartphone,
  Code2,
  Palette,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "High-performance, SEO-optimised websites and web apps built with modern frameworks like Next.js and React. Starting at ₹25,000.",
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.3)",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications for iOS and Android using React Native and Flutter. Starting at ₹50,000.",
    color: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.3)",
    tags: ["React Native", "Flutter", "iOS/Android"],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailor-made software solutions built to solve your unique business challenges with scalable architecture. Starting at ₹75,000.",
    color: "from-indigo-500 to-blue-600",
    glow: "rgba(99,102,241,0.3)",
    tags: ["Python", "Node.js", "REST APIs"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centred design that converts — wireframes, prototypes and pixel-perfect interfaces that delight users. Starting at ₹15,000.",
    color: "from-pink-500 to-rose-500",
    glow: "rgba(236,72,153,0.3)",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-4 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
            Services We{" "}
            <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            End-to-end digital solutions crafted with precision — from design to
            deployment and beyond.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                className="group relative glass-card rounded-2xl p-7 border border-white/5 cursor-pointer overflow-hidden"
                style={
                  {
                    "--glow-color": service.glow,
                  } as React.CSSProperties
                }
              >
                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 30% 30%, ${service.glow} 0%, transparent 70%)`,
                  }}
                />

                {/* Top border gradient on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${service.glow}, transparent)`,
                  }}
                />

                {/* Icon */}
                <div
                  className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-lg font-bold text-white mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="relative z-10 text-sm text-white/50 leading-relaxed mb-5 group-hover:text-white/60 transition-colors">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="relative z-10 flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/40 border border-white/5 group-hover:border-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn more link */}
                <motion.a
                  href="#contact"
                  className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
