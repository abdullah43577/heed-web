import { SUPPORT_EMAIL } from "@/app/_lib/site";
import { AppText } from "@/components/shared/app-text";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { LandingSection } from "./landing-section";

const EARLY_ACCESS_HREF = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Heed early access")}`;

export const CtaSection = function () {
  return (
    <LandingSection id="get" className="text-center">
      <Reveal className="mx-auto max-w-2xl">
        <AppText type="h2">
          Give your inbox to Heed.
          <br />
          Keep the replies.
        </AppText>
        <AppText type="lede" className="mx-auto mt-3.5">
          Free, on your phone. Connect your first inbox in under a minute.
        </AppText>
        <Button size="cta" className="mt-8" asChild>
          <a href={EARLY_ACCESS_HREF}>Ask for early access</a>
        </Button>
        <p className="text-foreground-subtle mt-4 text-[13px]">
          Store links arrive here at launch.
        </p>
      </Reveal>
    </LandingSection>
  );
};
