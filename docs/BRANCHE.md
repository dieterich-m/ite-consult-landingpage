# 🔧 Branchen-Konfiguration

> **Dies ist die EINZIGE Datei, die du pro Branche anpassen musst.** Alles andere (Design, Struktur, Animationen, Technik) wird automatisch aus den anderen Dateien übernommen.

---

## Branche

**Typ:** IT-Consulting / Automatisierung / Digitalisierung / KI-gestützte Prozessentlastung

---

## Firmendaten

```yaml
firmenname: "ITE Consult GmbH"
inhaber: "Michael Dieterich"
rechtsform: "GmbH"
claim: "Zeit für das Wesentliche."
tradition_hinweis: "Automatisierung und Digitalisierung mit Herz, Verstand und Verantwortung."
```

## Kontakt

```yaml
telefon: "+49 175 185 3983"
telefon_notdienst: ""
email: "michael.dieterich@ite-consult.de"
website: "https://www.ite-consult.de"
strasse: "Hauptstraße 60"
plz: "55471"
stadt: "Sargenroth"
region: "Hunsrück"
service_radius: "deutschlandweit"
oeffnungszeiten:
  werktags: "Nach Vereinbarung"
  samstag: "Nach Vereinbarung"
  notdienst: ""
registergericht: "Amtsgericht Bad Kreuznach"
handelsregister: "HRB 4367"
ust_id: "DE219143426"
```

## Positionierung

```yaml
positionierung:
  kurz: "Prozessanalyse für Automatisierung und Digitalisierung"
  staerken:
    - "praxisnahe Analyse statt Technikshow"
    - "Automatisierung mit klarem Nutzen für Mittelstand und öffentliche Verwaltungen"
    - "KI-gestützte Entlastung dort, wo sie im Alltag wirklich hilft"
    - "datenschutzsaubere System- und Prozessarchitektur"
    - "tooloffene Umsetzung, unter anderem mit n8n"
    - "wertschöpfende und sinnstiftende Digitalisierung statt zusätzlicher Komplexität"
```

## Zielgruppen

```yaml
zielgruppen:
  primaer:
    - "KMU / Mittelstand"
    - "öffentliche Verwaltungen"
  sekundaer:
    - "Selbstständige mit klaren Backoffice-Prozessen"
    - "Organisationen mit dokumenten- und prüfungsintensiven Abläufen"
```

## Leistungen

> Definiere hier die 4–6 Kernleistungen des Angebots. Jede Leistung bekommt eine eigene Unterseite.

