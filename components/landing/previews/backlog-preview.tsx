import { CountRows } from "../app-preview/count-rows";
import { MiniButton } from "../app-preview/mini-button";
import { PreviewCard } from "../app-preview/preview-card";

const READY = 1190;
const SORTED = 1284;

export const BacklogPreview = function () {
  return (
    <PreviewCard>
      <p className="text-foreground text-[34px] leading-tight font-bold tracking-tight">
        {READY.toLocaleString("en-GB")}
      </p>
      <p className="text-foreground-muted text-[15px]">
        emails ready to mark as read
      </p>

      <div className="bg-line mt-4 mb-1.5 h-1.5 overflow-hidden rounded-full">
        <i className="bg-brand block h-full w-full" />
      </div>
      <p className="text-foreground-subtle text-xs">
        Sorted {SORTED.toLocaleString("en-GB")} of{" "}
        {SORTED.toLocaleString("en-GB")} from the last 30 days
      </p>

      <div className="mt-3">
        <CountRows
          rows={[
            { category: "needsReply", count: 14 },
            { category: "leftForYou", count: 80 },
          ]}
        />
      </div>

      <div className="mt-3.5 flex gap-1.5">
        <MiniButton label="Cancel" />
        <MiniButton
          label={`Mark ${READY.toLocaleString("en-GB")} as read`}
          primary
        />
      </div>
    </PreviewCard>
  );
};
