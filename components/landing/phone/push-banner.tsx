import { HeedMark } from "@/components/svg/heed-mark";

interface Props {
  title: string;
  body: string;
}

export const PushBanner = function ({ title, body }: Props) {
  return (
    <div className="border-line-strong bg-surface absolute top-0 left-1/2 flex w-[270px] -translate-x-1/2 items-center gap-2.5 rounded-2xl border px-3 py-2.5 md:w-[300px]">
      <HeedMark size={30} />
      <div className="min-w-0">
        <p className="text-foreground text-[12.5px] font-semibold">{title}</p>
        <p className="text-foreground-muted truncate text-xs">{body}</p>
      </div>
    </div>
  );
};
