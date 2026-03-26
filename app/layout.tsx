import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EmergencyBanner from "@/components/layout/EmergencyBanner";
import FloatingCTA from "@/components/shared/FloatingCTA";
import { siteConfig } from "@/lib/config";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.meta.title,
    template: `%s | ${siteConfig.company.name}`,
  },
  description: siteConfig.meta.description,
  metadataBase: new URL(siteConfig.meta.siteUrl),
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: siteConfig.meta.siteUrl,
    siteName: siteConfig.company.name,
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.company.name,
  description: siteConfig.meta.description,
  url: siteConfig.meta.siteUrl,
  telephone: siteConfig.company.phone,
  email: siteConfig.company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.company.address.street,
    postalCode: siteConfig.company.address.zip,
    addressLocality: siteConfig.company.address.city,
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "49.9167",
    longitude: "7.5167",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      description: siteConfig.company.hours.weekdays,
    },
  ],
  areaServed: siteConfig.serviceOrte.join(", "),
  foundingDate: siteConfig.company.founded.toString(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <EmergencyBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
