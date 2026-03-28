import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der ITE Consult GmbH für die Website und das Kontaktformular.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-slate-800 text-white py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            {siteConfig.company.name}
          </p>
          <h1 className="text-2xl md:text-3xl font-bold">Datenschutzerklärung</h1>
          <p className="mt-2 text-slate-400 text-sm">
            Informationen zur Verarbeitung personenbezogener Daten.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-10 text-sm leading-relaxed text-slate-700">

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">1. Verantwortlicher</h2>
              <p>
                {siteConfig.company.legalName}<br />
                Geschäftsführer: {siteConfig.company.owner}<br />
                {siteConfig.company.address.street}<br />
                {siteConfig.company.address.zip} {siteConfig.company.address.city}<br />
                Deutschland
              </p>
              <p className="mt-3">
                Telefon:{" "}
                <a href={`tel:${siteConfig.company.phoneTel}`} className="text-primary hover:underline">
                  {siteConfig.company.phone}
                </a><br />
                E-Mail:{" "}
                <a href={`mailto:${siteConfig.company.email}`} className="text-primary hover:underline">
                  {siteConfig.company.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                2. Hosting und Bereitstellung der Website
              </h2>
              <p>
                Diese Website wird über die Plattform Vercel bereitgestellt. Anbieter ist die
                Vercel Inc., 340 Pine Street, Suite 701, San Francisco, California 94104, USA.
              </p>
              <p className="mt-3">
                Beim Aufruf dieser Website werden technisch erforderliche Informationen verarbeitet,
                um die Website auszuliefern sowie Stabilität und Sicherheit zu gewährleisten.
                Dabei können insbesondere folgende Daten verarbeitet werden:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>aufgerufene Seiten bzw. Dateien</li>
                <li>Referrer-URL</li>
                <li>Informationen zum verwendeten Browser und Betriebssystem</li>
                <li>Zugriffsstatus / HTTP-Statuscode</li>
              </ul>
              <p className="mt-3">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
                liegt in dem sicheren, stabilen und effizienten Betrieb dieser Website.
              </p>
              <p className="mt-3">
                Soweit im Zusammenhang mit dem Hosting personenbezogene Daten in ein Drittland,
                insbesondere in die USA, übermittelt werden, erfolgt dies auf Grundlage von
                Art. 46 Abs. 2 lit. c DSGVO unter Verwendung von Standardvertragsklauseln.
              </p>
              <p className="mt-3">
                Wir haben mit dem Hosting-Anbieter, soweit erforderlich, einen Vertrag über
                Auftragsverarbeitung abgeschlossen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">3. Server-Logfiles</h2>
              <p>
                Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch
                Informationen in sogenannten Server-Logfiles erfasst. Diese Daten sind technisch
                erforderlich, um die Website anzuzeigen, die Systemsicherheit zu gewährleisten
                und Störungen oder Missbrauch nachzuvollziehen.
              </p>
              <p className="mt-3">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Server-Logfiles werden nur
                so lange gespeichert, wie dies für die genannten Zwecke erforderlich ist.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                4. Kontaktaufnahme per Formular, E-Mail oder Telefon
              </h2>
              <p>
                Wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch kontaktieren,
                verarbeiten wir die von Ihnen mitgeteilten Daten zur Bearbeitung Ihrer Anfrage
                und zur anschließenden Kommunikation. Dabei können insbesondere folgende Daten
                verarbeitet werden:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer</li>
                <li>Inhalt der Nachricht</li>
                <li>gegebenenfalls weitere von Ihnen freiwillig übermittelte Angaben</li>
              </ul>
              <p className="mt-3">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit sich Ihre Anfrage auf
                eine mögliche Beauftragung oder Vertragsdurchführung bezieht. Soweit Ihre Anfrage
                keinen Vertragsbezug hat, erfolgt die Verarbeitung auf Grundlage von Art. 6
                Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kommunikation).
              </p>
              <p className="mt-3">
                Die übermittelten Daten speichern wir nur so lange, wie dies zur Bearbeitung
                Ihrer Anfrage erforderlich ist. Soweit gesetzliche Aufbewahrungspflichten
                bestehen, erfolgt eine Speicherung im Rahmen dieser Pflichten.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                5. Cookies, Tracking und Analyse
              </h2>
              <p>
                Diese Website verwendet derzeit keine Tracking- oder Analyse-Tools und setzt
                keine nicht technisch erforderlichen Cookies zu Marketing- oder Statistikzwecken ein.
              </p>
              <p className="mt-3">
                Soweit technisch notwendige Cookies oder ähnliche Technologien durch den
                Hosting-Betrieb oder sicherheitsrelevante Funktionen erforderlich sind, erfolgt
                deren Einsatz auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                6. Externe Inhalte und externe Links
              </h2>
              <p>
                Auf dieser Website können Links zu externen Websites Dritter enthalten sein.
                Beim Anklicken eines solchen Links verlassen Sie unsere Website. Für die
                Datenverarbeitung auf den verlinkten Seiten sind ausschließlich deren jeweilige
                Betreiber verantwortlich. Eine automatische Übertragung personenbezogener Daten
                an diese externen Anbieter findet durch die bloße Darstellung eines normalen
                Hyperlinks nicht statt.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                7. Keine externen Schriftarten
              </h2>
              <p>
                Auf dieser Website werden keine externen Schriftarten von Drittanbietern
                nachgeladen. Es werden ausschließlich lokal eingebundene Schriftarten verwendet.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                8. Empfänger personenbezogener Daten
              </h2>
              <p>
                Personenbezogene Daten werden innerhalb unseres Unternehmens nur an diejenigen
                Stellen weitergegeben, die sie zur Bearbeitung Ihrer Anfrage oder zur Erfüllung
                gesetzlicher bzw. vertraglicher Pflichten benötigen.
              </p>
              <p className="mt-3">
                Eine Weitergabe an externe Dienstleister erfolgt nur, soweit dies für den
                Betrieb der Website oder die Bearbeitung Ihrer Anfrage erforderlich ist,
                insbesondere an Hosting-, E-Mail- und IT-Dienstleister. Diese werden, soweit
                erforderlich, auf Grundlage eines Vertrags zur Auftragsverarbeitung eingebunden.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">9. Speicherdauer</h2>
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen
                Verarbeitungszwecke erforderlich ist. Soweit gesetzliche Aufbewahrungspflichten
                bestehen, erfolgt eine darüber hinausgehende Speicherung im Rahmen der gesetzlichen
                Fristen. Nach Wegfall des jeweiligen Zwecks und Ablauf gesetzlicher
                Aufbewahrungsfristen werden die betreffenden Daten gelöscht.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">10. Ihre Rechte</h2>
              <p>Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>auf Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
                <li>auf Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten (Art. 16 DSGVO)</li>
                <li>auf Löschung Ihrer personenbezogenen Daten (Art. 17 DSGVO)</li>
                <li>auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO), soweit die Verarbeitung auf Art. 6 Abs. 1 lit. e oder lit. f DSGVO beruht</li>
                <li>auf Beschwerde bei einer Datenschutzaufsichtsbehörde (Art. 77 DSGVO)</li>
              </ul>
              <p className="mt-3">
                Zur Geltendmachung Ihrer Rechte:{" "}
                <a href={`mailto:${siteConfig.company.email}`} className="text-primary hover:underline">
                  {siteConfig.company.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                11. Beschwerderecht bei der Aufsichtsbehörde
              </h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über die
                Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
              </p>
              <p className="mt-3">
                Zuständige Aufsichtsbehörde für Rheinland-Pfalz ist:<br />
                Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
                Rheinland-Pfalz
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">12. Datensicherheit</h2>
              <p>
                Wir verwenden auf dieser Website eine SSL- bzw. TLS-Verschlüsselung,
                um übertragene Inhalte zu schützen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                13. Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <p>
                Diese Datenschutzerklärung hat den Stand: März 2026. Wir behalten uns vor,
                diese Datenschutzerklärung anzupassen, wenn dies aufgrund technischer,
                rechtlicher oder inhaltlicher Änderungen erforderlich wird.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-6 text-xs text-slate-500">
              <p>Stand: März 2026 &bull; Version 2026-03-28.1</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
