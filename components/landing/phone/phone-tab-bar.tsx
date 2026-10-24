import { cn } from "@/lib/utils";
import { CheckCheck, Inbox, Sparkles, User } from "lucide-react";

const TABS = [
  { label: "Review", icon: Inbox },
  { label: "Handled", icon: CheckCheck },
  { label: "Ask", icon: Sparkles },
  { label: "Profile", icon: User },
] as const;

interface Props {
  active: (typeof TABS)[number]["label"];
}

export const PhoneTabBar = function ({ active }: Props) {
  return (
    <div className="border-line mt-auto grid h-[58px] grid-cols-4 border-t">
      {TABS.map((tab) => {
        const isActive = tab.label === active;

        return (
          <div
            key={tab.label}
            className={cn(
              "flex flex-col items-center justify-center gap-1 text-[10px]",
              isActive ? "text-brand font-semibold" : "text-foreground-subtle",
            )}
          >
            <tab.icon className="size-5" strokeWidth={isActive ? 2 : 1.75} />
            {tab.label}
          </div>
        );
      })}
    </div>
  );
};
