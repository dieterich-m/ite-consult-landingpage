import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen der ITE Consult GmbH für Leistungen gegenüber Unternehmern.",
  robots: { index: false, follow: true },
};

export default function AgbPage() {
  return (
    <>
      <section className="bg-slate-800 text-white py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            {siteConfig.company.name}
          </p>
          <h1 className="text-2xl md:text-3xl font-bold">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="mt-2 text-slate-400 text-sm">
            B2B-Fassung – gilt für Leistungen gegenüber Unternehmern.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-10 text-sm leading-relaxed text-slate-700">

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">1. Geltungsbereich</h2>
              <p>
                1.1 Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über
                Beratungs-, Analyse-, Konzeptions-, Umsetzungs-, Automatisierungs-,
                Digitalisierungs-, Datenschutz- und sonstige Dienstleistungen der{" "}
                {siteConfig.company.legalName}, {siteConfig.company.address.full},
                gegenüber Unternehmern im Sinne des § 14 BGB, juristischen Personen des
                öffentlichen Rechts und öffentlich-rechtlichen Sondervermögen.
              </p>
              <p className="mt-3">
                1.2 Abweichende, entgegenstehende oder ergänzende Allgemeine
                Geschäftsbedingungen des Auftraggebers werden nur dann Vertragsbestandteil,
                wenn ihrer Geltung ausdrücklich schriftlich zugestimmt wurde.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">2. Vertragsschluss</h2>
              <p>2.1 Angebote der {siteConfig.company.name} sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich bezeichnet sind.</p>
              <p className="mt-3">2.2 Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung, durch ausdrückliche Annahme eines Angebots oder durch Beginn der Leistungserbringung zustande.</p>
              <p className="mt-3">2.3 Maßgeblich für Inhalt und Umfang der Leistungen sind das jeweilige Angebot, die Leistungsbeschreibung und gegebenenfalls das Auftragsschreiben.</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">3. Leistungsgegenstand</h2>
              <p>3.1 Gegenstand der Leistungen sind insbesondere Beratungs-, Analyse-, Konzeptions- und Umsetzungsleistungen im Bereich Automatisierung, Digitalisierung, Datenschutz, Systemarchitektur und angrenzender IT-naher Leistungen.</p>
              <p className="mt-3">3.2 Sofern nicht ausdrücklich schriftlich zugesagt, schuldet die {siteConfig.company.name} keinen bestimmten wirtschaftlichen Erfolg, keinen bestimmten Umsatz, keine bestimmte Effizienzsteigerung und keine bestimmte Suchmaschinenplatzierung.</p>
              <p className="mt-3">3.3 Die {siteConfig.company.name} ist berechtigt, sich zur Leistungserbringung geeigneter Dritter zu bedienen.</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">4. Mitwirkungspflichten des Auftraggebers</h2>
              <p>4.1 Der Auftraggeber stellt alle für die Leistungserbringung erforderlichen Informationen, Unterlagen, Ansprechpartner, Freigaben, Zugänge und technischen Voraussetzungen rechtzeitig und vollständig zur Verfügung.</p>
              <p className="mt-3">4.2 Verzögerungen oder Mehraufwände, die durch verspätete, unrichtige oder unvollständige Mitwirkung des Auftraggebers entstehen, gehen nicht zu Lasten der {siteConfig.company.name}.</p>
              <p className="mt-3">4.3 Soweit Mitwirkungspflichten nicht rechtzeitig erfüllt werden, verlängern sich vereinbarte Fristen angemessen. Weitergehende Ansprüche bleiben unberührt.</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">5. Änderungen des Leistungsumfangs</h2>
              <p>5.1 Änderungs- und Erweiterungswünsche des Auftraggebers bedürfen der Abstimmung mit der {siteConfig.company.name}.</p>
              <p className="mt-3">5.2 Zusätzliche oder geänderte Leistungen werden gesondert vergütet, sofern sie nicht ausdrücklich vom ursprünglich vereinbarten Leistungsumfang umfasst sind.</p>
              <p className="mt-3">5.3 Die {siteConfig.company.name} ist berechtigt, die Durchführung geänderter oder zusätzlicher Leistungen von einer schriftlichen Bestätigung und gegebenenfalls einer Anpassung von Vergütung und Zeitplan abhängig zu machen.</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">6. Termine und Fristen</h2>
              <p>6.1 Termine und Fristen sind nur verbindlich, wenn sie ausdrücklich schriftlich als verbindlich vereinbart wurden.</p>
              <p className="mt-3">6.2 Nicht verbindliche Zeitangaben gelten als unverbindliche Planwerte.</p>
              <p className="mt-3">6.3 Leistungsverzögerungen aufgrund höherer Gewalt oder sonstiger von der {siteConfig.company.name} nicht zu vertretender Umstände, insbesondere Ausfälle von Kommunikationsnetzen, Drittanbietern, Plattformen oder Softwarediensten, verlängern Fristen angemessen.</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">7. Vergütung und Zahlungsbedingungen</h2>
              <p>7.1 Alle Preise verstehen sich netto zuzüglich der jeweils geltenden gesetzlichen Umsatzsteuer.</p>
              <p className="mt-3">7.2 Soweit nicht anders vereinbart, sind Rechnungen innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug zur Zahlung fällig.</p>
              <p className="mt-3">7.3 Bei Projekten mit größerem Umfang oder längerer Laufzeit ist die {siteConfig.company.name} berechtigt, angemessene Abschlagszahlungen oder Teilabrechnungen nach Leistungsfortschritt zu verlangen.</p>
              <p className="mt-3">7.4 Kommt der Auftraggeber in Zahlungsverzug, gelten die gesetzlichen Verzugsregelungen.</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">8. Nutzungsrechte an Arbeitsergebnissen</h2>
              <p>8.1 Soweit urheberrechtlich geschützte Arbeitsergebnisse entstehen, erhält der Auftraggeber nach vollständiger Bezahlung ein einfaches, nicht übertragbares Nutzungsrecht an den vertragsgegenständlichen Arbeitsergebnissen, soweit nicht ausdrücklich etwas anderes vereinbart wurde.</p>
              <p className="mt-3">8.2 Eine Weitergabe, Bearbeitung oder Unterlizenzierung an Dritte ist nur zulässig, soweit dies vertraglich vereinbart oder gesetzlich erlaubt ist.</p>
              <p className="mt-3">8.3 An allgemeinen Methoden, Konzepten, Know-how, Vorlagen, Standards, Skripten, Routinen, Werkzeugen und bereits bestehenden Bestandteilen verbleiben die Rechte bei der {siteConfig.company.name}.</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">9. Abnahme bei Werkleistungen</h2>
              <p>9.1 Soweit ausdrücklich Werkleistungen geschuldet sind, hat der Auftraggeber die vertragsgemäß erbrachten Leistungen unverzüglich zu prüfen und, sofern diese im Wesentlichen vertragsgemäß sind, abzunehmen.</p>
              <p className="mt-3">9.2 Die Abnahme gilt insbesondere dann als erfolgt, wenn der Auftraggeber die Leistung produktiv nutzt, nicht innerhalb angemessener Frist wesentliche Mängel in Textform rügt oder die Abnahme grundlos verweigert.</p>
              <p className="mt-3">9.3 Unerhebliche Mängel berechtigen nicht zur Verweigerung der Abnahme.</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">10. Sachmängel</h2>
              <p>10.1 Für Sachmängel bei Werkleistungen gelten die gesetzlichen Vorschriften, soweit nachfolgend nichts anderes geregelt ist.</p>
              <p className="mt-3">10.2 Die {siteConfig.company.name} ist zunächst zur Nacherfüllung berechtigt.</p>
              <p className="mt-3">10.3 Mängelansprüche bestehen nicht bei nur unerheblicher Abweichung von der vereinbarten Beschaffenheit oder wenn Mängel auf von dem Auftraggeber bereitgestellten Informationen, Inhalten, Schnittstellen, Systemen oder sonstigen Vorgaben beruhen.</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">11. Vertraulichkeit</h2>
              <p>11.1 Beide Parteien verpflichten sich, alle ihnen im Rahmen der Zusammenarbeit bekannt gewordenen vertraulichen Informationen der jeweils anderen Partei vertraulich zu behandeln und nur für die vertraglich vorgesehenen Zwecke zu verwenden.</p>
              <p className="mt-3">11.2 Diese Verpflichtung gilt nicht für Informationen, die öffentlich bekannt sind, ohne Verstoß gegen diese Vereinbarung öffentlich werden oder rechtmäßig von Dritten erlangt wurden.</p>
              <p className="mt-3">11.3 Die Vertraulichkeitspflicht gilt über das Ende des Vertragsverhältnisses hinaus fort.</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">12. Haftung</h2>
              <p>12.1 Die {siteConfig.company.name} haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.</p>
              <p className="mt-3">12.2 Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Wesentliche Vertragspflichten sind solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Auftraggeber regelmäßig vertrauen darf.</p>
              <p className="mt-3">12.3 Im Übrigen ist die Haftung für leichte Fahrlässigkeit ausgeschlossen.</p>
              <p className="mt-3">12.4 Die vorstehenden Haftungsbeschränkungen gelten auch zugunsten gesetzlicher Vertreter, Mitarbeiter und Erfüllungsgehilfen der {siteConfig.company.name}.</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">13. Datenschutz</h2>
              <p>13.1 Beide Parteien beachten die jeweils anwendbaren datenschutzrechtlichen Vorschriften.</p>
              <p className="mt-3">13.2 Soweit die {siteConfig.company.name} personenbezogene Daten im Auftrag des Auftraggebers verarbeitet, schließen die Parteien vor Beginn der Verarbeitung einen gesonderten Vertrag zur Auftragsverarbeitung, sofern dies gesetzlich erforderlich ist.</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 mb-3">14. Schlussbestimmungen</h2>
              <p>14.1 Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.</p>
              <p className="mt-3">14.2 Ist der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist Gerichtsstand für alle Streitigkeiten aus und im Zusammenhang mit dem Vertragsverhältnis der Sitz der {siteConfig.company.name}.</p>
              <p className="mt-3">14.3 Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
            </div>

            <div className="border-t border-slate-200 pt-6 text-xs text-slate-500">
              <p>
                Stand: März 2026 &bull; Version 2026-03-28.1 &bull;{" "}
                {siteConfig.company.legalName}, {siteConfig.company.address.full}
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
