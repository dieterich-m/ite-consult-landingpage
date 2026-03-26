import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { siteConfig } from "@/lib/config";
import { MapPin } from "lucide-react";

export default function ServiceArea() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <RevealOnScroll className="text-center mb-8">
          <MapPin className="h-8 w-8 text-accent mx-auto mb-3" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Im Hunsrück für Sie da
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Wir sind im Umkreis von {siteConfig.company.radiusKm} km um{" "}
            {siteConfig.company.address.city} tätig. Sprechen Sie uns auch bei
            Standorten außerhalb an.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="flex flex-wrap gap-3 justify-center">
          {siteConfig.serviceOrte.map((ort) => (
            <span
              key={ort}
              className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-full hover:border-primary/40 hover:text-primary transition-colors"
            >
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {ort}
            </span>
          ))}
        </RevealOnScroll>

        <RevealOnScroll className="mt-8 text-center">
          <p className="text-xs text-slate-400">
            Hauptstandort: {siteConfig.company.address.full} &bull;{" "}
            Servicegebiet: ca. {siteConfig.company.radiusKm} km Umkreis
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
