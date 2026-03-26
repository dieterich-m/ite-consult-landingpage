export const siteConfig = {
  company: {
    name: "ITE Consult GmbH",
    legalName: "ITE Consult GmbH",
    owner: "Michael Dieterich",
    claim: "Zeit für das Wesentliche.",
    tagline: "Prozessanalyse für wertschöpfende Automatisierung und Digitalisierung.",
    phone: "+49 175 185 3983",
    phoneTel: "+491751853983",
    phoneEmergency: "",
    phoneEmergencyTel: "",
    email: "michael.dieterich@ite-consult.de",
    address: {
      street: "Hauptstraße 60",
      zip: "55471",
      city: "Sargenroth",
      full: "Hauptstraße 60, 55471 Sargenroth",
    },
    region: "Hunsrück",
    serviceRadius: "deutschlandweit",
    radiusKm: 0,
    founded: 2000,
    registrationCourt: "Amtsgericht Bad Kreuznach",
    registrationNumber: "HRB 4367",
    ustId: "DE219143426",
    ihk: "IHK Koblenz",
    hours: {
      weekdays: "Nach Vereinbarung",
      saturday: "Nach Vereinbarung",
      emergency: "",
    },
    traditionHinweis: "Automatisierung und Digitalisierung mit Herz, Verstand und Verantwortung.",
  },
  colors: {
    primary: "#2563eb",
    primaryLight: "#60a5fa",
    primaryLighter: "#e0f2fe",
    accent: "#0f172a",
    accentLight: "#1e293b",
    emergency: "#dc2626",
  },
  socialProof: {
    rating: 5.0,
    reviewCount: 0,
    yearsExperience: 25,
    completedProjects: 0,
    employees: 0,
    meisterbetrieb: false,
  },
  features: {
    notdienst_banner: false,
    whatsapp: false,
    analytics: false,
    cookie_consent: true,
    galerie: false,
    team_sektion: false,
    faq: true,
    blog: false,
    google_maps: false,
    kontakt_backend: "resend",
  },
  hero: {
    headline: "Zeit für das Wesentliche.",
    subline:
      "Prozessanalyse für wertschöpfende Automatisierung und Digitalisierung mit Herz, Verstand und Verantwortung.",
    cta_primary: "Potenzialanalyse anfragen",
    cta_secondary: "Kontakt aufnehmen",
  },
  ueber_uns: {
    kurz: "ITE Consult steht für praxisnahe Automatisierung, wertschöpfende Digitalisierung und datenschutzsaubere Systemarchitektur. Im Mittelpunkt stehen nicht Tools um ihrer selbst willen, sondern Entlastung, Klarheit und Lösungen, die im Alltag wirklich tragen. So entstehen Freiräume für sinnstiftende Arbeit und für das, was Menschen in ihren eigentlichen Kernkompetenzen am besten leisten können.",
  },
  leadMagnet: {
    headline: "Potenzialanalyse anfragen",
    subline:
      "Sie möchten Automatisierungspotenziale strukturiert erkennen, priorisieren und sinnvoll in die Umsetzung bringen?",
    cta: "Jetzt Potenzialanalyse anfragen",
    resultHeadline: "Vielen Dank – wir melden uns persönlich zurück.",
  },
  serviceOrte: [
    "Sargenroth",
    "Hunsrück",
    "Rheinland-Pfalz",
    "deutschlandweit",
  ],
  navigation: [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Über ITE", href: "#ueber-uns" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  services: [
    { label: "Prozessanalyse", href: "/leistungen/prozessanalyse-automatisierung" },
    { label: "Automatisierungsberatung", href: "/leistungen/automatisierungsberatung" },
    { label: "KI-gestützte Entlastung", href: "/leistungen/ki-backoffice-entlastung" },
    { label: "Datenschutzsaubere Architektur", href: "/leistungen/datenschutzsaubere-architektur" },
    { label: "Potenzialanalysen", href: "/leistungen/potenzialanalyse" },
    { label: "Digitale Kundenstrecken", href: "/leistungen/digitale-kundenstrecken" },
  ],
  reviews: [] as {
    name: string;
    city: string;
    rating: number;
    text: string;
    date: string;
  }[],
  faqs: [
    {
      question: "Beginnt die Zusammenarbeit direkt mit einem Tool oder einer konkreten Lösung?",
      answer:
        "Nein. Der Einstieg erfolgt über eine strukturierte Analyse. Erst wenn klar ist, wo der größte Hebel liegt, wird über passende Lösungen gesprochen.",
    },
    {
      question: "Arbeitet ITE Consult mit festen Produkten oder tooloffen?",
      answer:
        "ITE arbeitet grundsätzlich praxisnah und tooloffen. Je nach Anforderung kommen unterschiedliche Werkzeuge und Ansätze zum Einsatz, unter anderem auch n8n.",
    },
    {
      question: "Ist Datenschutz bei Automatisierung und KI ein eigenes Thema?",
      answer:
        "Ja. Gute Digitalisierung muss nicht nur funktionieren, sondern auch nachvollziehbar und datenschutzsauber aufgebaut sein. Genau das wird von Anfang an mitgedacht.",
    },
    {
      question: "Für wen ist das Angebot besonders geeignet?",
      answer:
        "Vor allem für mittelständische Unternehmen und öffentliche Verwaltungen mit dokumenten-, prüfungs- oder routinelastigen Abläufen, in denen Entlastung und Klarheit echten Mehrwert schaffen.",
    },
    {
      question: "Was ist das Ziel einer Potenzialanalyse?",
      answer:
        "Die Potenzialanalyse schafft eine belastbare Grundlage, um Prozesse zu priorisieren, Entlastungspotenziale sichtbar zu machen und sinnvolle nächste Schritte in Richtung Automatisierung und Digitalisierung abzuleiten.",
    },
    {
      question: "Wie läuft eine erste Anfrage ab?",
      answer:
        "Über das Kontaktformular können Sie Ihr Vorhaben kurz schildern. Danach erfolgt eine persönliche Rückmeldung zur weiteren Abstimmung.",
    },
  ],
  meta: {
    siteUrl: "https://www.ite-consult.de",
    title: "ITE Consult GmbH – Automatisierung und Digitalisierung für Mittelstand und Verwaltung",
    description:
      "Praxisnahe Prozessanalyse, KI-gestützte Entlastung und datenschutzsaubere Systemarchitektur. ITE Consult GmbH – Automatisierung mit Herz, Verstand und Verantwortung.",
    ogImage: "/og-image.jpg",
  },
} as const;

export type SiteConfig = typeof siteConfig;
