# Handwerker-Landingpage System

## Kontext
Lead-generierende Landingpage für deutsche Handwerksbetriebe. Die Branche und alle Inhalte werden ausschließlich aus `docs/BRANCHE.md` geladen. Für Seitenstruktur, Design und technische Anforderungen: siehe `docs/ANFORDERUNGEN.md`.

## Tech-Stack
- Next.js 16 (App Router, kein Pages Router)
- TypeScript (strict mode)
- Tailwind CSS 4
- shadcn/ui (alle UI-Elemente)
- Framer Motion 12 (Animationen)
- Vercel (Deployment)

## Goldene Regeln

1. **Firmendaten nie hardcoden** – alles aus `lib/config.ts` importieren
2. **shadcn/ui für ALLES** – keine eigenen Button/Card/Input Komponenten
3. **Animationen aus `lib/animations.ts`** – nie inline definieren
4. **Mobile-First** – alle Layouts von mobil nach desktop denken
5. **Click-to-Call** auf JEDER Telefonnummer (`<a href="tel:">`)
6. **Deutsche Texte**, DSGVO-konform, Du-Vermeidung (Sie-Form)
7. **Bilder via `next/image`** mit `priority` für Above-the-Fold

## Anti-Vibe-Coding Regeln (WICHTIG)

Die Seite soll sich von typischen AI-generierten Websites abheben. Folgende Dinge sind VERBOTEN:

- ❌ `rounded-2xl` oder `rounded-3xl` überall – stattdessen: `rounded-none` bis `rounded-lg`, bewusst eingesetzt
- ❌ Lila/Violet als Akzentfarbe
- ❌ Übertriebene Gradients auf Buttons oder Hintergründen
- ❌ `shadow-2xl` auf jeder Card
- ❌ Generische Hero-Bilder mit Gradient-Overlay in Lila/Blau
- ❌ Identische Card-Layouts für jede Sektion
- ❌ Poppins, Inter in Kombination mit zu viel Rounded überall
- ❌ Zu viel Spacing (nicht jede Sektion braucht `py-32`)
- ❌ Neon-Farben, Glassmorphism, übertriebene Blur-Effekte
- ❌ Emojis als Design-Element in Überschriften

Stattdessen – siehe `docs/DESIGNSYSTEM.md` für das vollständige Design-System.

## Projekt-Struktur
```
app/                          → Seiten (App Router)
  layout.tsx                  → Root Layout (Header + Footer)
  page.tsx                    → Hauptseite (Landingpage)
  leistungen/[slug]/page.tsx  → Dynamische Leistungs-Unterseiten
  kontakt/page.tsx            → Kontakt
  impressum/page.tsx          → Rechtlich
  datenschutz/page.tsx        → Rechtlich
  agb/page.tsx                → Rechtlich
  api/contact/route.ts        → Kontaktformular API
components/
  layout/                     → Header, Footer, MobileNav, EmergencyBanner
  sections/                   → HeroSection, ServicesGrid, TrustBar, etc.
  shared/                     → RevealOnScroll, AnimatedCounter, FloatingCTA
  ui/                         → shadcn/ui Komponenten
lib/
  config.ts                   → Zentrale Konfiguration (aus BRANCHE.md)
  animations.ts               → Framer Motion Presets
  services-data.ts            → Leistungsdaten
  utils.ts                    → Hilfsfunktionen
```

## Referenzen
- Branche & Inhalte: [docs/BRANCHE.md](docs/BRANCHE.md)
- Design-System: [docs/DESIGNSYSTEM.md](docs/DESIGNSYSTEM.md)
- Vollständige Spec: [docs/ANFORDERUNGEN.md](docs/ANFORDERUNGEN.md)

---

## Seitenstruktur Hauptseite (Stand 11.07.2026)

Reihenfolge und Hintergrundfarben der Sections auf `app/page.tsx`:

| # | Component | Hintergrund |
|---|---|---|
| 1 | HeroSection | `bg-white` |
| 2 | ProjectsTeaser – Unser Projekt | `bg-white` |
| 3 | ProjectsTeaser – Unsere Partner (Slider) | `bg-slate-50` |
| 4 | TrustBar | `bg-primary` |
| 5 | KITeaser | `bg-white` |
| 6 | ServicesGrid | `bg-[#eef6ff]` |
| 7 | AboutTeaser | `bg-slate-50` |
| 8 | LeadMagnet | `bg-primary` |
| 9 | Testimonials | `bg-white` *(ausgeblendet bis reviewCount > 0)* |
| 10 | ServiceArea | `bg-slate-50` |
| 11 | FaqSection | `bg-white` |
| 12 | Kontakt (inline) | `bg-slate-50` |
| 13 | CtaBanner | `bg-primary` |

