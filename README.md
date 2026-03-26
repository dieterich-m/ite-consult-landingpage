# Schreinermeisterei Dieterich – Landingpage

Lead-generierende Landingpage für die Schreinermeisterei Dieterich, Tiefenbach/Hunsrück.
Gebaut auf Basis des wiederverwendbaren Handwerker-Landingpage-Systems.

---

## Tech-Stack

| Technologie | Version | Zweck |
|---|---|---|
| Next.js | ^15.1 | Framework (App Router, SSG/ISR) |
| TypeScript | ^5 | Typsicherheit |
| Tailwind CSS | ^4 | Styling |
| shadcn/ui | – | UI-Komponenten (Radix UI) |
| Framer Motion | ^12 | Animationen |
| React Hook Form + Zod | – | Kontaktformular-Validierung |
| Resend | ^6 | E-Mail-Versand (optional) |
| Vercel | – | Hosting & Deployment |

---

## Projekt-Struktur

```
app/
  layout.tsx                  → Root Layout (Header, Footer, JSON-LD)
  page.tsx                    → Hauptseite (alle Sektionen)
  leistungen/[slug]/page.tsx  → Dynamische Leistungs-Unterseiten
  kontakt/page.tsx            → Kontaktseite
  impressum/page.tsx          → Impressum (Muster, rechtlich prüfen lassen)
  datenschutz/page.tsx        → Datenschutz (Muster, rechtlich prüfen lassen)
  agb/page.tsx                → AGB (Muster, rechtlich prüfen lassen)
  api/contact/route.ts        → Kontaktformular-API
  robots.ts                   → robots.txt
  sitemap.ts                  → XML-Sitemap

components/
  layout/
    Header.tsx                → Sticky Header mit Dropdown-Navigation
    Footer.tsx                → 4-Spalten Footer
    MobileNav.tsx             → Sheet-basierte Mobile Navigation
    EmergencyBanner.tsx       → Notdienst-Banner (deaktiviert)
  sections/
    HeroSection.tsx           → Hero mit CTA-Buttons und Trust-Badges
    TrustBar.tsx              → Kennzahlen-Streifen (100 Jahre, 4 Gen., etc.)
    ServicesGrid.tsx          → Leistungsübersicht (3er-Grid)
    ServicesGridClient.tsx    → Client-Wrapper für ServicesGrid
    AboutTeaser.tsx           → Über-uns Split-Layout
    LeadMagnet.tsx            → Kontakt-Anfrage-Formular (dunkel)
    Testimonials.tsx          → Kundenbewertungen
    ServiceArea.tsx           → Einzugsgebiet mit Badge-Chips
    FaqSection.tsx            → FAQ Akkordeon
    CtaBanner.tsx             → CTA-Banner vor dem Footer
    ContactForm.tsx           → Vollständiges Kontaktformular (React Hook Form)
  shared/
    RevealOnScroll.tsx        → Framer Motion Scroll-Reveal Wrapper
    AnimatedCounter.tsx       → Hochzählender Zahlen-Counter
    FloatingCTA.tsx           → Mobiler Floating-Anruf-Button
  ui/                         → shadcn/ui Komponenten

lib/
  config.ts                   → Zentrale Konfiguration (Firmendaten, Texte, Features)
  services-data.ts            → Leistungsdaten für Grid und Unterseiten
  animations.ts               → Framer Motion Presets
  utils.ts                    → cn() Hilfsfunktion

docs/
  BRANCHE.md                  → Einzige Datei die pro Branche angepasst wird
  DESIGNSYSTEM.md             → Visuelle Sprache, Farben, Typografie
  ANFORDERUNGEN.md            → Vollständige technische Spezifikation
```

---

## Konfiguration

### Branche anpassen

**Einzige Datei:** `docs/BRANCHE.md`

Dort sind alle branchen- und firmenspezifischen Inhalte hinterlegt:
- Firmendaten, Kontakt, Öffnungszeiten
- Hero-Texte, Leistungen, FAQs
- Features (Notdienst, WhatsApp, Analytics, etc.)
- Social Proof Kennzahlen

Nach Änderungen in `BRANCHE.md` müssen `lib/config.ts` und `lib/services-data.ts` manuell synchronisiert werden.

### Farben (Schreiner-Palette)

```css
--color-primary:         #451a03   /* Dunkelbraun */
--color-primary-light:   #8b4513   /* Hover-States */
--color-primary-lighter: #fef3e2   /* Hintergründe */
--color-accent:          #d97706   /* Amber – CTAs */
--color-accent-light:    #f59e0b   /* Amber hover */
```

