import { Blank } from "../app-preview/blank";
import { PreviewCard } from "../app-preview/preview-card";
import { SenderAvatar } from "../app-preview/sender-avatar";

const BLANKS = ["your availability", "date"] as const;

export const DraftPreview = function () {
  return (
    <PreviewCard>
      <div className="flex items-center gap-2.5">
        <SenderAvatar name="Sam" />
        <div>
          <p className="text-foreground text-[13px] font-semibold">
            Reply to Sam Okafor
          </p>
          <p className="text-foreground-subtle text-xs">
            To sam@studio-north.co
          </p>
        </div>
      </div>

      <p className="text-foreground mt-3 text-sm leading-7">
        Hi Sam,
        <br />
        <br />
        Happy to talk through the homepage scope. I’m free{" "}
        <Blank>{BLANKS[0]}</Blank>, and I can send the revised estimate by{" "}
        <Blank>{BLANKS[1]}</Blank>.
        <br />
        <br />
        Best,
        <br />
        Abdul
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {BLANKS.map((blank) => (
          <span
            key={blank}
            className="bg-amber-tint text-amber rounded-full px-2.5 py-0.5 text-xs font-medium"
          >
            Fill in: {blank}
          </span>
        ))}
      </div>

      <div className="border-line mt-3.5 flex items-center gap-2 border-t pt-3.5">
        <span className="text-foreground-subtle flex-1 text-xs">
          Fill in {BLANKS.length} blanks to send
        </span>
        <span className="bg-brand text-on-brand grid h-9 place-items-center rounded-lg px-4 text-[13px] font-semibold opacity-40">
          Send
        </span>
      </div>
    </PreviewCard>
  );
};
