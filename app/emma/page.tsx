import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'EMMA – KI-gestützte Automatisierung für KMU & Verwaltung',
  description:
    'Kostenfreier WebCast: Wie EMMA (WIANCO) Routinen übernimmt und Ihr Team entlastet. Praxisnahe Automatisierung für KMU und öffentliche Verwaltungen.',
}

const NETPLANS_URL =
  'https://www.netplans.de/veranstaltungen/emma-im-einsatz-12-08-26/'

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
                      <p className="text-sm text-slate-em">Nächster NetPlans WebCast</p>
                      <p className="mt-1 text-lg font-semibold text-ink leading-tight">12. August 2026 · 10:00 Uhr</p>
                      <p className="mt-1 text-base sm:text-lg font-semibold text-slate-em leading-snug">EMMA live: So sparen Unternehmen Zeit mit smarter Automatisierung</p>
                      <p className="mt-1 text-sm text-slate-em">Online · kostenfrei · ca. 60 Minuten</p>
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
                Kognitive KI für <strong>öffentliche Verwaltungen</strong> und <strong>KMU</strong>: EMMA übernimmt Routinen verlässlich – und schafft Raum für Arbeit, die wirklich zählt.
              </p>
              <div className="mt-8">
                <a href={NETPLANS_URL} className="inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] text-white px-6 py-3 font-semibold shadow-soft hover:opacity-95">Jetzt kostenfrei anmelden</a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl border border-line bg-white shadow-soft p-6 md:p-7">
                <div className="relative w-full h-44 rounded-2xl border border-line overflow-hidden">
                  <Image src="/emma/img/hero-tech.webp" alt="Digitale Automatisierung: Struktur, Klarheit und Tempo" fill className="object-cover" priority />
                </div>
                <h2 className="mt-5 font-serif text-2xl">Was Sie im WebCast mitnehmen</h2>
                <ul className="mt-4 space-y-3 text-slate-em">
                  <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold" aria-hidden="true">✓</span><span>Wie EMMA kognitive Aufgaben und Routineprozesse stabil abarbeitet.</span></li>
                  <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold" aria-hidden="true">✓</span><span>Welche Prozesse sich in Verwaltung und KMU besonders schnell lohnen.</span></li>
                  <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold" aria-hidden="true">✓</span><span>Welche Stolpersteine es gibt und wie man sie pragmatisch vermeidet.</span></li>
                  <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold" aria-hidden="true">✓</span><span>Wie aus Automatisierung echte Entlastung wird: messbar, protokolliert, nachvollziehbar.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white border-t border-line">
        <div className="mx-auto container-max px-5 py-10 md:py-12">
          <p className="text-sm text-slate-em text-center mb-8">Was EMMA in der Praxis erreicht — Quelle: WIANCO Best-Practice-Beispiele</p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-line bg-mist p-6">
              <p className="text-4xl font-serif font-semibold text-ink">20 Std.</p>
              <p className="mt-1 text-sm font-semibold text-[#1D4ED8]">pro Woche eingespart</p>
              <p className="mt-3 text-slate-em text-sm leading-relaxed">Öffentliche Verwaltung: automatisierte Schreiben-Erstellung aus Excel, Fachverfahren und Webportalen.</p>
            </div>
            <div className="rounded-2xl border border-line bg-mist p-6">
              <p className="text-4xl font-serif font-semibold text-ink">1.920 Std.</p>
              <p className="mt-1 text-sm font-semibold text-[#1D4ED8]">pro Jahr automatisiert</p>
              <p className="mt-3 text-slate-em text-sm leading-relaxed">Privater Sektor: 1.500–2.000 E-Mails täglich aus dem CRM — gesichtet, bewertet, weitergeleitet, dokumentiert.</p>
            </div>
            <div className="rounded-2xl border border-line bg-mist p-6">
              <p className="text-4xl font-serif font-semibold text-ink">ROI 320 %</p>
              <p className="mt-1 text-sm font-semibold text-[#1D4ED8]">fast 6 Monate Vollzeit</p>
              <p className="mt-3 text-slate-em text-sm leading-relaxed">E-Mail- & Dokumentenprozess im CRM: fast sechs Monate Vollzeitarbeit pro Jahr automatisiert.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section id="podcast" className="bg-mist border-t border-line">
        <div className="mx-auto container-max px-5 py-14 md:py-16">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <p className="text-sm font-semibold text-[#1D4ED8] uppercase tracking-wide">ITE Consult Podcast</p>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl leading-tight">Schluss mit digitalem Tipp-Ex – dank EMMA</h2>
              <p className="mt-4 text-slate-em text-lg leading-relaxed">
                Warum verschwindet Papier aus Büros, aber manuelle Dateneingabe bleibt? In dieser Episode sprechen wir darüber, wie EMMA wiederkehrende Aufgaben übernimmt – und was das konkret für Verwaltungen und KMU bedeutet.
              </p>
              <p className="mt-2 text-sm text-slate-em">ca. 26 Minuten · KI-generiert via NotebookLM · ITE Consult GmbH</p>
              <div className="mt-6">
                <audio controls preload="none" className="w-full rounded-xl" style={{ accentColor: '#1D4ED8' }}>
                  <source src="/emma/podcast/schluss-mit-digitalem-tipp-ex-dank-emma.m4a" type="audio/mp4" />
                  Dein Browser unterstützt kein Audio-Element.
                </audio>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
                <h3 className="font-serif text-2xl">Was du mitnimmst</h3>
                <ul className="mt-4 space-y-3 text-slate-em">
                  <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold" aria-hidden="true">✓</span><span>Warum manuelle Dateneingabe trotz Digitalisierung noch immer dominiert.</span></li>
                  <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold" aria-hidden="true">✓</span><span>Wie kognitive KI diesen Bruch schließt – ohne große IT-Projekte.</span></li>
                  <li className="flex gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] font-bold" aria-hidden="true">✓</span><span>Erste Schritte: welche Prozesse sich sofort lohnen.</span></li>
                </ul>
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
              <div className="mt-6">
                <a href="#faq" className="inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3 font-semibold hover:bg-mist">Häufige Fragen ansehen</a>
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
      <section id="emma" className="bg-mist border-t border-line">
        <div className="mx-auto container-max px-5 py-14 md:py-18">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">EMMA von WIANCO: kognitive KI, die Routinen wirklich abnimmt</h2>
            <p className="mt-4 text-slate-em text-lg leading-relaxed">EMMA ist eine kognitive KI, die wiederkehrende Tätigkeiten nicht nur automatisiert, sondern in der Praxis mitdenkt: Informationen finden, abgleichen, klassifizieren, dokumentieren und sauber protokollieren. Ziel ist nicht mehr Technik, sondern weniger Reibung im Alltag.</p>
          </div>
          <div className="mt-10">
            <div className="relative w-full h-60 md:h-72 rounded-3xl border border-line shadow-soft overflow-hidden">
              <Image src="/emma/img/emma-brain.webp" alt="Kognitive KI EMMA: Geschwindigkeit und Datenfluss" fill className="object-cover" />
            </div>
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
                <p className="mt-2 text-slate-em leading-relaxed">Weiterführend: <a href="https://www.netplans.de/podcast-folge-14-sind-unsere-daten-in-der-cloud-sicher/" className="text-[#1D4ED8] hover:underline" target="_blank" rel="noopener">Wie sicher sind Daten in der Cloud? (NetPlans Podcast)</a></p>
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
                  <a href="https://www.ite-consult.de/#kontakt" className="inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3 font-semibold hover:bg-mist">Rückfrage an ITE Consult</a>
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
