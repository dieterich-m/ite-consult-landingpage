import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NetPlans SECURE//DAY Rhein-Main 2026 | Event-Empfehlung | ITE Consult',
  description:
    'NIS2, Cyber-Resilienz und IT-Sicherheit praxisnah: ITE Consult empfiehlt den SECURE//DAY Rhein-Main 2026 von NetPlans am 15. April in Wiesbaden – kostenlos.',
}

const EVENT_URL =
  'https://www.netplans.de/veranstaltungen/secure-day-rhein-main-2026/'

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'NetPlans SECURE//DAY Rhein-Main 2026',
  startDate: '2026-04-15T08:30:00+02:00',
  endDate: '2026-04-15T17:00:00+02:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  isAccessibleForFree: true,
  location: {
    '@type': 'Place',
    name: 'Kurhaus Wiesbaden',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kurhausplatz 1',
      postalCode: '65189',
      addressLocality: 'Wiesbaden',
      addressCountry: 'DE',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'NetPlans',
    url: 'https://www.netplans.de/',
  },
  description:
    'Ganztagesveranstaltung zu NIS2, Cyber-Resilienz und IT-Sicherheitsstrategie für Geschäftsführer, IT-Leiter und Sicherheitsverantwortliche im Mittelstand.',
  url: 'https://www.netplans.de/veranstaltungen/secure-day-rhein-main-2026/',
}

