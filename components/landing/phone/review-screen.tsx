import { Blank } from "../app-preview/blank";
import { PhoneFrame } from "./phone-frame";
import { PhoneTabBar } from "./phone-tab-bar";
import { PushBanner } from "./push-banner";
import { ReviewCard } from "./review-card";

export const ReviewScreen = function () {
  return (
    <div className="relative flex justify-center pt-7">
      <PhoneFrame>
        <div className="border-line flex h-12 items-center justify-between border-b px-4">
          <p className="text-foreground text-base font-semibold">Review</p>
          <span className="bg-brand-muted text-brand rounded-full px-2 py-0.5 text-[11px] font-semibold">
            2 waiting
          </span>
        </div>

        <div className="flex flex-col gap-2.5 p-3.5">
          <ReviewCard
            sender="Sam Okafor"
            subject="Quick call about the redesign?"
            waiting="12m"
            summary="Asks if you can talk this week about the homepage scope."
            draft={
              <>
                Hi Sam, happy to talk it through. I’m free{" "}
                <Blank>your availability</Blank>. Does that work?
              </>
            }
            showActions
          />
          <ReviewCard
            sender="Lena Park"
            subject="Re: Invoice for October"
            waiting="1h"
            tone="indigo"
            draft="Thanks Lena, received. I'll confirm once it's been processed."
          />
        </div>

        <PhoneTabBar active="Review" />
      </PhoneFrame>

      <PushBanner
        title="2 replies ready"
        body="Sam and Lena are waiting on you"
      />
    </div>
  );
};
