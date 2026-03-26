# Design-System – ITE Consult GmbH

> Dieses Design-System definiert die visuelle Sprache für die neue Website von ITE Consult. Ziel: professionell, klar, hochwertig, vertrauenswürdig und technisch präzise – **kein generischer SaaS-Look und keine kalte Konzernoptik**.

---

## Design-Ziel für ITE Consult

Die neue Website soll ITE Consult als eigenständige Beratungs- und Umsetzungskompetenz sichtbar machen.

Sie soll wirken wie:

- klar und modern
- strukturiert und hochwertig
- technisch kompetent
- menschlich und vertrauenswürdig
- datenschutzbewusst und verantwortungsvoll
- praxisnah statt laut

Die Seite soll nicht aussehen wie:

- eine austauschbare Agentur-Website
- eine überstylte KI-Showseite
- ein kaltes Konzernportal
- eine verspielte Startup-Landingpage

---

## Grundrichtung der Farbwelt

Für ITE ist ein Farbschema auf Basis von **Hellblau, Weiß und klaren Blautönen** sehr passend.

Warum diese Richtung sinnvoll ist:

- **Hellblau** steht für Klarheit, Leichtigkeit, Offenheit und ruhige Digitalisierung
- **Weiß** schafft Raum, Struktur und Seriosität
- **Dunkleres Blau** bringt Tiefe, Vertrauen und technische Kompetenz
- kleine **warme Akzente** können Menschlichkeit und Energie ergänzen, dürfen aber nicht dominieren

Diese Farbwelt passt deutlich besser zu ITE als eine dunkle, harte Tech-Optik oder eine typische Berater-Grauästhetik.

---

## Farbpalette

```yaml
farben:
  primary:
    default: "#2563eb"
    light: "#60a5fa"
    lighter: "#e0f2fe"

  accent:
    default: "#0f172a"
    light: "#1e293b"
    lighter: "#cbd5e1"

  support:
    cyan: "#06b6d4"
    sky: "#38bdf8"

  warm_accent:
    default: "#f59e0b"
    lighter: "#fef3c7"

  surface:
    white: "#ffffff"
    light: "#f8fafc"
    muted: "#eef6ff"
    border: "#dbeafe"

  text:
    default: "#0f172a"
    body: "#334155"
    muted: "#64748b"

  status:
    success: "#16a34a"
    warning: "#d97706"
    error: "#dc2626"
```

### Einsatzlogik

- **Primary Blau**

  - Hauptbuttons
  - Links
  - Hauptakzente
  - wichtige Markierungen

- **Hellblau / helle Blautöne**

  - ruhige Flächen
  - Info-Boxen
  - Trust- oder Nutzenblöcke
  - Abschnittshintergründe

- **Accent Dunkelblau / Anthrazit**

  - Headlines
  - Navigation
  - Footer
  - seriöse Tiefenanker

- **Warmer Akzent**

  - sparsam für einzelne Highlights
  - Zahlen, Badges oder kleine Hervorhebungen
  - nicht für große Flächen

### Leitregel

Die Seite soll insgesamt **hell, ruhig und hochwertig** wirken. Nicht zu viel dunkle Fläche. Nicht zu viele aggressive Kontraste. Technik ja, aber mit Luft und Klarheit.

---

## Design-Philosophie

### Was ITE visuell transportieren soll

- Klarheit statt Überforderung
- Struktur statt Reizüberflutung
- Nutzen statt Technik-Eindruck um des Eindrucks willen
- Präzision statt Deko
- Menschlichkeit innerhalb einer professionellen Tech-Optik

### Was ausdrücklich vermieden wird

- Neon-KI-Look als Hauptstil
- dunkle Cyberpunk-Flächen über die ganze Seite
- violette oder pinke AI-Trendwelten
- Glassmorphism als Showeffekt
- überladene Dashboard-Optik
- zu viele Linien, Raster oder Technikmuster gleichzeitig
- riesige Schatten und stark gerundete Bubble-Elemente
- generische Berater-Floskeln in Kombination mit generischem Design

---

## Bildstrategie

Für ITE ist die Bildwelt ein wichtiger Differenzierungsfaktor.

### Vorhandene Bilder für den ersten Draft

- persönliches Portrait von Michael Dieterich
- `hero-tech.webp`
- `emma-brain.webp`

### Einsatzempfehlung

- **Portraitfoto**

  - sichtbar auf der Startseite
  - im Hero oder in einem prägnanten Über-mich-/Vertrauensblock
  - sorgt für Persönlichkeit, Verbindlichkeit und Glaubwürdigkeit

- **hero-tech.webp**

  - als Key-Visual im Hero oder in einer Intro-Sektion
  - steht für Geschwindigkeit, Prozessfluss, Digitalisierung und Dynamik

- **emma-brain.webp**

  - in einem Abschnitt zu KI, Automatisierung oder intelligenter Entlastung
  - steht für kognitive Unterstützung, Vernetzung und digitale Intelligenz

### Bildwirkung

Die technischen Bilder dürfen sichtbar modern sein, aber die Seite darf trotzdem nicht wie reine Technikästhetik ohne Menschen wirken. Das persönliche Portrait ist deshalb wichtig als Gegengewicht.

---

## Typographie

### Schriftcharakter

Die Seite braucht eine Schrift, die modern, lesbar und professionell ist.

Empfohlen:

- **Inter** oder **DM Sans** als Hauptschrift
- optional **JetBrains Mono** oder **IBM Plex Mono** für Zahlen, Kennzahlen oder Technik-Badges

### Typo-Hierarchie

