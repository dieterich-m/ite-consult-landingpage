# ITE Consult GmbH – Entwickler-Dokumentation

**Stand:** März 2026
**Erstellt von:** Michael Dieterich / Claude Code
**Deployment:** Vercel (aktuelle URL im Vercel-Dashboard)
**Zieldomain:** https://www.ite-consult.de (noch nicht verknüpft – siehe Hinweis DNS)

---

## 1. Überblick

Lead-generierende Landingpage für ITE Consult GmbH, Sargenroth. Ziel: Potenzialanalyse-Anfragen generieren und Erstkontakte ermöglichen. Anfragen werden per E-Mail an `info@ite-consult.de` weitergeleitet.

### Was die Seite kann

- Landingpage mit 10 Sektionen (Hero, TrustBar, Leistungen, KI-Teaser, Über ITE, Lead-Magnet, Bewertungen, Einzugsgebiet, FAQ, Kontakt)
- 6 dynamische Leistungs-Unterseiten (`/leistungen/[slug]`)
- Kontaktformular mit E-Mail-Versand via Resend → `info@ite-consult.de`
- DSGVO-konform (Datenschutz-Checkbox, keine Tracking-Cookies)
- Mobile-First

### Bilder (in `/public`)

| Datei | Einsatz |
|---|---|
| `hero-tech.webp` | HeroSection – Key-Visual rechts |
| `emma-brain.webp` | KITeaser – Visual rechts |
| `Gemini_Generated_Image_jvusd6jvusd6jvus.png` | AboutTeaser – Portrait Michael Dieterich |

---

## 2. Tech-Stack

| Technologie | Version | Zweck |
|---|---|---|
| Next.js | 15 | Framework (App Router) |
| TypeScript | strict | Typsicherheit |
| Tailwind CSS | 4 | Styling |
| shadcn/ui | aktuell | UI-Komponenten |
| Framer Motion | 12 | Animationen |
| Zod | aktuell | Formular-Validierung |
| Resend | aktuell | E-Mail-Versand |
| Vercel | – | Hosting & Deployment |

---

## 3. Projektstruktur

```
ite-consult-landingpage/
│
├── app/                          # Next.js App Router Seiten
│   ├── layout.tsx                # Root Layout (Header + Footer + FloatingCTA)
│   ├── page.tsx                  # Hauptseite (Landingpage)
│   ├── leistungen/[slug]/        # Dynamische Leistungs-Unterseiten
│   │   └── page.tsx
│   ├── kontakt/page.tsx          # Kontaktseite
│   ├── impressum/page.tsx        # Impressum (GmbH + IHK Koblenz)
│   ├── datenschutz/page.tsx      # Datenschutzerklärung
│   ├── agb/page.tsx              # AGB
│   └── api/contact/route.ts      # API-Endpunkt (Resend E-Mail-Versand)
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Navigation, Logo (ITE), CTA-Button
│   │   ├── Footer.tsx            # Links, Kontakt, rechtliche Links
│   │   ├── MobileNav.tsx         # Hamburger-Menü (Sheet)
│   │   └── EmergencyBanner.tsx   # Notdienst-Banner (deaktiviert)
│   ├── sections/
│   │   ├── HeroSection.tsx       # Split-Layout: Text links, hero-tech.webp rechts
│   │   ├── TrustBar.tsx          # 25+ Jahre / Zert. DSB / Tooloffen / KMU & Verwaltung
│   │   ├── ServicesGrid.tsx      # 6 Leistungskarten
│   │   ├── KITeaser.tsx          # KI-Sektion mit emma-brain.webp
│   │   ├── AboutTeaser.tsx       # Portrait links, Über-ITE-Text rechts
│   │   ├── LeadMagnet.tsx        # Potenzialanalyse-Formular (vereinfacht)
│   │   ├── Testimonials.tsx      # Bewertungen (Array leer – noch zu befüllen)
│   │   ├── ServiceArea.tsx       # Einzugsgebiet
│   │   ├── FaqSection.tsx        # FAQ
│   │   ├── CtaBanner.tsx         # Abschluss-CTA
│   │   └── ContactForm.tsx       # Vollständiges Kontaktformular
│   ├── shared/
│   │   ├── RevealOnScroll.tsx    # Scroll-Animation Wrapper
│   │   ├── AnimatedCounter.tsx   # Zähler-Animation
│   │   └── FloatingCTA.tsx       # Mobiler Anruf-Button (fixed bottom)
│   └── ui/                       # shadcn/ui Komponenten
│
├── lib/
│   ├── config.ts                 # ZENTRALE KONFIGURATION (hier alles ändern)
│   ├── services-data.ts          # Leistungsinhalte (Unterseiten)
│   ├── animations.ts             # Framer Motion Presets
│   └── utils.ts                  # Hilfsfunktionen (cn)
│
├── public/                       # Bilder und statische Dateien
│
└── docs/                         # Projektdokumentation
    ├── BRANCHE.md                # Branchen-Briefing
    ├── ANFORDERUNGEN.md          # Technische Anforderungen
    ├── DESIGNSYSTEM.md           # Design-System
    └── DOKUMENTATION.md          # Diese Datei
```

---

## 4. Zentrale Konfiguration (`lib/config.ts`)

**Die wichtigste Datei im Projekt.** Alle Firmendaten, Texte, Farben und Einstellungen werden hier gepflegt.

### Firmendaten

