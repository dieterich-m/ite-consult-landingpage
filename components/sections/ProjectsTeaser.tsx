import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { ArrowUpRight, ShoppingBag } from "lucide-react";

export default function ProjectsTeaser() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <RevealOnScroll className="mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Unsere Projekte
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Digitalisierung in der Praxis
          </h2>
          <p className="text-slate-500 mt-3 max-w-2xl">
            ITE Consult betreibt und verantwortet eigene digitale Projekte —
            als Praxisbeleg für das, was wir für unsere Kunden umsetzen.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <a
            href="https://medizin-rehashop.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-start gap-6 bg-white border border-slate-200 p-6 md:p-8 hover:border-primary/40 hover:shadow-md transition-all"
          >
            <div className="shrink-0 bg-primary/10 text-primary rounded-xl p-4">
              <ShoppingBag className="h-8 w-8" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Medizin- und RehaShop
                </h3>
                <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-slate-500 mb-3">
                medizin-rehashop.de
              </p>
              <p className="text-slate-600 leading-relaxed">
                Onlineshop für hochwertige Reha- und Pflegeprodukte, betrieben
                von ITE Consult in Partnerschaft mit RCN Medizintechnik. Von
                der Shop-Architektur über die Produktpflege bis zur
                Kundenkommunikation — vollständig digital umgesetzt.
              </p>
            </div>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
