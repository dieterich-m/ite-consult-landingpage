"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Brain, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroReveal, stagger } from "@/lib/animations";
import { siteConfig } from "@/lib/config";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Badge */}
            <motion.div variants={heroReveal} className="mb-6">
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-primary border border-blue-200 text-sm font-medium px-3 py-1 rounded-full">
                <ShieldCheck className="h-3.5 w-3.5" />
                ITE Consult GmbH &bull; Zert. Datenschutzbeauftragter &bull; Über 25 Jahre Erfahrung
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={heroReveal}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5"
            >
              {siteConfig.hero.headline}
            </motion.h1>

            {/* Subline */}
            <motion.p
              variants={heroReveal}
              className="text-lg text-slate-600 leading-relaxed mb-4 max-w-xl"
            >
              {siteConfig.hero.subline}
            </motion.p>

            {/* Erläuterung */}
            <motion.p
              variants={heroReveal}
              className="text-sm text-slate-500 leading-relaxed mb-8 max-w-xl"
            >
              Wir analysieren Routinen, identifizieren Automatisierungspotenziale und entwickeln praxistaugliche Lösungen mit KI, digitalen Workflows und datenschutzsauberer Systemlogik – für Mittelstand und öffentliche Verwaltungen.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={heroReveal}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <Button asChild variant="default" size="lg" className="bg-primary hover:bg-primary/90">
                <a href="#kontakt">
                  {siteConfig.hero.cta_primary}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#leistungen">
                  {siteConfig.hero.cta_secondary}
                </a>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={heroReveal}
              className="flex flex-wrap gap-4 sm:gap-6"
            >
              <div className="flex items-center gap-1.5 text-sm text-slate-500">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Datenschutzsauber</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-slate-500">
                <Brain className="h-4 w-4 text-primary" />
                <span>KI-gestützte Entlastung</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Deutschlandweit</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/hero-tech.webp"
                alt="Digitalisierung und Automatisierung – ITE Consult"
                width={640}
                height={480}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
