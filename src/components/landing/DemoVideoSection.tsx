"use client";

import { motion } from "framer-motion";
import { Play, Clock, Sparkles } from "lucide-react";
import { useState } from "react";

export default function DemoVideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-28 px-6 relative overflow-hidden bg-[#080810]">
      {/* Background */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-5">
            <Play className="w-4 h-4 fill-blue-300" />
            Product Demo
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-5">
            See ReviewQR AI{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              In Action
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Customers can leave a Google review in under{" "}
            <span className="text-white font-semibold">30 seconds</span>. Watch how simple it really is.
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden group"
        >
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-violet-500/20 to-cyan-500/30 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-500" />

          {/* Video placeholder (16:9) */}
          <div className="relative aspect-video bg-[#0d0d18] border border-white/[0.08] rounded-3xl overflow-hidden">
            {/* Background pattern inside video */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* Gradient overlay for cinematic feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-violet-900/20" />

            {/* Center content */}
            {!playing ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                {/* Play button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPlaying(true)}
                  className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl shadow-white/20"
                  aria-label="Play demo video"
                >
                  {/* Animated rings */}
                  <span className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping" />
                  <span className="absolute -inset-2 rounded-full border border-white/20 animate-ping" style={{ animationDelay: "0.3s" }} />
                  <Play className="w-8 h-8 fill-zinc-900 text-zinc-900 ml-1" />
                </motion.button>

                <div className="text-center">
                  <p className="text-white font-bold text-lg">Watch the Demo</p>
                  <div className="flex items-center gap-2 justify-center mt-1">
                    <Clock className="w-4 h-4 text-zinc-500" />
                    <p className="text-zinc-500 text-sm">2 minute walkthrough</p>
                  </div>
                </div>

                {/* Feature chips */}
                <div className="flex flex-wrap gap-2 justify-center max-w-md">
                  {["QR Scan Flow", "AI Review Generation", "Google Redirect", "Dashboard Tour"].map((chip) => (
                    <span key={chip} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 font-medium">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-12 h-12 text-blue-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-white font-bold text-xl">Demo video coming soon!</p>
                  <p className="text-zinc-500 mt-2">Book a live demo with our team.</p>
                </div>
              </div>
            )}

            {/* Bottom gradient */}
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0d0d18] to-transparent" />
          </div>
        </motion.div>

        {/* Supporting stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
        >
          {[
            { value: "< 30s", label: "Customer review time" },
            { value: "5 min", label: "Setup time" },
            { value: "Zero", label: "App downloads needed" },
          ].map((s, i) => (
            <div key={i} className="text-center bg-[#0d0d18] border border-white/[0.06] rounded-2xl p-5">
              <p className="text-2xl font-black text-white">{s.value}</p>
              <p className="text-zinc-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
