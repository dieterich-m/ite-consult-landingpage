import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import AboutTeaser from "@/components/sections/AboutTeaser";
import KITeaser from "@/components/sections/KITeaser";
import LeadMagnet from "@/components/sections/LeadMagnet";
import Testimonials from "@/components/sections/Testimonials";
import ServiceArea from "@/components/sections/ServiceArea";
import FaqSection from "@/components/sections/FaqSection";
import CtaBanner from "@/components/sections/CtaBanner";
import ContactForm from "@/components/sections/ContactForm";
import Link from "next/link";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { siteConfig } from "@/lib/config";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <KITeaser />
      <AboutTeaser />
      <LeadMagnet />
      <Testimonials />
      <ServiceArea />
      <FaqSection />

      {/* Weiterführende Einblicke */}
      <section className="bg-white py-16 md:py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealOnScroll className="mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Praxisimpulse
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Weiterführende Einblicke und Praxisimpulse
            </h2>
            <p className="text-slate-500 max-w-2xl leading-relaxed">
              Wer tiefer einsteigen möchte, findet hier zwei konkrete Vertiefungen: Automatisierung mit EMMA im praktischen Einsatz und eine kompakte Einordnung zur Frage, wie Unternehmen Cloud-Sicherheit realistisch bewerten sollten.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RevealOnScroll>
              <div className="border border-slate-200 p-6 md:p-8 flex flex-col h-full">
                <h3 className="font-semibold text-slate-900 text-lg mb-3">
                  Sind unsere Daten in der Cloud sicher?
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">
                  Podcast-Empfehlung und kompakte Einordnung für mittelständische Unternehmen, die das Thema Cloud-Sicherheit nüchtern und praxisnah betrachten möchten.
                </p>
                <div className="mt-5">
                  <Link
                    href="/netplans-podcast/"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Zur Podcast-Seite
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealOnScroll className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Kontakt aufnehmen
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Schreiben Sie uns – wir melden uns innerhalb eines Werktages. Oder
              rufen Sie direkt an.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact info */}
            <RevealOnScroll className="lg:col-span-1 space-y-5">
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">
                  Direkt erreichbar
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={`tel:${siteConfig.company.phoneTel}`}
                      className="flex items-start gap-3 text-sm group"
                    >
                      <Phone className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <div>
                        <div className="font-medium text-slate-900 group-hover:text-primary transition-colors">
                          {siteConfig.company.phone}
                        </div>
                        <div className="text-slate-500">
                          {siteConfig.company.hours.weekdays}
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${siteConfig.company.email}`}
                      className="flex items-center gap-3 text-sm group"
                    >
                      <Mail className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-slate-700 group-hover:text-primary transition-colors">
                        {siteConfig.company.email}
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-slate-700">
                      {siteConfig.company.address.full}
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <div className="text-slate-700">
                      <div className="font-medium">{siteConfig.company.region}</div>
                      <div className="text-slate-500 text-xs mt-0.5">
                        {siteConfig.company.serviceRadius}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Form */}
            <RevealOnScroll className="lg:col-span-2 bg-white border border-slate-200 p-6 md:p-8">
              <ContactForm />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
