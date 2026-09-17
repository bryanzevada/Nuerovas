"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { buildLeadPayload, type LeadCaptureInput } from "@/lib/lead-capture";

const initialState: LeadCaptureInput = {
  name: "",
  business: "",
  website: "",
  email: "",
  phone: "",
  challenge: "",
  need: "",
  consent: false,
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadCaptureInput, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof LeadCaptureInput, value: string | boolean) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof LeadCaptureInput, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Add your name.";
    if (!form.business.trim()) nextErrors.business = "Add your business name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Add a valid email.";
    if (!form.challenge) nextErrors.challenge = "Choose the area that needs attention.";
    if (form.need.trim().length < 12) nextErrors.need = "Share a little about what you need.";
    if (!form.consent) nextErrors.consent = "Please confirm we can contact you.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      void buildLeadPayload(form);
      setSubmitted(true);
      setForm(initialState);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink"
            placeholder="Your name"
            autoComplete="name"
          />
        </Field>
        <Field label="Business" error={errors.business}>
          <input
            value={form.business}
            onChange={(event) => updateField("business", event.target.value)}
            className="w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink"
            placeholder="Business name"
            autoComplete="organization"
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Website (optional)" error={errors.website}>
          <input value={form.website} onChange={(event) => updateField("website", event.target.value)} className="w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink" placeholder="yourbusiness.com" autoComplete="url" inputMode="url" />
        </Field>
        <Field label="Phone (optional)" error={errors.phone}>
          <input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} className="w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink" placeholder="(555) 123-4567" autoComplete="tel" inputMode="tel" />
        </Field>
      </div>
      <Field label="Email" error={errors.email}>
        <input
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink"
          placeholder="you@example.com"
          autoComplete="email"
          inputMode="email"
        />
      </Field>
      <Field label="What would you like help with?" error={errors.challenge}>
        <select value={form.challenge} onChange={(event) => updateField("challenge", event.target.value)} className="w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink">
          <option value="">Choose one</option>
          <option value="website">A clearer website</option>
          <option value="automation">Lead capture or follow-up automation</option>
          <option value="ai-support">AI chat or business assistant</option>
          <option value="crm-integration">CRM or calendar integration</option>
          <option value="not-sure">I am not sure yet</option>
        </select>
      </Field>
      <Field label="What would you like to improve?" error={errors.need}>
        <textarea
          value={form.need}
          onChange={(event) => updateField("need", event.target.value)}
          className="min-h-28 w-full resize-y rounded-md border border-line bg-white px-4 py-3 text-sm text-ink"
          placeholder="Missed calls, slow follow-up, outdated website, repetitive questions..."
        />
      </Field>
      <label className="flex items-start gap-3 text-xs leading-5 text-muted">
        <input type="checkbox" checked={form.consent} onChange={(event) => updateField("consent", event.target.checked)} className="mt-1 h-4 w-4 rounded border-line text-blue focus:ring-blue" />
        <span>I agree that Nuerovas may contact me about my request. We will use these details only to respond and prepare the conversation.</span>
      </label>
      {errors.consent ? <p className="text-sm text-red-700">{errors.consent}</p> : null}
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-deep sm:w-auto"
      >
        <Send aria-hidden className="h-4 w-4" />
        Request My Free Review
      </button>
      {submitted ? (
        <p className="rounded-md border border-blue/20 bg-blue-soft px-4 py-3 text-sm text-blue-deep">
          Thanks. Your request is captured and ready to route to the Nuerovas workspace or CRM you choose.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm text-red-700">{error}</span> : null}
    </label>
  );
}
