"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";

const FloatingShape = ({
  className,
  delay = 0,
  duration = 6,
}: {
  className: string;
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    className={`absolute rounded-full blur-[80px] pointer-events-none ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const stats = [
  { value: "10+", label: "Websites Delivered" },
  { value: "5+", label: "Mobile Apps Built" },
  { value: "8+", label: "Happy Clients" },
  { value: "2+", label: "Years Experience" },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#080812]" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Floating glows */}
      <FloatingShape
        className="w-[600px] h-[600px] bg-indigo-600/20 top-[-100px] left-[-100px]"
        delay={0}
        duration={8}
      />
      <FloatingShape
        className="w-[500px] h-[500px] bg-violet-600/15 top-[10%] right-[-50px]"
        delay={2}
        duration={7}
      />
      <FloatingShape
        className="w-[400px] h-[400px] bg-cyan-500/10 bottom-[5%] left-[20%]"
        delay={1}
        duration={9}
      />
      <FloatingShape
        className="w-[300px] h-[300px] bg-pink-600/10 bottom-[20%] right-[10%]"
        delay={3}
        duration={6}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-indigo-400"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-violet-400"
        animate={{ scale: [1, 2, 1], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-cyan-400"
        animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      />

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-indigo-500/30 mb-8"
        >
          <Star className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
          <span className="text-xs font-medium text-white/70">
            Trusted by Indian startups &amp; growing businesses
          </span>
          <Star className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-white">Build Powerful</span>
          <br />
          <span className="gradient-text">Websites, Apps</span>
          <br />
          <span className="text-white">&amp; Software</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We help Indian startups and small businesses build powerful
          websites, mobile apps, and custom software — fast, affordable, and built to last.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary group flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.4)]"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.06)" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white/80 glass-card border border-white/10 hover:border-white/20 transition-all"
          >
            <Play className="w-4 h-4 text-indigo-400" fill="currentColor" />
            View Services
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + i * 0.1 }}
              className="glass-card rounded-2xl px-4 py-5 border border-white/5"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/40 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080812] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-indigo-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
