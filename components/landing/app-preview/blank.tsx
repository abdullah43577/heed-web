interface Props {
  children: React.ReactNode;
}

export const Blank = function ({ children }: Props) {
  return (
    <span className="bg-amber-tint text-amber rounded px-1 font-medium">
      [{children}]
    </span>
  );
};
