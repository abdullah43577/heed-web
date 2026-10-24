"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "./brand-logo";

const NAV_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Privacy", href: "/#trust" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const SiteHeader = function () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-line bg-canvas sticky top-0 z-50 border-b">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-8 px-4 sm:px-6">
        <BrandLogo />

        <nav className="hidden flex-1 items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground-muted hover:text-foreground text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button size="nav" className="ml-auto hidden md:inline-flex" asChild>
          <Link href="/#get">Get Heed</Link>
        </Button>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="text-foreground-muted hover:bg-surface-muted ml-auto rounded-lg p-2 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-line bg-canvas border-t px-4 pt-2 pb-5 md:hidden",
          !isMenuOpen && "hidden",
        )}
      >
        <nav className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground-muted hover:bg-surface-muted hover:text-foreground rounded-lg px-3 py-2.5 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button size="nav" className="mt-3 w-full" asChild>
          <Link href="/#get" onClick={() => setIsMenuOpen(false)}>
            Get Heed
          </Link>
        </Button>
      </div>
    </header>
  );
};
