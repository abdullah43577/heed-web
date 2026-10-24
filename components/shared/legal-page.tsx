import Link from "next/link";
import { AppText } from "./app-text";
import { BulletList } from "./bullet-list";
import { DocumentPage } from "./document-page";

export interface LegalSection {
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  links?: readonly { label: string; href: string }[];
}

interface Props {
  title: string;
  updated: string;
  intro: string;
  sections: readonly LegalSection[];
}

export const LegalPage = function ({ title, updated, intro, sections }: Props) {
  return (
    <DocumentPage eyebrow="Legal" title={title} updated={updated} intro={intro}>
      <div className="flex flex-col gap-10">
        {sections.map((section, index) => (
          <section key={section.heading}>
            <AppText type="h4" as="h2" className="text-lg">
              {index + 1}. {section.heading}
            </AppText>
            {section.paragraphs?.map((paragraph) => (
              <AppText key={paragraph} className="mt-3 text-[15px]">
                {paragraph}
              </AppText>
            ))}
            {section.bullets && <BulletList items={section.bullets} />}
            {section.links && (
              <ul className="mt-3 flex flex-col gap-1.5 text-[15px]">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-brand font-medium break-all underline-offset-2 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </DocumentPage>
  );
};