```ts
company: {
  name: "ITE Consult GmbH",
  owner: "Michael Dieterich",
  phone: "+49 175 185 3983",
  phoneTel: "+491751853983",
  email: "michael.dieterich@ite-consult.de",
  address: { street: "Hauptstraße 60", zip: "55471", city: "Sargenroth" },
  registrationCourt: "Amtsgericht Bad Kreuznach",
  registrationNumber: "HRB 4367",
  ustId: "DE219143426",
  ihk: "IHK Koblenz",
}
```

### Features ein/ausschalten

```ts
features: {
  notdienst_banner: false,
  analytics: false,
  cookie_consent: true,
  kontakt_backend: "resend",  // "frontend" (kein Versand) | "resend" (aktiv)
}
```

### Bewertungen eintragen

Im `reviews`-Array in `lib/config.ts` Objekte hinzufügen:
```ts
{
  name: "Max Mustermann",
  city: "Koblenz",
  rating: 5,
  text: "...",
  date: "März 2024",
}
```

---

## 5. Leistungs-Unterseiten (`lib/services-data.ts`)

6 Leistungen sind definiert:

| Slug | Titel |
|---|---|
| `prozessanalyse-automatisierung` | Prozessanalyse für Automatisierung und Digitalisierung |
| `automatisierungsberatung` | Automatisierungsberatung und Umsetzungsbegleitung |
| `ki-backoffice-entlastung` | KI-gestützte Entlastung von Backoffice- und Wissensprozessen |
| `datenschutzsaubere-architektur` | Datenschutzsaubere System- und Prozessarchitektur |
| `potenzialanalyse` | Potenzialanalysen |
| `digitale-kundenstrecken` | Digitale Kundenstrecken und anfrageorientierte Websites |

---

## 6. E-Mail-Versand (Resend)

Kontaktformular-Anfragen werden via **Resend** versendet.

- **Absender:** `kontakt@ite-consult.de` (Domain bei Resend verifiziert)
- **Empfänger:** `info@ite-consult.de`

### Empfänger-Adresse ändern

In `app/api/contact/route.ts`:
```ts
to: "neue-adresse@ite-consult.de",
```

### Environment Variable

| Variable | Wo setzen |
|---|---|
| `RESEND_API_KEY` | `.env.local` (lokal) + Vercel → Settings → Environment Variables |

---

## 7. Deployment (Vercel)

### Erneuter Produktiv-Deploy

```bash
# Im Mac-Terminal:
cd ~/Documents/VSCode/ite-consult-landingpage
npx vercel --prod
```

### Environment Variables in Vercel setzen

```bash
npx vercel env add RESEND_API_KEY production
```

---

## 8. DNS-Situation (wichtig)

**`www.ite-consult.de` zeigt aktuell auf Ionos-Hosting** – dort läuft die aktive Seite inkl. `/emma/termine` (bei Google indexiert).

**Ionos DNS-Einträge (aktuell wiederhergestellt):**

| Typ | Host | Wert |
|---|---|---|
| A | `www` | `217.160.137.7` |

**Vor dem Umstieg auf Vercel muss `/emma/termine` migriert oder umgezogen sein**, damit die Google-Indexierung nicht bricht.

**Go-live-Reihenfolge:**
1. `/emma/termine` migrieren oder auf alternativen Host umziehen
2. Google Search Console: alte URL deindexieren, neue eintragen
3. Vercel-Domain `www.ite-consult.de` eintragen
4. Bei Ionos DNS umstellen: CNAME `www` → `cname.vercel-dns.com`

---

## 9. Lokale Entwicklung

```bash
# Im Mac-Terminal (nicht Windows-CMD – UNC-Pfade nicht unterstützt):
cd ~/Documents/VSCode/ite-consult-landingpage
npm install   # beim ersten Mal oder nach package.json-Änderungen
npm run dev
```

Browser: http://localhost:3000

`.env.local` muss vorhanden sein:
```
RESEND_API_KEY=re_xxxxx
```

---

## 10. Häufige Änderungen – Schnellreferenz

| Was ändern? | Wo? |
|---|---|
| Telefonnummer | `lib/config.ts` → `company.phone` + `company.phoneTel` |
| E-Mail-Adresse | `lib/config.ts` → `company.email` |
| Hero-Text | `lib/config.ts` → `hero.headline` + `hero.subline` |
| Leistungen (Übersicht) | `lib/config.ts` → `services` Array |
| Leistungstexte (Unterseiten) | `lib/services-data.ts` |
| Bewertungen | `lib/config.ts` → `reviews` Array |
| FAQs | `lib/config.ts` → `faqs` Array |
| Einzugsgebiet | `lib/config.ts` → `serviceOrte` |
| Farben | `app/globals.css` → `@theme` Block |
| E-Mail-Empfänger | `app/api/contact/route.ts` → `to:` Feld |
| Bilder | `/public/` – gleiche Dateinamen verwenden |

---

## 11. Design-Farbschema

| Rolle | Bedeutung | Hex |
|---|---|---|
| Primary (Blau) | Hauptbuttons, Links, Akzente | `#2563eb` |
| Primary Light | Hover, helle Akzente | `#60a5fa` |
| Primary Lighter | Hintergrundflächen, Info-Boxen | `#e0f2fe` |
| Accent (Dunkelblau) | Headlines, Navigation, Footer | `#0f172a` |

Vollständige Design-Regeln: `docs/DESIGNSYSTEM.md`
