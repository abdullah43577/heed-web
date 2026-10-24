import { CATEGORY_META, type CategoryKey } from "@/lib/categories";
import { cn } from "@/lib/utils";

interface Props {
  category: CategoryKey;
}

export const CategoryDot = function ({ category }: Props) {
  return (
    <span
      className={cn(
        "inline-block size-1.5 shrink-0 rounded-full",
        CATEGORY_META[category].dot,
      )}
      aria-hidden
    />
  );
};
