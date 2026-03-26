import RevealOnScroll from "@/components/shared/RevealOnScroll";
import ServicesGridClient from "@/components/sections/ServicesGridClient";

export default function ServicesGrid() {
  return (
    <section id="leistungen" className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <RevealOnScroll className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Unsere Leistungen
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Von der Dachsanierung bis zur Reparatur – fachgerechte Dachlösungen
            aus einer Hand, sauber geplant und verlässlich ausgeführt.
          </p>
        </RevealOnScroll>
        <ServicesGridClient />
      </div>
    </section>
  );
}
