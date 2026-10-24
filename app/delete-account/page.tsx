import { buildPageMetadata } from "@/app/_lib/metadata";
import { GOOGLE_PERMISSIONS_URL, ROUTES, SUPPORT_EMAIL } from "@/app/_lib/site";
import { AppText } from "@/components/shared/app-text";
import { BulletList } from "@/components/shared/bullet-list";
import { DocumentPage } from "@/components/shared/document-page";
import { TriangleAlert } from "lucide-react";
import {
  DELETED_DATA,
  DELETE_INTRO,
  GMAIL_AFTER,
  IN_APP_STEPS,
} from "./_components/content";
import { NumberedSteps } from "./_components/numbered-steps";

export const metadata = buildPageMetadata({
  path: ROUTES.deleteAccount,
  title: "Delete your account",
  description:
    "How to delete your Heed account, what is deleted with it, and what stays in your Gmail.",
});

const linkClass = "text-brand font-medium underline-offset-2 hover:underline";

export default function DeleteAccountPage() {
  return (
    <DocumentPage
      eyebrow="Your data"
      title="Delete your account"
      intro={DELETE_INTRO}
    >
      <div className="flex flex-col gap-12">
        <div className="border-line bg-amber-tint flex gap-3 rounded-xl border p-4">
          <TriangleAlert className="text-amber mt-0.5 size-5 shrink-0" />
          <p className="text-foreground text-[15px] leading-relaxed">
            Deleting your account removes everything Heed holds about you, and
            any draft that hasn’t been sent is lost. If you only want Heed to
            stop reading one inbox, disconnect that account instead: Profile,
            then Gmail accounts.
          </p>
        </div>

        <section>
          <AppText type="h4" as="h2" className="text-lg">
            Delete it in the app
          </AppText>
          <NumberedSteps steps={IN_APP_STEPS} />
        </section>

        <section>
          <AppText type="h4" as="h2" className="text-lg">
            Can’t open the app?
          </AppText>
          <AppText className="mt-3 text-[15px]">
            Email{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Delete%20my%20Heed%20account`}
              className={linkClass}
            >
              {SUPPORT_EMAIL}
            </a>{" "}
            from the address you signed up with, with the subject “Delete my
            Heed account”. We’ll confirm it’s you and delete the account within
            7 days.
          </AppText>
        </section>

        <section>
          <AppText type="h4" as="h2" className="text-lg">
            What is deleted
          </AppText>
          <BulletList items={DELETED_DATA} />
        </section>

        <section>
          <AppText type="h4" as="h2" className="text-lg">
            What stays in your Gmail
          </AppText>
          <BulletList items={GMAIL_AFTER} />
        </section>

        <section>
          <AppText type="h4" as="h2" className="text-lg">
            Removing Heed from your Google account
          </AppText>
          <AppText className="mt-3 text-[15px]">
            Deleting your account revokes Heed’s access for you. You can also
            remove it yourself at any time, without deleting anything, from{" "}
            <a href={GOOGLE_PERMISSIONS_URL} className={linkClass}>
              your Google account’s third-party access
            </a>
            . Heed then stops reading that inbox until you reconnect it.
          </AppText>
        </section>
      </div>
    </DocumentPage>
  );
}
