import { cn } from "@/lib/utils";

interface Props {
  size?: number;
  className?: string;
}

// Same geometry as ../heed/scripts/build-icons.mjs; change both together.
export const HeedMark = function ({ size = 28, className }: Props) {
  return (
    <span
      className={cn(
        "bg-brand inline-grid shrink-0 place-items-center rounded-lg",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg
        width={size * 0.64}
        height={size * 0.64}
        viewBox="0 0 1024 1024"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={80}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="212" y="292" width="600" height="440" rx="76" />
        <polyline points="304,479 448,605 716,419" />
      </svg>
    </span>
  );
};
