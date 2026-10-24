import { cn } from "@/lib/utils";

interface Props {
  label: string;
  primary?: boolean;
}

export const MiniButton = function ({ label, primary = false }: Props) {
  return (
    <span
      className={cn(
        "grid h-8 flex-1 place-items-center rounded-lg border text-xs font-semibold",
        primary
          ? "border-brand bg-brand text-on-brand"
          : "border-line-strong text-foreground",
      )}
    >
      {label}
    </span>
  );
};
