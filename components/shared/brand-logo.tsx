import { ROUTES, SITE_NAME } from "@/app/_lib/site";
import { HeedMark } from "@/components/svg/heed-mark";
import Link from "next/link";

export const BrandLogo = function () {
  return (
    <Link
      href={ROUTES.home}
      className="text-foreground flex items-center gap-2.5 text-[17px] font-semibold tracking-tight"
    >
      <HeedMark />
      {SITE_NAME}
    </Link>
  );
};
