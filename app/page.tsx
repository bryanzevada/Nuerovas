import {
  BellRing,
  Bot,
  CalendarCheck,
  Check,
  ClipboardCheck,
  FileText,
  Globe2,
  Handshake,
  HelpCircle,
  MailCheck,
  MessageSquareText,
  MousePointerClick,
  PhoneCall,
  RefreshCcw,
  SearchCheck,
  Send,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";
import { siteConfig } from "@/lib/site-config";

const services = [
  {
    title: "Website Launch",
    icon: Globe2,
    description: "A clear, modern website that helps customers understand your services and contact you.",
    bullets: [
      "Modern responsive website",
      "Mobile-friendly design",
      "Clear service pages",
      "Contact and quote forms",
      "Search-engine-friendly structure",
      "Analytics setup",
      "Call and booking buttons",
    ],
  },
  {
    title: "Lead Capture and Follow-Up",
    icon: MailCheck,
    description: "Simple workflows that acknowledge leads quickly and keep the owner in the loop.",
    bullets: [
      "Website forms",
      "Lead routing",
      "Missed-call text-back",
      "Callback requests",
      "Email and SMS follow-up",
      "Estimate request workflows",
      "Owner notifications",
      "CRM pipeline setup",
    ],
  },
  {
    title: "AI Website Assistant",
    icon: Bot,
    description: "A business-specific assistant for approved FAQs, lead details, and clear handoffs.",
    bullets: [
      "Answers approved business FAQs",
      "Service and availability guidance",
      "Lead qualification",
      "Callback requests",
      "Appointment handoff",
      "Human escalation",
      "Business-specific knowledge and tone",
    ],
  },
  {
    title: "Ongoing Improvement",
    icon: RefreshCcw,
    description: "Monthly care for the website, workflows, knowledge base, and practical improvements.",
    bullets: [
      "Website updates",
      "Workflow monitoring",
      "AI knowledge-base updates",
      "Monthly reporting",
      "New automation improvements",
      "Technical support",
    ],
  },
];

const problems = [
  "Customers cannot quickly find the right information.",
  "Calls get missed while the owner is busy serving customers.",
  "Website inquiries sit too long before someone follows up.",
  "Staff answer the same questions again and again.",
  "Owners do not know which leads turned into real opportunities.",
];

const steps = [
  {
    title: "Understand the business",
    description:
      "We start with a normal conversation and a workflow audit: what customers ask, where leads come from, and where follow-up slows down.",
  },
  {
    title: "Build the right website and workflow",
    description:
      "I create the website, forms, routing, notifications, and practical automations that fit how your business already works.",
  },
  {
    title: "Improve the system over time",
    description:
      "After launch, we keep the content fresh, monitor the workflow, and add useful improvements as new needs show up.",
  },
];

const journey = [
  { label: "Website visitor", icon: MousePointerClick },
  { label: "Inquiry or phone call", icon: PhoneCall },
  { label: "Instant acknowledgement", icon: BellRing },
  { label: "Qualification or FAQ response", icon: ClipboardCheck },
  { label: "Booking or callback request", icon: CalendarCheck },
  { label: "Owner notification", icon: Send },
];

const assistantPrinciples = [
  "Uses the business's approved information",
  "Answers questions and collects lead details",
  "Requests callbacks or guides visitors to booking",
  "Hands off uncertain or sensitive situations to a human",
  "Does not invent policies, prices, availability, or guarantees",
];

const pricingItems = [
  "First month free",
  "$1,000 one-time website build fee",
  "$100 per month for maintenance and ongoing improvements",
  "Hosting paid by client",
  "No long-term contract",
  "Cancel anytime",
];

const faqs = [
  {
    question: "Do I need to replace my current website?",
    answer:
      "Not always. If your current site is solid, we can improve pages, forms, tracking, and follow-up. If it is hard to update or confusing for customers, a rebuild may be the cleaner path.",
  },
  {
    question: "Do I need to understand AI?",
    answer:
      "No. The goal is a useful business system, not a technical homework assignment. I explain what matters in plain language and keep the setup practical.",
  },
  {
    question: "Can this work with my existing CRM or calendar?",
    answer:
      "Often, yes. We can look at your current tools during the workflow audit and decide whether to connect them, simplify them, or keep the first version focused.",
  },
  {
    question: "Can you help with phone calls and missed calls?",
    answer:
      "Yes. Missed-call text-back, callback requests, owner notifications, and intake workflows can help customers get acknowledged faster.",
  },
  {
    question: "What happens if the assistant does not know the answer?",
    answer:
      "It should say it is not sure, collect the right details, and hand the conversation to a human. It is designed to support your team, not make risky guesses.",
  },
  {
    question: "Do I need a long-term contract?",
    answer: "No. The launch offer has no long-term contract and can be canceled anytime.",
  },
  {
    question: "What does the monthly maintenance include?",
    answer:
      "It includes website updates, basic monitoring, knowledge-base updates, reporting, technical support, and practical automation improvements.",
  },
  {
    question: "Can I start with only a website?",
    answer:
      "Yes. A better website is a great first step. The automation pieces can be added when the business is ready.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <HowItWorksSection />
        <LeadJourneySection />
        <AiAssistantSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="section-shell grid gap-12 py-16 lg:grid-cols-[1fr_0.88fr] lg:items-center lg:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">Built personally by Bryan</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Websites and AI systems that help local businesses respond faster.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            I help small businesses improve their website, capture more inquiries, automate
            follow-up, and give customers helpful answers around the clock.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={siteConfig.bookingUrl}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-deep"
            >
              <CalendarCheck aria-hidden className="h-4 w-4" />
              {siteConfig.cta.primary}
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-blue/40 hover:text-blue-deep"
            >
              <SearchCheck aria-hidden className="h-4 w-4" />
              {siteConfig.cta.secondary}
            </Link>
          </div>
          <div className="mt-9 grid max-w-2xl gap-3 text-sm text-muted sm:grid-cols-3">
            {["Local service focus", "Plain-language process", "Website plus workflow"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check aria-hidden className="h-4 w-4 text-blue" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <WorkflowPreview />
      </div>
    </section>
  );
}

function WorkflowPreview() {
  return (
    <div className="rounded-lg border border-line bg-panel p-3 shadow-soft">
      <div className="rounded-md border border-line bg-paper p-4">
        <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-deep">
              Local business website
            </p>
            <h2 className="mt-1 text-lg font-semibold text-ink">Lead journey preview</h2>
          </div>
          <div className="hidden items-center gap-2 text-xs text-muted sm:flex">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            Live workflow
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-[1fr_0.82fr]">
          <div className="rounded-md border border-line bg-white p-4">
            <div className="h-24 rounded-md bg-blue-soft p-4">
              <div className="h-3 w-28 rounded-sm bg-blue/60" />
              <div className="mt-4 h-2 w-full rounded-sm bg-white" />
              <div className="mt-2 h-2 w-3/4 rounded-sm bg-white" />
            </div>
            <div className="mt-4 grid gap-3">
              {["Service area", "Quote request", "Call now"].map((label) => (
                <div key={label} className="flex items-center justify-between rounded-md border border-line px-3 py-2">
                  <span className="text-sm font-medium text-ink">{label}</span>
                  <span className="h-2 w-10 rounded-sm bg-warm-soft" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {[
              ["New inquiry", "Kitchen remodel estimate"],
              ["Text sent", "Thanks, we received it"],
              ["Owner alert", "Lead details delivered"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-md border border-line bg-white p-3">
                <p className="text-sm font-semibold text-ink">{title}</p>
                <p className="mt-1 text-xs leading-5 text-muted">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-md border border-blue/20 bg-blue-soft p-4">
          <p className="text-sm font-semibold text-blue-deep">Customer gets a fast response.</p>
          <p className="mt-1 text-sm leading-6 text-muted">
            The owner gets the right details without needing to check five places.
          </p>
        </div>
      </div>
    </div>
  );
}

function ProblemSection() {
  return (
    <section className="bg-white py-16" id="problems">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Where opportunities leak</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Most small-business follow-up problems are ordinary, fixable things.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {problems.map((problem) => (
            <div key={problem} className="rounded-md border border-line bg-paper p-5">
              <HelpCircle aria-hidden className="h-5 w-5 text-warm" />
              <p className="mt-4 text-sm leading-6 text-muted">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="bg-paper py-16" id="services">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">Services</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Practical packages for websites, leads, AI assistants, and ongoing care.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-muted">
            Each package is designed to be understandable for a busy owner, with the technical
            pieces handled behind the scenes.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-md border border-line bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-soft text-blue-deep">
                  <Icon aria-hidden className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
                <ul className="mt-5 space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm leading-5 text-muted">
                      <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="bg-white py-16" id="how-it-works">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            It starts with a conversation, not a complicated technology consultation.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-md border border-line bg-paper p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadJourneySection() {
  return (
    <section className="border-y border-line bg-paper py-16">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Lead journey</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              A simple path from first visit to owner notification.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              The goal is not to make the business feel more complicated. It is to make sure the
              customer gets acknowledged and the owner gets the details needed to follow up.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-white p-4 shadow-soft">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {journey.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-md border border-line bg-paper p-4">
                    <div className="flex items-center justify-between gap-3">
                      <Icon aria-hidden className="h-5 w-5 text-blue-deep" />
                      <span className="text-xs font-semibold text-muted">Step {index + 1}</span>
                    </div>
                    <p className="mt-4 text-sm font-semibold leading-5 text-ink">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AiAssistantSection() {
  return (
    <section className="bg-white py-16" id="ai-assistants">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">AI assistants</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Helpful answers from approved business information.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            The assistant is designed to support the business, not replace human judgment. It can
            answer common questions, collect lead details, and route people to the next best step.
          </p>
          <ul className="mt-6 space-y-3">
            {assistantPrinciples.map((principle) => (
              <li key={principle} className="flex gap-3 text-sm leading-6 text-muted">
                <ShieldCheck aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
        <ChatPreview />
      </div>
    </section>
  );
}

function ChatPreview() {
  return (
    <div className="rounded-lg border border-line bg-panel p-4 shadow-soft">
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-soft text-blue-deep">
            <MessageSquareText aria-hidden className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Assistant preview</p>
            <p className="text-xs text-muted">Demonstration content</p>
          </div>
        </div>
        <span className="rounded-md border border-line px-2.5 py-1 text-xs font-medium text-muted">
          Demo
        </span>
      </div>
      <div className="mt-5 space-y-4">
        <div className="max-w-[84%] rounded-md bg-paper p-3 text-sm leading-6 text-muted">
          Do you handle emergency plumbing calls after 5 PM?
        </div>
        <div className="ml-auto max-w-[88%] rounded-md bg-blue-soft p-3 text-sm leading-6 text-blue-deep">
          We can help with after-hours requests. I can collect your address, issue, and preferred
          callback number so the team can confirm availability.
        </div>
        <div className="max-w-[84%] rounded-md bg-paper p-3 text-sm leading-6 text-muted">
          Can someone call me back?
        </div>
        <div className="ml-auto max-w-[88%] rounded-md bg-blue-soft p-3 text-sm leading-6 text-blue-deep">
          Yes. What is the best phone number and a short description of the issue?
        </div>
      </div>
      <div className="mt-5 rounded-md border border-warm/30 bg-warm-soft p-3 text-sm leading-6 text-ink">
        If a question is uncertain or sensitive, the assistant asks for contact details and hands
        it to a person.
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <section className="bg-paper py-16" id="pricing">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <p className="eyebrow">Launch offer</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Start with a better website. Improve it as your business grows.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Clear pricing for the first version, with room to scope larger automations or
              advanced integrations separately when they are worth doing.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-white p-6 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              {pricingItems.map((item) => (
                <div key={item} className="flex gap-3 rounded-md border border-line bg-paper p-4">
                  <Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                  <span className="text-sm font-medium leading-6 text-ink">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-md border border-line bg-white p-4 text-sm leading-6 text-muted">
              Custom automation, advanced integrations, paid messaging, phone usage, or larger
              projects may be scoped separately.
            </p>
            <Link
              href={siteConfig.bookingUrl}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-deep sm:w-auto"
            >
              <Handshake aria-hidden className="h-4 w-4" />
              Talk Through My Business
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-white py-16" id="faq">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Straight answers before we talk.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-md border border-line bg-paper p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink">
                <span>{faq.question}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-line bg-white text-blue-deep group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="border-y border-line bg-paper py-16">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-start">
        <div>
          <p className="eyebrow">{siteConfig.cta.supporting}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Let&apos;s look at what your current website and follow-up process are costing you.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Book a free workflow audit and I&apos;ll help you identify the simplest improvements worth
            making first.
          </p>
          <div className="mt-8 rounded-md border border-line bg-white p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-warm-soft text-warm">
                <UserRoundCheck aria-hidden className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-ink">Future professional photo placeholder</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Add Bryan&apos;s real photo here before launch. No invented portraits or fake client
                  imagery are used in this first version.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-line bg-white p-6 shadow-soft">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-soft text-blue-deep">
              <FileText aria-hidden className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-ink">Free workflow audit</h3>
              <p className="text-sm text-muted">Validated demo form, ready for integration.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[1fr_0.7fr_0.7fr]">
          <div>
            <p className="text-lg font-semibold">{siteConfig.name}</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/72">
              Local websites and AI automation systems for better lead capture, faster follow-up,
              and less repetitive admin work.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Services</p>
            <ul className="mt-3 space-y-2 text-sm text-white/72">
              {services.map((service) => (
                <li key={service.title}>
                  <Link href="#services" className="hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-white/72">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <Link href={siteConfig.bookingUrl} className="hover:text-white">
                  Booking link placeholder
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy placeholder
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms placeholder
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/14 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Sparkles aria-hidden className="h-4 w-4 text-warm" />
            <span>Personal, practical, low-pressure AI help.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
