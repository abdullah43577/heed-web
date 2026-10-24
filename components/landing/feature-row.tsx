import { AppText } from "@/components/shared/app-text";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { TickList } from "./tick-list";

interface Props {
  eyebrow: string;
  title: string;
  body: string;
  ticks: readonly string[];
  preview: React.ReactNode;
  flip?: boolean;
}

export const FeatureRow = function ({
  eyebrow,
  title,
  body,
  ticks,
  preview,
  flip = false,
}: Props) {
  return (
    <div className="border-line grid items-center gap-10 border-t py-14 first:border-t-0 md:grid-cols-2 md:gap-16">
      <Reveal className={cn(flip && "md:order-2")}>
        <AppText type="eyebrow">{eyebrow}</AppText>
        <AppText type="h3" className="mt-2.5">
          {title}
        </AppText>
        <AppText type="lede" className="mt-3.5">
          {body}
        </AppText>
        {ticks.length > 0 && <TickList items={ticks} className="mt-5.5" />}
      </Reveal>

      <Reveal delay={0.1}>
        <div className="border-line bg-surface-muted rounded-2xl border p-4 md:p-7">
          {preview}
        </div>
      </Reveal>
    </div>
  );
};