```yaml
leistungen:
  - slug: "prozessanalyse-automatisierung"
    titel: "Prozessanalyse für Automatisierung und Digitalisierung"
    icon: "Search"
    kurz: "Reibung erkennen, Routinen analysieren und sinnvolle nächste Schritte ableiten"
    beschreibung: "Wir analysieren bestehende Abläufe, identifizieren Automatisierungspotenziale und schaffen eine belastbare Grundlage für sinnvolle Digitalisierungsschritte."
    kundenprobleme:
      - "Zu viele Abläufe sind historisch gewachsen und kosten täglich Zeit?"
      - "Es ist unklar, welche Prozesse sich wirklich für Automatisierung eignen?"
      - "Digitalisierung wird diskutiert, aber es fehlt an einer klaren Priorisierung?"
    vorteile:
      - titel: "Klarheit vor Aktionismus"
        text: "Nicht jedes Problem braucht sofort ein Tool. Eine saubere Analyse schafft die richtige Reihenfolge."
      - titel: "Niedrigschwelliger Einstieg"
        text: "Prozessanalyse ist der sinnvolle erste Schritt, bevor in Umsetzung investiert wird."
      - titel: "Belastbare Entscheidungsgrundlage"
        text: "Potenziale, Risiken und nächste Schritte werden nachvollziehbar aufbereitet."
    seo_title: "Prozessanalyse für Automatisierung | ITE Consult"

  - slug: "automatisierungsberatung"
    titel: "Automatisierungsberatung und Umsetzungsbegleitung"
    icon: "Workflow"
    kurz: "Von der Analyse bis zur praxistauglichen Umsetzung"
    beschreibung: "Wir begleiten Unternehmen und Verwaltungen bei der Einführung sinnvoller Automatisierungslösungen – strukturiert, pragmatisch und mit Blick auf Stabilität im Alltag."
    kundenprobleme:
      - "Es gibt viele Ideen, aber keine saubere Umsetzungslinie?"
      - "Automatisierungsvorhaben verlieren sich zwischen Fachbereich, IT und Alltag?"
      - "Es fehlt ein Partner, der nicht nur berät, sondern den Weg mitgeht?"
    vorteile:
      - titel: "Praxisnah statt theoretisch"
        text: "Empfohlen wird nur, was im konkreten Umfeld sinnvoll und umsetzbar ist."
      - titel: "Tooloffen"
        text: "Die Lösung richtet sich nach dem Bedarf, nicht nach einem feststehenden Produkt."
      - titel: "Stabile Einführung"
        text: "Umsetzung wird mit Blick auf Nutzbarkeit, Übergaben und Alltagstauglichkeit begleitet."
    seo_title: "Automatisierungsberatung | ITE Consult"

  - slug: "ki-backoffice-entlastung"
    titel: "KI-gestützte Entlastung von Backoffice- und Wissensprozessen"
    icon: "Brain"
    kurz: "Kognitive KI dort einsetzen, wo Routinen Zeit, Aufmerksamkeit und Motivation binden"
    beschreibung: "Wir identifizieren sinnvolle Einsatzfelder für KI in dokumenten-, prüfungs- und wissensintensiven Prozessen und überführen sie in nachvollziehbare, praxistaugliche Lösungen."
    kundenprobleme:
      - "Repetitive Aufgaben binden Fachkräfte an Routinen statt an ihre Kernkompetenz?"
      - "Dokumente, Zuordnungen oder Prüfungen kosten überproportional viel Zeit?"
      - "KI ist interessant, aber der praktische Nutzen ist noch unklar?"
    vorteile:
      - titel: "Entlastung mit Substanz"
        text: "KI wird nicht als Showthema genutzt, sondern zur konkreten Entlastung im Alltag."
      - titel: "Fachkräfte entlasten"
        text: "Mitarbeiter werden Schritt für Schritt wieder ihrer Kernkompetenz zugeführt."
      - titel: "Wertschöpfend und sinnstiftend"
        text: "Automatisierung schafft Freiräume für Aufgaben mit mehr Wirkung."
    seo_title: "KI-gestützte Prozessentlastung | ITE Consult"

  - slug: "datenschutzsaubere-architektur"
    titel: "Datenschutzsaubere System- und Prozessarchitektur"
    icon: "ShieldCheck"
    kurz: "Automatisierung und Digitalisierung mit Blick auf Rollen, Daten und Verantwortlichkeiten"
    beschreibung: "Digitalisierungsvorhaben müssen nicht nur funktionieren, sondern auch nachvollziehbar, tragfähig und datenschutzsauber aufgebaut sein. Genau das wird von Anfang an mitgedacht."
    kundenprobleme:
      - "Technische Lösungen entstehen, aber Datenschutz und Verantwortlichkeiten bleiben unklar?"
      - "Bei Automatisierung und KI fehlt eine saubere Struktur für Datenflüsse und Rollen?"
      - "Es besteht Unsicherheit, ob die geplante Lösung fachlich und organisatorisch tragfähig ist?"
    vorteile:
      - titel: "Datenschutz mit Praxisbezug"
        text: "Datenschutz wird nicht losgelöst betrachtet, sondern als Teil funktionsfähiger Prozesse."
      - titel: "Verantwortung mitdenken"
        text: "Rollen, Zugriffe und Datenflüsse werden strukturiert mitbetrachtet."
      - titel: "Vertrauen schaffen"
        text: "Lösungen wirken nicht nur effizient, sondern auch verantwortungsvoll aufgebaut."
    seo_title: "Datenschutzsaubere Systemarchitektur | ITE Consult"

  - slug: "potenzialanalyse"
    titel: "Potenzialanalysen"
    icon: "ScanSearch"
    kurz: "Der strukturierte Einstieg in Automatisierung und Digitalisierung"
    beschreibung: "Potenzialanalysen helfen dabei, Prozesse, Reibungspunkte und Entlastungsmöglichkeiten systematisch zu erfassen und priorisiert in nächste Schritte zu überführen."
    kundenprobleme:
      - "Es gibt viele Ideen, aber keine belastbare Priorisierung?"
      - "Sie möchten mit überschaubarem Aufwand sinnvolle Einstiegspunkte identifizieren?"
      - "Es fehlt eine neutrale Sicht auf Nutzen, Aufwand und Reihenfolge?"
    vorteile:
      - titel: "Strukturierter Einstieg"
        text: "Potenziale werden nicht nur gesammelt, sondern sinnvoll geordnet."
      - titel: "Fokus auf Nutzen"
        text: "Im Mittelpunkt steht, was wirklich entlastet und Wert schafft."
      - titel: "Konkrete nächste Schritte"
        text: "Das Ergebnis ist nicht Theorie, sondern eine belastbare Handlungsgrundlage."
    seo_title: "Potenzialanalyse für Automatisierung | ITE Consult"

  - slug: "digitale-kundenstrecken"
    titel: "Digitale Kundenstrecken und anfrageorientierte Websites"
    icon: "Globe"
    kurz: "Digitale Sichtbarkeit und saubere Kundenprozesse sinnvoll zusammendenken"
    beschreibung: "Wenn es sinnvoll ist, gehören zu guter Digitalisierung auch moderne, anfrageorientierte Websites, klare Kontaktstrecken und saubere Übergaben in nachgelagerte Prozesse."
    kundenprobleme:
      - "Anfragen kommen unstrukturiert an oder versanden?"
      - "Website, Kontaktformulare und interne Abläufe greifen nicht sauber ineinander?"
      - "Digitale Sichtbarkeit ist vorhanden, aber nicht wirklich prozessfähig?"
    vorteile:
      - titel: "Mehr als nur Website"
        text: "Digitale Kundenstrecken werden als Teil eines funktionierenden Gesamtprozesses gedacht."
      - titel: "Saubere Übergaben"
        text: "Anfragen sollen nicht nur entstehen, sondern intern sinnvoll weiterlaufen."
      - titel: "Ergänzende Prozesskompetenz"
        text: "Webseiten und Landingpages werden dort eingebunden, wo sie echte Wirkung entfalten."
    seo_title: "Digitale Kundenstrecken und Landingpages | ITE Consult"
```