---

## ProjectsTeaser (`components/sections/ProjectsTeaser.tsx`)

Enthält zwei separate `<section>`-Elemente (Fragment):

**Unser Projekt (bg-white):**
- Medizin- und RehaShop → https://medizin-rehashop.de/
- Logo: `public/medizin-rehashop-logo.png` (300×60 PNG, lokal)

**Unsere Partner – Slider (bg-slate-50):**
- NetPlans GmbH → https://www.netplans.de/ · Logo: `public/netplans-logo.svg`
- RCN Medizin- und Rehatechnik GmbH → https://rcn-medizin.de/ · Logo: `public/rcn-logo.png`
- Slider: Framer Motion, auto-advance 5s, Pfeil-Buttons + Dots

---

## Konfiguration / Bekannte Fixes (Stand 11.07.2026)

- `radiusKm` aus `lib/config.ts` **entfernt** (war 0, ServiceArea zeigt jetzt `serviceRadius` = "deutschlandweit")
- `Testimonials` rendert `null` wenn `socialProof.reviewCount === 0` (verhindert "5 Sterne / 0 Bewertungen")
- `KITeaser`: Link auf `/netplans-podcast/` → direkt auf `https://www.netplans.de/podcast-folge-14-sind-unsere-daten-in-der-cloud-sicher/`
- `next.config.ts`: 301-Redirect `/netplans-podcast/:path*` → NetPlans Podcast-URL
- Footer: Spalte "Projekte" mit Link auf medizin-rehashop.de (über "Rechtliches")
- Header/Footer: ITE-Dopplung behoben (hardcoded "Consult GmbH" statt `siteConfig.company.name`)

---

## Farbtöne (für Abstimmung mit Partnerprojekten)

| Verwendung | Tailwind | Hex |
|---|---|---|
| Heller Seitenhintergrund | `bg-slate-50` | `#f8fafc` |
| Weißer Hintergrund | `bg-white` | `#ffffff` |
| Trennlinien | `border-slate-200` | `#e2e8f0` |
| Primärblau | `bg-primary` | `#2563eb` |
| EMMA-Hintergrund | `bg-mist` | `#F6F7FB` |
| EMMA-Trennlinie | `border-line` | `#E6E8EF` |
| EMMA-Dunkel | `bg-ink` | `#0B1220` |

---

## EMMA-Podcast (`app/emma/page.tsx` · Abschnitt „Podcast")

Audiodatei: `public/emma/podcast/schluss-mit-digitalem-tipp-ex-dank-emma.m4a`

Beim Austausch der Audiodatei immer auch die Laufzeitangabe in `app/emma/page.tsx` aktualisieren (Zeile mit „ca. X Minuten · KI-generiert via NotebookLM · ITE Consult GmbH").

**Stand 12.07.2026:** Neue Kurzfassung eingespielt · ca. 15 Minuten · Dateiname unverändert (kein Code-Change nötig)

---

## WebCast-Terminpflege (NetPlans / EMMA)

**Dieses Repo ist die einzige Live-Quelle für www.ite-consult.de/emma.**
`emma-webcast-landingpage` (statisches HTML) ist ein veralteter Prototyp — dort nichts mehr pflegen.

Bei jedem neuen Termin diese Dateien aktualisieren:

| Datei | Was ändern |
|---|---|
| `app/emma/page.tsx` | `NETPLANS_URL` + Hero-Card (Datum) |
| `app/emma/termine/page.tsx` | `NETPLANS_URL` + `eventJsonLd` (startDate, endDate, location url) + Termin-Block (Datum, Titel) |

**Aktueller Termin (Stand 11.07.2026):**
- Datum: Mittwoch, 12.08.2026 · 10:00–11:00 Uhr
- Titel: NetPlans Webcast | EMMA live: So sparen Unternehmen Zeit mit smarter Automatisierung
- URL: https://www.netplans.de/veranstaltungen/emma-im-einsatz-12-08-26/

**Vergangene Events:** Seite + Sitemap-Eintrag + alle Links vollständig entfernen.
