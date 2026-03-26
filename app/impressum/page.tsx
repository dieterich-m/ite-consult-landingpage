import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum der ${siteConfig.company.name}, ${siteConfig.company.address.city}`,
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <>
      <section className="bg-slate-800 text-white py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold">Impressum</h1>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed text-slate-700">

            <div className="bg-amber-50 border border-amber-200 p-4 text-xs text-amber-800">
              <strong>Hinweis:</strong> Dieses Impressum ist ein Muster und wurde noch nicht von einem Rechtsanwalt geprüft. Bitte lassen Sie es vor Veröffentlichung durch einen auf Internetrecht spezialisierten Rechtsanwalt prüfen.
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                <strong>{siteConfig.company.legalName}</strong>
                <br />
                {siteConfig.company.address.street}
                <br />
                {siteConfig.company.address.zip} {siteConfig.company.address.city}
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                Vertreten durch
              </h2>
              <p>Geschäftsführer: {siteConfig.company.owner}</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                Kontakt
              </h2>
              <p>
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
                Handelsregister
              </h2>
              <p>
                Registergericht: {siteConfig.company.registrationCourt}
                <br />
                Registernummer: {siteConfig.company.registrationNumber}
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz: {siteConfig.company.ustId}
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                Zuständige Kammer
              </h2>
              <p>
                {siteConfig.company.ihk}
                <br />
                Ludwig-Erhard-Straße 3–5
                <br />
                56075 Koblenz
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                Haftung für Inhalte
              </h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                Urheberrecht
              </h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
