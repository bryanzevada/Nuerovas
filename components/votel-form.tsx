"use client";

import Script from "next/script";

declare global {
  interface Window {
    CRMEmbed?: {
      createWidget: (formId: string, options: { width: string; transparent: boolean }) => void;
    };
  }
}

export function VotelForm() {
  return (
    <>
      <div id="crm-form-W210" />
      <Script
        src="https://app.votel.ai/form-embed/v1.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.CRMEmbed?.createWidget("W210", { width: "100%", transparent: true });
        }}
      />
    </>
  );
}