## Social Proof & Vertrauen

```yaml
praxiserfahrung: "über 25 Jahre"
zertifizierung: "zertifizierter Datenschutzbeauftragter (IHK)"
arbeitsweise:
  - "praxisorientierte Automatisierung statt Tool-Show"
  - "erst verstehen, dann automatisieren"
  - "anonymisierte Praxisbeispiele statt abstrakter Theorie"
  - "Kooperation mit NetPlans im passenden Kontext"
  - "tooloffene Umsetzung, unter anderem mit n8n"
```

## Über ITE / Kurzprofil

```yaml
ueber_uns_kurz: "ITE Consult steht für praxisnahe Automatisierung, wertschöpfende Digitalisierung und datenschutzsaubere Systemarchitektur. Im Mittelpunkt stehen nicht Tools um ihrer selbst willen, sondern Entlastung, Klarheit und Lösungen, die im Alltag wirklich tragen. So entstehen Freiräume für sinnstiftende Arbeit und für das, was Menschen in ihren eigentlichen Kernkompetenzen am besten leisten können."
```

## Lead-Logik

> Anders als auf der bisherigen EMMA-Landingpage steht hier nicht ein einzelnes Produkt oder Format im Mittelpunkt. Primäres Ziel ist die qualifizierte Potenzialanalyse.

```yaml
lead_magnet:
  typ: "contact"
  titel: "Potenzialanalyse anfragen"
  untertitel: "Sie möchten Automatisierungspotenziale strukturiert erkennen, priorisieren und sinnvoll in die Umsetzung bringen?"
  cta: "Jetzt Potenzialanalyse anfragen"
  beschreibung: "Nutzen Sie das Kontaktformular für eine erste unverbindliche Anfrage. Gemeinsam klären wir, wo Entlastung, Automatisierung und Digitalisierung in Ihrem Umfeld den größten Hebel haben."
```

## Features (ein/aus)

```yaml
features:
  notdienst_banner: false
  whatsapp_button: false
  whatsapp_nummer: ""
  google_maps: false
  google_maps_key: ""
  analytics: false
  analytics_id: ""
  cookie_consent: true
  kontakt_backend: "frontend"
  kontakt_webhook_url: ""
  kontakt_email_api_key: ""
  faq: true
  galerie: true
  team_sektion: false
  blog: false
```

