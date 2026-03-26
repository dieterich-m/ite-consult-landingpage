"use client";

import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Menü öffnen">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-primary text-xl font-bold">
            {siteConfig.company.name}
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 mt-4 flex-1">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
            Leistungen
          </p>
          {siteConfig.services.map((service) => (
            <SheetClose asChild key={service.href}>
              <Link
                href={service.href}
                className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
              >
                {service.label}
              </Link>
            </SheetClose>
          ))}
          <div className="my-4 border-t border-slate-100" />
          <SheetClose asChild>
            <Link
              href="/#ueber-uns"
              className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
            >
              Über uns
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/#kontakt"
              className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
            >
              Kontakt
            </Link>
          </SheetClose>
        </nav>
        <div className="border-t border-slate-100 pt-4 mt-4">
          <a
            href={`tel:${siteConfig.company.phoneTel}`}
            className="flex items-center gap-3 bg-accent text-white px-4 py-3 rounded-md font-semibold"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.company.phone}
          </a>
          <p className="text-xs text-slate-500 mt-2 text-center">
            {siteConfig.company.hours.weekdays}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
