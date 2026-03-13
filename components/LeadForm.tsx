"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  DollarSign,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { sendToGoogleSheets, type LeadFormData } from "@/lib/googleSheets";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  company: z.string().min(1, "Company name is required"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  description: z.string().min(20, "Please describe your project in at least 20 characters"),
});

type FormValues = z.infer<typeof schema>;

const services = [
  "Website Development",
  "Mobile App Development",
  "Custom Software",
  "UI/UX Design",
  "AI Integration",
  "Automation",
];

const budgets = [
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "₹2,00,000 – ₹5,00,000",
  "₹5,00,000+",
  "Not sure yet",
];

const inputClass =
  "w-full form-input rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:ring-2 focus:ring-indigo-500/40 transition-all";

function FormField({
  label,
  icon: Icon,
  error,
  children,
}: {
  label: string;
  icon: React.ElementType;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-2 text-xs font-semibold text-white/60 uppercase tracking-wider">
        <Icon className="w-3.5 h-3.5" />
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1.5 text-xs text-red-400"
          >
            <AlertCircle className="w-3 h-3" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      await sendToGoogleSheets(data as LeadFormData);
      setStatus("success");
      setStatusMessage("Your enquiry has been submitted successfully!");
      reset();
    } catch {
      setStatus("error");
      setStatusMessage(
        "There was an error submitting the form. Please try again or email us directly."
      );
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-pink-400 mb-4 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing</span> Together
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Fill in the form and our team will get back to you within 24 hours
              with a free consultation and project estimate.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {[
                { icon: "✅", text: "Free project consultation & roadmap" },
                { icon: "⚡", text: "Response within 24 hours" },
                { icon: "🔒", text: "Your data is kept strictly confidential" },
                { icon: "💡", text: "No commitment required" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-white/60">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="mt-10 glass-card rounded-2xl p-5 border border-white/5 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                Or reach us directly
              </p>
              <a
                href="tel:+919717767808"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                +91 9717767808
              </a>
              <a
                href="mailto:anubhavkumar076@gmail.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                anubhavkumar076@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="glass-card rounded-3xl p-8 border border-white/5 relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center text-center py-16 gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">
                      Message Sent!
                    </h3>
                    <p className="text-white/50 text-sm max-w-xs">
                      {statusMessage} We&apos;ll be in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-4 text-sm text-indigo-400 hover:text-white transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField label="Full Name" icon={User} error={errors.name?.message}>
                        <input
                          {...register("name")}
                          placeholder="John Smith"
                          className={inputClass}
                        />
                      </FormField>

                      <FormField label="Email Address" icon={Mail} error={errors.email?.message}>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="john@company.com"
                          className={inputClass}
                        />
                      </FormField>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField label="Phone Number" icon={Phone} error={errors.phone?.message}>
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className={inputClass}
                        />
                      </FormField>

                      <FormField label="Company" icon={Building2} error={errors.company?.message}>
                        <input
                          {...register("company")}
                          placeholder="Your company name"
                          className={inputClass}
                        />
                      </FormField>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField label="Service Needed" icon={Briefcase} error={errors.service?.message}>
                        <select {...register("service")} className={`${inputClass} cursor-pointer`}>
                          <option value="" className="bg-[#0f0f1a]">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s} className="bg-[#0f0f1a]">
                              {s}
                            </option>
                          ))}
                        </select>
                      </FormField>

                      <FormField label="Budget Range (optional)" icon={DollarSign} error={errors.budget?.message}>
                        <select {...register("budget")} className={`${inputClass} cursor-pointer`}>
                          <option value="" className="bg-[#0f0f1a]">Select budget</option>
                          {budgets.map((b) => (
                            <option key={b} value={b} className="bg-[#0f0f1a]">
                              {b}
                            </option>
                          ))}
                        </select>
                      </FormField>
                    </div>

                    <FormField
                      label="Project Description"
                      icon={MessageSquare}
                      error={errors.description?.message}
                    >
                      <textarea
                        {...register("description")}
                        rows={4}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        className={`${inputClass} resize-none`}
                      />
                    </FormField>

                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                      >
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        {statusMessage}
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl text-base font-semibold text-white disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending your message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send My Enquiry
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-center text-white/25">
                      By submitting this form you agree to our privacy policy. We never spam.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