export default function SecureDayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 noise" aria-hidden="true"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-60" aria-hidden="true"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-slate-100 blur-3xl opacity-70" aria-hidden="true"></div>
        <div className="relative mx-auto container-max px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">

              {/* Event-Ankündigung */}
              <div className="rounded-3xl border border-line bg-white shadow-soft p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-9 h-9 rounded-2xl bg-[#1D4ED8] text-white flex items-center justify-center font-bold text-xs shrink-0" aria-hidden="true">SD</div>
                    <div>
                      <p className="text-base sm:text-lg font-semibold text-ink leading-tight">NetPlans SECURE//DAY Rhein-Main 2026</p>
                      <p className="mt-1 text-sm font-semibold text-slate-em leading-snug">15. April 2026 · Kurhaus Wiesbaden · 08:30–17:00 Uhr</p>
                      <p className="mt-1 text-sm text-slate-em">Kostenlos · Für Geschäftsführer, IT-Leiter & Sicherheitsverantwortliche</p>
                    </div>
                  </div>
                  <a href={EVENT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] text-white px-5 py-3 font-semibold shadow-soft hover:opacity-95 whitespace-nowrap">Jetzt anmelden</a>
                </div>
              </div>

              <h1 className="mt-5 font-serif text-4xl md:text-5xl leading-tight">
                NIS2 verändert die Spielregeln.
                <span className="block text-slate-em">Sind Sie vorbereitet?</span>
              </h1>
              <p className="mt-4 text-base md:text-lg text-slate-em leading-relaxed">
                Cyber-Resilienz ist heute keine reine IT-Frage mehr. NIS2 richtet sich an Geschäftsführung, IT und Sicherheitsverantwortliche gleichermaßen. Der SECURE//DAY bringt Klarheit: praxisnah, kompetent, kostenlos.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={EVENT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] text-white px-6 py-3 font-semibold shadow-soft hover:opacity-95">Kostenlos anmelden</a>
                <a href="#programm" className="inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3 font-semibold hover:bg-mist">Programm ansehen</a>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-2xl border border-line bg-white p-4"><p className="text-sm text-slate-em">Datum</p><p className="mt-1 font-semibold">15. April 2026</p></div>
                <div className="rounded-2xl border border-line bg-white p-4"><p className="text-sm text-slate-em">Ort</p><p className="mt-1 font-semibold">Kurhaus Wiesbaden</p></div>
                <div className="rounded-2xl border border-line bg-white p-4"><p className="text-sm text-slate-em">Kosten</p><p className="mt-1 font-semibold">Kostenlos</p></div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-line bg-white shadow-soft p-6 md:p-7">
                <p className="text-sm text-slate-em">Warum dieser Tag wichtig ist</p>
                <h2 className="mt-2 font-serif text-2xl">Ein Tag. Drei Perspektiven. Klare Antworten.</h2>
                <ul className="mt-5 space-y-4 text-slate-em">
                  <li className="flex gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold shrink-0" aria-hidden="true">✓</span>
                    <span>Was NIS2 konkret von Ihrem Unternehmen verlangt – und was nicht.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold shrink-0" aria-hidden="true">✓</span>
                    <span>Wie Angreifer heute KI und Deepfakes einsetzen – und wie Sie sich schützen.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold shrink-0" aria-hidden="true">✓</span>
                    <span>Welche technischen Maßnahmen (Zero Trust, NAC, E-Mail-Security) wirklich helfen.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold shrink-0" aria-hidden="true">✓</span>
                    <span>Wie IT-Dokumentation und ISMS die Grundlage für Compliance schaffen.</span>
                  </li>
                </ul>
                <div className="mt-6 rounded-2xl bg-mist p-4 border border-line">
                  <p className="text-sm text-slate-em">Anmeldung</p>
                  <p className="mt-1 font-semibold">Kostenlos, direkt über NetPlans</p>
                  <a href={EVENT_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-ink text-white px-5 py-3 font-semibold hover:opacity-95">Zum Anmeldeformular</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Einordnung */}
      <section id="einordnung" className="bg-white border-t border-line">
        <div className="mx-auto container-max px-5 py-14 md:py-18">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl">NIS2: nicht nur ein IT-Thema</h2>
            <p className="mt-4 text-slate-em text-lg leading-relaxed">Die NIS2-Richtlinie stellt Unternehmen vor neue Anforderungen – und viele unterschätzen noch, wie weit sie reichen. Es geht nicht nur um Technik, sondern um Verantwortlichkeiten, Meldepflichten, Lieferkettensicherheit und die Frage, ob Geschäftsführer persönlich haften.</p>
            <p className="mt-4 text-slate-em leading-relaxed">Gerade im Mittelstand fehlt oft der klare Überblick: Was bin ich verpflichtet umzusetzen? Was ist sinnvoll darüber hinaus? Und wie stelle ich sicher, dass Sicherheit im Alltag wirklich funktioniert – nicht nur auf dem Papier?</p>
            <p className="mt-4 text-slate-em leading-relaxed">Genau hier setzt der SECURE//DAY an: mit praxisnahen Beiträgen, konkreten Handlungsempfehlungen und dem Austausch mit Experten, die diese Fragen täglich begleiten.</p>
          </div>
        </div>
      </section>

      {/* Programm */}
      <section id="programm" className="bg-mist border-t border-line">
        <div className="mx-auto container-max px-5 py-14 md:py-18">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <h2 className="font-serif text-3xl md:text-4xl">Programm-Highlights</h2>
              <p className="mt-4 text-slate-em leading-relaxed">Ein vollständiger Veranstaltungstag mit Keynote, Fachsessions und Austausch – praxisnah und ohne Vertriebsdruck.</p>
              <div className="mt-6 rounded-3xl border border-line bg-white p-6">
                <p className="text-sm text-slate-em">Keynote · 13:30 Uhr</p>
                <p className="mt-2 font-serif text-xl leading-snug">Die dunkle Seite der KI: Wie Hacker KI & Deepfakes nutzen</p>
                <p className="mt-3 text-sm text-slate-em font-semibold">Mark T. Hofmann</p>
                <p className="text-sm text-slate-em">Kriminal- und Geheimdienstanalyst</p>
              </div>
              <div className="mt-4 rounded-3xl border border-line bg-white p-5">
                <p className="text-sm text-slate-em">Zeitrahmen</p>
                <p className="mt-1 font-semibold">08:30 – 17:00 Uhr</p>
                <p className="mt-1 text-sm text-slate-em">Kurhaus Wiesbaden, Kurhausplatz 1</p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-3xl border border-line bg-white p-5">
                  <h3 className="font-semibold">Sicherheitsstrategie & Compliance</h3>
                  <p className="mt-2 text-sm text-slate-em">NIS2-Anforderungen einordnen und in eine tragfähige Sicherheitsstrategie überführen.</p>
                </div>
                <div className="rounded-3xl border border-line bg-white p-5">
                  <h3 className="font-semibold">E-Mail-Security & Datenschutz</h3>
                  <p className="mt-2 text-sm text-slate-em">Praxisnahe Ansätze zum Schutz von Kommunikation und sensiblen Daten im Alltag.</p>
                </div>
                <div className="rounded-3xl border border-line bg-white p-5">
                  <h3 className="font-semibold">Zero Trust & SASE</h3>
                  <p className="mt-2 text-sm text-slate-em">Netzwerkzugriffe modern absichern – auch für verteilte Teams und Cloud-Umgebungen.</p>
                </div>
                <div className="rounded-3xl border border-line bg-white p-5">
                  <h3 className="font-semibold">Netzwerksegmentierung & NAC</h3>
                  <p className="mt-2 text-sm text-slate-em">Geräte und Netzwerke strukturiert absichern – ein unterschätzter, aber wirksamer Schutzmechanismus.</p>
                </div>
                <div className="rounded-3xl border border-line bg-white p-5">
                  <h3 className="font-semibold">Cyber-Risikomanagement</h3>
                  <p className="mt-2 text-sm text-slate-em">Risiken realistisch einschätzen und priorisieren – statt pauschaler Angst oder falscher Sicherheit.</p>
                </div>
                <div className="rounded-3xl border border-line bg-white p-5">
                  <h3 className="font-semibold">IT-Dokumentation & ISMS</h3>
                  <p className="mt-2 text-sm text-slate-em">Nachvollziehbarkeit als Grundlage für Compliance – Dokumentation als strategisches Werkzeug.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Einordnung ITE */}
      <section className="bg-white border-t border-line">
        <div className="mx-auto container-max px-5 py-14 md:py-18">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7">
              <h2 className="font-serif text-3xl md:text-4xl">Warum wir diesen Tag empfehlen</h2>
              <p className="mt-4 text-slate-em text-lg leading-relaxed">Sicherheit und Automatisierung hängen enger zusammen, als viele vermuten. Wer sichere digitale Prozesse will, braucht Klarheit über Zugriffe, Verantwortlichkeiten und Datenflüsse. Genau das ist auch die Grundlage für belastbare Automatisierung.</p>
              <p className="mt-4 text-slate-em leading-relaxed">Der SECURE//DAY liefert die strategische Einordnung – von NIS2 über konkrete Schutzmaßnahmen bis hin zur Frage, wie Sicherheit im Unternehmensalltag tatsächlich verankert wird. Das sind keine abstrakten Themen, sondern Voraussetzungen für stabile, vertrauenswürdige Digitalisierung.</p>
              <div className="mt-8 rounded-3xl bg-mist border border-line p-7">
                <h3 className="font-semibold text-lg">Passend dazu auf dieser Website</h3>
                <ul className="mt-3 space-y-2 text-slate-em">
                  <li className="flex gap-2"><span className="text-[#1D4ED8] font-bold" aria-hidden="true">→</span><a href="/netplans-podcast/" className="hover:underline">Sind unsere Daten in der Cloud sicher? – Podcast-Einordnung</a></li>
                  <li className="flex gap-2"><span className="text-[#1D4ED8] font-bold" aria-hidden="true">→</span><a href="/emma/" className="hover:underline">EMMA: Automatisierung auf Basis sauberer Prozesse</a></li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
                <h3 className="font-serif text-2xl">Für wen besonders relevant</h3>
                <ul className="mt-4 space-y-3 text-slate-em">
                  <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold shrink-0" aria-hidden="true">✓</span><span>Geschäftsführer, die NIS2 einordnen und ihre Haftung verstehen wollen</span></li>
                  <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold shrink-0" aria-hidden="true">✓</span><span>IT-Leiter, die Sicherheitsarchitektur und Compliance zusammendenken</span></li>
                  <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold shrink-0" aria-hidden="true">✓</span><span>Verantwortliche, die digitale Prozesse sicher und nachvollziehbar gestalten wollen</span></li>
                  <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold shrink-0" aria-hidden="true">✓</span><span>Unternehmen im Rhein-Main-Gebiet, die sich vernetzen und austauschen wollen</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink text-white">
        <div className="mx-auto container-max px-5 py-14">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl md:text-4xl">15. April 2026 · Kurhaus Wiesbaden</h2>
              <p className="mt-3 text-white/80 text-lg leading-relaxed">Kostenlos, praxisnah, ohne Vertriebsdruck. Ein guter Tag, um NIS2 und Cyber-Resilienz endlich greifbar zu machen.</p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a href={EVENT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full md:w-auto items-center justify-center rounded-xl bg-white text-ink px-7 py-3 font-semibold hover:opacity-95">Kostenlos anmelden</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
