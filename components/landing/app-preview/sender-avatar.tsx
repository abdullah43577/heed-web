import { cn } from "@/lib/utils";

type Tone = "brand" | "indigo";

interface Props {
  name: string;
  tone?: Tone;
  size?: "sm" | "md";
}

const toneStyles: Record<Tone, string> = {
  brand: "bg-brand-muted text-brand",
  indigo: "bg-indigo-tint text-indigo",
};

export const SenderAvatar = function ({
  name,
  tone = "brand",
  size = "md",
}: Props) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-full font-semibold",
        size === "md" ? "size-9 text-[13px]" : "size-8 text-xs",
        toneStyles[tone],
      )}
      aria-hidden
    >
      {name.charAt(0)}
    </span>
  );
};
