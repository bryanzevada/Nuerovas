import {
  ArrowRight,
  BellRing,
  Bot,
  CalendarCheck,
  Check,
  CircleCheck,
  Clock3,
  Globe2,
  MessageSquareText,
  PhoneCall,
  RefreshCcw,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";
import { siteConfig } from "@/lib/site-config";

const outcomes = [
  {
    icon: Globe2,
    title: "Make the next step obvious",
    description:
      "Give customers a fast, mobile-friendly way to understand your services, trust your business, and get in touch.",
    items: ["Clear service pages", "Quote and contact forms", "Call and booking buttons"],
  },
  {
    icon: Zap,
    title: "Respond while interest is high",
    description:
      "Acknowledge new inquiries quickly and route the right details to the right person without extra admin.",
    items: ["Missed-call text-back", "Email and SMS follow-up", "Owner and team alerts"],
  },
  {
    icon: Bot,
    title: "Answer questions after hours",
    description:
      "Help visitors with approved answers, collect useful lead details, and hand uncertain situations to a person.",
    items: ["Business-specific FAQs", "Lead qualification", "Human handoff"],
  },
];

const steps = [
  {
    number: "01",
    title: "Find the friction",
    description: "Map how customers find you, ask questions, request service, and wait for a response.",
  },
  {
    number: "02",
    title: "Fix the important path",
    description: "Build the pages and follow-up workflow that remove the biggest points of delay first.",
  },
  {
    number: "03",
    title: "Improve as you learn",
    description: "Review what is working, keep information current, and add automation only where it helps.",
  },
];

const faqs = [
  {
    question: "Do I need a completely new website?",
    answer:
      "Not necessarily. A workflow review will show whether your current site can be improved or whether rebuilding is the cleaner, more cost-effective option.",
  },
  {
    question: "Can this work with my current calendar or CRM?",
    answer:
      "Usually. Existing tools are reviewed first, then connected or simplified where it makes sense. You do not need to replace software that already works well.",
  },
  {
    question: "What happens when the AI assistant is unsure?",
    answer:
      "It does not guess. It collects the right contact details and hands the conversation to a person for anything uncertain, sensitive, or outside its approved information.",
  },
  {
    question: "Can I start with just the website?",
    answer:
      "Yes. A clearer website is often the right first step. Follow-up and assistant features can be added when there is a useful reason to add them.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No. Ongoing maintenance is month to month, and you can cancel anytime.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CustomerProblems />
        <Outcomes />
        <HowItWorks />
        <CustomerJourney />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden border-b border-line bg-paper">
      <div className="section-shell grid gap-14 py-16 lg:grid-cols-[1.04fr_0.86fr] lg:items-center lg:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">For local service businesses</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.04] text-ink sm:text-5xl lg:text-6xl">
            Turn more inquiries into booked work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Give customers clear answers, respond to new leads faster, and keep every opportunity
            moving without adding more repetitive work to your day.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={siteConfig.bookingUrl} className="button-primary">
              <CalendarCheck aria-hidden className="h-4 w-4" />
              {siteConfig.cta.primary}
            </Link>
            <Link href="#how-it-works" className="button-secondary">
              See the process
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            {["Clear scope", "No long-term contract", "Human support"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CircleCheck aria-hidden className="h-4 w-4 text-blue" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <ConversionPreview />
      </div>
    </section>
  );
}

function ConversionPreview() {
  const events = [
    { icon: MessageSquareText, title: "New inquiry", detail: "Estimate request received", time: "9:41" },
    { icon: Zap, title: "Reply sent", detail: "Customer knows what happens next", time: "9:41" },
    { icon: BellRing, title: "Team notified", detail: "Lead details delivered", time: "9:42" },
    { icon: CalendarCheck, title: "Visit requested", detail: "Thursday afternoon", time: "9:44" },
  ];

  return (
    <div className="relative">
      <div className="absolute -left-6 top-10 hidden h-24 w-1 bg-warm lg:block" />
      <div className="border border-line bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-deep">Lead activity</p>
            <h2 className="mt-1 text-base font-semibold text-ink">One inquiry, handled clearly</h2>
          </div>
          <span className="flex items-center gap-2 text-xs font-medium text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Live
          </span>
        </div>
        <div className="divide-y divide-line">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div key={event.title} className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 px-5 py-4">
                <span className={`grid h-10 w-10 place-items-center ${index === 3 ? "bg-warm-soft text-warm" : "bg-blue-soft text-blue-deep"}`}>
                  <Icon aria-hidden className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{event.title}</span>
                  <span className="mt-0.5 block text-xs text-muted">{event.detail}</span>
                </span>
                <span className="text-xs tabular-nums text-muted">{event.time}</span>
              </div>
            );
          })}
        </div>
        <div className="border-t border-line bg-ink px-5 py-4 text-white">
          <p className="text-sm font-semibold">The customer gets momentum.</p>
          <p className="mt-1 text-xs leading-5 text-white/65">Your team gets the context needed to follow through.</p>
        </div>
      </div>
    </div>
  );
}

