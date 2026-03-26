"use client";

import { motion } from "framer-motion";
import { stagger, counterReveal } from "@/lib/animations";
import { siteConfig } from "@/lib/config";

export default function TrustBar() {
  const metrics = [
    {
      value: `${siteConfig.socialProof.yearsExperience}+`,
      label: "Jahre Praxiserfahrung",
    },
    {
      value: "Zert. DSB",
      label: "Datenschutzbeauftragter IHK",
    },
    {
      value: "Tooloffen",
      label: "n8n & individuelle Lösungen",
    },
    {
      value: "KMU & Verwaltung",
      label: "Unsere Zielgruppen",
    },
  ];

  return (
    <section className="bg-primary text-white py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4"
        >
          {metrics.map((m) => (
            <motion.div key={m.label} variants={counterReveal} className="text-center">
              <div className="font-mono text-2xl md:text-3xl font-bold text-accent">
                {m.value}
              </div>
              <div className="text-sm text-slate-300 mt-0.5">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
