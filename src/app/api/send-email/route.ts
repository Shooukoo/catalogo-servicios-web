import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ─── Transporte Nodemailer (Gmail SMTP) ───────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ─── HTML del correo ─────────────────────────────────────────────────────────
function buildContactoHtml(data: ContactPayload) {
  function row(label: string, value: string) {
    return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #27272a;font-size:12px;font-weight:600;color:#71717a;width:35%;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #27272a;font-size:14px;color:#e4e4e7;vertical-align:top;">${value}</td>
    </tr>`;
  }

  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#09090b;font-family:'Segoe UI',Arial,sans-serif;color:#e4e4e7;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center" style="padding:32px 16px;">
      <table width="560" style="max-width:560px;background:#18181b;border-radius:16px;overflow:hidden;border:1px solid #27272a;">
        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#7c3aed,#4f46e5);padding:28px 32px;">
          <p style="margin:0;font-size:12px;font-weight:700;color:#c4b5fd;letter-spacing:2px;text-transform:uppercase;">Un Ingeniero Más — Portafolio</p>
          <h1 style="margin:8px 0 0;font-size:22px;font-weight:800;color:#fff;">📬 Nuevo Mensaje de Contacto</h1>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:28px 32px;">
          <p style="margin:0 0 20px;font-size:14px;color:#a1a1aa;">
            Recibiste un nuevo mensaje a través del formulario de contacto del portafolio.
          </p>

          <!-- Data table -->
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            ${row("👤 Nombre", data.name)}
            ${row("📱 WhatsApp", data.whatsapp)}
            ${row("📌 Asunto", data.subject)}
          </table>

          <!-- Message -->
          <div style="margin-top:20px;background:#09090b;border-radius:12px;padding:16px 20px;border:1px solid #27272a;">
            <p style="margin:0 0 8px;font-size:11px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:1px;">Mensaje</p>
            <p style="margin:0;font-size:14px;color:#d4d4d8;line-height:1.7;white-space:pre-wrap;">${data.message}</p>
          </div>
        </td></tr>
        <!-- Footer -->
        <tr><td style="padding:20px 32px;border-top:1px solid #27272a;">
          <p style="margin:0;font-size:12px;color:#52525b;text-align:center;">
            Este aviso fue generado automáticamente · Un Ingeniero Más — Portafolio
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Tipos ────────────────────────────────────────────────────────────────────
interface ContactPayload {
  name: string;
  whatsapp: string;
  subject: string;
  message: string;
}

// ─── Handler POST ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const data: ContactPayload = await req.json();

    if (!data.name || !data.subject || !data.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Portafolio — Un Ingeniero Más 💼" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `📬 Nuevo Contacto: ${data.subject}`,
      html: buildContactoHtml(data),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[send-email] Error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
