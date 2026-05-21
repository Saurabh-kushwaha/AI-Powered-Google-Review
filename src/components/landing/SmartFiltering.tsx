"use client";

import { motion } from "framer-motion";
import { Star, Shield, ArrowRight, BarChart3, MessageSquare, TrendingUp, Lock } from "lucide-react";

// Mock dashboard preview
function DashboardPreview() {
  const feedbacks = [
    { name: "Rahul M.", stars: 2, msg: "Service was a bit slow today", time: "2m ago", category: "Service" },
    { name: "Priya K.", stars: 1, msg: "Order was incorrect", time: "15m ago", category: "Order" },
    { name: "Amit S.", stars: 3, msg: "Food was okay, nothing special", time: "1h ago", category: "Food" },
  ];

  return (
    <div className="bg-[#0a0a12] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl">
      {/* Dashboard header */}
      <div className="bg-[#0d0d18] border-b border-white/[0.06] px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs font-semibold text-zinc-500">Private Feedback Dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock className="w-3 h-3 text-zinc-600" />
          <span className="text-xs text-zinc-600">Private</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-px border-b border-white/[0.06] bg-white/[0.03]">
        {[
          { label: "New Feedback", value: "3", color: "text-orange-400" },
          { label: "This Week", value: "12", color: "text-blue-400" },
          { label: "Avg Rating", value: "2.1★", color: "text-yellow-400" },
        ].map((stat, i) => (
          <div key={i} className="bg-[#0a0a12] px-4 py-3 text-center">
            <p className={`text-lg font-black ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-zinc-600 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Feedback list */}
      <div className="p-4 space-y-3">
        {feedbacks.map((fb, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 + 0.3 }}
            className="bg-[#0d0d18] border border-white/[0.05] rounded-2xl p-4"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 flex items-center justify-center text-xs font-bold text-white">
                  {fb.name[0]}
                </div>
                <span className="text-xs font-semibold text-zinc-300">{fb.name}</span>
                <span className="text-xs text-zinc-600 bg-white/[0.04] px-2 py-0.5 rounded-full">{fb.category}</span>
              </div>
              <span className="text-xs text-zinc-600">{fb.time}</span>
            </div>
            <div className="flex gap-0.5 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-3 h-3 ${s <= fb.stars ? "fill-yellow-500 text-yellow-500" : "fill-zinc-700 text-zinc-700"}`}
                />
              ))}
            </div>
            <p className="text-xs text-zinc-500 italic">&quot;{fb.msg}&quot;</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function SmartFiltering() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Premium dark background */}
      <div className="absolute inset-0 -z-10 bg-[#080810]">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-semibold mb-5">
            <Shield className="w-4 h-4" />
            Reputation Management
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-5">
            Protect Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Online Reputation
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Happy customers become Google reviews.{" "}
            <span className="text-white font-semibold">Unhappy customers become private feedback.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Flow diagram */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Customer rates */}
            <div className="bg-[#0d0d18] border border-white/[0.08] rounded-3xl p-6 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-bold">Customer Rates Experience</p>
                  <p className="text-zinc-500 text-sm">Scans QR → Taps star rating</p>
                </div>
              </div>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center my-2">
              <div className="w-0.5 h-6 bg-white/10" />
            </div>

            {/* Fork */}
            <div className="grid grid-cols-2 gap-4">
              {/* Happy path */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-5 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent" />
                <div className="flex gap-1 mb-3">
                  {[4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs text-emerald-400 font-bold ml-1 self-center">4–5 Stars</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-sm font-bold">Google Reviews</span>
                </div>
                <p className="text-xs text-zinc-500 mt-2">AI draft ready to post</p>
              </motion.div>

              {/* Unhappy path */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-5 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent" />
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                  <span className="text-xs text-orange-400 font-bold ml-1 self-center">1–3 Stars</span>
                </div>
                <div className="flex items-center gap-2 text-orange-400">
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-sm font-bold">Private Dashboard</span>
                </div>
                <p className="text-xs text-zinc-500 mt-2">Feedback routed privately</p>
              </motion.div>
            </div>

            {/* Benefits list */}
            <div className="mt-6 space-y-3">
              {[
                { icon: <TrendingUp className="w-4 h-4 text-emerald-400" />, text: "More 5-star reviews on Google Maps" },
                { icon: <MessageSquare className="w-4 h-4 text-blue-400" />, text: "Private insights to improve your service" },
                { icon: <BarChart3 className="w-4 h-4 text-violet-400" />, text: "Full analytics on review trends" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-zinc-400 text-sm">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                    {b.icon}
                  </div>
                  {b.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <DashboardPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