function CustomerProblems() {
  const problems = [
    [Clock3, "Slow replies", "A customer who waits too long often calls the next business."],
    [PhoneCall, "Missed calls", "Busy workdays should not mean losing every caller you cannot answer."],
    [RefreshCcw, "Repeated questions", "Your team should not have to type the same answers all day."],
  ] as const;

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Less friction for your customers</p>
          <h2 className="section-title">Make it easier to choose you, reach you, and hear back.</h2>
        </div>
        <div className="mt-10 grid border-y border-line md:grid-cols-3">
          {problems.map(([Icon, title, description], index) => (
            <article key={title} className={`py-7 md:px-7 ${index > 0 ? "border-t border-line md:border-l md:border-t-0" : ""}`}>
              <Icon aria-hidden className="h-5 w-5 text-warm" />
              <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="bg-paper py-16 sm:py-20" id="services">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">What gets better</p>
          <h2 className="section-title">A simpler customer experience from first click to follow-up.</h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {outcomes.map((outcome) => {
            const Icon = outcome.icon;
            return (
              <article key={outcome.title} className="border border-line bg-white p-6">
                <Icon aria-hidden className="h-6 w-6 text-blue-deep" />
                <h3 className="mt-6 text-xl font-semibold text-ink">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{outcome.description}</p>
                <ul className="mt-6 space-y-3 border-t border-line pt-5">
                  {outcome.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-ink">
                      <Check aria-hidden className="h-4 w-4 shrink-0 text-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="mt-5 flex flex-col justify-between gap-4 border border-line bg-blue-soft px-6 py-5 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <RefreshCcw aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-blue-deep" />
            <div>
              <p className="font-semibold text-ink">Keep improving after launch</p>
              <p className="mt-1 text-sm leading-6 text-muted">Updates, monitoring, reporting, and practical workflow improvements are handled month to month.</p>
            </div>
          </div>
          <Link href="#pricing" className="shrink-0 text-sm font-semibold text-blue-deep hover:text-ink">See pricing</Link>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20" id="how-it-works">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.62fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow">How it works</p>
          <h2 className="section-title">Start with the bottleneck, not the technology.</h2>
          <p className="mt-5 text-base leading-7 text-muted">The first conversation is about your customers and daily workflow. The tools come after the problem is clear.</p>
        </div>
        <div className="border-t border-line">
          {steps.map((step) => (
            <article key={step.number} className="grid gap-3 border-b border-line py-6 sm:grid-cols-[4rem_0.8fr_1fr] sm:items-start">
              <span className="text-sm font-semibold text-warm">{step.number}</span>
              <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
              <p className="text-sm leading-6 text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomerJourney() {
  return (
    <section className="border-y border-line bg-ink py-16 text-white sm:py-20" id="ai-assistants">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-warm-soft">Support without guesswork</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">Helpful answers, with a person always in reach.</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/68">An AI website assistant can answer approved questions, collect lead details, and guide visitors to booking. It never invents prices, policies, availability, or guarantees.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {["Uses approved information", "Collects useful lead details", "Supports booking and callbacks", "Escalates uncertainty"].map((item) => (
              <span key={item} className="flex items-center gap-3 text-sm text-white/82">
                <ShieldCheck aria-hidden className="h-4 w-4 shrink-0 text-warm" /> {item}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white text-ink">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center bg-blue-soft text-blue-deep"><MessageSquareText aria-hidden className="h-5 w-5" /></span>
              <div><p className="text-sm font-semibold">Website assistant</p><p className="text-xs text-muted">Demonstration</p></div>
            </div>
            <span className="text-xs font-semibold text-emerald-700">Available</span>
          </div>
          <div className="space-y-4 p-5">
            <p className="max-w-[82%] bg-paper p-3 text-sm leading-6 text-muted">Can someone call me about an estimate?</p>
            <p className="ml-auto max-w-[88%] bg-blue-soft p-3 text-sm leading-6 text-blue-deep">Absolutely. What service do you need, and what is the best number for the team to reach you?</p>
            <div className="flex items-center gap-3 border-t border-line pt-4 text-xs text-muted">
              <Workflow aria-hidden className="h-4 w-4 text-warm" /> Callback request sent to the team
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="bg-paper py-16 sm:py-20" id="pricing">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-start">
        <div>
          <p className="eyebrow">Straightforward investment</p>
          <h2 className="section-title">Start with a better website. Improve it as you grow.</h2>
          <p className="mt-5 text-base leading-7 text-muted">A focused first version with ongoing support, without a long-term commitment.</p>
        </div>
        <div className="border border-line bg-white">
          <div className="grid border-b border-line sm:grid-cols-2">
            <div className="p-6 sm:border-r sm:border-line">
              <p className="text-sm font-semibold text-muted">Website build</p>
              <p className="mt-2 text-4xl font-semibold text-ink">$1,000</p>
              <p className="mt-2 text-sm text-muted">One-time project fee</p>
            </div>
            <div className="border-t border-line p-6 sm:border-t-0">
              <p className="text-sm font-semibold text-muted">Ongoing care</p>
              <p className="mt-2 text-4xl font-semibold text-ink">$100<span className="text-base font-medium text-muted">/mo</span></p>
              <p className="mt-2 text-sm text-muted">First month free</p>
            </div>
          </div>
          <div className="grid gap-3 p-6 sm:grid-cols-2">
            {["Responsive website", "Forms and analytics", "Updates and monitoring", "No long-term contract", "Cancel anytime", "Hosting paid by client"].map((item) => (
              <span key={item} className="flex items-center gap-3 text-sm text-ink"><Check aria-hidden className="h-4 w-4 text-blue" />{item}</span>
            ))}
          </div>
          <div className="flex flex-col gap-4 border-t border-line bg-paper p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-xs leading-5 text-muted">Advanced integrations, messaging or phone usage, and larger automation projects are scoped separately.</p>
            <Link href={siteConfig.bookingUrl} className="button-primary shrink-0">Talk through your needs</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-white py-16 sm:py-20" id="faq">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow">Common questions</p>
          <h2 className="section-title">What you may want to know first.</h2>
        </div>
        <div className="border-t border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-line py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold text-ink">
                {faq.question}
                <span className="text-xl font-normal text-blue-deep transition group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-2xl pt-4 text-sm leading-6 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="border-t border-line bg-paper py-16 sm:py-20" id="contact">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.76fr_1fr] lg:items-start">
        <div>
          <p className="eyebrow">Free workflow review</p>
          <h2 className="section-title">Find the simplest improvement worth making first.</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">Share where leads slow down or customers get stuck. You will leave with a clearer view of what to fix now, what can wait, and what does not need automation at all.</p>
        </div>
        <div className="border border-line bg-white p-6 shadow-soft sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-10 text-white">
      <div className="section-shell flex flex-col gap-8">
        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-start">
          <div className="flex items-center gap-3">
            <Image src="/brand/nuerovas-mark.svg" width={34} height={34} alt="" />
            <div><p className="font-semibold">Nuerovas</p><p className="mt-0.5 text-xs text-white/55">Websites and practical automation</p></div>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/68">
            <Link href="#services" className="hover:text-white">Services</Link>
            <Link href="#how-it-works" className="hover:text-white">Process</Link>
            <Link href="#pricing" className="hover:text-white">Pricing</Link>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">Contact</a>
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/12 pt-6 text-xs text-white/50 sm:flex-row">
          <p>Copyright {new Date().getFullYear()} Nuerovas. All rights reserved.</p>
          <div className="flex gap-5"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
}
