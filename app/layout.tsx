import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Bryan | AI Websites & Automation for Local Businesses",
  description: siteConfig.description,
  openGraph: {
    title: "Bryan | AI Websites & Automation for Local Businesses",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan | AI Websites & Automation for Local Businesses",
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-paper font-sans text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
