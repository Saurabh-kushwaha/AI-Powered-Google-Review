"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const WHATSAPP_NUMBER = "917393084880"; // Updated contact number
const WHATSAPP_MESSAGE = "Hi! I'd like to know more about ReviewQR AI for my business.";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.92 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold px-4 py-2 rounded-full shadow-xl whitespace-nowrap"
          >
            Chat with us on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="relative w-14 h-14 flex items-center justify-center rounded-full shadow-2xl shadow-green-500/40"
        style={{ background: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: "#25D366",
            animation: "pulse-ring 2s ease-out infinite",
            opacity: 0.4,
          }}
        />
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: "#25D366",
            animation: "pulse-ring 2s ease-out infinite 0.6s",
            opacity: 0.25,
          }}
        />

        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 relative z-10"
          fill="white"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.67 4.8 1.836 6.8L2 30l7.44-1.948A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.54 11.54 0 0 1-5.88-1.6l-.42-.252-4.416 1.156 1.18-4.3-.276-.44A11.54 11.54 0 0 1 4.4 16C4.4 9.594 9.594 4.4 16 4.4S27.6 9.594 27.6 16 22.406 27.6 16 27.6zm6.336-8.588c-.348-.176-2.06-1.016-2.38-1.132-.32-.116-.552-.176-.784.176s-.9 1.132-1.1 1.364c-.2.232-.404.26-.752.084-.348-.176-1.468-.54-2.796-1.724-1.032-.92-1.728-2.056-1.932-2.404-.204-.348-.02-.536.152-.708.156-.156.348-.404.524-.608.172-.2.228-.348.344-.58.116-.232.056-.436-.028-.608-.084-.176-.784-1.892-1.072-2.592-.284-.68-.572-.588-.784-.6-.2-.008-.436-.012-.668-.012-.232 0-.608.084-.928.436-.32.352-1.22 1.192-1.22 2.908 0 1.716 1.248 3.376 1.42 3.608.176.232 2.452 3.744 5.944 5.252.832.36 1.48.576 1.988.736.836.268 1.596.228 2.196.14.668-.1 2.06-.84 2.352-1.652.292-.812.292-1.508.204-1.652-.084-.148-.316-.228-.664-.404z" />
        </svg>
      </motion.a>
    </div>
  );
}
