"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, QrCode, Sparkles, TrendingUp, Eye } from "lucide-react";
import { useState, useEffect } from "react";

const FLOATING_STATS = [
  {
    icon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
    value: "+120",
    label: "Reviews Generated",
    delay: 0,
    pos: "top-[15%] left-[2%] lg:left-[5%]",
    anim: "float",
  },
  {
    icon: <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />,
    value: "4.9★",
    label: "Customer Experience",
    delay: 1,
    pos: "top-[20%] right-[2%] lg:right-[5%]",
    anim: "float-delayed",
  },
  {
    icon: <Eye className="w-4 h-4 text-blue-400" />,
    value: "3×",
    label: "Google Visibility",
    delay: 2,
    pos: "bottom-[28%] left-[0%] lg:left-[3%]",
    anim: "float",
  },
];

// Typewriter for hero
function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(t);
    }, 28);
    return () => clearInterval(t);
  }, [text]);
  return (
    <span className="text-sm font-medium text-zinc-300 italic leading-relaxed">
      &quot;{displayed}
      {displayed.length < text.length ? (
        <span className="animate-pulse">|</span>
      ) : (
        '"'
      )}
    </span>
  );
}

// Mock phone mockup showing the QR flow
function PhoneMockup() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 4), 2500);
    return () => clearInterval(t);
  }, []);

  const steps = [
    {
      emoji: "📷",
      title: "Scan QR Code",
      subtitle: "Point camera at the QR",
      color: "from-blue-500 to-cyan-500",
    },
    {
      emoji: "⭐",
      title: "Rate Experience",
      subtitle: "Tap your star rating",
      color: "from-yellow-500 to-orange-500",
    },
    {
      emoji: "✨",
      title: "AI Generates Review",
      subtitle: "Crafted in seconds",
      color: "from-violet-500 to-purple-600",
    },
    {
      emoji: "🎯",
      title: "Post to Google",
      subtitle: "One tap to publish",
      color: "from-emerald-500 to-green-600",
    },
  ];

  const current = steps[step];

  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      {/* Glow behind phone */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-violet-500/20 to-transparent blur-[60px] rounded-full scale-110" />

      {/* Phone shell */}
      <div className="relative w-full h-[580px] bg-[#0d0d14] rounded-[3rem] border-[10px] border-zinc-700/60 shadow-2xl overflow-hidden ring-1 ring-white/10">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 flex justify-center pt-2 z-20">
          <div className="w-28 h-6 bg-zinc-800 rounded-b-2xl" />
        </div>

        {/* Screen content */}
        <div className="h-full flex flex-col pt-10 bg-[#0a0a12]">
          {/* Progress indicators */}
          <div className="flex gap-1.5 justify-center mt-4 px-8">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === step
                    ? "w-8 bg-blue-400"
                    : i < step
                    ? "w-3 bg-blue-600"
                    : "w-3 bg-zinc-700"
                }`}
              />
            ))}
          </div>

          {/* Step content */}
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1 flex flex-col items-center justify-center px-6 gap-4"
          >
            <div
              className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${current.color} flex items-center justify-center text-4xl shadow-2xl`}
            >
              {current.emoji}
            </div>
            <div className="text-center">
              <p className="text-white font-bold text-xl mb-1">{current.title}</p>
              <p className="text-zinc-400 text-sm">{current.subtitle}</p>
            </div>

            {/* Stars for step 1 */}
            {step === 1 && (
              <div className="flex gap-2 mt-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                  >
                    <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
            )}

            {/* AI review text for step 2 */}
            {step === 2 && (
              <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span className="text-xs text-violet-400 font-semibold">AI Generated</span>
                </div>
                <TypewriterText text="Amazing food and service! Highly recommend." />
              </div>
            )}

            {/* Google button for step 3 */}
            {step === 3 && (
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold text-sm shadow-lg shadow-blue-500/30"
              >
                Post to Google Reviews →
              </motion.button>
            )}
          </motion.div>

          {/* Step label at bottom */}
          <div className="px-6 pb-6">
            <div className="bg-zinc-900 rounded-2xl p-3 border border-zinc-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center">
                <QrCode className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">ReviewQR AI</p>
                <p className="text-xs text-zinc-500">Step {step + 1} of 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Copy */}
          <div className="flex-1 text-center lg:text-left relative">
            {/* Floating stat badges */}
            {FLOATING_STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
                className={`hidden lg:flex absolute ${stat.pos} items-center gap-2.5 bg-[#12121e]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl px-4 py-3 shadow-2xl z-10`}
                style={{ animation: `${stat.anim} ${i % 2 === 0 ? "4s" : "5s"} ease-in-out infinite ${i * 0.8}s` }}
              >
                <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-white font-black text-sm leading-none">{stat.value}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{stat.label}</p>
                </div>
              </motion.div>
            ))}

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Google Review Platform
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[1.05] text-white mb-6"
            >
              Turn Happy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
                Customers
              </span>{" "}
              Into Google{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Reviews
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 font-medium"
            >
              ReviewQR AI helps restaurants and local businesses collect more Google reviews using{" "}
              <span className="text-white font-semibold">smart QR codes</span> and{" "}
              <span className="text-white font-semibold">AI-powered review generation</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="/register"
                className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold text-base shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <QrCode className="w-5 h-5" />
                Get Your Review QR
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-base hover:bg-white/5 hover:border-white/20 transition-all duration-200 w-full sm:w-auto justify-center backdrop-blur-sm"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                </div>
                Watch Demo
              </button>
            </motion.div>

            {/* Trust micro-text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-sm text-zinc-500 font-medium"
            >
              ✓ No credit card required &nbsp;·&nbsp; ✓ Setup in 5 minutes &nbsp;·&nbsp; ✓ Cancel anytime
            </motion.p>
          </div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 w-full max-w-[320px] lg:max-w-none lg:w-auto"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
