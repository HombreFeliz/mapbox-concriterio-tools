import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mapbox GL JS — Con Criterio Tools",
  description:
    "Demo interactiva de Mapbox GL JS: explorador de estilos, geocoding bidireccional y capas GeoJSON con clustering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
