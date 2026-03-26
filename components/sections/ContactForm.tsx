"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/config";

const contactSchema = z.object({
  anrede: z.string().min(1, "Bitte wählen Sie eine Anrede"),
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein"),
  telefon: z.string().min(5, "Bitte geben Sie Ihre Telefonnummer ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  betreff: z.string().min(1, "Bitte wählen Sie ein Thema"),
  nachricht: z.string().min(10, "Bitte beschreiben Sie Ihr Anliegen kurz"),
  datenschutz: z.boolean().refine((val) => val === true, {
    message: "Bitte stimmen Sie der Datenschutzerklärung zu",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      datenschutz: false,
    },
  });

  const datenschutz = watch("datenschutz");

  const onSubmit = async (data: ContactFormData) => {
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Fehler beim Senden");
      setSubmitted(true);
    } catch {
      setError(
        "Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an."
      );
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 mb-4">
          <CheckCircle className="h-7 w-7 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Anfrage erhalten!
        </h3>
        <p className="text-slate-600 max-w-sm mx-auto">
          Vielen Dank für Ihre Nachricht. Wir melden uns innerhalb eines
          Werktages bei Ihnen. Bei dringenden Anliegen erreichen Sie uns unter{" "}
          <a
            href={`tel:${siteConfig.company.phoneTel}`}
            className="text-primary font-medium hover:underline"
          >
            {siteConfig.company.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Anrede + Name */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="anrede">Anrede *</Label>
          <Select onValueChange={(v) => setValue("anrede", v)}>
            <SelectTrigger id="anrede">
              <SelectValue placeholder="Wählen..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Herr">Herr</SelectItem>
              <SelectItem value="Frau">Frau</SelectItem>
              <SelectItem value="Divers">Divers</SelectItem>
            </SelectContent>
          </Select>
          {errors.anrede && (
            <p className="text-xs text-red-500">{errors.anrede.message}</p>
          )}
        </div>
        <div className="sm:col-span-2 space-y-1.5">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            placeholder="Max Mustermann"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
      </div>

      {/* Telefon + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="telefon">Telefon *</Label>
          <Input
            id="telefon"
            type="tel"
            placeholder="06761 123456"
            {...register("telefon")}
          />
          {errors.telefon && (
            <p className="text-xs text-red-500">{errors.telefon.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">E-Mail *</Label>
          <Input
            id="email"
            type="email"
            placeholder="ihre@email.de"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Betreff */}
      <div className="space-y-1.5">
        <Label htmlFor="betreff">Thema *</Label>
        <Select onValueChange={(v) => setValue("betreff", v)}>
          <SelectTrigger id="betreff">
            <SelectValue placeholder="Wählen Sie ein Thema..." />
          </SelectTrigger>
          <SelectContent>
            {siteConfig.services.map((service) => (
              <SelectItem key={service.href} value={service.label}>
                {service.label}
              </SelectItem>
            ))}
            <SelectItem value="Allgemeine Anfrage">Allgemeine Anfrage</SelectItem>
          </SelectContent>
        </Select>
        {errors.betreff && (
          <p className="text-xs text-red-500">{errors.betreff.message}</p>
        )}
      </div>

      {/* Nachricht */}
      <div className="space-y-1.5">
        <Label htmlFor="nachricht">Ihre Nachricht *</Label>
        <Textarea
          id="nachricht"
          rows={4}
          placeholder="Beschreiben Sie kurz Ihr Vorhaben – Dachfläche, Zustand, was ist geplant..."
          {...register("nachricht")}
        />
        {errors.nachricht && (
          <p className="text-xs text-red-500">{errors.nachricht.message}</p>
        )}
      </div>

      {/* Datenschutz */}
      <div className="flex items-start gap-3">
        <Checkbox
          id="datenschutz"
          checked={datenschutz}
          onCheckedChange={(checked) =>
            setValue("datenschutz", checked === true)
          }
          className="mt-0.5"
        />
        <label htmlFor="datenschutz" className="text-sm text-slate-600 cursor-pointer">
          Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
          <a
            href="/datenschutz"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener"
          >
            Datenschutzerklärung
          </a>{" "}
          zu. *
        </label>
      </div>
      {errors.datenschutz && (
        <p className="text-xs text-red-500 -mt-3">
          {errors.datenschutz.message}
        </p>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3">
          {error}
        </div>
      )}

      <Button
        type="submit"
        variant="default"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          "Anfrage absenden"
        )}
      </Button>

      <p className="text-xs text-slate-400 text-center">
        * Pflichtfelder. Wir antworten in der Regel innerhalb eines Werktages.
      </p>
    </form>
  );
}
