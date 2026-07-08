import type { Metadata } from "next";
import { Geist, Geist_Mono, Metal_Mania } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metalMania = Metal_Mania({
  variable: "--font-medieval",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chainbreaker 2026 | Forged in Iron, Riding for a Cause",
  description:
    "A charity bike ride on the W&OD Trail starting from Herndon, Virginia. Choose your quest: 30, 60, or 100 miles. All proceeds go to charity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${metalMania.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#ededed]">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
