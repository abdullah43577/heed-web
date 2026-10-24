import type { IconItem } from "@/app/_lib/landing";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { IconTile } from "./icon-tile";

interface Props {
  items: IconItem[];
  variant?: "cards" | "panel";
  className?: string;
}

// "cards" are separate bordered tiles; "panel" is one bordered grid with shared hairlines.
export const IconGrid = function ({
  items,
  variant = "cards",
  className,
}: Props) {
  const isPanel = variant === "panel";

  return (
    <div
      className={cn(
        "grid md:grid-cols-3",
        isPanel
          ? "border-line bg-line gap-px overflow-hidden rounded-2xl border"
          : "gap-4",
        className,
      )}
    >
      {items.map((item, index) => (
        <Reveal
          key={item.title}
          delay={(index % 3) * 0.08}
          className={cn(
            "bg-surface h-full",
            isPanel ? "p-7" : "border-line rounded-xl border p-5.5",
          )}
        >
          <IconTile icon={item.icon} outlined={isPanel} />
          <h4
            className={cn(
              "text-foreground mb-1.5 font-semibold tracking-[-0.01em]",
              isPanel ? "mt-4.5 text-base" : "mt-4 text-[15px]",
            )}
          >
            {item.title}
          </h4>
          <p className="text-foreground-muted text-sm leading-relaxed">
            {item.body}
          </p>
        </Reveal>
      ))}
    </div>
  );
};
