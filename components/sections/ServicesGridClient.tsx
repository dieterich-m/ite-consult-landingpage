"use client";

import type { ElementType } from "react";
import Link from "next/link";
import { ArrowRight, Thermometer, Zap, Settings, Wrench, AlertCircle, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";
import { servicesData } from "@/lib/services-data";

const iconMap: Record<string, ElementType> = {
  Thermometer,
  Zap,
  Settings,
  Wrench,
  AlertCircle,
  Droplets,
};

export default function ServicesGridClient() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-slate-200"
    >
      {servicesData.map((service) => {
        const Icon = iconMap[service.icon] || Settings;
        return (
          <motion.div
            key={service.slug}
            variants={fadeUp}
            className="border-r border-b border-slate-200 bg-white p-6 hover:border-primary/40 transition-colors group"
          >
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-primary-lighter">
                <Icon className="h-5 w-5 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2 text-base">
              {service.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              {service.shortDescription}
            </p>
            <Link
              href={`/leistungen/${service.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-light transition-colors"
            >
              Mehr erfahren
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
