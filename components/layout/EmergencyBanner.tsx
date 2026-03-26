"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !siteConfig.features.notdienst_banner) return null;

  return (
    <div className="bg-emergency text-white text-sm py-2 px-4 flex items-center justify-between">
      <div className="flex items-center gap-2 flex-1 justify-center">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <span className="font-medium">
          Notdienst für Bestandskunden:{" "}
          <a
            href={`tel:${siteConfig.company.phoneEmergencyTel}`}
            className="underline font-bold hover:no-underline"
          >
            {siteConfig.company.phoneEmergency}
          </a>{" "}
          &ndash; 24/7
        </span>
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Banner schließen"
        className="ml-4 p-1 hover:bg-white/20 rounded transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
