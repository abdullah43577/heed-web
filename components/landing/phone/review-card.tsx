import { DraftBox } from "../app-preview/draft-box";
import { MiniButton } from "../app-preview/mini-button";
import { PreviewCard } from "../app-preview/preview-card";
import { SenderAvatar } from "../app-preview/sender-avatar";

interface Props {
  sender: string;
  subject: string;
  waiting: string;
  tone?: "brand" | "indigo";
  summary?: string;
  draft: React.ReactNode;
  showActions?: boolean;
}

export const ReviewCard = function ({
  sender,
  subject,
  waiting,
  tone,
  summary,
  draft,
  showActions = false,
}: Props) {
  return (
    <PreviewCard className="p-3">
      <div className="flex items-center gap-2.5">
        <SenderAvatar name={sender} tone={tone} size="sm" />
        <div className="min-w-0">
          <p className="text-foreground text-[13px] leading-tight font-semibold">
            {sender}
          </p>
          <p className="text-foreground-subtle truncate text-xs leading-tight">
            {subject}
          </p>
        </div>
        <span className="text-foreground-subtle ml-auto self-start text-[11px]">
          {waiting}
        </span>
      </div>

      {summary && (
        <p className="text-foreground-muted mt-2 text-[12.5px] leading-snug">
          {summary}
        </p>
      )}

      <DraftBox>{draft}</DraftBox>

      {showActions && (
        <div className="mt-2.5 flex gap-1.5">
          <MiniButton label="No reply needed" />
          <MiniButton label="Review" primary />
        </div>
      )}
    </PreviewCard>
  );
};
