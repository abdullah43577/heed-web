import { buildPageMetadata } from "@/app/_lib/metadata";
import { LEGAL_UPDATED, ROUTES } from "@/app/_lib/site";
import { LegalPage } from "@/components/shared/legal-page";
import { TERMS_INTRO, TERMS_SECTIONS } from "./_components/sections";

export const metadata = buildPageMetadata({
  path: ROUTES.terms,
  title: "Terms and conditions",
  description: "The terms for using Heed, the AI inbox assistant.",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and conditions"
      updated={LEGAL_UPDATED}
      intro={TERMS_INTRO}
      sections={TERMS_SECTIONS}
    />
  );
}
