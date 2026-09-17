export type LeadCaptureInput = {
  name: string;
  business: string;
  website: string;
  email: string;
  phone: string;
  challenge: string;
  need: string;
  consent: boolean;
};

/**
 * Canonical payload for the future CRM connector.
 * Keep this shape independent from the form so a webhook or server action
 * can map it to GoHighLevel custom fields without changing the UI.
 */
export function buildLeadPayload(input: LeadCaptureInput) {
  return {
    firstName: input.name.trim(),
    companyName: input.business.trim(),
    website: input.website.trim(),
    email: input.email.trim().toLowerCase(),
    phone: input.phone.trim(),
    primaryChallenge: input.challenge,
    message: input.need.trim(),
    source: "nuerovas.com",
    consentToContact: input.consent,
  };
}
