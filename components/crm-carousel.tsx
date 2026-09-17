"use client";

import { ArrowLeft, ArrowRight, Check, PlugZap } from "lucide-react";
import { useState } from "react";

const crms = [
  { name: "Nuerovas workspace", short: "nuerovas", description: "A private-label customer workspace configured around your business." },
  { name: "HubSpot", short: "hubspot", description: "A clear CRM for contacts, deals, marketing, and service." },
  { name: "Salesforce", short: "salesforce", description: "Flexible customer operations for growing teams." },
  { name: "Zoho CRM", short: "zoho", description: "Practical sales workflows with room to expand." },
  { name: "ServiceTitan", short: "service\ntitan", description: "Connect the customer journey to field-service operations." },
  { name: "Jobber", short: "jobber", description: "Keep quotes, clients, jobs, and follow-up moving." },
  { name: "Housecall Pro", short: "housecall\npro", description: "Bring web inquiries and scheduling closer together." },
  { name: "Custom setup", short: "your\nCRM", description: "We can evaluate the tools you already rely on." },
];

export function CrmCarousel() {
  const [active, setActive] = useState(0);
  const current = crms[active];

  function move(direction: number) {
    setActive((index) => (index + direction + crms.length) % crms.length);
  }

  return (
    <div className="mt-10">
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-deep">Compatible CRM ecosystems</p>
          <p className="mt-2 text-sm text-muted">Bring your own platform or let us set one up for you.</p>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button type="button" onClick={() => move(-1)} className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-white text-ink transition hover:border-blue hover:text-blue" aria-label="Previous CRM">
            <ArrowLeft aria-hidden className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => move(1)} className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-white text-ink transition hover:border-blue hover:text-blue" aria-label="Next CRM">
            <ArrowRight aria-hidden className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-5 overflow-hidden">
        <div className="flex gap-3 transition-transform duration-200 ease-out" style={{ transform: `translateX(-${active * 263}px)` }} aria-live="polite">
          {crms.map((crm, index) => (
            <button
              key={crm.name}
              type="button"
              onClick={() => setActive(index)}
              className={`flex min-h-36 w-[250px] max-w-[calc(100vw-40px)] shrink-0 flex-col justify-between rounded-xl border p-5 text-left transition ${index === active ? "border-blue bg-blue-soft shadow-soft" : "border-line bg-white hover:border-blue/50"}`}
              aria-pressed={index === active}
            >
              <span className={`whitespace-pre-line font-display text-2xl font-bold leading-[0.9] ${index === active ? "text-blue-deep" : "text-ink"}`}>{crm.short}</span>
              <span>
                <span className="block text-sm font-semibold text-ink">{crm.name}</span>
                <span className="mt-1 block text-xs leading-5 text-muted">{crm.description}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-5 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-soft text-blue-deep"><PlugZap aria-hidden className="h-4 w-4" /></span>
          <p className="max-w-xl text-sm leading-6 text-muted"><span className="font-semibold text-ink">{current.name} integration:</span> We map the lead details, notifications, follow-up, and booking steps your business actually needs.</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-success"><Check aria-hidden className="h-4 w-4" /> Human-reviewed setup</div>
      </div>
    </div>
  );
}
