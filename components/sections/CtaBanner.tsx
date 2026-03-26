import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <RevealOnScroll className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Bereit für Ihr Projekt?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Sprechen Sie uns an – wir schauen es uns vor Ort an, machen ein
            klares Angebot und führen fachgerecht aus.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="accent" size="lg">
              <Link href="/#kontakt">
                Jetzt Termin anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <a href={`tel:${siteConfig.company.phoneTel}`}>
                <Phone className="h-4 w-4" />
                {siteConfig.company.phone}
              </a>
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
