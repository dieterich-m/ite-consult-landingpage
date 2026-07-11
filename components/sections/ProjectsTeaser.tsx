"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    logo: "/medizin-rehashop-logo.png",
    logoWidth: 180,
    logoHeight: 36,
    name: "Medizin- und RehaShop",
    url: "https://medizin-rehashop.de/",
    urlLabel: "medizin-rehashop.de",
    description:
      "Onlineshop für hochwertige Reha- und Pflegeprodukte — betrieben von ITE Consult in Partnerschaft mit RCN Medizin- und Rehatechnik GmbH.",
  },
];

export default function ProjectsTeaser() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const count = projects.length;

  useEffect(() => {
    if (count < 2) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % count);
    }, 5000);
    return () => clearInterval(timer);
  }, [count]);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + count) % count);
  };

  const project = projects[index];

  return (
    <section className="bg-slate-50 border-t border-slate-200 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">
            Unsere Projekte
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            Digitalisierung, die wir selbst betreiben
          </h2>
        </div>

        <div className="relative max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white border border-slate-200 p-6 md:p-8 hover:border-primary/40 hover:shadow-md transition-colors"
            >
              {/* Logo */}
              <div className="shrink-0 bg-white rounded-lg border border-slate-100 p-4 flex items-center justify-center">
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={project.logoWidth}
                  height={project.logoHeight}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <h3 className="text-base font-bold text-slate-900">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors shrink-0" />
                </div>
                <p className="text-sm text-slate-500 mb-2">{project.urlLabel}</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.a>
          </AnimatePresence>

          {/* Controls — only shown when multiple slides */}
          {count > 1 && (
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => go(-1)}
                className="p-1.5 rounded-full border border-slate-200 hover:border-primary/40 hover:text-primary transition-colors text-slate-500"
                aria-label="Vorheriges Projekt"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-1.5">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                    className={`h-1.5 rounded-full transition-all ${i === index ? "w-4 bg-primary" : "w-1.5 bg-slate-300"}`}
                    aria-label={`Projekt ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => go(1)}
                className="p-1.5 rounded-full border border-slate-200 hover:border-primary/40 hover:text-primary transition-colors text-slate-500"
                aria-label="Nächstes Projekt"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
