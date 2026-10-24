import { AppText } from "./app-text";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

interface Props {
  eyebrow: string;
  title: string;
  updated?: string;
  intro: string;
  children: React.ReactNode;
}

export const DocumentPage = function ({
  eyebrow,
  title,
  updated,
  intro,
  children,
}: Props) {
  return (
    <div className="bg-canvas flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 pt-14 pb-20 sm:px-6 md:pt-20">
          <AppText type="eyebrow">{eyebrow}</AppText>
          <AppText type="h2" as="h1" className="mt-3">
            {title}
          </AppText>
          {updated && (
            <AppText type="caption" as="p" className="mt-3">
              Last updated {updated}
            </AppText>
          )}
          <AppText type="lede" className="mt-6">
            {intro}
          </AppText>
          <div className="border-line mt-10 border-t pt-10">{children}</div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
};
