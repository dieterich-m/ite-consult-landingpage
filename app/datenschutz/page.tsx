import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung der ${siteConfig.company.name}`,
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-slate-800 text-white py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 text-sm leading-relaxed text-slate-700">

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                1. Verantwortlicher
              </h2>
              <p>
                {siteConfig.company.name}
                <br />
                {siteConfig.company.owner}
                <br />
                {siteConfig.company.address.street}
                <br />
                {siteConfig.company.address.zip} {siteConfig.company.address.city}
                <br />
                Telefon:{" "}
                <a href={`tel:${siteConfig.company.phoneTel}`} className="text-primary hover:underline">
                  {siteConfig.company.phone}
                </a>
                <br />
                E-Mail:{" "}
                <a href={`mailto:${siteConfig.company.email}`} className="text-primary hover:underline">
                  {siteConfig.company.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                2. Hosting und Bereitstellung der Website (Vercel)
              </h2>
              <p>
                Diese Website wird bei einem externen Dienstleister betrieben. Hoster ist die Vercel Inc.,
                340 Pine Street, Suite 701, San Francisco, California 94104, USA.
                Beim Aufruf der Website werden technisch notwendige Daten verarbeitet (insbesondere IP-Adresse,
                Datum/Uhrzeit, aufgerufene Seite, Browser/OS, Referrer-URL), um die Seite auszuliefern sowie
                Stabilität und Sicherheit zu gewährleisten.
              </p>
              <p className="mt-2">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem, stabilem Betrieb).
                Die Übermittlung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).
                Sofern erforderlich, erfolgt die Verarbeitung im Rahmen einer Auftragsverarbeitung nach Art. 28 DSGVO.
                Weitere Informationen:{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  vercel.com/legal/privacy-policy
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                3. Cookies, Tracking und Analyse
              </h2>
              <p>
                Diese Website setzt derzeit keine Tracking- oder Analyse-Tools (z. B. Google Analytics) ein und
                verwendet keine nicht technisch notwendigen Cookies. Technisch notwendige Cookies können in
                Einzelfällen durch den Hoster oder sicherheitsrelevante Funktionen entstehen, soweit dies zur
                Bereitstellung der Website erforderlich ist.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                4. Kontaktformular
              </h2>
              <p>
                Wenn Sie uns über das Kontaktformular kontaktieren, verarbeiten wir die von Ihnen übermittelten
                Daten (Name, E-Mail, Telefon, Nachricht) zur Bearbeitung Ihrer Anfrage.
              </p>
              <p className="mt-2">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw.
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kommunikation).
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                5. Externe Schriftarten
              </h2>
              <p>
                Auf dieser Website werden keine externen Schriftarten von Drittanbietern (z. B. Google Fonts)
                nachgeladen. Es werden ausschließlich lokal eingebundene Schriftarten genutzt.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                6. Ihre Rechte
              </h2>
              <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Auskunft (Art. 15 DSGVO)</li>
                <li>Berichtigung (Art. 16 DSGVO)</li>
                <li>Löschung (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen Verarbeitung auf Grundlage berechtigter Interessen (Art. 21 DSGVO)</li>
                <li>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
              </ul>
              <p className="mt-2">
                Zur Ausübung dieser Rechte:{" "}
                <a href={`mailto:${siteConfig.company.email}`} className="text-primary hover:underline">
                  {siteConfig.company.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                7. Beschwerderecht
              </h2>
              <p>
                Sie haben das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.
                Die zuständige Aufsichtsbehörde für Rheinland-Pfalz ist der Landesbeauftragte für den
                Datenschutz und die Informationsfreiheit Rheinland-Pfalz.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                8. SSL/TLS-Verschlüsselung
              </h2>
              <p>
                Diese Website nutzt SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
                an „https://" und dem Schloss-Symbol in der Browserzeile.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                9. Aktualität
              </h2>
              <p>
                Diese Datenschutzerklärung hat den Stand: März 2026. Wir behalten uns vor, diese
                Datenschutzerklärung bei Bedarf anzupassen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
