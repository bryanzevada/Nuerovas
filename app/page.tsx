import {
  ArrowDown,
  ArrowRight,
  Bot,
  BrainCircuit,
  CalendarCheck,
  CalendarDays,
  Check,
  CircleCheck,
  Clock3,
  Database,
  Globe2,
  Inbox,
  MessageSquareText,
  PhoneCall,
  RefreshCcw,
  ShieldCheck,
  UserRoundCheck,
  Workflow,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { CrmCarousel } from "@/components/crm-carousel";
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
        <CrmIntegrations />
        <CustomerProblems />
        <Outcomes />
        <ProductMap />
        <HowItWorks />
        <CustomerJourney />
        <Pricing />
        <Faq />
        <Contact />
        <BrandShowcase />
      </main>
      <Footer />
    </>
  );
}

function CrmIntegrations() {
  return (
    <section className="bg-paper py-16 sm:py-20" id="crm-integrations">
      <div className="section-shell">
        <h2 className="section-title mt-0 max-w-3xl">Your CRM is where our automations and AI support come together.</h2>
        <CrmCarousel />
        <div className="mt-6 grid gap-4 border-t border-line pt-5 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
          <p className="text-base leading-7 text-muted">We integrate your website, forms, callbacks, conversations, and appointments with the CRM your team already uses. If you are starting fresh, we can set up a private-label Nuerovas workspace around your workflow.</p>
          <p className="text-xs leading-5 text-muted lg:justify-self-end">Compatibility and available automations vary by platform, plan, permissions, and API access. We confirm the right setup during your strategy call.</p>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden border-b border-line bg-paper">
      <div className="section-shell pb-2 pt-10 sm:pt-14 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.18fr_0.72fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow">Websites · automation · useful AI</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-medium uppercase leading-[1.02] tracking-[-0.03em] text-ink sm:mt-5 sm:text-6xl lg:text-7xl lg:leading-[0.98]">
              Turn more customer conversations into growth.
            </h1>
          </div>
          <div className="border-l border-line pl-5 lg:pb-1 lg:pl-6">
            <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
              We build the website and connected workflows that help your business respond faster,
              capture better leads, and make the next step easy.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href={siteConfig.bookingUrl} className="button-primary">
                <CalendarCheck aria-hidden className="h-4 w-4" />
                {siteConfig.cta.primary}
              </Link>
              <Link href="#how-it-works" className="button-secondary">
                See what we build
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <figure className="relative mt-8 aspect-[16/10] w-full overflow-hidden sm:mt-10 sm:aspect-[2/1] lg:aspect-[2.2/1]">
        <Image
          src="/media/local-service-workday-v2.png"
          alt="Local service professional checking a customer inquiry beside an open work van"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/5 to-transparent" aria-hidden />
        <div className="section-shell absolute inset-0 flex items-start pt-5 sm:pt-8">
          <div className="hidden max-w-[220px] rounded-xl border border-white/30 bg-ink/80 p-4 text-white shadow-soft backdrop-blur-md sm:block">
            <div className="flex items-center gap-2 text-xs font-semibold text-white/75"><span className="h-2 w-2 rounded-full bg-warm" /> New customer inquiry</div>
            <p className="mt-3 text-sm font-semibold">Callback requested</p>
            <p className="mt-1 text-xs leading-5 text-white/70">The right details are ready when your team is.</p>
          </div>
        </div>
        <div className="section-shell absolute inset-0 flex items-end pb-5 sm:pb-7">
          <figcaption className="grid w-full gap-4 border border-white/15 bg-ink/82 px-5 py-4 text-white shadow-soft backdrop-blur-md sm:grid-cols-[0.8fr_1fr] sm:items-center sm:px-6 sm:py-5">
            <div>
              <p className="text-sm font-semibold text-white">Built for the middle of a real workday.</p>
              <p className="mt-1 text-xs leading-5 text-white/62">Customers get a clear response while your team keeps moving.</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-white/70 sm:justify-end">
              {["Inquiry", "Response", "Right details", "Booking"].map((item, index) => (
                <span key={item} className="flex items-center gap-3">
                  {index > 0 ? <ArrowRight aria-hidden className="h-3.5 w-3.5 text-warm" /> : null}
                  {item}
                </span>
              ))}
            </div>
          </figcaption>
        </div>
      </figure>

      <div className="section-shell py-5 sm:py-6">
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
          {["Clear scope", "No long-term contract", "Human support"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <CircleCheck aria-hidden className="h-4 w-4 text-blue" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
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
          <p className="eyebrow">01 / Less friction for your customers</p>
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
          <p className="eyebrow">02 / What gets better</p>
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

function ProductMap() {
  const stages = [
    {
      label: "Your customer",
      icon: Globe2,
      title: "Reaches out the usual way",
      description: "Your website, phone number, forms, and referrals keep working as they do today.",
      items: ["Website visit", "Call or missed call", "Quote request"],
      tone: "bg-white",
      iconTone: "bg-paper text-ink",
    },
    {
      label: "Smart response",
      icon: BrainCircuit,
      title: "AI handles the first mile",
      description: "The customer is acknowledged, common questions are answered, and useful details are collected.",
      items: ["Approved answers", "Lead qualification", "Instant follow-up"],
      tone: "border-blue/30 bg-blue-soft",
      iconTone: "bg-blue text-white",
    },
    {
      label: "Your existing tools",
      icon: Database,
      title: "Information goes where it belongs",
      description: "Lead details can move into the inbox, calendar, CRM, or workflow your team already knows.",
      items: ["Inbox or CRM", "Calendar or booking", "Owner notification"],
      tone: "bg-white",
      iconTone: "bg-paper text-ink",
    },
    {
      label: "Your team",
      icon: UserRoundCheck,
      title: "People step in with context",
      description: "Your team gets the details needed to call back, prepare a quote, or confirm the next step.",
      items: ["Faster callback", "Better handoff", "More booked work"],
      tone: "border-warm/35 bg-warm-soft",
      iconTone: "bg-warm text-white",
    },
  ];
  const benefits = [
    {
      icon: Inbox,
      title: "Respond sooner",
      description: "New inquiries receive an immediate, useful acknowledgement.",
    },
    {
      icon: CalendarDays,
      title: "Keep leads moving",
      description: "Customers reach a booking or callback step with less waiting.",
    },
    {
      icon: ShieldCheck,
      title: "Keep humans in control",
      description: "Your team owns pricing, policies, judgment, and final decisions.",
    },
  ];

  return (
    <section className="border-y border-line bg-white py-16 sm:py-20" id="industries">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">03 / How the system fits</p>
            <h2 className="section-title">Your business stays familiar. The customer journey gets smarter.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted lg:justify-self-end">
            This is not a rip-and-replace platform. It adds a responsive layer between the ways
            customers already reach you and the tools your team already uses.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div key={stage.label} className="contents">
                <article className={`flex min-w-0 flex-col border border-line p-5 sm:p-6 ${stage.tone}`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className={`grid h-10 w-10 place-items-center ${stage.iconTone}`}>
                      <Icon aria-hidden className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold tabular-nums text-muted">0{index + 1}</span>
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-blue-deep">{stage.label}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-6 text-ink">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{stage.description}</p>
                  <ul className="mt-6 divide-y divide-line border-t border-line">
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 py-2.5 text-xs font-medium text-ink">
                        <Check aria-hidden className="h-3.5 w-3.5 shrink-0 text-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
                {index < stages.length - 1 ? (
                  <div className="grid place-items-center py-1 text-warm" aria-hidden>
                    <ArrowDown className="h-5 w-5 lg:hidden" />
                    <ArrowRight className="hidden h-5 w-5 lg:block" />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
          {benefits.map((benefit) => {
            const BenefitIcon = benefit.icon;
            return (
              <div key={benefit.title} className="bg-paper p-5">
                <BenefitIcon aria-hidden className="h-5 w-5 text-blue-deep" />
                <p className="mt-3 text-sm font-semibold text-ink">{benefit.title}</p>
                <p className="mt-1 text-xs leading-5 text-muted">{benefit.description}</p>
              </div>
            );
          })}
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
          <p className="eyebrow">04 / How it works</p>
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
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-warm-soft">05 / Support without guesswork</p>
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
  const foundation = ["Responsive website", "Clear service and contact pages", "Lead forms and analytics", "Call and booking CTAs"];
  const care = ["Content and website updates", "Performance monitoring", "Small monthly improvements", "Month-to-month flexibility"];
  const automation = ["CRM and calendar connections", "Lead capture and callback workflows", "AI chat using approved business information", "Human handoff and escalation"];

  return (
    <section className="bg-paper py-16 sm:py-20" id="pricing">
      <div className="section-shell">
        <div>
          <p className="eyebrow">Pricing</p>
          <h2 className="section-title">A clear place to start, with room to grow.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">Choose the level of support your business needs today. Start with the website, keep it healthy, then add the workflow or AI support that earns its place.</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <PricingCard label="Start here" title="Website foundation" price="$1,000" detail="One-time project fee" description="A clear, trustworthy digital front door that makes it easy for customers to understand you and take the next step." items={foundation} />
          <PricingCard label="Keep it working" title="Ongoing care" price="$100/mo" detail="First month free" description="Practical support after launch so your site stays current, healthy, and useful as your business changes." items={care} />
          <PricingCard label="Add when ready" title="Automation + AI" price="Custom scope" detail="Built around your workflow" description="Connect the systems behind your customer journey when there is a clear business reason to do so." items={automation} highlighted />
        </div>
        <div className="mt-5 flex flex-col gap-4 border border-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <p className="font-semibold text-ink">Your first step is a working conversation.</p>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-muted">We will identify the biggest point of friction, recommend the simplest package, and make clear what is included before any work begins. No long-term contract.</p>
          </div>
          <Link href={siteConfig.bookingUrl} className="button-primary shrink-0">Book a Strategy Call</Link>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  label,
  title,
  price,
  detail,
  description,
  items,
  highlighted = false,
}: {
  label: string;
  title: string;
  price: string;
  detail: string;
  description: string;
  items: string[];
  highlighted?: boolean;
}) {
  return (
    <article className={`flex flex-col border p-6 sm:p-7 ${highlighted ? "border-blue bg-blue-soft" : "border-line bg-white"}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-deep">{label}</p>
      <h3 className="mt-4 text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-6 font-display text-3xl font-bold text-ink">{price}</p>
      <p className="mt-1 text-xs font-medium text-muted">{detail}</p>
      <p className="mt-5 min-h-20 text-sm leading-6 text-muted">{description}</p>
      <ul className="mt-5 space-y-3 border-t border-line pt-5">
        {items.map((item) => <li key={item} className="flex items-start gap-3 text-sm text-ink"><Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-blue" />{item}</li>)}
      </ul>
    </article>
  );
}

function Faq() {
  return (
    <section className="bg-white py-16 sm:py-20" id="faq">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow">07 / Common questions</p>
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
          <p className="eyebrow">08 / Free workflow review</p>
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

function BrandShowcase() {
  return (
    <section className="border-t border-white/10 bg-ink py-14 text-white sm:py-20" aria-label="About Nuerovas" id="about">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-soft/70">Built around the customer journey</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight sm:text-4xl">
              A stronger digital front door, backed by practical systems.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/58">
            Clearer websites, faster follow-up, and helpful automation working as one experience.
          </p>
        </div>

        <figure className="relative mt-9 overflow-hidden border border-white/12 bg-white/5 p-2 sm:p-4">
          <Image
            src="/brand/nuerovas-banner.webp"
            alt=""
            fill
            sizes="100vw"
            className="scale-110 object-cover opacity-20 blur-2xl"
            aria-hidden
          />
          <div className="relative aspect-[4/3] overflow-hidden bg-white shadow-soft sm:aspect-[2/1]">
            <Image
              src="/brand/nuerovas-banner.webp"
              alt="Nuerovas - AI Websites, Automation, Intelligent Agents"
              fill
              sizes="(min-width: 1280px) 1184px, calc(100vw - 56px)"
              className="object-cover object-center opacity-95"
            />
          </div>
        </figure>
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
            <Image src="/brand/nuerovas-orbit-mark.png" width={34} height={34} alt="" className="bg-white" />
            <div><p className="font-semibold uppercase tracking-[0.08em]">Nuerovas</p><p className="mt-0.5 text-xs text-white/55">Websites and practical automation</p></div>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/68">
            <Link href="#services" className="hover:text-white">Services</Link>
            <Link href="#how-it-works" className="hover:text-white">Process</Link>
            <Link href="#pricing" className="hover:text-white">Pricing</Link>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">Contact</a>
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/12 pt-6 text-xs text-white/50 sm:flex-row">
          <p>Copyright {new Date().getFullYear()} NUEROVAS. All rights reserved.</p>
          <div className="flex gap-5"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        </div>
        <div className="flex items-end gap-4 overflow-hidden border-t border-white/12 pt-8">
          <Image src="/brand/nuerovas-orbit-mark.png" width={76} height={76} alt="" className="mb-1 hidden bg-white sm:block" />
          <p className="text-5xl font-medium uppercase leading-none tracking-[-0.04em] text-white sm:text-7xl lg:text-9xl">Nuerovas</p>
        </div>
      </div>
    </footer>
  );
}
