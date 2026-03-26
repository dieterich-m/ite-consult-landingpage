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
              <strong>Hinweis:</strong> Diese AGB wurden noch nicht anwaltlich geprüft. Bitte lassen Sie sie vor Veröffentlichung durch einen auf IT- und Dienstleistungsrecht spezialisierten Rechtsanwalt prüfen.
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 1 Geltungsbereich
              </h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Dienst-
                und Werkverträge sowie sonstigen Vereinbarungen über Beratungs-,
                Analyse- und Digitalisierungsleistungen zwischen der{" "}
                {siteConfig.company.name} (im Folgenden: Auftragnehmer) und dem
                Auftraggeber. Sie gelten ausschließlich gegenüber Unternehmern
                im Sinne des § 14 BGB.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 2 Vertragsschluss
              </h2>
              <p>
                Angebote des Auftragnehmers sind freibleibend und unverbindlich.
                Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung
                des Auftragnehmers oder durch Beginn der Erbringung der
                vereinbarten Leistungen zustande.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 3 Leistungsumfang
              </h2>
              <p>
                Der Umfang der zu erbringenden Leistungen (z. B. Prozessanalyse,
                Konzeption, Implementierung von Automatisierungslösungen,
                Beratung) ergibt sich aus dem schriftlichen Angebot bzw. dem
                Auftragsschreiben. Änderungen und Erweiterungen des
                Leistungsumfangs bedürfen der schriftlichen Vereinbarung und
                werden gesondert vergütet.
              </p>
              <p className="mt-2">
                Der Auftragnehmer erbringt Beratungs- und Analyseleistungen nach
                bestem Wissen und Gewissen. Ein bestimmter wirtschaftlicher
                Erfolg wird nicht geschuldet, sofern nicht ausdrücklich schriftlich
                vereinbart.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 4 Mitwirkungspflichten des Auftraggebers
              </h2>
              <p>
                Der Auftraggeber stellt alle für die Leistungserbringung
                erforderlichen Informationen, Zugänge und Unterlagen rechtzeitig
                zur Verfügung. Verzögerungen, die auf unzureichende Mitwirkung
                zurückzuführen sind, gehen nicht zu Lasten des Auftragnehmers.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 5 Preise und Zahlung
              </h2>
              <p>
                Alle Preise verstehen sich netto zuzüglich der gesetzlichen
                Mehrwertsteuer. Rechnungen sind innerhalb von 14 Tagen nach
                Rechnungsstellung ohne Abzug zu begleichen.
              </p>
              <p className="mt-2">
                Bei Projekten mit einem Volumen von mehr als 5.000 € netto kann
                der Auftragnehmer angemessene Abschlagszahlungen verlangen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 6 Termine und Fristen
              </h2>
              <p>
                Vereinbarte Termine und Fristen sind, sofern nicht ausdrücklich
                schriftlich als verbindlich bezeichnet, unverbindliche
                Richtwerte. Bei absehbaren Verzögerungen informiert der
                Auftragnehmer den Auftraggeber unverzüglich.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 7 Vertraulichkeit
              </h2>
              <p>
                Beide Parteien verpflichten sich, alle im Rahmen der
                Zusammenarbeit erlangten vertraulichen Informationen der jeweils
                anderen Partei vertraulich zu behandeln und nicht an Dritte
                weiterzugeben. Diese Pflicht besteht auch nach Beendigung des
                Vertragsverhältnisses fort.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 8 Haftung
              </h2>
              <p>
                Der Auftragnehmer haftet uneingeschränkt für Schäden aus der
                Verletzung des Lebens, des Körpers oder der Gesundheit sowie bei
                Vorsatz und grober Fahrlässigkeit.
              </p>
              <p className="mt-2">
                Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten
                (Kardinalpflichten) ist die Haftung auf den vertragstypisch
                vorhersehbaren Schaden begrenzt. Im Übrigen ist die Haftung für
                leichte Fahrlässigkeit ausgeschlossen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 9 Anwendbares Recht und Gerichtsstand
              </h2>
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss
                des UN-Kaufrechts. Gerichtsstand ist – soweit gesetzlich zulässig
                – der Sitz des Auftragnehmers.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                § 10 Salvatorische Klausel
              </h2>
              <p>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
                werden, bleibt die Wirksamkeit der übrigen Bestimmungen
                unberührt. Die unwirksame Bestimmung ist durch eine wirksame
                zu ersetzen, die dem wirtschaftlichen Zweck am nächsten kommt.
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
