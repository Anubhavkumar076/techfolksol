"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Salon Booking App",
    category: "Mobile App",
    description:
      "Online appointment booking system for salons with staff management, slot scheduling, and Razorpay payment integration.",
    tech: ["React Native", "Node.js", "MongoDB", "Razorpay"],
    gradient: "from-pink-600 via-rose-500 to-fuchsia-600",
    pattern: "dots",
  },
  {
    title: "Fintech Expense Tracker",
    category: "Mobile App",
    description:
      "Mobile app for tracking daily expenses, setting budgets, and visualising spending analytics with UPI transaction sync.",
    tech: ["Flutter", "Firebase", "Dart", "Charts"],
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    pattern: "grid",
  },
  {
    title: "Retail Store Ecommerce",
    category: "Web Development",
    description:
      "Online store with inventory management, payment gateway integration, GST invoicing, and order tracking for Indian retail.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Razorpay"],
    gradient: "from-blue-600 via-indigo-600 to-violet-700",
    pattern: "grid",
  },
  {
    title: "Restaurant Ordering App",
    category: "Web + Mobile",
    description:
      "Food ordering system with live order tracking, kitchen display, table QR ordering, and an admin dashboard for restaurant owners.",
    tech: ["React", "Express", "MongoDB", "Socket.io"],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    pattern: "dots",
  },
];

function PatternBg({ pattern }: { pattern: string }) {
  if (pattern === "grid") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    );
  }
  if (pattern === "dots") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    );
  }
  return null;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-4 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            What We Build
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
            Products We{" "}
            <span className="gradient-text">Can Create</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Here are the types of digital products we specialise in building —
            got a similar idea? Let&apos;s bring it to life.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              style={{ minHeight: "340px" }}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
              />
              <PatternBg pattern={project.pattern} />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080812] via-[#080812]/60 to-transparent" />

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-black/30"
                animate={{ opacity: hoveredIndex === index ? 0 : 0.2 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                {/* Category badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-white/60 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {project.category}
                  </span>
                  <motion.div
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      x: hoveredIndex === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink className="w-5 h-5 text-white/70" />
                  </motion.div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                {/* Description — visible on hover */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm text-white/70 leading-relaxed mb-4"
                    >
                      {project.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/70 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-white font-semibold transition-colors group"
          >
            Have a similar idea? Let&apos;s build it
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
