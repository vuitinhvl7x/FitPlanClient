import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header"; // Import Header component
import { FooterNavigation } from "@/components/footer-navigation"; // Import FooterNavigation

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FITPLAN - Training Log",
  description: "Your personal fitness training app",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Root container using flex column to manage layout */}
        <div className="flex flex-col min-h-screen bg-[#1A1A1A] text-white">
          {/* Header (fixed at top) */}
          <Header />

          {/* Main content area (takes remaining space, allows scrolling) */}
          {/* Add pt-[60px] to push content below the fixed header */}
          {/* Add pb-[60px] to ensure content is not hidden by the fixed footer */}
          <main className="flex-1 overflow-y-auto pt-[60px] pb-[60px]">
            {children} {/* This is where your page content will be rendered */}
          </main>

          {/* Footer Navigation (fixed at bottom) */}
          {/* FooterNavigation component already has fixed positioning */}
          <FooterNavigation />
        </div>
      </body>
    </html>
  );
}
