"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const partners = [
  {
    logo: "/netplans-logo.svg",
    logoWidth: 160,
    logoHeight: 72,
    name: "NetPlans GmbH",
    url: "https://www.netplans.de/",
    urlLabel: "netplans.de",
    description:
      "Full-Service-IT-Systemhaus für den Mittelstand. Partner von ITE Consult für den EMMA WebCast und Cloud-Lösungen.",
  },
  {
    logo: "/rcn-logo.png",
    logoWidth: 160,
    logoHeight: 32,
    name: "RCN Medizin- und Rehatechnik GmbH",
    url: "https://rcn-medizin.de/",
    urlLabel: "rcn-medizin.de",
    description:
      "Hersteller hochwertiger Reha- und Medizinprodukte. Fertigungspartner des Medizin- und RehaShops, betrieben durch ITE Consult.",
  },
];

export default function ProjectsTeaser() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const count = partners.length;

  useEffect(() => {
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

  const partner = partners[index];

  return (
    <>
      {/* Projekt — bg-white */}
      <section className="bg-white border-t border-slate-200 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <RevealOnScroll>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">
            Unser Projekt
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-5">
            Digitalisierung, die wir selbst betreiben
          </h2>
          <a
            href="https://medizin-rehashop.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white border border-slate-200 p-6 md:p-8 hover:border-primary/40 hover:shadow-md transition-all w-full"
          >
            <div className="shrink-0 bg-white rounded-lg border border-slate-100 p-4 flex items-center justify-center">
              <Image
                src="/medizin-rehashop-logo.png"
                alt="Medizin- und RehaShop"
                width={180}
                height={36}
                className="object-contain"
              />
            </div>
            <div className="flex-1 min-w-0 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <h3 className="text-base font-bold text-slate-900">Medizin- und RehaShop</h3>
                <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors shrink-0" />
              </div>
              <p className="text-sm text-slate-500 mb-2">medizin-rehashop.de</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Onlineshop für hochwertige Reha- und Pflegeprodukte — betrieben von ITE Consult
                in Partnerschaft mit RCN Medizin- und Rehatechnik GmbH.
              </p>
            </div>
          </a>
        </RevealOnScroll>
      </div>
      </section>

      {/* Partner — bg-slate-50 */}
      <section className="bg-slate-50 border-t border-slate-200 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealOnScroll>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">
              Unsere Partner
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-5">
              Starke Netzwerke für unsere Kunden
            </h2>

            <div className="relative w-full">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white border border-slate-200 p-6 md:p-8 hover:border-primary/40 hover:shadow-md transition-colors"
                >
                  <div className="shrink-0 bg-white border border-slate-100 p-4 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.logoWidth}
                      height={partner.logoHeight}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                      <h3 className="text-base font-bold text-slate-900">{partner.name}</h3>
                      <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors shrink-0" />
                    </div>
                    <p className="text-sm text-slate-500 mb-2">{partner.urlLabel}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{partner.description}</p>
                  </div>
                </motion.a>
              </AnimatePresence>

              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => go(-1)}
                  className="p-1.5 rounded-full border border-slate-200 hover:border-primary/40 hover:text-primary transition-colors text-slate-500"
                  aria-label="Vorheriger Partner"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex gap-1.5">
                  {partners.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                      className={`h-1.5 rounded-full transition-all ${i === index ? "w-4 bg-primary" : "w-1.5 bg-slate-300"}`}
                      aria-label={`Partner ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => go(1)}
                  className="p-1.5 rounded-full border border-slate-200 hover:border-primary/40 hover:text-primary transition-colors text-slate-500"
                  aria-label="Nächster Partner"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
