"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Base */}
      <div className="absolute inset-0 bg-prime-ink" />

      {/* Grid sutil */}
      <div className="absolute inset-0 opacity-[0.55] bg-grid" />

      {/* Vinheta */}
      <div className="absolute inset-0 [background:radial-gradient(60%_60%_at_50%_30%,transparent_0%,rgba(0,0,0,0.55)_70%,rgba(0,0,0,0.85)_100%)]" />

      {/* Auroras discretas */}
      <motion.div
        className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle at 30% 30%, rgba(200,163,90,0.20), transparent 60%)" }}
        animate={{ y: [0, 18, 0], x: ["-50%", "-48%", "-50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-180px] right-[-140px] h-[560px] w-[560px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle at 30% 30%, rgba(120,170,255,0.10), transparent 60%)" }}
        animate={{ y: [0, -16, 0], x: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
