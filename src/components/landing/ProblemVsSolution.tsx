"use client";

import { motion } from "framer-motion";
import { X, CheckCircle, AlertCircle, Clock, TrendingDown, Zap, Shield, TrendingUp, MessageSquare } from "lucide-react";

const PROBLEMS = [
  {
    icon: <Clock className="w-5 h-5" />,
    text: "Customers forget to leave reviews after they leave",
  },
  {
    icon: <TrendingDown className="w-5 h-5" />,
    text: "Negative reviews hurt reputation with no recourse",
  },
  {
    icon: <AlertCircle className="w-5 h-5" />,
    text: "Manual review collection is slow and ineffective",
  },
  {
    icon: <X className="w-5 h-5" />,
    text: "Low review volume loses you to competitors on Google Maps",
  },
];

const SOLUTIONS = [
  {
    icon: <Zap className="w-5 h-5" />,
    text: "Instant QR feedback — customers review in under 30 seconds",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    text: "AI-generated reviews make it effortless for happy customers",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    text: "Faster Google review growth boosts your Maps ranking",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    text: "Private feedback routing keeps your reputation protected",
  },
];

export default function ProblemVsSolution() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-500/5 blur-[100px]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-4">
            The Problem &amp; The Fix
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Most businesses lose customers to competitors simply because they don&apos;t have enough Google reviews.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Problem card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#0d0d18] border border-red-500/10 rounded-3xl p-8 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-transparent rounded-t-3xl" />
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-red-500/5 blur-[60px]" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-xs text-red-400 font-bold uppercase tracking-widest">The Problem</p>
                  <p className="text-white font-bold text-lg">Without ReviewQR AI</p>
                </div>
              </div>

              <div className="space-y-4">
                {PROBLEMS.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-red-500/[0.04] border border-red-500/10"
                  >
                    <div className="w-8 h-8 flex-shrink-0 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mt-0.5">
                      {p.icon}
                    </div>
                    <p className="text-zinc-400 text-sm font-medium leading-relaxed">{p.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solution card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#0d0d18] border border-emerald-500/10 rounded-3xl p-8 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/50 to-transparent rounded-t-3xl" />
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-emerald-500/5 blur-[60px]" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest">The Solution</p>
                  <p className="text-white font-bold text-lg">With ReviewQR AI</p>
                </div>
              </div>

              <div className="space-y-4">
                {SOLUTIONS.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/10"
                  >
                    <div className="w-8 h-8 flex-shrink-0 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mt-0.5">
                      {s.icon}
                    </div>
                    <p className="text-zinc-400 text-sm font-medium leading-relaxed">{s.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
