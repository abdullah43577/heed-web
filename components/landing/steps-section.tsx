import { STEPS } from "@/app/_lib/landing";
import { Reveal } from "@/components/shared/reveal";
import { CATEGORY_META } from "@/lib/categories";
import { CategoryDot } from "./app-preview/category-dot";
import { LandingSection } from "./landing-section";
import { SectionHeading } from "./section-heading";

const Chip = function ({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-line text-foreground-muted inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium">
      {children}
    </span>
  );
};

export const StepsSection = function () {
  return (
    <LandingSection id="how-it-works">
      <SectionHeading
        eyebrow="How it works"
        title="Connect once. Heed handles every email after that."
        lede="New mail is checked every minute. Each email goes one of three ways, and you can see why."
      />

      <ol className="mt-12 grid gap-4 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.1} className="h-full">
            <li className="border-line bg-surface h-full rounded-xl border p-6">
              <span className="border-line-strong text-foreground-muted grid size-7 place-items-center rounded-full border text-[13px] font-semibold">
                {index + 1}
              </span>
              <h3 className="text-foreground mt-4.5 mb-1.5 text-[17px] font-semibold tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {step.body}
              </p>
              <div className="mt-4.5 flex flex-wrap gap-1.5">
                {step.note && <Chip>{step.note}</Chip>}
                {step.categories?.map((category) => (
                  <Chip key={category}>
                    <CategoryDot category={category} />
                    {CATEGORY_META[category].label}
                  </Chip>
                ))}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </LandingSection>
  );
};
