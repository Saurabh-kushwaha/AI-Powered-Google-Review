"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Star, ArrowRight, MessageSquare } from "lucide-react";

const FEATURES_LIST = [
  "Smart QR Code Setup & Printing",
  "AI Review Generation (Gemini AI)",
  "Unlimited QR Scans",
  "Google Review Redirect Flow",
  "Private Feedback Dashboard",
  "Customer Satisfaction Analytics",
  "Multi-Device Compatible",
  "Priority Email & WhatsApp Support",
  "Regular Feature Updates",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-28 px-6 relative overflow-hidden bg-[#080810]">
      {/* Background */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/8 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm font-semibold mb-5">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            Simple Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-4">
            Affordable Growth for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Local Businesses
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            One simple plan. Everything you need to start growing your Google reviews today.
          </p>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Outer glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/40 via-violet-500/30 to-cyan-500/40 rounded-[2rem] blur-sm" />

          <div className="relative bg-[#0d0d18] border border-white/[0.08] rounded-[1.8rem] overflow-hidden">
            {/* Top gradient bar */}
            <div className="h-1.5 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500" />

            {/* Badge */}
            <div className="absolute top-6 right-6">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-violet-600 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-500/30">
                <Zap className="w-3 h-3" />
                Most Popular
              </span>
            </div>

            <div className="p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Price */}
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Starter Plan</p>
                  <h3 className="text-white font-black text-2xl mb-6">Perfect for Local Businesses</h3>

                  {/* One-time setup */}
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 mb-4">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-5xl font-black text-white">₹699</span>
                      <span className="text-zinc-500 text-sm font-medium">one-time setup</span>
                    </div>
                    <p className="text-xs text-zinc-600">Includes QR setup, onboarding &amp; configuration</p>
                  </div>

                  {/* Monthly fee */}
                  <div className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20 rounded-2xl p-5 mb-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-5xl font-black text-white">₹199</span>
                      <span className="text-blue-300 text-sm font-medium">/ month</span>
                    </div>
                    <p className="text-xs text-zinc-500">Full platform access, AI credits, dashboard &amp; support</p>
                  </div>

                  {/* Trust badges */}
                  <div className="flex flex-col gap-2">
                    {[
                      { icon: <Shield className="w-4 h-4 text-emerald-400" />, text: "Cancel anytime, no questions asked" },
                      { icon: <MessageSquare className="w-4 h-4 text-blue-400" />, text: "WhatsApp + email support included" },
                      { icon: <Zap className="w-4 h-4 text-yellow-400" />, text: "Go live in less than 5 minutes" },
                    ].map((b, i) => (
                      <div key={i} className="flex items-center gap-3 text-zinc-400 text-sm">
                        {b.icon}
                        {b.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Features */}
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-5">Everything Included</p>
                  <div className="space-y-3">
                    {FEATURES_LIST.map((f, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 flex-shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span className="text-zinc-300 text-sm font-medium">{f}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/register"
                  className="group flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold text-base shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-200"
                >
                  Get Started Today
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`https://wa.me/917393084880?text=${encodeURIComponent("Hi! I'd like to book a demo of ReviewQR AI for my business.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-base hover:bg-white/5 transition-colors w-full sm:w-auto"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
