import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  outlined?: boolean;
}

export const IconTile = function ({ icon: Icon, outlined = false }: Props) {
  return (
    <span
      className={cn(
        "grid size-9 shrink-0 place-items-center rounded-full",
        outlined ? "border-line-strong border" : "bg-brand-muted",
      )}
    >
      <Icon
        className={cn(
          "size-[18px]",
          outlined ? "text-foreground" : "text-brand",
        )}
        strokeWidth={1.75}
      />
    </span>
  );
};
