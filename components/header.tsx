"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/92 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="section-shell flex min-h-20 items-center justify-between gap-4"
      >
        <Link href="#" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="grid h-10 w-10 place-items-center rounded-md bg-ink text-sm font-bold text-white">
            B
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold text-ink">{siteConfig.name}</span>
            <span className="block text-xs text-muted">AI websites & automation</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.bookingUrl}
            className="rounded-md bg-blue px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-deep"
          >
            {siteConfig.cta.primary}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-panel lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-line bg-panel lg:hidden">
          <div className="section-shell flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-3 text-base font-medium text-ink"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.bookingUrl}
              className="mt-2 rounded-md bg-blue px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={closeMenu}
            >
              {siteConfig.cta.primary}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