## Hero-Texte

```yaml
hero:
  headline: "Zeit für das Wesentliche."
  subline: "Prozessanalyse für wertschöpfende Automatisierung und Digitalisierung mit Herz, Verstand und Verantwortung."
  cta_primary: "Potenzialanalyse anfragen"
  cta_secondary: "Kontakt aufnehmen"
  erlaeuterung: "Wir analysieren Routinen, identifizieren Automatisierungspotenziale und entwickeln praxistaugliche Lösungen mit KI, digitalen Workflows und datenschutzsauberer Systemlogik – für Mittelstand und öffentliche Verwaltungen."
```

## FAQ

```yaml
faqs:
  - frage: "Beginnt die Zusammenarbeit direkt mit einem Tool oder einer konkreten Lösung?"
    antwort: "Nein. Der Einstieg erfolgt über eine strukturierte Analyse. Erst wenn klar ist, wo der größte Hebel liegt, wird über passende Lösungen gesprochen."

  - frage: "Arbeitet ITE Consult mit festen Produkten oder tooloffen?"
    antwort: "ITE arbeitet grundsätzlich praxisnah und tooloffen. Je nach Anforderung kommen unterschiedliche Werkzeuge und Ansätze zum Einsatz, unter anderem auch n8n."

  - frage: "Welche Rolle spielt EMMA auf der neuen Website?"
    antwort: "EMMA ist ein sichtbarer Baustein und ein möglicher Lösungsweg im passenden Kontext, steht aber nicht im Mittelpunkt der ITE-Website. ITE selbst wird als eigenständige Kompetenz für Prozessanalyse, Automatisierung und Digitalisierung dargestellt."

  - frage: "Ist Datenschutz bei Automatisierung und KI ein eigenes Thema?"
    antwort: "Ja. Gute Digitalisierung muss nicht nur funktionieren, sondern auch nachvollziehbar und datenschutzsauber aufgebaut sein. Genau das wird von Anfang an mitgedacht."

  - frage: "Für wen ist das Angebot besonders geeignet?"
    antwort: "Vor allem für mittelständische Unternehmen und öffentliche Verwaltungen mit dokumenten-, prüfungs- oder routinelastigen Abläufen, in denen Entlastung und Klarheit echten Mehrwert schaffen."

  - frage: "Was ist das Ziel einer Potenzialanalyse?"
    antwort: "Die Potenzialanalyse schafft eine belastbare Grundlage, um Prozesse zu priorisieren, Entlastungspotenziale sichtbar zu machen und sinnvolle nächste Schritte in Richtung Automatisierung und Digitalisierung abzuleiten."
```

## Einzugsgebiet

```yaml
service_orte:
  - "Sargenroth"
  - "Hunsrück"
  - "Rheinland-Pfalz"
  - "deutschlandweit"
```

## Bildstrategie

```yaml
bildstrategie:
  persoenliches_foto:
    datei: "Portrait Michael Dieterich"
    einsatz: "sichtbar auf der Startseite, ideal im Hero oder Über-mich-Bereich"

  key_visuals:
    - datei: "hero-tech.webp"
      einsatz: "direkt auf der Startseite sichtbar"
      wirkung: "Geschwindigkeit, Digitalisierung, Dynamik"
    - datei: "emma-brain.webp"
      einsatz: "direkt auf der Startseite sichtbar"
      wirkung: "digitale Intelligenz, Automatisierung, vernetzte Prozesse"

  hinweis: "Die beiden Visuals aus der bisherigen Landingpage sowie ein persönliches Foto sollen im ersten Draft bewusst mitgeführt werden."
```

## Strategische Rolle von EMMA und NetPlans

```yaml
partner_und_bausteine:
  emma:
    rolle: "sichtbarer Baustein oder Referenz, aber nicht Hauptmarke der ITE-Website"
    hinweis: "EMMA ist kein eigenes Produkt von ITE und wird deshalb nicht als zentrales Leistungsversprechen der Website aufgebaut."

  netplans:
    rolle: "punktuell sichtbar, nicht dominierend"
    hinweis: "Kooperationen und gemeinsame Kontexte dürfen sichtbar werden, ohne die Eigenständigkeit von ITE Consult zu überlagern."
```

