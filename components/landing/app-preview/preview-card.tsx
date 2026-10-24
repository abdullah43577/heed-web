import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const PreviewCard = function ({ children, className }: Props) {
  return (
    <div
      className={cn(
        "border-line bg-surface rounded-xl border p-4 text-left",
        className,
      )}
    >
      {children}
    </div>
  );
};
