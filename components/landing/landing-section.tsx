import { cn } from "@/lib/utils";

interface Props {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export const LandingSection = function ({ id, children, className }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "border-line scroll-mt-16 border-t py-18 md:py-26",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
};
