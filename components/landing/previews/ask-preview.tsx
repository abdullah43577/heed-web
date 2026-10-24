const SOURCES = [
  { sender: "Martin Hale", subject: "Re: Deposit for flat 4B · Tue" },
  { sender: "Martin Hale", subject: "Forwarding address? · Tue" },
] as const;

const Cite = function ({ n }: { n: number }) {
  return <sup className="text-brand ml-0.5 text-[11px] font-semibold">{n}</sup>;
};

export const AskPreview = function () {
  return (
    <div className="flex flex-col text-left">
      <p className="bg-brand-muted text-foreground self-end rounded-[14px_14px_4px_14px] px-3 py-2 text-sm">
        Did the landlord reply about the deposit?
      </p>

      <p className="text-foreground mt-3.5 text-sm leading-relaxed">
        Yes. Martin replied on Tuesday: the full deposit will be returned by 15
        November
        <Cite n={1} />. He also asked for your new address for the cheque
        <Cite n={2} />.
      </p>

      <div className="border-line bg-surface divide-line mt-3.5 divide-y rounded-xl border">
        {SOURCES.map((source, index) => (
          <div
            key={source.subject}
            className="flex items-center gap-2.5 px-3 py-2.5"
          >
            <span className="bg-brand-muted text-brand grid size-[22px] shrink-0 place-items-center rounded-md text-[11px] font-bold">
              {index + 1}
            </span>
            <div>
              <p className="text-foreground text-[13px] leading-tight font-medium">
                {source.sender}
              </p>
              <p className="text-foreground-subtle text-xs leading-tight">
                {source.subject}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
