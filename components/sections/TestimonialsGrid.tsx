"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { stagger, fadeUp } from "@/lib/animations";
import { siteConfig } from "@/lib/config";

export default function TestimonialsGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {siteConfig.reviews.map((review, index) => (
        <motion.div
          key={index}
          variants={fadeUp}
          className="border border-slate-100 bg-white p-6 shadow-sm"
        >
          {/* Stars */}
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Quote */}
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            &ldquo;{review.text}&rdquo;
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-900 text-sm">
                {review.name}
              </p>
              <p className="text-xs text-slate-400">{review.city}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-slate-100 px-2 py-1 text-xs text-slate-500">
                {review.date}
              </div>
              <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-2 py-1">
                <span className="text-xs font-medium text-slate-500">Google</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
