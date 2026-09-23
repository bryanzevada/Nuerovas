import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Turn more customer conversations into growth | Nuerovas",
  description: siteConfig.description,
  openGraph: {
    title: "Turn more customer conversations into growth | Nuerovas",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turn More Inquiries Into Booked Work | Nuerovas",
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-paper font-sans text-ink antialiased`}>
        {children}
        <Script id="nuerovas-votel-widget" strategy="afterInteractive">
          {`(function(w,d,s,l,i){
  w[l]=w[l]||[];
  w[l].config = {
    "id": "widget-1790124194165-83jo7qwvo",
    "name": "Nuerovas AI Assistant",
    "theme": "light",
    "enabled": true,
    "autoOpen": false,
    "fontSize": 15,
    "metadata": {},
    "position": "bottom-right",
    "agentName": "AI Assistant",
    "chatWidth": "compact",
    "createdAt": "2026-09-23T00:43:14.165Z",
    "customCSS": "",
    "textColor": "#0d0d0d",
    "updatedAt": "2026-09-23T01:38:27.883Z",
    "buttonText": "Chat with us",
    "fontFamily": "Montserrat",
    "widgetMode": "chat-voice",
    "companyName": "Nuerovas",
    "snapPadding": 0,
    "targetDivId": "",
    "primaryColor": "#ffffff",
    "snapToScreen": false,
    "mountStrategy": "append",
    "labelFontWeight": 700,
    "placeholderText": "Nuerovas AI Assist",
    "customFontFamily": "",
    "customJavaScript": "",
    "gradientEndColor": "#009dff",
    "shortcutMessages": [],
    "gradientStartColor": "#ffffff",
    "allowTranscriptToggle": true,
    "enableVisitorIdentity": true,
    "avatarUrl": "/api/upload/bc08d450-be6e-4551-89ba-cf8ef0977038/image/83203832-62ed-4b75-96e7-b910e30e0407.png",
    "agentId": "f515b5f0-518a-427b-b63c-62a3f66aa5b0",
    "apiUrl": "https://app.votel.ai",
    "stid": "bc08d450-be6e-4551-89ba-cf8ef0977038"
  };
  var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s);
  j.async=true;
  j.src='https://app.votel.ai/widget/embed.js?id='+i;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','VotelWidget','widget-1790124194165-83jo7qwvo');`}
        </Script>
      </body>
    </html>
  );
}
