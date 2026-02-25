import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// The portfolio lives at /catalogo on the main domain (served via rewrite)
const BASE_URL = "https://uningenieromas.vercel.app/catalogo";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: ".uningenieromás — Portafolio de Ingeniero en Sistemas",
    template: "%s | .uningenieromás",
  },
  description:
    "Portafolio profesional de Santiago Mora Nuñez. Ingeniero en Sistemas especializado en desarrollo web full-stack, apps móviles, arquitectura de software y soluciones escalables.",
  keywords: [
    "ingeniero en sistemas",
    "desarrollador full-stack",
    "Next.js developer",
    "React Native",
    "portafolio programador",
    "desarrollo web México",
    "Santiago Mora Nuñez",
    "uningenieromás",
  ],
  authors: [{ name: "Santiago Mora Nuñez" }],
  creator: "Santiago Mora Nuñez",
  publisher: "Santiago Mora Nuñez",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: BASE_URL,
    siteName: ".uningenieromás",
    title: ".uningenieromás — Portafolio de Ingeniero en Sistemas",
    description:
      "Desarrollo web full-stack, apps móviles y arquitectura de software. Proyectos reales con tecnologías modernas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: ".uningenieromás — Portafolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ".uningenieromás — Portafolio de Ingeniero en Sistemas",
    description:
      "Desarrollo web full-stack, apps móviles y arquitectura de software. Proyectos reales con tecnologías modernas.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased relative">
        {children}
      </body>
    </html>
  );
}
