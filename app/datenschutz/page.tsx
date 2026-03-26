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

            <div className="bg-amber-50 border border-amber-200 p-4 text-xs text-amber-800">
              <strong>Hinweis:</strong> Diese Datenschutzerklärung ist ein Muster und wurde noch nicht von einem Datenschutzbeauftragten oder Rechtsanwalt geprüft. Bitte lassen Sie sie vor Veröffentlichung prüfen.
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                1. Verantwortlicher
              </h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website:
              </p>
              <p className="mt-2">
                {siteConfig.company.name}
                <br />
                {siteConfig.company.owner}
                <br />
                {siteConfig.company.address.street}
                <br />
                {siteConfig.company.address.zip} {siteConfig.company.address.city}
                <br />
                Telefon:{" "}
                <a
                  href={`tel:${siteConfig.company.phoneTel}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.company.phone}
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.company.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                2. Hosting
              </h2>
              <p>
                Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 701,
                San Francisco, California 94104, USA gehostet. Vercel verarbeitet
                dabei technische Daten (IP-Adresse, Browser-Informationen,
                Zugriffszeiten), die für den Betrieb der Website notwendig sind.
              </p>
              <p className="mt-2">
                Weitere Informationen finden Sie in der Datenschutzerklärung von
                Vercel:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  vercel.com/legal/privacy-policy
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                3. Kontaktformular
              </h2>
              <p>
                Wenn Sie uns über das Kontaktformular kontaktieren, werden Ihre
                Angaben (Name, E-Mail, Telefon, Nachricht) zur Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen gespeichert. Diese
                Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-2">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
                Maßnahmen).
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                4. Cookies
              </h2>
              <p>
                Diese Website verwendet technisch notwendige Cookies, die für
                den Betrieb der Website erforderlich sind. Wir setzen keine
                Tracking- oder Werbe-Cookies ein. Es werden keine
                personenbezogenen Daten für Werbezwecke erhoben oder
                weitergegeben.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                5. Ihre Rechte
              </h2>
              <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-2">
                Zur Ausübung dieser Rechte wenden Sie sich bitte an:{" "}
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.company.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                6. Beschwerderecht
              </h2>
              <p>
                Sie haben das Recht, sich bei der zuständigen
                Datenschutzaufsichtsbehörde zu beschweren. Die zuständige
                Aufsichtsbehörde für Rheinland-Pfalz ist der Landesbeauftragte
                für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                7. Aktualität
              </h2>
              <p>
                Diese Datenschutzerklärung hat den Stand: März 2026. Wir behalten
                uns vor, diese Datenschutzerklärung bei Bedarf anzupassen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
