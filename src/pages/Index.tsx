import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";

const SectionDivider = lazy(() => import("@/components/SectionDivider"));

const Navbar = lazy(() => import("@/components/Navbar"));
const ScrollProgress = lazy(() => import("@/components/ScrollProgress"));
const TrustBar = lazy(() => import("@/components/TrustBar"));
const LogoMarquee = lazy(() => import("@/components/LogoMarquee"));
const StatsSection = lazy(() => import("@/components/StatsSection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const AppShowcaseSection = lazy(() => import("@/components/AppShowcaseSection"));
const VideoShowcaseSection = lazy(() => import("@/components/VideoShowcaseSection"));
const AchievementsSection = lazy(() => import("@/components/AchievementsSection"));
const ComparisonSection = lazy(() => import("@/components/ComparisonSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <main className="bg-background">
      <Suspense fallback={null}>
        <ScrollProgress />
        <Navbar />
      </Suspense>
      <HeroSection />
      <Suspense fallback={null}>
        <TrustBar />
        <LogoMarquee />
        <StatsSection />
        <SectionDivider />
        <FeaturesSection />
        <SectionDivider />
        <AppShowcaseSection />
        <SectionDivider />
        <VideoShowcaseSection />
        <SectionDivider />
        <AchievementsSection />
        <SectionDivider />
        <ComparisonSection />
        <SectionDivider />
        <PricingSection />
        <SectionDivider />
        <HowItWorksSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <FAQSection />
        <SectionDivider />
        <BlogSection />
        <CTASection />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
