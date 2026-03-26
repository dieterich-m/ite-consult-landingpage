export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  kundenprobleme: { title: string; description: string }[];
  vorteile: { title: string; description: string; icon: string }[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const servicesData: Service[] = [
  {
    slug: "prozessanalyse-automatisierung",
    title: "Prozessanalyse für Automatisierung und Digitalisierung",
    shortTitle: "Prozessanalyse",
    icon: "Search",
    shortDescription:
      "Reibung erkennen, Routinen analysieren und sinnvolle nächste Schritte ableiten.",
    fullDescription:
      "Wir analysieren bestehende Abläufe, identifizieren Automatisierungspotenziale und schaffen eine belastbare Grundlage für sinnvolle Digitalisierungsschritte. Nicht jedes Problem braucht sofort ein Tool – eine saubere Analyse schafft die richtige Reihenfolge.",
    kundenprobleme: [
      {
        title: "Zu viele Abläufe sind historisch gewachsen und kosten täglich Zeit?",
        description:
          "Gewachsene Strukturen sind oft ineffizient – ohne dass es jemandem wirklich auffällt, weil es schon immer so war.",
      },
      {
        title: "Es ist unklar, welche Prozesse sich wirklich für Automatisierung eignen?",
        description:
          "Nicht jeder Prozess lohnt sich zu automatisieren. Eine strukturierte Analyse trennt Potenzial von Aufwand.",
      },
      {
        title: "Digitalisierung wird diskutiert, aber es fehlt an einer klaren Priorisierung?",
        description:
          "Viele Ideen, aber keine Reihenfolge – eine Analyse schafft Klarheit, wo anzufangen ist.",
      },
    ],
    vorteile: [
      {
        title: "Klarheit vor Aktionismus",
        description:
          "Nicht jedes Problem braucht sofort ein Tool. Eine saubere Analyse schafft die richtige Reihenfolge.",
        icon: "Search",
      },
      {
        title: "Niedrigschwelliger Einstieg",
        description:
          "Prozessanalyse ist der sinnvolle erste Schritt, bevor in Umsetzung investiert wird.",
        icon: "Footprints",
      },
      {
        title: "Belastbare Entscheidungsgrundlage",
        description:
          "Potenziale, Risiken und nächste Schritte werden nachvollziehbar aufbereitet.",
        icon: "ClipboardList",
      },
    ],
    seo: {
      metaTitle: "Prozessanalyse für Automatisierung | ITE Consult",
      metaDescription:
        "Strukturierte Prozessanalyse für Automatisierung und Digitalisierung. ITE Consult GmbH – Klarheit vor Aktionismus. Jetzt Potenzialanalyse anfragen.",
      keywords: [
        "Prozessanalyse Automatisierung",
        "Digitalisierung Mittelstand",
        "Prozessoptimierung KMU",
        "Automatisierungspotenziale erkennen",
        "Digitalisierungsberatung Rheinland-Pfalz",
      ],
    },
  },
  {
    slug: "automatisierungsberatung",
    title: "Automatisierungsberatung und Umsetzungsbegleitung",
    shortTitle: "Automatisierungsberatung",
    icon: "Workflow",
    shortDescription:
      "Von der Analyse bis zur praxistauglichen Umsetzung.",
    fullDescription:
      "Wir begleiten Unternehmen und Verwaltungen bei der Einführung sinnvoller Automatisierungslösungen – strukturiert, pragmatisch und mit Blick auf Stabilität im Alltag. Empfohlen wird nur, was im konkreten Umfeld sinnvoll und umsetzbar ist.",
    kundenprobleme: [
      {
        title: "Es gibt viele Ideen, aber keine saubere Umsetzungslinie?",
        description:
          "Ohne klare Linie verlieren sich Automatisierungsvorhaben zwischen Abteilungen und Prioritäten.",
      },
      {
        title: "Automatisierungsvorhaben verlieren sich zwischen Fachbereich, IT und Alltag?",
        description:
          "Die Koordination zwischen Fachbereich und IT scheitert oft an Sprache, Prioritäten und fehlendem Umsetzungspartner.",
      },
      {
        title: "Es fehlt ein Partner, der nicht nur berät, sondern den Weg mitgeht?",
        description:
          "Beratung ohne Umsetzungsbegleitung endet häufig in Konzepten, die im Alltag nicht ankommen.",
      },
    ],
    vorteile: [
      {
        title: "Praxisnah statt theoretisch",
        description:
          "Empfohlen wird nur, was im konkreten Umfeld sinnvoll und umsetzbar ist.",
        icon: "CheckCircle",
      },
      {
        title: "Tooloffen",
        description:
          "Die Lösung richtet sich nach dem Bedarf, nicht nach einem feststehenden Produkt.",
        icon: "Puzzle",
      },
      {
        title: "Stabile Einführung",
        description:
          "Umsetzung wird mit Blick auf Nutzbarkeit, Übergaben und Alltagstauglichkeit begleitet.",
        icon: "Shield",
      },
    ],
    seo: {
      metaTitle: "Automatisierungsberatung | ITE Consult",
      metaDescription:
        "Automatisierungsberatung und Umsetzungsbegleitung für Mittelstand und Verwaltung. ITE Consult GmbH – praxisnah, tooloffen. Jetzt anfragen.",
      keywords: [
        "Automatisierungsberatung",
        "Digitalisierungsberatung KMU",
        "Automatisierung Mittelstand",
        "Prozessautomatisierung Beratung",
        "n8n Automatisierung",
      ],
    },
  },
  {
    slug: "ki-backoffice-entlastung",
    title: "KI-gestützte Entlastung von Backoffice- und Wissensprozessen",
    shortTitle: "KI-Entlastung",
    icon: "Brain",
    shortDescription:
      "Kognitive KI dort einsetzen, wo Routinen Zeit, Aufmerksamkeit und Motivation binden.",
    fullDescription:
      "Wir identifizieren sinnvolle Einsatzfelder für KI in dokumenten-, prüfungs- und wissensintensiven Prozessen und überführen sie in nachvollziehbare, praxistaugliche Lösungen. KI wird nicht als Showthema genutzt, sondern zur konkreten Entlastung im Alltag.",
    kundenprobleme: [
      {
        title: "Repetitive Aufgaben binden Fachkräfte an Routinen statt an ihre Kernkompetenz?",
        description:
          "Wenn Fachkräfte täglich Stunden mit Routinen verbringen, fehlt Zeit für Aufgaben mit echtem Mehrwert.",
      },
      {
        title: "Dokumente, Zuordnungen oder Prüfungen kosten überproportional viel Zeit?",
        description:
          "Dokumentenintensive Prozesse sind häufig die größten Zeitfresser – und genau da hilft KI am meisten.",
      },
      {
        title: "KI ist interessant, aber der praktische Nutzen ist noch unklar?",
        description:
          "Viele wissen, dass KI helfen könnte – aber nicht wo, wie und mit welchem Aufwand.",
      },
    ],
    vorteile: [
      {
        title: "Entlastung mit Substanz",
        description:
          "KI wird nicht als Showthema genutzt, sondern zur konkreten Entlastung im Alltag.",
        icon: "Brain",
      },
      {
        title: "Fachkräfte entlasten",
        description:
          "Mitarbeiter werden Schritt für Schritt wieder ihrer Kernkompetenz zugeführt.",
        icon: "Users",
      },
      {
        title: "Wertschöpfend und sinnstiftend",
        description:
          "Automatisierung schafft Freiräume für Aufgaben mit mehr Wirkung.",
        icon: "TrendingUp",
      },
    ],
    seo: {
      metaTitle: "KI-gestützte Prozessentlastung | ITE Consult",
      metaDescription:
        "KI-gestützte Entlastung von Backoffice- und Wissensprozessen. ITE Consult GmbH – praktisch, sinnvoll, datenschutzsauber. Jetzt anfragen.",
      keywords: [
        "KI Prozessentlastung",
        "KI Backoffice Automatisierung",
        "Künstliche Intelligenz Mittelstand",
        "KI Verwaltung",
        "Wissensmanagement Automatisierung",
      ],
    },
  },
  {
    slug: "datenschutzsaubere-architektur",
    title: "Datenschutzsaubere System- und Prozessarchitektur",
    shortTitle: "Datenschutz & Architektur",
    icon: "ShieldCheck",
    shortDescription:
      "Automatisierung und Digitalisierung mit Blick auf Rollen, Daten und Verantwortlichkeiten.",
    fullDescription:
      "Digitalisierungsvorhaben müssen nicht nur funktionieren, sondern auch nachvollziehbar, tragfähig und datenschutzsauber aufgebaut sein. Genau das wird von Anfang an mitgedacht – Datenschutz als Teil funktionsfähiger Prozesse, nicht als nachträgliches Korsett.",
    kundenprobleme: [
      {
        title: "Technische Lösungen entstehen, aber Datenschutz und Verantwortlichkeiten bleiben unklar?",
        description:
          "Wenn Datenschutz erst am Ende gedacht wird, entstehen Nachbesserungen, die Zeit und Vertrauen kosten.",
      },
      {
        title: "Bei Automatisierung und KI fehlt eine saubere Struktur für Datenflüsse und Rollen?",
        description:
          "Wer Daten automatisiert verarbeitet, braucht eine klare Architektur – für Sicherheit und Nachvollziehbarkeit.",
      },
      {
        title: "Es besteht Unsicherheit, ob die geplante Lösung fachlich und organisatorisch tragfähig ist?",
        description:
          "Technisch machbar und organisatorisch sinnvoll sind zwei verschiedene Dinge – beide müssen stimmen.",
      },
    ],
    vorteile: [
      {
        title: "Datenschutz mit Praxisbezug",
        description:
          "Datenschutz wird nicht losgelöst betrachtet, sondern als Teil funktionsfähiger Prozesse.",
        icon: "ShieldCheck",
      },
      {
        title: "Verantwortung mitdenken",
        description:
          "Rollen, Zugriffe und Datenflüsse werden strukturiert mitbetrachtet.",
        icon: "Users",
      },
      {
        title: "Vertrauen schaffen",
        description:
          "Lösungen wirken nicht nur effizient, sondern auch verantwortungsvoll aufgebaut.",
        icon: "CheckCircle",
      },
    ],
    seo: {
      metaTitle: "Datenschutzsaubere Systemarchitektur | ITE Consult",
      metaDescription:
        "Datenschutzsaubere System- und Prozessarchitektur für Automatisierung und KI. ITE Consult GmbH – zertifizierter Datenschutzbeauftragter. Jetzt anfragen.",
      keywords: [
        "Datenschutz Automatisierung",
        "DSGVO Prozessarchitektur",
        "Datenschutzbeauftragter IHK",
        "Datenschutz KI",
        "DSGVO Digitalisierung Mittelstand",
      ],
    },
  },
  {
    slug: "potenzialanalyse",
    title: "Potenzialanalysen",
    shortTitle: "Potenzialanalyse",
    icon: "ScanSearch",
    shortDescription:
      "Der strukturierte Einstieg in Automatisierung und Digitalisierung.",
    fullDescription:
      "Potenzialanalysen helfen dabei, Prozesse, Reibungspunkte und Entlastungsmöglichkeiten systematisch zu erfassen und priorisiert in nächste Schritte zu überführen. Das Ergebnis ist nicht Theorie, sondern eine belastbare Handlungsgrundlage.",
    kundenprobleme: [
      {
        title: "Es gibt viele Ideen, aber keine belastbare Priorisierung?",
        description:
          "Ohne Priorisierung werden Ressourcen verteilt statt konzentriert – und der Fortschritt bleibt aus.",
      },
      {
        title: "Sie möchten mit überschaubarem Aufwand sinnvolle Einstiegspunkte identifizieren?",
        description:
          "Eine strukturierte Analyse liefert schnell Orientierung, ohne großen Vorlauf.",
      },
      {
        title: "Es fehlt eine neutrale Sicht auf Nutzen, Aufwand und Reihenfolge?",
        description:
          "Interne Einschätzungen sind oft zu nah am Thema – eine externe Perspektive schafft Klarheit.",
      },
    ],
    vorteile: [
      {
        title: "Strukturierter Einstieg",
        description:
          "Potenziale werden nicht nur gesammelt, sondern sinnvoll geordnet.",
        icon: "Search",
      },
      {
        title: "Fokus auf Nutzen",
        description:
          "Im Mittelpunkt steht, was wirklich entlastet und Wert schafft.",
        icon: "TrendingUp",
      },
      {
        title: "Konkrete nächste Schritte",
        description:
          "Das Ergebnis ist nicht Theorie, sondern eine belastbare Handlungsgrundlage.",
        icon: "ClipboardList",
      },
    ],
    seo: {
      metaTitle: "Potenzialanalyse für Automatisierung | ITE Consult",
      metaDescription:
        "Strukturierte Potenzialanalyse für Automatisierung und Digitalisierung. ITE Consult GmbH – belastbare Grundlage für sinnvolle nächste Schritte. Jetzt anfragen.",
      keywords: [
        "Potenzialanalyse Automatisierung",
        "Digitalisierung Potenzialanalyse",
        "Automatisierungspotenziale KMU",
        "Digitalisierung Einstieg",
        "Prozessoptimierung Analyse",
      ],
    },
  },
  {
    slug: "digitale-kundenstrecken",
    title: "Digitale Kundenstrecken und anfrageorientierte Websites",
    shortTitle: "Digitale Kundenstrecken",
    icon: "Globe",
    shortDescription:
      "Digitale Sichtbarkeit und saubere Kundenprozesse sinnvoll zusammendenken.",
    fullDescription:
      "Wenn es sinnvoll ist, gehören zu guter Digitalisierung auch moderne, anfrageorientierte Websites, klare Kontaktstrecken und saubere Übergaben in nachgelagerte Prozesse. Digitale Kundenstrecken werden als Teil eines funktionierenden Gesamtprozesses gedacht – nicht als isolierte Maßnahme.",
    kundenprobleme: [
      {
        title: "Anfragen kommen unstrukturiert an oder versanden?",
        description:
          "Wenn Anfragen per E-Mail, Telefon oder Kontaktformular unkontrolliert eingehen, gehen Leads verloren.",
      },
      {
        title: "Website, Kontaktformulare und interne Abläufe greifen nicht sauber ineinander?",
        description:
          "Eine Website ohne saubere Übergabe in nachgelagerte Prozesse ist oft eine digitale Sackgasse.",
      },
      {
        title: "Digitale Sichtbarkeit ist vorhanden, aber nicht wirklich prozessfähig?",
        description:
          "Sichtbar sein reicht nicht – die digitale Strecke muss auch intern weiterdenken.",
      },
    ],
    vorteile: [
      {
        title: "Mehr als nur Website",
        description:
          "Digitale Kundenstrecken werden als Teil eines funktionierenden Gesamtprozesses gedacht.",
        icon: "Globe",
      },
      {
        title: "Saubere Übergaben",
        description:
          "Anfragen sollen nicht nur entstehen, sondern intern sinnvoll weiterlaufen.",
        icon: "ArrowRight",
      },
      {
        title: "Ergänzende Prozesskompetenz",
        description:
          "Webseiten und Landingpages werden dort eingebunden, wo sie echte Wirkung entfalten.",
        icon: "Puzzle",
      },
    ],
    seo: {
      metaTitle: "Digitale Kundenstrecken und Landingpages | ITE Consult",
      metaDescription:
        "Anfrageorientierte Websites und digitale Kundenstrecken als Teil sauberer Prozesse. ITE Consult GmbH – Sichtbarkeit mit Prozessanbindung. Jetzt anfragen.",
      keywords: [
        "Digitale Kundenstrecke",
        "Anfrageorientierte Website",
        "Landingpage Digitalisierung",
        "Kontaktprozess digital",
        "Website Prozessintegration",
      ],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}
