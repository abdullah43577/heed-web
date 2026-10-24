import { CATEGORY_META, type CategoryKey } from "@/lib/categories";
import { CategoryDot } from "./category-dot";

interface Props {
  rows: { category: CategoryKey; count: number }[];
}

export const CountRows = function ({ rows }: Props) {
  return (
    <div className="divide-line flex flex-col divide-y">
      {rows.map((row) => (
        <div
          key={row.category}
          className="text-foreground flex items-center gap-2.5 py-2.5 text-sm"
        >
          <CategoryDot category={row.category} />
          {CATEGORY_META[row.category].label}
          <span className="ml-auto font-semibold tabular-nums">
            {row.count.toLocaleString("en-GB")}
          </span>
        </div>
      ))}
    </div>
  );
};
