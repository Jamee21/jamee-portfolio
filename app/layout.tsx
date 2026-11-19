import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0f1a",
};

export const metadata: Metadata = {
  title: "Jamee Raza | Full-Stack & AI Developer",
  description:
    "Portfolio of Jamee Raza — Software Engineering student, Full-Stack Developer and AI agent builder based in Karachi, Pakistan.",
  keywords: ["Jamee Raza", "Full-Stack Developer", "React", "Next.js", "Node.js", "AI Agent", "Karachi"],
  authors: [{ name: "Jamee Raza", url: "https://github.com/Jamee21" }],
  openGraph: {
    type: "website",
    title: "Jamee Raza | Full-Stack & AI Developer",
    description: "React, Next.js, Node.js and AI assistants — built from interface to database.",
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
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
