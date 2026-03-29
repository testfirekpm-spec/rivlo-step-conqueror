import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Rivlo — Step Counter App with Leaderboards</title>
        <meta name="description" content="Rivlo is the #1 gamified step counter app. Compete on leaderboards, challenge friends, track hikes & runs, and unlock achievements — all free." />
        <meta property="og:title" content="Rivlo — Step Counter App with Leaderboards" />
        <meta property="og:description" content="Compete on leaderboards, challenge friends, and unlock achievements with the best free step counter app." />
        <meta property="og:url" content="https://rivlo.3bytes.org/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://rivlo.3bytes.org/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Rivlo",
            url: "https://rivlo.3bytes.org",
            logo: "https://rivlo.3bytes.org/logo-rivlo.webp",
            description: "Rivlo is a gamified step counter app where walking becomes a global challenge. Compete with friends, climb leaderboards, and unlock achievements.",
            sameAs: [
              "https://apps.apple.com/app/rivlo-steps-runs-hikes/id6756506796"
            ],
            founder: { "@type": "Organization", name: "3Bytes" },
          })}
        </script>
      </Helmet>
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
