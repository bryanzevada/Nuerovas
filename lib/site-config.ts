export const siteConfig = {
  name: "Nuerovas",
  brandName: "Nuerovas",
  siteUrl: "https://nuerovas.com/",
  description:
    "Nuerovas builds high-quality websites, practical automations, and helpful AI agents that turn customer conversations into growth.",
  email: "hello@example.com",
  phone: "(555) 123-4567",
  bookingUrl: "https://example.com/book-audit",
  social: {
    linkedin: "https://example.com/linkedin",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Industries", href: "#industries" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  cta: {
    primary: "Book a Strategy Call",
  },
};

export type SiteConfig = typeof siteConfig;
