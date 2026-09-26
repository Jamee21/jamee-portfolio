import "./globals.css";

export const metadata = {
  title: "Jamee Raza | Full-Stack / Front-End Developer",
  description:
    "Portfolio of Jamee Raza, a Software Engineering student and Full-Stack / Front-End Developer based in Karachi, Pakistan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}