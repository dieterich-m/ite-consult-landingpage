import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der ITE Consult GmbH mit allen Pflichtangaben zur Anbieterkennzeichnung.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <section className="bg-slate-800 text-white py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            {siteConfig.company.name}
          </p>
          <h1 className="text-2xl md:text-3xl font-bold">Impressum</h1>
          <p className="mt-2 text-slate-400 text-sm">
            Anbieterkennzeichnung und rechtliche Pflichtangaben.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-10 text-sm leading-relaxed text-slate-700">

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                Angaben gemäß § 5 DDG
              </h2>
              <p>
                {siteConfig.company.legalName}<br />
                {siteConfig.company.address.street}<br />
                {siteConfig.company.address.zip} {siteConfig.company.address.city}<br />
                Deutschland
              </p>
              <p className="mt-3">
                Vertreten durch:<br />
                Geschäftsführer {siteConfig.company.owner}
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">Kontakt</h2>
              <p>
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
              <h2 className="text-base font-bold text-slate-900 mb-3">Handelsregister</h2>
              <p>
                Registergericht: {siteConfig.company.registrationCourt}<br />
                Registernummer: {siteConfig.company.registrationNumber}
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                Umsatzsteuer-Identifikationsnummer
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                {siteConfig.company.ustId}
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">Zuständige Kammer</h2>
              <p>
                {siteConfig.company.ihk}<br />
                Ludwig-Erhard-Straße 3–5<br />
                56073 Koblenz
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                Verbraucherstreitbeilegung
              </h2>
              <p>
                Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                Haftung für Inhalte
              </h2>
              <p>
                Als Diensteanbieter sind wir nach den allgemeinen Gesetzen für eigene Inhalte
                auf diesen Seiten verantwortlich. Eine Verpflichtung zur Überwachung übermittelter
                oder gespeicherter fremder Informationen besteht nur im Rahmen der gesetzlichen
                Vorschriften. Sobald uns konkrete Rechtsverletzungen bekannt werden, werden wir
                die betreffenden Inhalte unverzüglich entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">
                Haftung für Links
              </h2>
              <p>
                Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte
                wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte keine
                Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Links unverzüglich entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">Urheberrecht</h2>
              <p>
                Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen
                Urheberrecht. Jede Verwertung außerhalb der Grenzen des Urheberrechts bedarf
                der vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers.
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
