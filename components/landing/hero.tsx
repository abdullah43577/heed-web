import { ASSURANCES } from "@/app/_lib/landing";
import { AppText } from "@/components/shared/app-text";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { ReviewScreen } from "./phone/review-screen";

export const Hero = function () {
  return (
    <header className="py-12 md:py-18">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
        <Reveal y={16}>
          <span className="border-line-strong text-foreground-muted inline-flex items-center gap-2 rounded-full border py-1 pr-3 pl-1.5 text-[13px] font-medium">
            <span className="bg-brand-muted text-brand rounded-full px-2 py-0.5 text-xs font-semibold">
              Free
            </span>
            An AI assistant for Gmail
          </span>

          <AppText type="display" className="mt-5">
            Your inbox,
            <br />
            <span className="text-brand">read for you.</span>
          </AppText>

          <p className="text-foreground-muted mt-5 max-w-[520px] text-base leading-relaxed md:text-lg">
            Heed reads the mail that doesn’t need you and drafts replies for the
            mail that does. The only thing it asks of you is a look at the draft
            and a tap on Send.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <Button size="cta" asChild>
              <Link href="#get">Get Heed for your phone</Link>
            </Button>
            <Button size="cta" variant="outline" asChild>
              <Link href="#how-it-works">See how it works</Link>
            </Button>
          </div>

          <ul className="text-foreground-subtle mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[13px]">
            {ASSURANCES.map((assurance) => (
              <li key={assurance} className="flex items-center gap-1.5">
                <Check className="size-[15px]" strokeWidth={2} />
                {assurance}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} y={24}>
          <ReviewScreen />
        </Reveal>
      </div>
    </header>
  );
};
