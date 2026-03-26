"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fadeUp, stagger } from "@/lib/animations";
import { siteConfig } from "@/lib/config";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function LeadMagnet() {
  const [submitted, setSubmitted] = useState(false);
  const [betreff, setBetreff] = useState("");
  const [name, setName] = useState("");
  const [telefon, setTelefon] = useState("");
  const [nachricht, setNachricht] = useState("");
  const [datenschutz, setDatenschutz] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!datenschutz) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          anrede: "Keine Angabe",
          name,
          telefon,
          email: "",
          betreff,
          nachricht,
          datenschutz: true,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Fehler beim Senden. Bitte versuchen Sie es erneut.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="text-center mb-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-accent text-sm font-semibold uppercase tracking-wider mb-3"
            >
              Unverbindlich &amp; kostenlos
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl font-bold text-white mb-3"
            >
              {siteConfig.leadMagnet.headline}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-300 leading-relaxed">
              {siteConfig.leadMagnet.subline}
            </motion.p>
          </motion.div>

          {/* Form container */}
          <div className="bg-white p-6 md:p-8">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Leistungsbereich */}
                  <div className="space-y-1.5">
                    <Label htmlFor="lm-betreff">Ihr Vorhaben</Label>
                    <Select onValueChange={setBetreff} required>
                      <SelectTrigger id="lm-betreff">
                        <SelectValue placeholder="Wählen Sie ein Thema..." />
                      </SelectTrigger>
                      <SelectContent>
                        {siteConfig.services.map((s) => (
                          <SelectItem key={s.href} value={s.label}>
                            {s.label}
                          </SelectItem>
                        ))}
                        <SelectItem value="Allgemeine Anfrage">
                          Allgemeine Anfrage
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Name + Telefon */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="lm-name">Ihr Name *</Label>
                      <Input
                        id="lm-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Max Mustermann"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="lm-telefon">Telefon *</Label>
                      <Input
                        id="lm-telefon"
                        type="tel"
                        value={telefon}
                        onChange={(e) => setTelefon(e.target.value)}
                        placeholder="06761 …"
                        required
                      />
                    </div>
                  </div>

                  {/* Nachricht */}
                  <div className="space-y-1.5">
                    <Label htmlFor="lm-nachricht">Kurze Beschreibung</Label>
                    <Textarea
                      id="lm-nachricht"
                      rows={3}
                      value={nachricht}
                      onChange={(e) => setNachricht(e.target.value)}
                      placeholder="Was planen Sie? Dachfläche, Zustand, Besonderheiten – kurz skizziert."
                    />
                  </div>

                  {/* Datenschutz */}
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="lm-datenschutz"
                      checked={datenschutz}
                      onCheckedChange={(v) => setDatenschutz(v === true)}
                    />
                    <label
                      htmlFor="lm-datenschutz"
                      className="text-xs text-slate-500 leading-relaxed cursor-pointer"
                    >
                      Ich habe die{" "}
                      <a
                        href="/datenschutz"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener"
                      >
                        Datenschutzerklärung
                      </a>{" "}
                      gelesen und stimme der Verarbeitung meiner Daten zur
                      Kontaktaufnahme zu.
                    </label>
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}

                  <Button
                    type="submit"
                    variant="accent"
                    className="w-full"
                    disabled={submitting || !datenschutz || !name || !telefon}
                  >
                    {submitting ? "Wird gesendet…" : siteConfig.leadMagnet.cta}
                    {!submitting && <ArrowRight className="h-4 w-4" />}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 mb-4">
                    <CheckCircle className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Vielen Dank, {name}!
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {siteConfig.leadMagnet.resultHeadline}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
