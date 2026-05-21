"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  QrCode,
  ExternalLink,
  LayoutDashboard,
  BarChart3,
  Building2,
  Smartphone,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI Review Generation",
    description: "Gemini AI crafts personalized, authentic-sounding reviews based on customer sentiment.",
    color: "from-violet-500 to-purple-600",
    glow: "violet",
  },
  {
    icon: <QrCode className="w-6 h-6" />,
    title: "Smart QR System",
    description: "Generate branded, downloadable QR codes that link directly to your review flow.",
    color: "from-blue-500 to-cyan-500",
    glow: "blue",
  },
  {
    icon: <ExternalLink className="w-6 h-6" />,
    title: "Google Review Redirect",
    description: "Happy customers are instantly redirected to your Google Business page to post their review.",
    color: "from-emerald-500 to-green-600",
    glow: "emerald",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Private Feedback Dashboard",
    description: "All low-rating feedback is routed privately so you can address concerns before they escalate.",
    color: "from-orange-500 to-amber-500",
    glow: "orange",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analytics Dashboard",
    description: "Track scans, conversions, ratings, and trends with beautiful real-time charts.",
    color: "from-pink-500 to-rose-600",
    glow: "pink",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Multi-Business Support",
    description: "Manage QR codes and analytics for multiple locations all from one dashboard.",
    color: "from-teal-500 to-cyan-600",
    glow: "teal",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Optimized",
    description: "Every step of the review flow is designed for mobile-first, thumb-friendly interaction.",
    color: "from-indigo-500 to-blue-600",
    glow: "indigo",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-Time Insights",
    description: "See live activity — when customers scan, rate, and post reviews across all your locations.",
    color: "from-yellow-500 to-orange-500",
    glow: "yellow",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};


export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 px-6 relative overflow-hidden bg-[#080810]">
      {/* Background */}
      <div className="absolute inset-0 -z-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-b from-blue-500/10 to-transparent blur-[60px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-5">
            <Zap className="w-4 h-4" />
            Everything You Need
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-5">
            Powerful Features, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Simple to Use
            </span>
          </h2>
          <p className="text-lg text-zinc-400 font-medium leading-relaxed">
            A complete reputation management platform built specifically for restaurants and local businesses.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative bg-[#0d0d18]/80 backdrop-blur-sm border border-white/[0.06] rounded-3xl p-6 overflow-hidden cursor-default"
            >
              {/* Hover glow */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-${f.glow}-500/0 group-hover:bg-${f.glow}-500/10 blur-[40px] transition-all duration-500`}
              />
              {/* Border glow on hover */}
              <div
                className={`absolute inset-0 rounded-3xl border border-${f.glow}-500/0 group-hover:border-${f.glow}-500/20 transition-all duration-300`}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {f.icon}
                </div>

                <h3 className="text-white font-bold text-lg mb-2 tracking-tight">{f.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
