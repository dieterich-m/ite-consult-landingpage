import type { ElementType } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  getServiceBySlug,
  getAllSlugs,
} from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Thermometer,
  Zap,
  Settings,
  Wrench,
  AlertCircle,
  Droplets,
  BadgeEuro,
  MapPin,
  Shield,
  Home,
  FileCheck,
  Tag,
  Clock,
  Database,
  Package,
  Calendar,
  Award,
  TrendingUp,
  Calculator,
  ClipboardList,
  Hammer,
  Square,
  Layers,
  Sparkles,
  Sun,
  Search,
} from "lucide-react";

const iconMap: Record<string, ElementType> = {
  Thermometer,
  Zap,
  Settings,
  Wrench,
  AlertCircle,
  Droplets,
  BadgeEuro,
  CheckCircle,
  MapPin,
  Shield,
  Home,
  FileCheck,
  Tag,
  Clock,
  Database,
  Phone,
  Package,
  Calendar,
  Award,
  TrendingUp,
  Calculator,
  ClipboardList,
  Hammer,
  Square,
  Layers,
  Sparkles,
  Sun,
  Search,
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.seo.metaTitle,
    description: service.seo.metaDescription,
    keywords: service.seo.keywords,
  };
}

const processSteps = [
  {
    step: "01",
    title: "Anfrage & Termin",
    description:
      "Schildern Sie Ihr Vorhaben kurz per Telefon oder Formular. Wir vereinbaren einen Termin zur Besichtigung.",
  },
  {
    step: "02",
    title: "Besichtigung & Angebot",
    description:
      "Wir schauen uns die Situation vor Ort an und erstellen ein klares, nachvollziehbares Angebot.",
  },
  {
    step: "03",
    title: "Ausführung",
    description:
      "Fachgerechte Umsetzung durch erfahrene Dachdecker – termingerecht und sauber ausgeführt.",
  },
  {
    step: "04",
    title: "Abnahme",
    description:
      "Gemeinsame Abnahme vor Ort. Wir stehen für Rückfragen zur Verfügung.",
  },
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // TypeScript narrowing after notFound()
  const currentService = service!;
  const ServiceIcon = iconMap[currentService.icon] || Settings;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: currentService.title,
    description: currentService.shortDescription,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.company.name,
      telephone: siteConfig.company.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.company.address.street,
        postalCode: siteConfig.company.address.zip,
        addressLocality: siteConfig.company.address.city,
        addressCountry: "DE",
      },
    },
    areaServed: siteConfig.serviceOrte.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Mini Hero */}
      <section className="bg-slate-800 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Startseite
            </Link>
            <span>/</span>
            <span>Leistungen</span>
            <span>/</span>
            <span className="text-white">{currentService.shortTitle}</span>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-accent/20 p-3 shrink-0">
              <ServiceIcon className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold mb-3">
                {currentService.title}
              </h1>
              <p className="text-slate-300 max-w-2xl leading-relaxed text-lg">
                {currentService.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kennen Sie das? */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">
            Kennen Sie das?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-slate-200">
            {currentService.kundenprobleme.map((problem, i) => (
              <div
                key={i}
                className="border-r border-b border-slate-200 p-6 bg-white"
              >
                <div className="w-6 h-6 bg-slate-100 flex items-center justify-center mb-3">
                  <span className="text-xs font-bold text-slate-500">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                  {problem.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lösung */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-5">
              Unsere Lösung
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              {currentService.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">
            Ihre Vorteile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentService.vorteile.map((vorteil, i) => {
              const VorteilIcon = iconMap[vorteil.icon] || CheckCircle;
              return (
                <div
                  key={i}
                  className="border border-slate-200 bg-white p-6"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary-lighter mb-4">
                    <VorteilIcon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                    {vorteil.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {vorteil.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prozess */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">
            So läuft Ihr Projekt ab
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-slate-200 z-0" style={{ width: "calc(100% - 48px)", left: "48px" }} />
                )}
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white font-mono font-bold text-sm mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            Interesse an {currentService.title}?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Sprechen Sie uns an – wir beraten Sie kostenlos und unverbindlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="accent" size="lg">
              <Link href="/#kontakt">
                Jetzt Termin anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <a href={`tel:${siteConfig.company.phoneTel}`}>
                <Phone className="h-4 w-4" />
                {siteConfig.company.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
