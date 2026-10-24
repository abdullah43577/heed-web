import { CtaSection } from "@/components/landing/cta-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { FlowStrip } from "@/components/landing/flow-strip";
import { Hero } from "@/components/landing/hero";
import { PricingSection } from "@/components/landing/pricing-section";
import { PrinciplesSection } from "@/components/landing/principles-section";
import { StepsSection } from "@/components/landing/steps-section";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";

export default function Home() {
  return (
    <div className="bg-canvas flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <FlowStrip />
        <StepsSection />
        <FeaturesSection />
        <PrinciplesSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
