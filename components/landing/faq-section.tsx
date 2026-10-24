"use client";

import { FAQ_ITEMS } from "@/app/_lib/landing";
import { SUPPORT_EMAIL } from "@/app/_lib/site";
import { AppText } from "@/components/shared/app-text";
import { Reveal } from "@/components/shared/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LandingSection } from "./landing-section";

export const FaqSection = function () {
  return (
    <LandingSection id="faq">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal>
          <AppText type="eyebrow">FAQ</AppText>
          <AppText type="h2" className="mt-3">
            Questions, answered plainly.
          </AppText>
          <AppText type="lede" className="mt-4">
            Something else? Write to{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-brand font-semibold"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </AppText>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion
            type="single"
            collapsible
            defaultValue={FAQ_ITEMS[0].question}
            className="border-line border-y"
          >
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="border-line"
              >
                <AccordionTrigger className="text-foreground py-5 text-base font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground-muted max-w-xl pb-5 text-[15px] leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </LandingSection>
  );
};
