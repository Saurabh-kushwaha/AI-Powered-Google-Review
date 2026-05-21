"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  TrendingUp,
  Map,
  Users,
  Zap,
  Smile,
  Globe,
} from "lucide-react";

const BENEFITS = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Increase Google Reviews",
    description: "Systematically collect more genuine Google reviews every week without manual effort.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "Improve Google Maps Visibility",
    description: "More reviews = higher ranking on Google Maps. Show up first when customers search.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Build Customer Trust",
    description: "A strong review profile convinces new customers to choose you over competitors.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Capture Feedback Faster",
    description: "QR codes at the point of experience capture feedback while it's fresh and positive.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Improve Customer Experience",
    description: "Private feedback helps you identify and fix service gaps before they hurt your reputation.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Grow Local Reputation",
    description: "Become the most-reviewed and highest-rated business in your neighborhood.",
    color: "from-teal-500 to-emerald-600",
  },
];

const METRICS = [
  { value: 47, suffix: "+", prefix: "", label: "Reviews This Month", color: "text-emerald-400" },
  { value: 3, suffix: "×", prefix: "", label: "Faster Review Collection", color: "text-blue-400" },
  { value: 85, suffix: "%", prefix: "", label: "Customer Completion Rate", color: "text-violet-400" },
];

function AnimatedCounter({ value, suffix, prefix, color }: { value: number; suffix: string; prefix: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const t = setInterval(() => {
      start = Math.min(start + step, value);
      setCount(start);
      if (start >= value) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [inView, value]);

  return (
    <span ref={ref} className={`text-5xl lg:text-6xl font-black tracking-tighter ${color}`}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function BusinessBenefits() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-4">
            Why Businesses{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Love ReviewQR AI
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Real results for restaurants, cafes, salons, and local businesses across India.
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
        >
          {METRICS.map((m, i) => (
            <div
              key={i}
              className="bg-[#0d0d18] border border-white/[0.06] rounded-3xl p-8 text-center relative overflow-hidden group hover:border-white/10 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent" />
              <div className="relative">
                <AnimatedCounter {...m} />
                <p className="text-zinc-500 text-sm font-semibold mt-2">{m.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="group bg-[#0d0d18] border border-white/[0.06] rounded-3xl p-7 hover:border-white/10 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${b.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {b.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
