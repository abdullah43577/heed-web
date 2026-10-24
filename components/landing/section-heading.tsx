import { AppText } from "@/components/shared/app-text";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  centered?: boolean;
}

export const SectionHeading = function ({
  eyebrow,
  title,
  lede,
  centered = false,
}: Props) {
  return (
    <Reveal className={cn("max-w-2xl", centered && "mx-auto text-center")}>
      <AppText type="eyebrow">{eyebrow}</AppText>
      <AppText type="h2" className="mt-3">
        {title}
      </AppText>
      {lede && (
        <AppText type="lede" className="mt-4">
          {lede}
        </AppText>
      )}
    </Reveal>
  );
};
