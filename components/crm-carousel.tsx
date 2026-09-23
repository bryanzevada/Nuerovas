import Image from "next/image";

type Crm = { name: string; logo?: string; alt?: string; wordmark?: string };

const crms: Crm[] = [
  { name: "Nuerovas workspace", logo: "/brand/nuerovas-logo.png", alt: "Nuerovas" },
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
    </div>
  );
}
