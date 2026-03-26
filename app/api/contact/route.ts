import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  anrede: z.string().min(1),
  name: z.string().min(2),
  telefon: z.string().min(5),
  email: z.string().email().or(z.literal("")),
  betreff: z.string().min(1),
  nachricht: z.string().min(10).or(z.literal("")),
  datenschutz: z.boolean().refine((v) => v === true),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Ungültige Formulardaten",
          errors: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = result.data;

    // Wenn kein API-Key gesetzt ist, im Frontend-Modus nur loggen und Erfolg zurückgeben
    if (!process.env.RESEND_API_KEY) {
      console.log("[Kontaktformular – Frontend-Modus] Neue Anfrage:", {
        name: data.name,
        telefon: data.telefon,
        email: data.email,
        betreff: data.betreff,
        nachricht: data.nachricht,
      });
      return NextResponse.json(
        {
          success: true,
          message:
            "Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb eines Werktages bei Ihnen.",
        },
        { status: 200 }
      );
    }

    // Produktiv: E-Mail via Resend senden
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "ITE Consult Kontaktformular <kontakt@ite-consult.de>",
      to: "info@ite-consult.de",
      replyTo: data.email || undefined,
      subject: `Neue Anfrage: ${data.betreff} – ${data.name}`,
      html: `
        <h2>Neue Kontaktanfrage über ite-consult.de</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;">
          <tr><td style="padding:8px;font-weight:bold;width:140px;">Anrede</td><td style="padding:8px;">${data.anrede}</td></tr>
          <tr style="background:#f8f9fa;"><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${data.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Telefon</td><td style="padding:8px;"><a href="tel:${data.telefon}">${data.telefon}</a></td></tr>
          <tr style="background:#f8f9fa;"><td style="padding:8px;font-weight:bold;">E-Mail</td><td style="padding:8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Betreff</td><td style="padding:8px;">${data.betreff}</td></tr>
          <tr style="background:#f8f9fa;"><td style="padding:8px;font-weight:bold;">Nachricht</td><td style="padding:8px;">${data.nachricht}</td></tr>
        </table>
        <p style="color:#666;font-size:12px;margin-top:24px;">Diese E-Mail wurde automatisch über das Kontaktformular gesendet.</p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb eines Werktages bei Ihnen.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler beim E-Mail-Versand:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Interner Serverfehler. Bitte versuchen Sie es erneut.",
      },
      { status: 500 }
    );
  }
}
