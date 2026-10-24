import { CATEGORY_META, type CategoryKey } from "@/lib/categories";
import { cn } from "@/lib/utils";
import { CountRows } from "../app-preview/count-rows";
import { PreviewCard } from "../app-preview/preview-card";

const ROWS: { category: CategoryKey; count: number }[] = [
  { category: "worthALook", count: 1 },
  { category: "updates", count: 23 },
  { category: "newsletters", count: 12 },
  { category: "promotions", count: 8 },
];

const total = ROWS.reduce((sum, row) => sum + row.count, 0);

export const ReportPreview = function () {
  return (
    <PreviewCard>
      <p className="text-foreground-subtle text-[10.5px] font-bold tracking-[0.07em] uppercase">
        Today · 6:00 PM
      </p>
      <div className="mt-2 flex items-baseline gap-2.5">
        <span className="text-foreground text-[34px] leading-none font-bold tracking-tight">
          {total}
        </span>
        <span className="text-foreground-muted text-sm">
          emails read for you
        </span>
      </div>

      <div className="my-4 flex h-2 gap-0.5 overflow-hidden rounded-full">
        {ROWS.map((row) => (
          <i
            key={row.category}
            className={cn("block", CATEGORY_META[row.category].dot)}
            style={{ flex: row.count }}
          />
        ))}
      </div>

      <CountRows rows={ROWS} />

      <div className="bg-amber-tint mt-3.5 rounded-lg px-3 py-2.5 text-[13px]">
        <p className="text-amber text-[11px] font-bold tracking-[0.07em] uppercase">
          Worth a look
        </p>
        <p className="text-foreground">
          Google: new sign-in on a Windows device
        </p>
      </div>
    </PreviewCard>
  );
};
