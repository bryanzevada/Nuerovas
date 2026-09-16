"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

type FormState = {
  name: string;
  business: string;
  email: string;
  need: string;
};

const initialState: FormState = {
  name: "",
  business: "",
  email: "",
  need: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Add your name.";
    if (!form.business.trim()) nextErrors.business = "Add your business name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Add a valid email.";
    if (form.need.trim().length < 12) nextErrors.need = "Share a little about what you need.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
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
      <Field label="What would you like to improve?" error={errors.need}>
        <textarea
          value={form.need}
          onChange={(event) => updateField("need", event.target.value)}
          className="min-h-28 w-full resize-y rounded-md border border-line bg-white px-4 py-3 text-sm text-ink"
          placeholder="Missed calls, slow follow-up, outdated website, repetitive questions..."
        />
      </Field>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-deep sm:w-auto"
      >
        <Send aria-hidden className="h-4 w-4" />
        Talk Through My Business
      </button>
      {submitted ? (
        <p className="rounded-md border border-blue/20 bg-blue-soft px-4 py-3 text-sm text-blue-deep">
          Thanks. This demo form is validated and ready to connect to your preferred inbox or CRM.
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
