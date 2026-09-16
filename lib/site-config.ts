export const siteConfig = {
  name: "Bryan",
  brandName: "Bryan | AI Websites & Automation",
  siteUrl: "https://nuerovas.com/",
  description:
    "Local website and AI automation help for small businesses that want better lead capture, faster follow-up, and less repetitive admin work.",
  email: "hello@example.com",
  phone: "(555) 123-4567",
  bookingUrl: "https://example.com/book-audit",
  social: {
    linkedin: "https://example.com/linkedin",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "AI Assistants", href: "#ai-assistants" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: {
    primary: "Book a Free Workflow Audit",
    secondary: "See How It Works",
    supporting: "Let's bring AI to your business",
  },
};

export type SiteConfig = typeof siteConfig;
