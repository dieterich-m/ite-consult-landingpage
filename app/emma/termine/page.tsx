import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WebCast-Termine: EMMA (WIANCO) live',
  description:
    'Aktuelle WebCast-Termine rund um EMMA (WIANCO) mit NetPlans. Kostenfrei anmelden.',
}

const NETPLANS_URL =
  'https://www.netplans.de/veranstaltungen/netplans-webcast-emma-im-einsatz-22-04-2026/'

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'NetPlans WebCast: EMMA (WIANCO) live im Einsatz',
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  startDate: '2026-04-22T10:00:00+02:00',
  endDate: '2026-04-22T11:00:00+02:00',
  location: {
    '@type': 'VirtualLocation',
    url: 'https://www.netplans.de/veranstaltungen/netplans-webcast-emma-im-einsatz-22-04-2026/',
  },
  organizer: {
    '@type': 'Organization',
    name: 'NetPlans',
    url: 'https://www.netplans.de/',
  },
  description:
    'Kostenfreier WebCast: EMMA (WIANCO) live im Einsatz. Praxisbeispiele, typische Prozessmuster, Q&A.',
}

export default function TerminePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 noise" aria-hidden="true"></div>
        <div className="relative mx-auto container-max px-5 pt-14 pb-10">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight">WebCast-Termine: EMMA (WIANCO) live</h1>
          <p className="mt-4 text-base md:text-lg text-slate-em leading-relaxed">Kostenfreie Termine, Agenda und Zielgruppe – kompakt. Ideal, wenn Sie vorab Klarheit wollen.</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href={NETPLANS_URL} className="inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] text-white px-6 py-3 font-semibold shadow-soft hover:opacity-95">Zum NetPlans Formular</a>
            <a href="#agenda" className="inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3 font-semibold hover:bg-mist">Agenda</a>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-line">
        <div className="mx-auto container-max px-5 py-12">
          <div className="rounded-3xl border border-line bg-white shadow-soft p-7">
            <p className="text-sm text-slate-em">Nächster Termin</p>
            <h2 className="mt-2 font-serif text-3xl">22. April 2026 · EMMA live im Einsatz</h2>
            <p className="mt-3 text-slate-em leading-relaxed">Praxisbeispiele, typische Prozessmuster, Q&A. Für KMU und öffentliche Verwaltungen.</p>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-line bg-mist p-4">
                <p className="text-sm text-slate-em">Format</p>
                <p className="mt-1 font-semibold">Online · ca. 60 Minuten</p>
              </div>
              <div className="rounded-2xl border border-line bg-mist p-4">
                <p className="text-sm text-slate-em">Ziel</p>
                <p className="mt-1 font-semibold">Klarheit & erste Ideen</p>
              </div>
              <div className="rounded-2xl border border-line bg-mist p-4">
                <p className="text-sm text-slate-em">Kosten</p>
                <p className="mt-1 font-semibold">Kostenfrei</p>
              </div>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href={NETPLANS_URL} className="inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] text-white px-6 py-3 font-semibold shadow-soft hover:opacity-95">WebCast-Platz sichern</a>
              <a href="/emma/use-cases/" className="inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3 font-semibold hover:bg-mist">Use Cases ansehen</a>
            </div>

            <p className="mt-4 text-xs text-slate-em">Version: <span className="font-mono">2026-03-03.11</span></p>
          </div>
        </div>
      </section>

      <section id="agenda" className="bg-mist border-t border-line">
        <div className="mx-auto container-max px-5 py-12">
          <div className="grid md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-7">
              <h2 className="font-serif text-3xl">Agenda (Kurz)</h2>
              <ul className="mt-4 space-y-3 text-slate-em">
                <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold" aria-hidden="true">✓</span><span>Was EMMA ist – und wo sie im Alltag entlastet.</span></li>
                <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold" aria-hidden="true">✓</span><span>Beispiele aus KMU & Verwaltung: typische Prozessmuster.</span></li>
                <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold" aria-hidden="true">✓</span><span>Wie man klein startet: 1–2 Prozesse, messbarer Prototyp.</span></li>
                <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold" aria-hidden="true">✓</span><span>Q&amp;A.</span></li>
              </ul>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
                <h3 className="font-serif text-2xl">Für wen?</h3>
                <p className="mt-3 text-slate-em leading-relaxed">Für Teams, die Routinen loswerden wollen, ohne Kontrolle zu verlieren: Backoffice, Verwaltung, Sachbearbeitung, IT-nahe Bereiche.</p>
                <a href={NETPLANS_URL} className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#1D4ED8] text-white px-6 py-3 font-semibold shadow-soft hover:opacity-95">Kostenfrei anmelden</a>
                <p className="mt-3 text-xs text-slate-em">Link führt direkt zum NetPlans-Anmeldeformular.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
