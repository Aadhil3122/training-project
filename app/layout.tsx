import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import TopPrefooter from "@/components/TopPrefooter";
import Prefooter from "@/components/Prefooter";
import Footer from "@/components/Footer";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "Imman Quran Institute",
  description: "Online Islamic Madrasah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Header />

        <Navbar />

        {/* PAGE CONTENT */}
        <main className="min-h-screen">{children}</main>

        {/* GLOBAL PRE-FOOTERS */}
        <TopPrefooter />
        <Prefooter />

        {/* GLOBAL FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
