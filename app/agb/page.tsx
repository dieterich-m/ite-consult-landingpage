import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: `AGB der ${siteConfig.company.name}`,
  robots: { index: false, follow: false },
};

export default function AgbPage() {
  return (
    <>
      <section className="bg-slate-800 text-white py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            Allgemeine Geschäftsbedingungen
          </h1>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 text-sm leading-relaxed text-slate-700">

            <div className="bg-amber-50 border border-amber-200 p-4 text-xs text-amber-800">
              <strong>Hinweis:</strong> Diese AGB sind ein Muster und wurden noch nicht von einem Rechtsanwalt geprüft. Bitte lassen Sie diese vor Veröffentlichung durch einen auf Handwerksrecht spezialisierten Rechtsanwalt prüfen.
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 1 Geltungsbereich
              </h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen gelten für alle
                Werkverträge und sonstigen Vereinbarungen zwischen der{" "}
                {siteConfig.company.name} (im Folgenden: Auftragnehmer) und dem
                Auftraggeber.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 2 Vertragsschluss
              </h2>
              <p>
                Angebote des Auftragnehmers sind freibleibend und unverbindlich.
                Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung
                des Auftragnehmers oder durch Beginn der Ausführung der
                vereinbarten Leistungen zustande.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 3 Leistungsumfang
              </h2>
              <p>
                Der Umfang der vom Auftragnehmer zu erbringenden Leistungen
                ergibt sich aus dem schriftlichen Angebot bzw. dem
                Auftragsschreiben. Änderungen und Erweiterungen des
                Leistungsumfangs bedürfen der schriftlichen Vereinbarung und
                werden gesondert berechnet.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 4 Preise und Zahlung
              </h2>
              <p>
                Alle Preise verstehen sich zuzüglich der gesetzlichen
                Mehrwertsteuer. Rechnungen sind innerhalb von 14 Tagen nach
                Rechnungsstellung ohne Abzug zu bezahlen.
              </p>
              <p className="mt-2">
                Bei größeren Projekten kann der Auftragnehmer angemessene
                Abschlagszahlungen verlangen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 5 Ausführungsfristen
              </h2>
              <p>
                Vereinbarte Ausführungsfristen sind Annäherungswerte und
                verstehen sich als unverbindlich, sofern nicht ausdrücklich
                schriftlich als verbindlich vereinbart. Bei Verzögerungen
                informiert der Auftragnehmer den Auftraggeber unverzüglich.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 6 Gewährleistung
              </h2>
              <p>
                Die Gewährleistungsfrist für Mängel beträgt bei Bauwerken 5
                Jahre, bei sonstigen Leistungen 2 Jahre ab Abnahme. Die
                Gewährleistungsrechte richten sich nach den gesetzlichen
                Bestimmungen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 7 Haftung
              </h2>
              <p>
                Der Auftragnehmer haftet für Schäden aus der Verletzung des
                Lebens, des Körpers oder der Gesundheit uneingeschränkt. Für
                sonstige Schäden haftet der Auftragnehmer nur bei Vorsatz oder
                grober Fahrlässigkeit.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 8 Anwendbares Recht und Gerichtsstand
              </h2>
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand
                ist – soweit gesetzlich zulässig – der Sitz des Auftragnehmers.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 9 Salvatorische Klausel
              </h2>
              <p>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
                werden, bleibt die Wirksamkeit der übrigen Bestimmungen
                unberührt.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-6 text-xs text-slate-500">
              <p>
                Stand: März 2026 &bull; {siteConfig.company.name},{" "}
                {siteConfig.company.address.full}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
