import type { Metadata } from 'next'
import CopyEmailButton from './_CopyEmailButton'

export const metadata: Metadata = {
  title: 'EMMA – KI-gestützte Automatisierung für KMU & Verwaltung',
  description:
    'Kostenfreier WebCast: Wie EMMA (WIANCO) Routinen übernimmt und Ihr Team entlastet. Praxisnahe Automatisierung für KMU und öffentliche Verwaltungen.',
}

const NETPLANS_URL =
  'https://www.netplans.de/veranstaltungen/netplans-webcast-emma-im-einsatz-22-04-2026/'

export default function EmmaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 noise" aria-hidden="true"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-70" aria-hidden="true"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-slate-100 blur-3xl opacity-80" aria-hidden="true"></div>
        <div className="relative mx-auto container-max px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="rounded-3xl border border-line bg-white shadow-soft p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-9 h-9 rounded-2xl bg-[#1D4ED8] text-white flex items-center justify-center font-bold" aria-hidden="true">WC</div>
                    <div>
                      <p className="text-lg sm:text-4xl font-semibold text-ink leading-tight">NetPlans WebCast (alle 6 Wochen)</p>
                      <p className="mt-1 text-base sm:text-lg font-semibold text-slate-em leading-snug">EMMA (WIANCO) live im Einsatz: Routinen raus, Zeit fürs Wesentliche</p>
                      <p className="mt-1 text-sm text-slate-em">Kostenfrei teilnehmen · Praxisbeispiele für KMU & öffentliche Verwaltungen</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <a href="/emma/termine/" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm font-semibold text-ink hover:bg-mist">
                          <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" aria-hidden="true"></span>
                          Termine ansehen
                        </a>
                        <a href="/emma/use-cases/" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm font-semibold text-ink hover:bg-mist">
                          <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" aria-hidden="true"></span>
                          Use Cases ansehen
                        </a>
                      </div>
                    </div>
                  </div>
                  <a href={NETPLANS_URL} className="inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] text-white px-5 py-3 font-semibold shadow-soft hover:opacity-95">WebCast-Platz sichern</a>
                </div>
              </div>
              <h1 className="mt-5 font-serif text-4xl md:text-5xl leading-tight">
                Zeit für das Wesentliche.
                <span className="block text-slate-em">Freiheit durch Automatisierung mit EMMA.</span>
              </h1>
              <p className="mt-4 text-base md:text-lg text-slate-em leading-relaxed">
                <strong>RPA und kognitive KI</strong> für <strong>öffentliche Verwaltungen</strong> und <strong>KMU</strong>: Routinen automatisieren, Fehler reduzieren, Durchlaufzeiten verkürzen – und Zeit für das Wesentliche gewinnen.
              </p>
              <p className="mt-5 text-lg text-slate-em leading-relaxed">
                Repetitive Aufgaben binden Energie, Aufmerksamkeit und Motivation. EMMA übernimmt Routinen verlässlich und schafft Raum für Arbeit, die Sinn stiftet: für bessere Entscheidungen, echte Kommunikation und spürbare Wirkung.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={NETPLANS_URL} className="inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] text-white px-6 py-3 font-semibold shadow-soft hover:opacity-95">Jetzt kostenfrei anmelden</a>
                <a href="#emma" className="inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3 font-semibold hover:bg-mist">Erst verstehen, dann starten</a>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-2xl border border-line bg-white p-4"><p className="text-sm text-slate-em">Nutzen</p><p className="mt-1 font-semibold">Entlastung im Alltag</p></div>
                <div className="rounded-2xl border border-line bg-white p-4"><p className="text-sm text-slate-em">Wirkung</p><p className="mt-1 font-semibold">Weniger Fehler, mehr Kontrolle</p></div>
                <div className="rounded-2xl border border-line bg-white p-4"><p className="text-sm text-slate-em">Ergebnis</p><p className="mt-1 font-semibold">Zeitgewinn fürs Wesentliche</p></div>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl border border-line bg-white shadow-soft p-6 md:p-7">
                <img src="/emma/img/hero-tech.webp" alt="Digitale Automatisierung: Struktur, Klarheit und Tempo" className="w-full h-44 object-cover rounded-2xl border border-line" loading="eager" decoding="async" />
                <h2 className="mt-5 font-serif text-2xl">Was Sie im WebCast mitnehmen</h2>
                <ul className="mt-4 space-y-3 text-slate-em">
                  <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold" aria-hidden="true">✓</span><span>Wie EMMA kognitive Aufgaben und Routineprozesse stabil abarbeitet.</span></li>
                  <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold" aria-hidden="true">✓</span><span>Welche Prozesse sich in Verwaltung und KMU besonders schnell lohnen.</span></li>
                  <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold" aria-hidden="true">✓</span><span>Welche Stolpersteine es gibt und wie man sie pragmatisch vermeidet.</span></li>
                  <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold" aria-hidden="true">✓</span><span>Wie aus Automatisierung echte Entlastung wird: messbar, protokolliert, nachvollziehbar.</span></li>
                </ul>
                <div className="mt-6 rounded-2xl bg-mist p-4 border border-line">
                  <p className="text-sm text-slate-em">Anmeldung</p>
                  <p className="mt-1 font-semibold">Kostenfrei, in wenigen Klicks</p>
                  <a href={NETPLANS_URL} className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-ink text-white px-5 py-3 font-semibold hover:opacity-95">Zum NetPlans Formular</a>
                  <p className="mt-3 text-xs text-slate-em">Hinweis: Link führt direkt zum NetPlans-Anmeldeformular.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impuls */}
      <section id="impuls" className="bg-white border-t border-line">
        <div className="mx-auto container-max px-5 py-14 md:py-18">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7">
              <h2 className="font-serif text-3xl md:text-4xl">Smarte Automatisierung im Mittelstand</h2>
              <p className="mt-4 text-slate-em text-lg leading-relaxed">Ein kurzer Impuls aus unserem letzten NetPlans Business Breakfast – zugeschnitten auf <strong>KMU</strong> und den <strong>Mittelstand</strong>. Konkret geht es um <strong>Automatisierung im Alltag</strong>: weniger manuelles Nacharbeiten im <strong>Backoffice</strong>, weniger Fehler – und mehr Zeit für Kunden, Team und Kerngeschäft.</p>
              <div className="mt-6 rounded-3xl border border-line bg-mist p-7">
                <p className="text-sm text-slate-em">Anekdote (Kurzfassung)</p>
                <p className="mt-2 font-semibold">Der Schreinermeister – und der Sonntagvormittag</p>
                <p className="mt-3 text-slate-em leading-relaxed">Ein Handwerksbetrieb, ein teurer PC als Staubfänger – und Rechnungen, die jeden Sonntagmorgen per Hand entstanden. Der Durchbruch war nicht „Technik", sondern ein einfacher Knopf: Monatsbericht auf Knopfdruck. Ergebnis: <strong>Sonntag zurück.</strong></p>
              </div>
              <h3 className="mt-8 font-semibold text-lg">Was KMU und öffentliche Verwaltungen heute bremst</h3>
              <ul className="mt-3 space-y-2 text-slate-em">
                <li className="flex gap-2"><span className="text-[#1D4ED8] font-bold" aria-hidden="true">•</span><span>Repetitive Aufgaben im Backoffice: Kopieren, Abtippen, Sortieren – jeden Tag.</span></li>
                <li className="flex gap-2"><span className="text-[#1D4ED8] font-bold" aria-hidden="true">•</span><span>Fachkräftemangel: Die wertvollen Köpfe stecken in Routine fest.</span></li>
                <li className="flex gap-2"><span className="text-[#1D4ED8] font-bold" aria-hidden="true">•</span><span>IT‑Silos: Systeme sprechen nicht miteinander – Medienbrüche kosten Zeit (KMU & Verwaltung).</span></li>
                <li className="flex gap-2"><span className="text-[#1D4ED8] font-bold" aria-hidden="true">•</span><span>Angst vor Großprojekten: hohe Budgets, lange Laufzeiten, dicke Lastenhefte.</span></li>
              </ul>
              <h3 className="mt-8 font-semibold text-lg">Unser Prinzip</h3>
              <p className="mt-3 text-slate-em leading-relaxed"><strong>Erst verstehen – dann automatisieren.</strong> Wir starten pragmatisch: Prozess ansehen, Engpass finden, Prototyp bauen. In vielen Fällen sind in <strong>wenigen Tagen</strong> erste, funktionierende Entlastungen möglich.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#faq" className="inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3 font-semibold hover:bg-mist">Häufige Fragen ansehen</a>
                <a href={NETPLANS_URL} className="inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] text-white px-6 py-3 font-semibold shadow-soft hover:opacity-95">WebCast-Platz sichern</a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
                <p className="text-sm text-slate-em">Mehrwert (konkret)</p>
                <h3 className="mt-1 font-serif text-2xl">Klarheit. 24/7. Fokus. Zeit.</h3>
                <ul className="mt-4 space-y-2 text-slate-em">
                  <li className="flex gap-2"><span className="text-[#1D4ED8] font-bold" aria-hidden="true">•</span><span>Transparenz statt Bauchgefühl</span></li>
                  <li className="flex gap-2"><span className="text-[#1D4ED8] font-bold" aria-hidden="true">•</span><span>Automatisierung macht keine Pause</span></li>
                  <li className="flex gap-2"><span className="text-[#1D4ED8] font-bold" aria-hidden="true">•</span><span>Kopf frei fürs Kerngeschäft</span></li>
                  <li className="flex gap-2"><span className="text-[#1D4ED8] font-bold" aria-hidden="true">•</span><span>Ergebnisse auf Knopfdruck</span></li>
                </ul>
                <div className="mt-6 rounded-2xl bg-mist p-5 border border-line">
                  <p className="text-sm text-slate-em">Passend für KMU</p>
                  <p className="mt-1 font-semibold">Smarte Automatisierung „oben drauf" – ohne jahrelange IT‑Projekte.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMMA */}
      <section id="emma" className="bg-white">
        <div className="mx-auto container-max px-5 py-14 md:py-18">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">EMMA von WIANCO: kognitive KI, die Routinen wirklich abnimmt</h2>
            <p className="mt-4 text-slate-em text-lg leading-relaxed">EMMA ist eine kognitive KI, die wiederkehrende Tätigkeiten nicht nur automatisiert, sondern in der Praxis mitdenkt: Informationen finden, abgleichen, klassifizieren, dokumentieren und sauber protokollieren. Ziel ist nicht mehr Technik, sondern weniger Reibung im Alltag.</p>
          </div>
          <div className="mt-10">
            <img src="/emma/img/emma-brain.webp" alt="Kognitive KI EMMA: Geschwindigkeit und Datenfluss" className="w-full h-60 md:h-72 object-cover rounded-3xl border border-line shadow-soft" loading="lazy" decoding="async" />
            <p className="mt-3 text-xs text-slate-em">Hinweis: Visualisierung (KI-generiert) zur Veranschaulichung von Datenfluss und Automatisierung.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-line bg-mist p-6"><h3 className="font-semibold text-lg">Entlastung</h3><p className="mt-2 text-slate-em leading-relaxed">EMMA übernimmt Routinearbeit. Ihr Team gewinnt Fokus zurück: für Vorgänge, die Menschen brauchen.</p></div>
            <div className="rounded-3xl border border-line bg-mist p-6"><h3 className="font-semibold text-lg">Stabilität</h3><p className="mt-2 text-slate-em leading-relaxed">Weniger Medienbrüche, weniger Ausnahmen. Prozesse laufen konsistenter, auch bei hoher Last.</p></div>
            <div className="rounded-3xl border border-line bg-mist p-6"><h3 className="font-semibold text-lg">Nachvollziehbarkeit</h3><p className="mt-2 text-slate-em leading-relaxed">Protokolle, Status und Ergebnisse sind transparent. Das schafft Kontrolle und reduziert Rückfragen.</p></div>
          </div>
          <div className="mt-10 rounded-3xl border border-line bg-white p-7 shadow-soft">
            <div className="grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-7">
                <h3 className="font-serif text-2xl">Für wen ist das besonders spannend?</h3>
                <p className="mt-3 text-slate-em leading-relaxed">Für öffentliche Verwaltungen und KMU, die viele gleichartige Vorgänge bearbeiten: Daten aufnehmen, prüfen, abgleichen, Dokumente erzeugen, Status nachhalten, Fristen im Blick behalten.</p>
                <ul className="mt-4 space-y-2 text-slate-em">
                  <li className="flex gap-2"><span className="text-[#1D4ED8] font-bold" aria-hidden="true">•</span><span>Backoffice-Prozesse mit vielen Wiederholungen</span></li>
                  <li className="flex gap-2"><span className="text-[#1D4ED8] font-bold" aria-hidden="true">•</span><span>Vorgänge mit klaren Regeln und hohem Dokumentationsanteil</span></li>
                  <li className="flex gap-2"><span className="text-[#1D4ED8] font-bold" aria-hidden="true">•</span><span>Teams, die Zeit zurückgewinnen wollen, ohne Qualität zu verlieren</span></li>
                </ul>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-2xl bg-mist border border-line p-5">
                  <p className="text-sm text-slate-em">Spiritueller Impuls</p>
                  <p className="mt-2 font-serif text-xl leading-snug">„Routine abgeben heißt nicht Kontrolle verlieren. Es heißt, Vertrauen in gute Prozesse zu gewinnen – und den Menschen wieder Raum zu geben."</p>
                  <p className="mt-3 text-sm text-slate-em">Genau darum drehen sich die WebCasts: weniger Ballast, mehr Wirkung.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white border-t border-line">
        <div className="mx-auto container-max px-5 py-14 md:py-18">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl">FAQ: EMMA, WebCast und Einstieg</h2>
            <p className="mt-4 text-slate-em text-lg leading-relaxed">Die häufigsten Fragen, die wir von öffentlichen Verwaltungen und KMU hören – kurz beantwortet.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 space-y-3">
              <details className="group rounded-2xl border border-line bg-white p-5">
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between gap-4">
                  <span>Was ist EMMA (WIANCO) – und was bedeutet „kognitive KI" konkret?</span>
                  <span className="text-slate-em group-open:rotate-45 transition" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-slate-em leading-relaxed">EMMA ist eine kognitive KI, die wiederkehrende Aufgaben in Geschäftsprozessen übernimmt – z. B. Informationen erfassen, prüfen, abgleichen, klassifizieren und Ergebnisse sauber dokumentieren. Der Fokus liegt auf Entlastung, Stabilität und nachvollziehbaren Abläufen.</p>
              </details>
              <details className="group rounded-2xl border border-line bg-white p-5">
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between gap-4">
                  <span>Für welche Prozesse in Verwaltung und KMU lohnt sich ein Einstieg besonders?</span>
                  <span className="text-slate-em group-open:rotate-45 transition" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-slate-em leading-relaxed">Überall dort, wo viele ähnliche Vorgänge anfallen: Posteingang/E-Mail-Routing, Datenübernahmen, Prüfungen/Abgleiche, Dokumentenerstellung, Status- und Fristenpflege sowie wiederkehrende Backoffice-Aufgaben.</p>
              </details>
              <details className="group rounded-2xl border border-line bg-white p-5">
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between gap-4">
                  <span>Wie läuft der NetPlans WebCast ab und was ist der schnellste nächste Schritt?</span>
                  <span className="text-slate-em group-open:rotate-45 transition" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-slate-em leading-relaxed">Der WebCast ist kompakt, praxisnah und zeigt typische Prozessmuster. Der schnellste nächste Schritt ist die kostenfreie Anmeldung. Danach kannst du mit einer kurzen Prozessliste (Top 5 Routinen) prüfen, ob EMMA bei euch den größten Hebel hat.</p>
              </details>
              <details className="group rounded-2xl border border-line bg-white p-5">
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between gap-4">
                  <span>Was kostet der WebCast und gibt es eine Verpflichtung?</span>
                  <span className="text-slate-em group-open:rotate-45 transition" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-slate-em leading-relaxed">Die Teilnahme am WebCast ist kostenfrei. Es gibt keine Verpflichtung – du bekommst Klarheit, ob und wie ein Einstieg sinnvoll ist.</p>
              </details>
              <details className="group rounded-2xl border border-line bg-white p-5">
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between gap-4">
                  <span>Wie werden Ergebnisse protokolliert und wie bleibt die Kontrolle erhalten?</span>
                  <span className="text-slate-em group-open:rotate-45 transition" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-slate-em leading-relaxed">Ein guter Automatisierungsansatz arbeitet nachvollziehbar: mit Status, Protokollen und klaren Ergebnissen je Vorgang. Genau darauf ist die Umsetzung ausgerichtet – weniger Rückfragen, mehr Transparenz.</p>
              </details>
              <details className="group rounded-2xl border border-line bg-white p-5">
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between gap-4">
                  <span>Wie starte ich, wenn ich Datenschutz und IT-Sicherheit sauber halten will?</span>
                  <span className="text-slate-em group-open:rotate-45 transition" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-slate-em leading-relaxed">Starte mit dem WebCast und einem klaren Prozess-Scope. Danach prüfen wir gemeinsam Datenflüsse, Zugriffsrechte, Protokollierung und die passende Systemarchitektur – pragmatisch und umsetzbar.</p>
                <p className="mt-2 text-slate-em leading-relaxed">Weiterführend: <a href="/netplans-podcast/" className="text-[#1D4ED8] hover:underline">Wie sicher sind Daten in der Cloud?</a></p>
              </details>
              <details className="group rounded-2xl border border-line bg-white p-5">
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between gap-4">
                  <span>Was ist ein typischer Einstieg in die Automatisierung im Mittelstand (ohne Großprojekt)?</span>
                  <span className="text-slate-em group-open:rotate-45 transition" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-slate-em leading-relaxed">Wir starten mit 1–2 klaren Backoffice-Prozessen (z. B. Posteingang, Abgleiche, Dokumentenerstellung), die oft vorkommen und messbar sind. Ziel ist ein kleiner, stabiler Prototyp – damit Nutzen, Aufwand und Risiko früh transparent werden.</p>
              </details>
            </div>
            <div className="md:col-span-4">
              <div className="rounded-3xl border border-line bg-mist p-6">
                <p className="text-sm text-slate-em">Schnellstart</p>
                <p className="mt-1 font-semibold">WebCast ansehen → Top 5 Routinen sammeln → nächsten Schritt planen</p>
                <a href={NETPLANS_URL} className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#1D4ED8] text-white px-6 py-3 font-semibold shadow-soft hover:opacity-95">Kostenfrei anmelden</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WebCast */}
      <section id="webcast" className="bg-mist border-t border-line">
        <div className="mx-auto container-max px-5 py-14 md:py-18">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7">
              <h2 className="font-serif text-3xl md:text-4xl">NetPlans WebCast: alle 6 Wochen. Praxisnah. Klar.</h2>
              <p className="mt-4 text-slate-em text-lg leading-relaxed">In den regelmäßigen WebCasts zeigt NetPlans, wie EMMA in realen Abläufen eingesetzt wird. Keine Show, sondern Substanz: typische Prozessmuster, konkrete Beispiele, echte Learnings.</p>
              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <div className="rounded-3xl border border-line bg-white p-6"><p className="text-sm text-slate-em">Format</p><p className="mt-1 font-semibold">Kurz, fokussiert, mit Q&A</p><p className="mt-2 text-slate-em">Ideal, wenn Sie schnell prüfen wollen, ob EMMA zu Ihren Abläufen passt.</p></div>
                <div className="rounded-3xl border border-line bg-white p-6"><p className="text-sm text-slate-em">Ergebnis</p><p className="mt-1 font-semibold">Klarheit statt Bauchgefühl</p><p className="mt-2 text-slate-em">Sie wissen danach, welche Schritte sinnvoll sind und welche nicht.</p></div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={NETPLANS_URL} className="inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] text-white px-6 py-3 font-semibold shadow-soft hover:opacity-95">WebCast-Platz sichern</a>
                <a href="#warum" className="inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3 font-semibold hover:bg-white/60">Warum ITE Consult das empfiehlt</a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
                <h3 className="font-serif text-2xl">Schneller Check: passt das zu uns?</h3>
                <div className="mt-4 space-y-3">
                  <label className="flex items-start gap-3"><input type="checkbox" defaultChecked={false} className="mt-1 h-5 w-5 rounded border-line text-[#1D4ED8] focus:ring-2 focus:ring-blue-200" /><span className="text-slate-em">Wir haben wiederkehrende Vorgänge mit klaren Regeln.</span></label>
                  <label className="flex items-start gap-3"><input type="checkbox" defaultChecked={false} className="mt-1 h-5 w-5 rounded border-line text-[#1D4ED8] focus:ring-2 focus:ring-blue-200" /><span className="text-slate-em">Dokumentation/Protokollierung ist wichtig (intern oder extern).</span></label>
                  <label className="flex items-start gap-3"><input type="checkbox" defaultChecked={false} className="mt-1 h-5 w-5 rounded border-line text-[#1D4ED8] focus:ring-2 focus:ring-blue-200" /><span className="text-slate-em">Wir wollen Rückfragen, Fehler und Durchlaufzeiten reduzieren.</span></label>
                  <label className="flex items-start gap-3"><input type="checkbox" defaultChecked={false} className="mt-1 h-5 w-5 rounded border-line text-[#1D4ED8] focus:ring-2 focus:ring-blue-200" /><span className="text-slate-em">Unser Team braucht Entlastung, damit Qualität wieder Freude macht.</span></label>
                </div>
                <div className="mt-6 rounded-2xl bg-mist p-5 border border-line">
                  <p className="text-sm text-slate-em">Wenn Sie hier mehrfach nicken:</p>
                  <p className="mt-1 font-semibold">Dann ist der WebCast der beste erste Schritt.</p>
                  <a href={NETPLANS_URL} className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-ink text-white px-5 py-3 font-semibold hover:opacity-95">Kostenfrei anmelden</a>
                </div>
                <p className="mt-4 text-xs text-slate-em">Tipp: Speichern Sie diese Seite als internes Briefing, damit Fachbereich und IT gleich sprechen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warum */}
      <section id="warum" className="bg-white border-t border-line">
        <div className="mx-auto container-max px-5 py-14 md:py-18">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7">
              <h2 className="font-serif text-3xl md:text-4xl">Warum wir das tun</h2>
              <p className="mt-4 text-slate-em text-lg leading-relaxed">Wir sehen jeden Tag, was Routinearbeit anrichtet: Zeitdruck, Fehler, Frust, Stillstand. Und wir sehen, was passiert, wenn die Routine zuverlässig wegfällt: Menschen atmen auf.</p>
              <p className="mt-4 text-slate-em text-lg leading-relaxed">Darum empfehlen wir EMMA aus Überzeugung: nicht als Trend, sondern als Werkzeug zur Befreiung. Damit Mitarbeiter wieder dort wirken, wo es zählt: im Gespräch, in der Lösung, in der Verantwortung.</p>
              <div className="mt-8 rounded-3xl bg-mist border border-line p-7">
                <h3 className="font-semibold text-lg">Unser Anspruch</h3>
                <ul className="mt-3 space-y-2 text-slate-em">
                  <li className="flex gap-2"><span className="text-[#1D4ED8] font-bold" aria-hidden="true">•</span><span>Automatisierung muss entlasten, nicht verwirren.</span></li>
                  <li className="flex gap-2"><span className="text-[#1D4ED8] font-bold" aria-hidden="true">•</span><span>Prozesse müssen stabil laufen und nachvollziehbar bleiben.</span></li>
                  <li className="flex gap-2"><span className="text-[#1D4ED8] font-bold" aria-hidden="true">•</span><span>Der Nutzen muss messbar sein: Durchlaufzeit, Fehlerquote, Transparenz.</span></li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
                <h3 className="font-serif text-2xl">Nächster Schritt</h3>
                <p className="mt-3 text-slate-em leading-relaxed">Starten Sie klein: Erst den WebCast ansehen, dann die passenden Prozesse identifizieren. Wenn Sie möchten, begleiten wir Sie bei Bewertung, Pilot und sauberer Umsetzung.</p>
                <div className="mt-6 flex flex-col gap-3">
                  <a href={NETPLANS_URL} className="inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] text-white px-6 py-3 font-semibold shadow-soft hover:opacity-95">Jetzt zum WebCast anmelden</a>
                  <a href="mailto:michael.dieterich@ite-consult.de?subject=R%C3%BCckfrage%20zum%20NetPlans%20WebCast%20EMMA&body=Hallo%20Herr%20Dieterich%2C%0D%0A%0D%0Aich%20habe%20eine%20kurze%20R%C3%BCckfrage%20zum%20WebCast%20%2F%20EMMA%3A%0D%0A%0D%0A%5BMeine%20Frage%5D%0D%0A%0D%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen%0D%0A%5BName%5D" className="inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3 font-semibold hover:bg-mist">Rückfrage an ITE Consult</a>
                  <CopyEmailButton />
                </div>
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
              <h2 className="font-serif text-3xl md:text-4xl">Geben Sie Routine ab. Gewinnen Sie Wirkung zurück.</h2>
              <p className="mt-3 text-white/80 text-lg leading-relaxed">Der WebCast ist der beste Einstieg: kostenfrei, konkret und ohne Verpflichtung. Wenn es passt, gehen Sie den nächsten Schritt mit Klarheit statt Bauchgefühl.</p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a href={NETPLANS_URL} className="inline-flex w-full md:w-auto items-center justify-center rounded-xl bg-white text-ink px-7 py-3 font-semibold hover:opacity-95">WebCast-Platz sichern</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
