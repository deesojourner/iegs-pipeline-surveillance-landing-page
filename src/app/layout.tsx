import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Indepth Earth | Pipeline Surveillance Services",
  description:
    "Advanced pipeline surveillance combining drone reconnaissance, satellite monitoring, LiDAR scanning, thermal imaging, and AI-powered anomaly detection for critical energy infrastructure.",
  keywords:
    "pipeline surveillance, drone monitoring, satellite imagery, LiDAR scanning, thermal imaging, GIS analysis, AI anomaly detection, leak detection, pipeline integrity, right-of-way monitoring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-white text-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}
