import Image from "next/image";
import { Check, PlugZap } from "lucide-react";

type Crm = { name: string; logo?: string; alt?: string; wordmark?: string };

const crms: Crm[] = [
  { name: "Nuerovas workspace", logo: "/brand/nuerovas-orbit-mark.png", alt: "Nuerovas" },
  { name: "HubSpot", logo: "/brand/crm/hubspot.svg", alt: "HubSpot" },
  { name: "Salesforce", wordmark: "salesforce" },
  { name: "Zoho CRM", logo: "/brand/crm/zoho.svg", alt: "Zoho" },
  { name: "ServiceTitan", wordmark: "service\ntitan" },
  { name: "Jobber", wordmark: "jobber" },
  { name: "Housecall Pro", wordmark: "housecall\npro" },
];

export function CrmCarousel() {
  const marqueeItems = [...crms, ...crms];

  return (
    <div className="relative mt-10 overflow-hidden rounded-xl border border-line bg-white py-7 sm:py-9">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" aria-hidden />
      <div className="crm-marquee flex w-max items-center gap-4 opacity-65" aria-hidden="true">
        {marqueeItems.map((crm, index) => (
          <div key={`${crm.name}-${index}`} className="flex h-24 w-48 shrink-0 items-center justify-center rounded-lg border border-line/80 bg-paper px-6 text-ink sm:w-56">
            {crm.logo ? (
              <Image src={crm.logo} width={crm.name === "Nuerovas workspace" ? 56 : 38} height={crm.name === "Nuerovas workspace" ? 56 : 38} alt={crm.alt ?? crm.name} className="max-h-12 w-auto object-contain" />
            ) : (
              <span className="whitespace-pre-line text-center font-display text-xl font-bold leading-[0.9] tracking-[-0.04em] text-ink">{crm.wordmark}</span>
            )}
          </div>
        ))}
      </div>
      <div className="relative z-20 mx-5 mt-7 flex flex-col gap-5 rounded-xl border border-blue/20 bg-blue-soft/95 p-5 shadow-soft backdrop-blur sm:mx-auto sm:max-w-3xl sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-blue-deep"><PlugZap aria-hidden className="h-4 w-4" /></span>
          <p className="max-w-xl text-sm leading-6 text-muted"><span className="font-semibold text-ink">We integrate the systems behind your customer journey.</span> Bring your existing CRM, or let Nuerovas set up a private-label workspace with automations, AI support, callbacks, and booking workflows ready for your team.</p>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-xs font-semibold text-success"><Check aria-hidden className="h-4 w-4" /> Human-reviewed setup</div>
      </div>
    </div>
  );
}
