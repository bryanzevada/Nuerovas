export const siteConfig = {
  name: "Nuerovas",
  brandName: "Nuerovas",
  siteUrl: "https://nuerovas.com/",
  description:
    "Turn more inquiries into booked work with a clearer website, faster follow-up, and practical automation built for local service businesses.",
  email: "hello@example.com",
  phone: "(555) 123-4567",
  bookingUrl: "https://example.com/book-audit",
  social: {
    linkedin: "https://example.com/linkedin",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: {
    primary: "Get a Free Workflow Review",
  },
};

export type SiteConfig = typeof siteConfig;
