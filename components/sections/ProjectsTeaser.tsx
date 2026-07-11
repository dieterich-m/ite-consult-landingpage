import RevealOnScroll from "@/components/shared/RevealOnScroll";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsTeaser() {
  return (
    <section className="bg-slate-50 border-t border-slate-200 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">

        {/* Projekt */}
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
            className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white border border-slate-200 p-6 md:p-8 hover:border-primary/40 hover:shadow-md transition-all max-w-2xl"
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

        {/* Partner */}
        <RevealOnScroll>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">
            Unsere Partner
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-5">
            Starke Netzwerke für unsere Kunden
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            <a
              href="https://www.netplans.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 bg-white border border-slate-200 p-6 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="bg-white border border-slate-100 p-3 flex items-center justify-center w-full">
                <Image
                  src="/netplans-logo.svg"
                  alt="NetPlans GmbH"
                  width={160}
                  height={72}
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <h3 className="text-sm font-bold text-slate-900">NetPlans GmbH</h3>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-xs text-slate-500">netplans.de</p>
              </div>
            </a>

            <a
              href="https://rcn-medizin.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 bg-white border border-slate-200 p-6 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="bg-white border border-slate-100 p-3 flex items-center justify-center w-full">
                <Image
                  src="/rcn-logo.png"
                  alt="RCN Medizin- und Rehatechnik GmbH"
                  width={160}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <h3 className="text-sm font-bold text-slate-900">RCN Medizin- und Rehatechnik GmbH</h3>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-xs text-slate-500">rcn-medizin.de</p>
              </div>
            </a>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
