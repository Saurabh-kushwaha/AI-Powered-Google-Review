"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rajesh Mehta",
    role: "Owner",
    business: "Spice Garden Restaurant",
    avatar: "RM",
    avatarColor: "from-orange-500 to-red-500",
    stars: 5,
    text: "We started receiving more Google reviews within the first week. The QR code is genius — customers scan it while waiting for their bill. Our Google Maps ranking went up in just a month!",
    location: "Mumbai, Maharashtra",
    metric: "+42 reviews in month 1",
  },
  {
    name: "Priya Sharma",
    role: "Manager",
    business: "Brew & Co Cafe",
    avatar: "PS",
    avatarColor: "from-blue-500 to-cyan-500",
    stars: 5,
    text: "Customers love how easy the QR review flow is. They just scan, rate, and the AI writes the review for them! We went from 23 Google reviews to 98 in two months. Absolutely game-changing.",
    location: "Pune, Maharashtra",
    metric: "+75 reviews in 2 months",
  },
  {
    name: "Dr. Anil Verma",
    role: "Founder",
    business: "CareFirst Clinic",
    avatar: "AV",
    avatarColor: "from-emerald-500 to-teal-500",
    stars: 5,
    text: "The private feedback dashboard is brilliant. Patients who had concerns gave us feedback privately, and we fixed the issues before they became public reviews. Our rating went from 4.1 to 4.8 stars.",
    location: "Delhi, NCR",
    metric: "4.1 → 4.8★ rating",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-violet-500/5 blur-[80px]" />
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
          <div className="inline-flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-4">
            Loved by Business Owners
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Here&apos;s what growing local businesses say about ReviewQR AI.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative bg-[#0d0d18] border border-white/[0.06] rounded-3xl p-7 overflow-hidden hover:border-white/10 transition-all duration-300"
            >
              {/* Subtle top border */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-white/10 mb-5" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${s <= t.stars ? "fill-yellow-400 text-yellow-400" : "fill-zinc-700 text-zinc-700"}`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-medium">
                &quot;{t.text}&quot;
              </p>

              {/* Metric pill */}
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-emerald-300 text-xs font-bold">{t.metric}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/[0.05] pt-5">
                <div
                  className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-black text-sm shadow-lg`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-zinc-500 text-xs">{t.role}, {t.business}</p>
                  <p className="text-zinc-600 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 text-zinc-500 text-sm"
        >
          Join <span className="text-white font-semibold">500+</span> businesses already growing with ReviewQR AI
        </motion.div>
      </div>
    </section>
  );
}
