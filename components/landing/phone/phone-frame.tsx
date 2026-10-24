interface Props {
  children: React.ReactNode;
}

export const PhoneFrame = function ({ children }: Props) {
  return (
    <div className="border-line-strong bg-surface w-[300px] rounded-[40px] border p-2.5 md:w-[330px]">
      <div className="border-line bg-canvas flex h-[600px] flex-col overflow-hidden rounded-[31px] border">
        <div className="text-foreground flex h-9 items-center justify-between px-6 text-xs font-semibold">
          <span>9:41</span>
          <span className="tracking-widest">•••</span>
        </div>
        {children}
      </div>
    </div>
  );
};
