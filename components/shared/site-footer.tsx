import { COFFEE_URL, ROUTES, SITE_NAME, SUPPORT_EMAIL } from "@/app/_lib/site";
import Link from "next/link";
import { BrandLogo } from "./brand-logo";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Features", href: "/#features" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: ROUTES.privacy },
      { label: "Terms", href: ROUTES.terms },
      { label: "Delete your account", href: ROUTES.deleteAccount },
    ],
  },
  {
    title: "Support",
    links: [
      { label: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
      { label: "Buy me a coffee", href: COFFEE_URL },
    ],
  },
] as const;

export const SiteFooter = function () {
  const year = new Date().getFullYear();

  return (
    <footer className="border-line border-t py-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-10 px-4 sm:px-6">
        <div>
          <BrandLogo />
          <p className="text-foreground-subtle mt-3 max-w-xs text-[13px] leading-relaxed">
            Heed reads the mail that doesn’t need you.
            <br />© {year} {SITE_NAME}
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          {COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-2 text-sm">
              <p className="text-foreground mb-1 text-[13px] font-semibold">
                {column.title}
              </p>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-foreground-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
