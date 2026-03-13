"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  Services: [
    "Website Development",
    "Mobile App Development",
    "Custom Software",
    "UI/UX Design",
  ],
  Company: ["About Us", "Our Team", "Careers", "Blog", "Case Studies"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-[#060610]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* CTA banner */}
      <div className="relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="glass-card rounded-3xl border border-indigo-500/20 p-8 md:p-14 text-center relative overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-violet-600/10 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Ready to start your{" "}
                <span className="gradient-text">next project?</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
                Let&apos;s turn your idea into a product your users will love.
                Free consultation — no strings attached.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-5"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                <Zap className="w-4.5 h-4.5 text-white" fill="white" />
              </div>
              <div>
                <span className="font-bold text-xl text-white">TechFolk</span>
                <span className="font-bold text-xl gradient-text">Solution</span>
              </div>
            </motion.a>

            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
              Web • Mobile • Software Development
              <br />
              Helping Indian startups and small businesses build powerful
              digital products.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a
                href="mailto:anubhavkumar076@gmail.com"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                anubhavkumar076@gmail.com
              </a>
              <a
                href="tel:+919717767808"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                +91 9717767808
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-xl glass-card border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:border-indigo-500/30 transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/60 mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-white/80 transition-colors animated-underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} TechFolkSolution. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Crafted with ❤️ by the TechFolkSolution team
          </p>
        </div>
      </div>
    </footer>
  );
}
