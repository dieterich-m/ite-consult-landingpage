"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/layout/MobileNav";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm"
          : "bg-white border-b border-slate-200"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-primary text-lg shrink-0"
        >
          <span className="text-accent font-mono text-xl">ITE</span>
          <span className="hidden sm:inline">{siteConfig.company.name}</span>
          <span className="sm:hidden">ITE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Leistungen dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary transition-colors">
              Leistungen
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  servicesOpen && "rotate-180"
                )}
              />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 w-56 bg-white border border-slate-200 shadow-md py-1 z-10">
                {siteConfig.services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#ueber-uns"
            className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary transition-colors"
          >
            Über uns
          </Link>
          <Link
            href="/#kontakt"
            className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary transition-colors"
          >
            Kontakt
          </Link>
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${siteConfig.company.phoneTel}`}
            className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.company.phone}
          </a>
          <Button asChild variant="accent" size="sm">
            <Link href="/#kontakt">Anfrage senden</Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
