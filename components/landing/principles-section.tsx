import { PRINCIPLES } from "@/app/_lib/landing";
import { GOOGLE_USER_DATA_POLICY_URL, ROUTES } from "@/app/_lib/site";
import Link from "next/link";
import { IconGrid } from "./icon-grid";
import { LandingSection } from "./landing-section";
import { SectionHeading } from "./section-heading";

export const PrinciplesSection = function () {
  return (
    <LandingSection id="trust">
      <SectionHeading
        eyebrow="Built to be trusted"
        title="An assistant with access to your mail should have firm rules. These are Heed's."
        lede="They're enforced in code, not left to the AI."
      />

      <IconGrid items={PRINCIPLES} variant="panel" className="mt-12" />

      <p className="text-foreground-subtle mt-5 max-w-3xl text-[13px] leading-relaxed">
        Heed’s use of information received from Google APIs follows the{" "}
        <a
          href={GOOGLE_USER_DATA_POLICY_URL}
          className="text-foreground-muted underline underline-offset-2"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements. You can disconnect an account,
        or delete everything, at any time from the app or the{" "}
        <Link
          href={ROUTES.deleteAccount}
          className="text-foreground-muted underline underline-offset-2"
        >
          delete account
        </Link>{" "}
        page.
      </p>
    </LandingSection>
  );
};
