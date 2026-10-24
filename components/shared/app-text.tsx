import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";

type TextType =
  | "display"
  | "h2"
  | "h3"
  | "h4"
  | "lede"
  | "body"
  | "caption"
  | "eyebrow"
  | "label";

interface Props {
  type?: TextType;
  children: React.ReactNode;
  className?: ClassValue;
  as?: keyof React.JSX.IntrinsicElements;
}

const typeStyles: Record<TextType, string> = {
  display:
    "text-[40px] leading-[1.05] font-bold tracking-[-0.035em] text-foreground md:text-[56px]",
  h2: "text-[30px] leading-[1.1] font-bold tracking-[-0.03em] text-foreground md:text-[40px]",
  h3: "text-[24px] leading-[1.15] font-bold tracking-[-0.025em] text-foreground md:text-[28px]",
  h4: "text-base font-semibold tracking-[-0.01em] text-foreground",
  lede: "text-base leading-relaxed text-foreground-muted md:text-[17px]",
  body: "text-sm leading-relaxed text-foreground-muted",
  caption: "text-xs text-foreground-subtle",
  eyebrow: "text-xs font-bold tracking-[0.08em] text-brand uppercase",
  label: "text-sm font-medium text-foreground",
};

const typeElements: Record<TextType, keyof React.JSX.IntrinsicElements> = {
  display: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  lede: "p",
  body: "p",
  caption: "span",
  eyebrow: "p",
  label: "span",
};

export const AppText = function ({
  type = "body",
  children,
  className,
  as,
}: Props) {
  const Tag = (as ?? typeElements[type]) as keyof React.JSX.IntrinsicElements;

  return <Tag className={cn(typeStyles[type], className)}>{children}</Tag>;
};
