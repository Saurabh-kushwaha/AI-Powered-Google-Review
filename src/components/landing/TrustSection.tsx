"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Coffee,
  Scissors,
  Stethoscope,
  Dumbbell,
  Hotel,
  Star,
} from "lucide-react";

const BUSINESSES = [
  { icon: <UtensilsCrossed className="w-6 h-6" />, name: "Spice Garden Restaurant" },
  { icon: <Coffee className="w-6 h-6" />, name: "Brew & Co Cafe" },
  { icon: <Scissors className="w-6 h-6" />, name: "Elite Style Salon" },
  { icon: <Stethoscope className="w-6 h-6" />, name: "CareFirst Clinic" },
  { icon: <Dumbbell className="w-6 h-6" />, name: "FitLife Gym" },
  { icon: <Hotel className="w-6 h-6" />, name: "The Grand Suites" },
  { icon: <UtensilsCrossed className="w-6 h-6" />, name: "The Tandoor House" },
  { icon: <Coffee className="w-6 h-6" />, name: "Morning Brew Cafe" },
  { icon: <Scissors className="w-6 h-6" />, name: "Glow Beauty Studio" },
  { icon: <Stethoscope className="w-6 h-6" />, name: "Wellness Plus Clinic" },
  { icon: <Dumbbell className="w-6 h-6" />, name: "PowerZone Gym" },
  { icon: <Hotel className="w-6 h-6" />, name: "Comfort Inn Hotel" },
];

// Duplicate for seamless loop
const ALL = [...BUSINESSES, ...BUSINESSES];

export default function TrustSection() {
  return (
    <section className="py-16 border-y border-white/[0.06] bg-[#0a0a12] overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a12] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a12] to-transparent z-10 pointer-events-none" />

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-xs font-bold text-zinc-500 mb-8 uppercase tracking-[0.2em] flex items-center justify-center gap-2"
      >
        <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
        Trusted by growing local businesses
        <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
      </motion.p>

      {/* Marquee */}
      <div className="flex w-max animate-marquee space-x-10 px-4">
        {ALL.map((b, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-2xl px-5 py-3 text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-default whitespace-nowrap"
          >
            <span className="opacity-60">{b.icon}</span>
            <span className="font-semibold text-sm">{b.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
