import { PRICING_INCLUDES } from "@/app/_lib/landing";
import { COFFEE_URL } from "@/app/_lib/site";
import { AppText } from "@/components/shared/app-text";
import { Reveal } from "@/components/shared/reveal";
import { LandingSection } from "./landing-section";
import { TickList } from "./tick-list";

export const PricingSection = function () {
  return (
    <LandingSection id="pricing">
      <Reveal className="border-line grid items-center gap-10 rounded-[20px] border p-7 md:grid-cols-2 md:gap-12 md:p-12">
        <div>
          <AppText type="eyebrow">Pricing</AppText>
          <p className="text-foreground mt-3.5 text-[64px] leading-none font-bold tracking-[-0.04em]">
            Free
            <span className="text-foreground-muted ml-1.5 text-base font-medium tracking-normal">
              for everyone
            </span>
          </p>
          <AppText type="lede" className="mt-4">
            No Pro tier, no trial, no paywall. Every feature is available to
            every user.
          </AppText>
          <p className="text-foreground-muted mt-6 text-sm">
            If Heed saves you time, you can{" "}
            <a href={COFFEE_URL} className="text-brand font-semibold">
              buy me a coffee
            </a>
            . It’s never required.
          </p>
        </div>

        <TickList items={PRICING_INCLUDES} divided />
      </Reveal>
    </LandingSection>
  );
};
