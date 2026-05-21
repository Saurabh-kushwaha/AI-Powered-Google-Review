"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Star } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-gradient-to-br from-[#0d0d24] to-[#0a0a14] border border-blue-500/20 rounded-[2.5rem] px-8 py-16 sm:px-16 sm:py-20 text-center overflow-hidden"
        >
          {/* Glowing orbs inside */}
          <div className="absolute top-0 left-1/4 w-[400px] h-[200px] rounded-full bg-blue-500/15 blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-violet-500/15 blur-[80px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative z-10">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-8">
              <Zap className="w-4 h-4" />
              Start in 5 minutes
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.05]">
              Start Growing Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
                Google Reviews Today
              </span>
            </h2>

            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Transform customer feedback into business growth with ReviewQR AI.{" "}
              <span className="text-white font-semibold">More reviews = more customers.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="group flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`https://wa.me/917393084880?text=${encodeURIComponent("Hi! I'd like to book a demo of ReviewQR AI.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-10 py-5 rounded-full border border-white/10 text-white font-semibold text-lg hover:bg-white/5 hover:border-white/20 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                Book Demo
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-500">
              ✓ No credit card required &nbsp;·&nbsp; ✓ Cancel anytime &nbsp;·&nbsp; ✓ Setup in 5 minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
