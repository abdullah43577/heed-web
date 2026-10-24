interface Props {
  steps: readonly string[];
}

export const NumberedSteps = function ({ steps }: Props) {
  return (
    <ol className="border-line divide-line mt-4 divide-y rounded-xl border">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-3.5 px-4 py-3.5">
          <span className="bg-brand-muted text-brand flex size-7 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold">
            {index + 1}
          </span>
          <span className="text-foreground text-[15px]">{step}</span>
        </li>
      ))}
    </ol>
  );
};
