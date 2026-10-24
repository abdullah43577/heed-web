import { FEATURES, MINI_FEATURES } from "@/app/_lib/landing";
import { FeatureRow } from "./feature-row";
import { IconGrid } from "./icon-grid";
import { LandingSection } from "./landing-section";
import { AskPreview } from "./previews/ask-preview";
import { BacklogPreview } from "./previews/backlog-preview";
import { DraftPreview } from "./previews/draft-preview";
import { ReportPreview } from "./previews/report-preview";
import { SectionHeading } from "./section-heading";

export const FeaturesSection = function () {
  return (
    <LandingSection id="features">
      <SectionHeading
        eyebrow="What you get"
        title="Everything an inbox asks of you, done before you open it."
      />

      <div className="mt-6">
        <FeatureRow {...FEATURES.drafts} preview={<DraftPreview />} />
        <FeatureRow {...FEATURES.report} preview={<ReportPreview />} flip />
        <FeatureRow {...FEATURES.ask} preview={<AskPreview />} />
        <FeatureRow {...FEATURES.backlog} preview={<BacklogPreview />} flip />
      </div>

      <IconGrid items={MINI_FEATURES} className="mt-10" />
    </LandingSection>
  );
};
