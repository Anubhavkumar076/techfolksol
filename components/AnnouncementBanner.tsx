"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, ArrowRight } from "lucide-react";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -48, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -48, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative z-50 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 background-animate overflow-hidden"
        >
          {/* Shimmer sweep */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-3">
            {/* Icon */}
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <Zap className="w-4 h-4 text-yellow-300 flex-shrink-0" fill="currentColor" />
            </motion.div>

            {/* Text */}
            <p className="text-sm font-semibold text-white text-center">
              <span className="text-yellow-300">🚀 Limited Offer:</span>{" "}
              Start your own business website at just{" "}
              <span className="text-yellow-300 font-bold">₹10,000 only!</span>
            </p>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-indigo-700 bg-white px-3 py-1.5 rounded-full flex-shrink-0 hover:bg-yellow-300 transition-colors"
            >
              Claim Now
              <ArrowRight className="w-3 h-3" />
            </motion.a>

            {/* Close */}
            <button
              onClick={() => setVisible(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-white/70 hover:text-white transition-colors"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