Definiert in `app/globals.css`.

---

## Features

| Feature | Status | Konfiguration |
|---|---|---|
| Kontaktformular | ✅ Aktiv | `features.kontakt_backend` |
| Cookie-Consent | ✅ Aktiv | `features.cookie_consent: true` |
| Bildergalerie | ✅ Aktiv | `features.galerie: true` |
| Team-Sektion | ✅ Aktiv | `features.team_sektion: true` |
| FAQ | ✅ Aktiv | `features.faq: true` |
| Notdienst-Banner | ❌ Deaktiviert | `features.notdienst_banner: false` |
| WhatsApp-Button | ❌ Deaktiviert | `features.whatsapp: false` |
| Google Analytics | ❌ Deaktiviert | `features.analytics: false` |
| Google Maps | ❌ Deaktiviert | `features.google_maps: false` |
| Blog | ❌ Deaktiviert | `features.blog: false` |

---

## Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
# → http://localhost:3000

# Produktions-Build testen
npm run build
npm start
```

### Umgebungsvariablen

Datei `.env.local` im Projektroot anlegen:

```bash
# E-Mail-Versand via Resend (optional – ohne Key läuft das Formular im Log-Modus)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Maps (optional)
NEXT_PUBLIC_GOOGLE_MAPS_KEY=AIza...
```

**Wichtig:** Ohne `RESEND_API_KEY` gibt das Kontaktformular trotzdem `success` zurück und loggt die Anfrage in der Server-Konsole. Kein Fehler, kein versehentlicher Mailversand beim lokalen Testen.

---

## E-Mail-Konfiguration (Resend)

Aktuelle Konfiguration in `app/api/contact/route.ts`:

```
Von:   Schreinermeisterei Dieterich Kontaktformular <kontakt@ite-consult.de>
An:    info@ite-consult.de   ← für Übergabe an Kunden auf info@schreiner-dieterich.de ändern
```

Für Produktivbetrieb beim Kunden:
1. `to` in `route.ts` auf `info@schreiner-dieterich.de` ändern
2. `from`-Domain in Resend verifizieren
3. `RESEND_API_KEY` auf Vercel setzen

---

## Deployment (Vercel)

```bash
# Erstmalig / Setup
npx vercel

# Produktions-Deployment
npx vercel --prod
```

Vercel-Projekt: verknüpft via `.vercel/project.json`

### Umgebungsvariablen auf Vercel setzen

Vercel Dashboard → Projekt → **Settings → Environment Variables**

---

## Leistungs-Unterseiten

Werden dynamisch aus `lib/services-data.ts` generiert. Aktuelle Slugs:

| Slug | Titel |
|---|---|
| `moebel-nach-mass` | Möbel nach Maß |
| `innenausbau` | Innenausbau |
| `kuechen` | Küchen |
| `objekteinrichtungen` | Objekteinrichtungen |
| `ladenbau` | Ladenbau |
| `praxisausbau` | Praxisausbau |

Jede Seite enthält: Mini-Hero, Kundenprobleme, Vorteile, Prozess-Timeline, CTA, SEO-Metadaten.

---

## Rechtliche Hinweise

Impressum, Datenschutz und AGB sind **Musterdokumente** und müssen vor Veröffentlichung durch einen Rechtsanwalt geprüft werden. Hinweis ist in allen drei Seiten eingeblendet.

---

## Offene To-dos vor Go-live

- [ ] Echte Bilder: Hero-Hintergrundbild, Teamfoto (Über-uns)
- [ ] `registrationNumber` und `ustId` in `lib/config.ts` eintragen
- [ ] `socialProof.completedProjects` und `.employees` befüllen (für TrustBar)
- [ ] Google-Bewertungen in `siteConfig.reviews` eintragen (für Testimonials-Sektion)
- [ ] `founded`-Jahr prüfen (aktuell Schätzwert: 1920)
- [ ] Rechtliche Seiten durch Anwalt prüfen lassen
- [ ] E-Mail-Empfänger auf `info@schreiner-dieterich.de` umstellen
- [ ] `RESEND_API_KEY` + Absender-Domain in Resend verifizieren
- [ ] OG-Image (`/public/og-image.jpg`) erstellen
- [ ] Domain `schreiner-dieterich.de` auf Vercel verknüpfen