```text
Hero-H1:      text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]
Sektion-H2:   text-3xl md:text-4xl font-bold tracking-tight
Card-H3:      text-xl md:text-2xl font-semibold
Subtitel:     text-lg font-medium
Body:         text-base leading-relaxed
Small:        text-sm text-slate-500
```

### Typo-Regeln

- Headlines immer klar und ruhig setzen
- keine künstlich futuristischen Fonts
- keine verspielte Typografie
- Absätze großzügig und lesbar halten
- Hero nicht textlich überladen

---

## Border-Radius-Strategie

ITE sollte weicher als der Dachdecker, aber klarer als eine typische Startup-Seite wirken.

```text
Buttons:        rounded-md
Input-Felder:   rounded-md
Cards:          rounded-lg
Badges:         rounded-full
Bilder:         rounded-xl oder rounded-lg
Avatare:        rounded-full
```

### Leitregel

Nicht zu weich, nicht zu eckig. Seriös modern.

---

## Shadow-Strategie

Shadows moderat und hochwertig einsetzen.

```text
Standard-Cards:    shadow-sm
Hero-Visual:       shadow-md
Header on Scroll:  shadow-sm
CTA-Cards:         shadow-md
Floating CTA:      shadow-lg
```

### Grundsatz

Schatten dürfen Tiefe geben, aber nie nach Template oder künstlicher 3D-Show wirken.

---

## Layout-Charakter

ITE braucht ein Layout, das gleichzeitig strukturiert und zugänglich wirkt.

### Empfohlene Grundwirkung

- viel Weißraum
- klare Raster
- gut lesbare Breiten
- präzise Abschnittstrennung
- ausgewogene Mischung aus Text, Nutzenblöcken und visueller Technik-Anmutung

### Keine Überladung

Gerade bei ITE ist die Versuchung groß, zu viele Konzepte, Begriffe und Technikthemen auf einmal zu zeigen. Das Design muss hier bewusst entschleunigen.

---

## Startseiten-Dramaturgie

```text
HEADER             → klar, hell, ruhig
HERO               → Hauptbotschaft + Portrait oder Key-Visual
TRUST / CREDIBILITY→ Erfahrung, Datenschutz, Praxisnähe
PROBLEM / NUTZEN   → Routinen, Fachkräftemangel, Entlastung
LEISTUNGEN         → 4 Hauptleistungen + 2 ergänzende Leistungen
FÜR WEN            → Mittelstand / Verwaltung
KI / AUTOMATISIERUNG → mit Visual-Unterstützung
ÜBER ITE           → Werte, Haltung, Arbeitsweise
FAQ                → Hürden reduzieren
CTA / POTENZIALANALYSE → klarer Abschluss
FOOTER             → ruhig, seriös, dunkel
```

### Farbrhythmus

weiß → hellblau → weiß → sehr hell → technisch akzentuiert → weiß → dunkel im Footer

---

## CTA-Logik

Die Seite soll auf **Potenzialanalyse** als primären Einstieg zielen.

### Primäre CTAs

- Potenzialanalyse anfragen
- Erstes Gespräch anfragen
- Jetzt Potenziale prüfen

### Sekundäre CTAs

- Leistungen ansehen
- Kontakt aufnehmen
- Mehr erfahren

### Visuelle Regel

- Primäre CTA in Blau
- Sekundäre CTA als Outline oder dunkler Textbutton
- warmer Akzent nur sparsam

---

## Vertrauenselemente

Für ITE sind diese Vertrauenselemente visuell wichtig:

- 25+ Jahre Praxiserfahrung
- zertifizierter Datenschutzbeauftragter (IHK)
- Mittelstand und öffentliche Verwaltungen
- praxisnahe Automatisierung statt Tool-Show
- anonymisierte Praxisbeispiele
- Kooperation mit NetPlans im passenden Kontext

### Wirkung

Vertrauen soll nicht über große Selbstdarstellung entstehen, sondern über Klarheit, Substanz und sichtbare Erfahrung.

---

## Formulare

Die Kontakt- und Potenzialanalyse-Formulare sollen ruhig und hochwertig wirken.

### Anforderungen

- wenige, sinnvolle Felder
- klare Labels
- kein technisches Fachformular
- gut lesbar und leicht bedienbar
- deutliche Datenschutz-Zustimmung

### Stil

- weißer Hintergrund
- feine blaue oder graue Borders
- klare Fokuszustände
- große Click-Flächen
- kein unnötiger Formularballast

---

## Animationen

Animationen nur subtil.

### Erlaubt

- sanfte Reveal-on-Scroll Animationen
- Count-up für Kennzahlen
- leichtes Einblenden von Bild und Text
- dezente Hover-Effekte

### Nicht erwünscht

- hektische Glitch-Effekte
- cyberartige Daueranimationen
- Parallax-Showeffekte
- zu viel Bewegung im Hero

---

## Stilzusammenfassung in einem Satz

**Die neue Website für ITE Consult soll wirken wie ein klarer, moderner und vertrauenswürdiger Beratungsauftritt für Automatisierung und Digitalisierung – technisch präzise, menschlich anschlussfähig und mit viel Raum für Klarheit.**

---

## Umsetzungsregel für Claude

Bei der technischen Umsetzung gilt:

- Farbwelt hellblau / weiß / dunkles Blau konsequent umsetzen
- vorhandene Key-Visuals und Portrait bewusst integrieren
- keine generische KI-Showseite bauen
- Technikbildsprache immer mit menschlicher Vertrauenskomponente ausgleichen
- Startseite auf Potenzialanalyse und klare Nutzenkommunikation ausrichten

