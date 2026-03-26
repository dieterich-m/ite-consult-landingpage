import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { siteConfig } from "@/lib/config";
import { Star } from "lucide-react";
import TestimonialsGrid from "./TestimonialsGrid";

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <RevealOnScroll className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Was unsere Kunden sagen
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex text-amber-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-slate-900 text-lg">
              {siteConfig.socialProof.rating}
            </span>
          </div>
          <p className="text-slate-500 text-sm">
            Basierend auf {siteConfig.socialProof.reviewCount} Google-Bewertungen
          </p>
        </RevealOnScroll>
        <TestimonialsGrid />
      </div>
    </section>
  );
}
