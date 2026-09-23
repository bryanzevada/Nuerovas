import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, CircleCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Request received | Nuerovas",
  description: "Your Nuerovas workflow review request has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="section-shell flex min-h-screen flex-col py-6 sm:py-8">
        <header className="flex items-center justify-between border-b border-line pb-5">
          <Link href="/" className="flex items-center gap-3" aria-label="Nuerovas home">
            <Image src="/brand/nuerovas-logo.png" width={38} height={38} alt="Nuerovas" className="object-contain" />
            <span className="font-semibold uppercase tracking-[0.08em]">Nuerovas</span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-blue-deep hover:text-ink">
            Back to home
          </Link>
        </header>

        <section className="flex flex-1 items-center py-16 sm:py-24">
          <div className="grid w-full gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-20">
            <div>
              <div className="grid h-12 w-12 place-items-center rounded-full bg-blue-soft text-blue-deep">
                <CircleCheck aria-hidden className="h-6 w-6" />
              </div>
              <p className="eyebrow mt-7">Request received</p>
              <h1 className="mt-4 max-w-xl text-4xl font-medium uppercase leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl">
                Let’s find the simplest improvement worth making first.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Thanks for reaching out. We’ll review what you shared and follow up soon with a clearer view of what to fix now, what can wait, and what does not need automation.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={siteConfig.bookingUrl} className="button-primary">
                  <CalendarCheck aria-hidden className="h-4 w-4" />
                  Book a Strategy Call
                </Link>
                <Link href="/" className="button-secondary">
                  Return to Nuerovas
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <aside className="border border-line bg-white p-6 shadow-soft sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-deep">What happens next</p>
              <div className="mt-6 divide-y divide-line border-y border-line">
                <div className="py-5">
                  <p className="font-semibold text-ink">We review the details</p>
                  <p className="mt-2 text-sm leading-6 text-muted">We’ll look at the friction you described and prepare a focused starting point.</p>
                </div>
                <div className="py-5">
                  <p className="font-semibold text-ink">We follow up</p>
                  <p className="mt-2 text-sm leading-6 text-muted">You’ll hear from the Nuerovas team using the contact information you provided.</p>
                </div>
                <div className="py-5">
                  <p className="font-semibold text-ink">You choose the next step</p>
                  <p className="mt-2 text-sm leading-6 text-muted">There is no obligation to add automation or replace tools that already work.</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <footer className="border-t border-line pt-5 text-xs text-muted">
          © {new Date().getFullYear()} Nuerovas. Websites and practical automation.
        </footer>
      </div>
    </main>
  );
}
