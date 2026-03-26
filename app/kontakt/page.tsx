import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktieren Sie ${siteConfig.company.name} – Telefon ${siteConfig.company.phone}, E-Mail ${siteConfig.company.email}. Dachdecker im ${siteConfig.company.region}.`,
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-800 text-white py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Kontakt</h1>
          <p className="text-slate-300">
            Wir freuen uns auf Ihre Anfrage – telefonisch, per E-Mail oder über
            das Formular.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-bold text-slate-900 text-lg mb-4">
                  Direkt erreichbar
                </h2>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`tel:${siteConfig.company.phoneTel}`}
                      className="flex items-start gap-3 text-sm group"
                    >
                      <Phone className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 text-base group-hover:text-primary transition-colors">
                          {siteConfig.company.phone}
                        </div>
                        <div className="text-slate-500 text-xs mt-0.5">
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
                    <div className="text-slate-700">
                      <div className="font-medium">
                        {siteConfig.company.name}
                      </div>
                      <div>{siteConfig.company.address.street}</div>
                      <div>
                        {siteConfig.company.address.zip}{" "}
                        {siteConfig.company.address.city}
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Clock className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <div className="text-slate-700">
                      <div>{siteConfig.company.hours.weekdays}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 border border-slate-200 bg-white p-6 md:p-8">
              <h2 className="font-bold text-slate-900 text-lg mb-6">
                Projektanfrage
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
