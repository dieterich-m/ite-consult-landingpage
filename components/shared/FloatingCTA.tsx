"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <a
        href={`tel:${siteConfig.company.phoneTel}`}
        className="flex items-center justify-center gap-2 bg-accent text-white py-4 text-base font-semibold shadow-lg"
      >
        <Phone className="h-5 w-5" />
        Jetzt anrufen
      </a>
    </div>
  );
}
