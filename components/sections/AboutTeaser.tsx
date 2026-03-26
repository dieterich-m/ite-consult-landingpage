import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { fadeLeft, fadeRight } from "@/lib/animations";
import { siteConfig } from "@/lib/config";
import { ShieldCheck, Globe, Brain, Clock } from "lucide-react";
import Image from "next/image";

export default function AboutTeaser() {
  return (
    <section id="ueber-uns" className="bg-slate-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Portrait */}
          <RevealOnScroll variants={fadeLeft}>
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/Gemini_Generated_Image_jvusd6jvusd6jvus.png"
                alt={`${siteConfig.company.owner} – ${siteConfig.company.name}`}
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </RevealOnScroll>

          {/* Text */}
          <RevealOnScroll variants={fadeRight}>
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Über ITE Consult
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
                Praxisnah, tooloffen und datenschutzbewusst
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                {siteConfig.ueber_uns.kurz}
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 text-sm">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span className="font-medium">Zert. Datenschutzbeauftragter</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 text-sm">
                  <Brain className="h-4 w-4 text-primary" />
                  <span className="font-medium">KI & Automatisierung</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-medium">
                    Über {siteConfig.socialProof.yearsExperience} Jahre Erfahrung
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 text-sm">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="font-medium">{siteConfig.company.serviceRadius}</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
