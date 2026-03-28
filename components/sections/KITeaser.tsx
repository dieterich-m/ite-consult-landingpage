import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { fadeLeft, fadeRight } from "@/lib/animations";
import Link from "next/link";
import { Brain, Users, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function KITeaser() {
  return (
    <section className="bg-[#eef6ff] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text */}
          <RevealOnScroll variants={fadeLeft}>
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                KI-gestützte Entlastung
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
                Kognitive KI dort einsetzen, wo sie wirklich hilft
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Wir identifizieren sinnvolle Einsatzfelder für KI in dokumenten-, prüfungs- und wissensintensiven Prozessen – und überführen sie in nachvollziehbare, praxistaugliche Lösungen. Nicht als Showthema, sondern zur konkreten Entlastung im Alltag.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Fachkräfte entlasten</p>
                    <p className="text-slate-500 text-sm">Routinen übernehmen, Kernkompetenz freisetzen.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Für Mittelstand und Verwaltung</p>
                    <p className="text-slate-500 text-sm">Praxistaugliche Lösungen für dokumentenintensive Abläufe.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Wertschöpfend und sinnstiftend</p>
                    <p className="text-slate-500 text-sm">Automatisierung schafft Freiräume für Aufgaben mit mehr Wirkung.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/emma/"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  EMMA live im Einsatz
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </RevealOnScroll>

          {/* Visual */}
          <RevealOnScroll variants={fadeRight}>
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/emma-brain.webp"
                alt="KI-gestützte Prozessentlastung – ITE Consult"
                width={640}
                height={480}
                className="w-full h-auto object-cover"
              />
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
