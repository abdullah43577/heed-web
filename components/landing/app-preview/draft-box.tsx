interface Props {
  children: React.ReactNode;
}

export const DraftBox = function ({ children }: Props) {
  return (
    <div className="bg-surface-muted mt-2.5 rounded-lg px-3 py-2.5">
      <p className="text-brand text-[10.5px] font-bold tracking-[0.07em] uppercase">
        Heed’s draft
      </p>
      <p className="text-foreground mt-1 text-[12.5px] leading-normal">
        {children}
      </p>
    </div>
  );
};
