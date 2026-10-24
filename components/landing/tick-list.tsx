import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Props {
  items: readonly string[];
  className?: string;
  divided?: boolean;
}

export const TickList = function ({
  items,
  className,
  divided = false,
}: Props) {
  return (
    <ul
      className={cn(
        "flex flex-col",
        divided ? "divide-line divide-y" : "gap-2.5",
        className,
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "text-foreground flex items-start gap-2.5 text-sm",
            divided && "py-3",
          )}
        >
          <Check
            className="text-brand mt-0.5 size-4 shrink-0"
            strokeWidth={2}
          />
          {item}
        </li>
      ))}
    </ul>
  );
};
