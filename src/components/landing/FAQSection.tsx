"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "How does ReviewQR AI work?",
    a: "ReviewQR AI provides you with a smart QR code to place in your business. When customers scan it, they see a clean rating screen. Based on their rating, our AI instantly generates a personalized review. Happy customers (4-5 stars) are redirected to your Google Business page to post it, while lower ratings are routed privately to your dashboard.",
  },
  {
    q: "Can customers post directly to Google?",
    a: "Yes! After the AI generates their review, customers click one button that takes them directly to your Google Reviews page. The AI-written draft is displayed so they can copy and paste it with a single tap. We make it as frictionless as possible to maximize conversion.",
  },
  {
    q: "What happens to negative feedback?",
    a: "Customers who rate 1-3 stars are routed to a private feedback form instead of Google. Their feedback goes directly to your dashboard, giving you the opportunity to address their concerns, make things right, and prevent a negative public review. This is reputation management done professionally.",
  },
  {
    q: "Is the setup included in the price?",
    a: "Yes! The ₹699 one-time fee covers the complete setup: your QR code generation, Google Business integration, dashboard configuration, and a walkthrough of the platform. Our team handles everything so you can go live in under 5 minutes.",
  },
  {
    q: "Can multiple businesses or locations use it?",
    a: "Absolutely. Our platform supports multi-location businesses. You can manage separate QR codes, review flows, and dashboards for each location from a single account. Contact us for custom multi-location pricing.",
  },
  {
    q: "Is it mobile-friendly for customers?",
    a: "ReviewQR AI is built mobile-first. The entire customer experience — scanning the QR, rating, reading the AI review, and posting to Google — is optimized for smartphones. No app downloads required. It works instantly in any mobile browser.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[80px]" />
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 border border-white/[0.06] text-zinc-300 text-sm font-semibold mb-5">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4">
            Got Questions?
          </h2>
          <p className="text-lg text-zinc-400">
            Everything you need to know about ReviewQR AI.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`bg-[#0d0d18] border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIdx === i
                  ? "border-blue-500/30"
                  : "border-white/[0.06] hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              >
                <span className={`font-semibold text-base transition-colors ${openIdx === i ? "text-white" : "text-zinc-300"}`}>
                  {faq.q}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    openIdx === i
                      ? "bg-blue-500/20 border-blue-500/30 text-blue-400"
                      : "bg-white/[0.03] border-white/10 text-zinc-500"
                  }`}
                >
                  {openIdx === i ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-white/[0.05] pt-4">
                      <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10 text-zinc-500 text-sm"
        >
          Still have questions?{" "}
          <a
            href="https://wa.me/917393084880"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            Chat with us on WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
