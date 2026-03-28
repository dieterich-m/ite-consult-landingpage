import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Use Cases: Automatisierung im Backoffice für KMU & Verwaltung',
  description:
    'Konkrete Use Cases für Automatisierung im Mittelstand: Posteingang, Abgleiche, Dokumente, Stammdaten.',
}

export default function UseCasesPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto container-max px-5 pt-14 pb-10">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight">Use Cases: Automatisierung im Backoffice</h1>
          <p className="mt-4 text-base md:text-lg text-slate-em leading-relaxed">
            Für <strong>KMU</strong> und <strong>öffentliche Verwaltungen</strong>: konkrete Beispiele, die schnell Wirkung bringen –
            weniger manuelle Arbeit, weniger Fehler, mehr Transparenz.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href="/emma/#webcast" className="inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] text-white px-6 py-3 font-semibold shadow-soft hover:opacity-95">WebCast ansehen</a>
            <a href="#liste" className="inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3 font-semibold hover:bg-mist">Use Cases</a>
          </div>
        </div>
      </section>

      <section id="liste" className="bg-mist border-t border-line">
        <div className="mx-auto container-max px-5 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
              <h2 className="font-serif text-2xl">1) Posteingang & E-Mail-Routing</h2>
              <p className="mt-3 text-slate-em">E-Mails und Anhänge automatisch klassifizieren, ablegen und den richtigen Vorgängen zuordnen. Ergebnis: weniger Suchzeit, weniger „wo ist das?".</p>
              <p className="mt-3 text-sm text-slate-em"><strong>Nutzen:</strong> Zeitgewinn, schnellere Reaktionszeiten, nachvollziehbare Ablage.</p>
            </div>

            <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
              <h2 className="font-serif text-2xl">2) Abgleiche & Prüfungen</h2>
              <p className="mt-3 text-slate-em">Daten aus Systemen vergleichen (z. B. Lieferanten, Bestellungen, Stammdaten) und Abweichungen protokolliert melden – statt manuell in Excel.</p>
              <p className="mt-3 text-sm text-slate-em"><strong>Nutzen:</strong> weniger Fehler, mehr Kontrolle, sauber dokumentiert.</p>
            </div>

            <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
              <h2 className="font-serif text-2xl">3) Dokumente erzeugen (Standardbriefe, Bescheide, Bestätigungen)</h2>
              <p className="mt-3 text-slate-em">Vorlagen automatisiert füllen, prüfen und versioniert ablegen. Freigaben bleiben beim Menschen – Routine geht an den Prozess.</p>
              <p className="mt-3 text-sm text-slate-em"><strong>Nutzen:</strong> schnellere Durchlaufzeit, weniger Nacharbeit, konsistente Qualität.</p>
            </div>

            <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
              <h2 className="font-serif text-2xl">4) Stammdatenpflege</h2>
              <p className="mt-3 text-slate-em">Wiederkehrende Anpassungen (z. B. Artikel-/Kunden-/Lieferantendaten) automatisiert durchführen, prüfen, protokollieren.</p>
              <p className="mt-3 text-sm text-slate-em"><strong>Nutzen:</strong> weniger Doppelarbeit, sauberer Datenbestand, weniger Rückfragen.</p>
            </div>

            <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
              <h2 className="font-serif text-2xl">5) Fristen & Status</h2>
              <p className="mt-3 text-slate-em">Status automatisch pflegen, Fristen überwachen, Eskalationen auslösen – ohne dass jemand „hinterherlaufen" muss.</p>
              <p className="mt-3 text-sm text-slate-em"><strong>Nutzen:</strong> weniger Liegezeiten, mehr Verlässlichkeit, bessere Planbarkeit.</p>
            </div>

            <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
              <h2 className="font-serif text-2xl">6) Reporting auf Knopfdruck</h2>
              <p className="mt-3 text-slate-em">Monatsberichte, Kennzahlen und Listen automatisch erzeugen. Genau das, was im Alltag Zeit frisst, wird reproduzierbar.</p>
              <p className="mt-3 text-sm text-slate-em"><strong>Nutzen:</strong> Transparenz, weniger „Excel-Tage", Entscheidungen schneller treffen.</p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-line bg-white p-7 shadow-soft">
            <h2 className="font-serif text-2xl">Der beste Einstieg</h2>
            <p className="mt-3 text-slate-em leading-relaxed">WebCast ansehen → Top 5 Routinen sammeln → 1–2 Prozesse für einen Prototyp auswählen. So wird aus Automatisierung echte Entlastung.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="/emma/#webcast" className="inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] text-white px-6 py-3 font-semibold shadow-soft hover:opacity-95">Zum WebCast</a>
              <a href="/emma/#warum" className="inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3 font-semibold hover:bg-mist">Warum ITE das empfiehlt</a>
            </div>
            <p className="mt-4 text-xs text-slate-em">Version: <span className="font-mono">2026-03-03.11</span></p>
          </div>
        </div>
      </section>
    </>
  )
}
