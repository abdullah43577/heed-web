import { FLOW } from "@/app/_lib/landing";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

export const FlowStrip = function () {
  return (
    <div className="border-line border-t">
      <div className="divide-line mx-auto grid max-w-6xl divide-y px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0">
        {FLOW.map((step, index) => (
          <Reveal
            key={step.label}
            delay={index * 0.1}
            className="py-6 md:px-7 md:py-8 md:first:pl-0"
          >
            <p className="text-foreground-subtle mb-3.5 text-xs font-semibold tracking-[0.07em] uppercase">
              {step.label}
            </p>
            <p
              className={cn(
                "text-[40px] leading-none font-bold tracking-[-0.03em]",
                "highlight" in step ? "text-brand" : "text-foreground",
              )}
            >
              {step.value}
            </p>
            <p className="text-foreground-muted mt-2.5 text-sm leading-normal">
              {step.body}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
