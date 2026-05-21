"use client";

import { motion } from "framer-motion";
import { QrCode, Star, Sparkles, ExternalLink, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: <QrCode className="w-8 h-8" />,
    title: "Customer Scans QR",
    description:
      "Place our smart QR code at your counter, table, or receipt. Customers scan it in seconds with their phone camera.",
    color: "from-blue-500 to-cyan-500",
    glow: "blue-500",
    bg: "blue-500/10",
    border: "blue-500/20",
  },
  {
    step: "02",
    icon: <Star className="w-8 h-8" />,
    title: "Rates Experience",
    description:
      "A clean, mobile-first rating screen appears. Customers tap 1–5 stars — no signup, no friction, just one tap.",
    color: "from-yellow-500 to-orange-500",
    glow: "yellow-500",
    bg: "yellow-500/10",
    border: "yellow-500/20",
  },
  {
    step: "03",
    icon: <Sparkles className="w-8 h-8" />,
    title: "AI Generates Review",
    description:
      "Our AI instantly crafts a personalized, professional Google review based on their sentiment. Ready in seconds.",
    color: "from-violet-500 to-purple-600",
    glow: "violet-500",
    bg: "violet-500/10",
    border: "violet-500/20",
  },
  {
    step: "04",
    icon: <ExternalLink className="w-8 h-8" />,
    title: "One Tap Posts To Google",
    description:
      "Happy customers are redirected straight to your Google Reviews page with the AI draft ready to copy & post.",
    color: "from-emerald-500 to-green-600",
    glow: "emerald-500",
    bg: "emerald-500/10",
    border: "emerald-500/20",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-500/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-semibold mb-5">
            <Sparkles className="w-4 h-4" />
            Simple 4-Step Process
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-5">
            How It Works
          </h2>
          <p className="text-lg text-zinc-400 font-medium leading-relaxed">
            From QR scan to Google review in under 30 seconds. No apps, no accounts, no friction.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {STEPS.map((s, i) => (
            <motion.div key={i} variants={cardVariants} className="relative group">
              {/* Connector arrow (not on last) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:flex absolute top-14 -right-3 z-10 items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-zinc-600" />
                </div>
              )}

              <div
                className={`relative h-full bg-[#0d0d18] border border-white/[0.06] rounded-3xl p-8 overflow-hidden group-hover:border-${s.glow}/30 transition-all duration-300 group-hover:-translate-y-1`}
              >
                {/* Background glow */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 rounded-full bg-${s.glow}/5 blur-[40px] group-hover:bg-${s.glow}/10 transition-colors`}
                />

                {/* Step number */}
                <div className="absolute top-5 right-6 text-6xl font-black text-white/[0.03] select-none">
                  {s.step}
                </div>

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  {s.icon}
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="text-xs font-bold text-zinc-500 mb-2 uppercase tracking-widest">
                    Step {s.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { label: "Average Completion Time", value: "< 30 seconds" },
            { label: "Customer Completion Rate", value: "85%" },
            { label: "Review Quality Score", value: "4.9 / 5" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 text-center"
            >
              <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
              <p className="text-sm text-zinc-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
