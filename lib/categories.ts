export type CategoryKey =
  | "needsReply"
  | "worthALook"
  | "updates"
  | "newsletters"
  | "promotions"
  | "leftForYou";

// Labels and colours mirror ../heed/src/constants/categories.ts.
export const CATEGORY_META: Record<
  CategoryKey,
  { label: string; dot: string }
> = {
  needsReply: { label: "Needs a reply", dot: "bg-brand" },
  worthALook: { label: "Worth a look", dot: "bg-amber" },
  updates: { label: "Updates", dot: "bg-slate" },
  newsletters: { label: "Newsletters", dot: "bg-indigo" },
  promotions: { label: "Promotions", dot: "bg-rose" },
  leftForYou: { label: "Left for you", dot: "bg-foreground-subtle" },
};
