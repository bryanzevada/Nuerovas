"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-white backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="section-shell flex min-h-16 items-center justify-between gap-4"
      >
        <Link href="#" className="flex items-center gap-2.5" onClick={closeMenu} aria-label="Nuerovas home">
          <Image src="/brand/nuerovas-mark.svg" width={34} height={34} alt="" priority className="ring-1 ring-white/20" />
          <span className="text-base font-semibold text-white">{siteConfig.name}</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/68 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.bookingUrl}
            className="inline-flex items-center bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-blue-soft"
          >
            {siteConfig.cta.primary}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-ink lg:hidden">
          <div className="section-shell flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-white/8 px-2 py-3.5 text-base font-medium text-white"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.bookingUrl}
              className="mt-3 bg-white px-4 py-3.5 text-center text-sm font-semibold text-ink"
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
