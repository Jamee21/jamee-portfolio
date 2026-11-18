import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

/* Body font — Inter is the clearest UI typeface at any weight */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

/* Display font — Syne adds character to headings */
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060d18",
};

export const metadata: Metadata = {
  title: "Jamee Raza | Full-Stack & AI Developer",
  description:
    "Portfolio of Jamee Raza — Software Engineering student, Full-Stack Developer and AI agent builder based in Karachi, Pakistan. React, Next.js, Node.js, Gemini API.",
  keywords: [
    "Jamee Raza",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "AI Agent",
    "Gemini API",
    "Karachi",
    "Pakistan",
    "Software Engineer",
  ],
  authors: [{ name: "Jamee Raza", url: "https://github.com/Jamee21" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Jamee Raza | Full-Stack & AI Developer",
    description:
      "React, Next.js, Node.js and AI assistants — built from interface to database.",
    siteName: "Jamee Raza Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamee Raza | Full-Stack & AI Developer",
    description: "React, Next.js, Node.js and AI assistants — built from interface to database.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
