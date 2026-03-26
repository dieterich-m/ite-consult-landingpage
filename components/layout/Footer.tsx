import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Company */}
          <div>
            <div className="text-white font-bold text-xl mb-2">
              <span className="text-accent font-mono">WB</span>{" "}
              {siteConfig.company.name}
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {siteConfig.company.claim}
            </p>
            <p className="text-xs text-slate-500">
              {siteConfig.company.traditionHinweis}
            </p>
          </div>

          {/* Col 2: Leistungen */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Leistungen
            </h3>
            <ul className="space-y-2">
              {siteConfig.services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Kontakt */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.company.phoneTel}`}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  {siteConfig.company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  {siteConfig.company.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                <span>
                  {siteConfig.company.address.street}
                  <br />
                  {siteConfig.company.address.zip}{" "}
                  {siteConfig.company.address.city}
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Clock className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                <span>{siteConfig.company.hours.weekdays}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link
                  href="/agb"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  AGB
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.company.name}. Alle
            Rechte vorbehalten.
          </p>
          <p>
            {siteConfig.company.address.zip} {siteConfig.company.address.city}{" "}
            &bull; {siteConfig.company.region}
          </p>
        </div>
      </div>
    </footer>
  );
}
