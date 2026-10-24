import { buildPageMetadata } from "@/app/_lib/metadata";
import { LEGAL_UPDATED, ROUTES } from "@/app/_lib/site";
import { LegalPage } from "@/components/shared/legal-page";
import {
  PRIVACY_POLICY_INTRO,
  PRIVACY_POLICY_SECTIONS,
} from "./_components/sections";

export const metadata = buildPageMetadata({
  path: ROUTES.privacy,
  title: "Privacy policy",
  description:
    "What Heed reads in your Gmail, what it keeps, for how long, and who else is involved.",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated={LEGAL_UPDATED}
      intro={PRIVACY_POLICY_INTRO}
      sections={PRIVACY_POLICY_SECTIONS}
    />
  );
}
