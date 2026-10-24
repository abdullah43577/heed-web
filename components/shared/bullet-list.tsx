interface Props {
  items: readonly string[];
}

export const BulletList = function ({ items }: Props) {
  return (
    <ul className="text-foreground-muted marker:text-foreground-subtle mt-3 flex list-disc flex-col gap-2 pl-5 text-[15px] leading-relaxed">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
