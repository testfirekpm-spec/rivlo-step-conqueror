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
        <title>Rivlo — Free Step Counter App with Leaderboards & Challenges | iOS & Android</title>
        <meta name="description" content="Rivlo is the free gamified step counter and pedometer app for iOS and Android. Track your daily steps, compete on global leaderboards, challenge friends, and earn achievements — no subscription needed." />
        <meta name="keywords" content="step counter app, pedometer app, best step counter, free step tracker, walking challenge app, fitness leaderboard, step counter android, step counter iphone" />
        <meta name="robots" content="index, follow" />
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
              "https://apps.apple.com/app/rivlo-steps-runs-hikes/id6756506796",
              "https://play.google.com/store/apps/details?id=com.rivlo.app"
            ],
            founder: { "@type": "Organization", name: "3Bytes" },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Rivlo",
            applicationCategory: "HealthApplication",
            operatingSystem: ["iOS", "Android"],
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "1000",
              bestRating: "5",
            },
            url: "https://rivlo.3bytes.org/",
            downloadUrl: [
              "https://apps.apple.com/app/rivlo-steps-runs-hikes/id6756506796",
              "https://play.google.com/store/apps/details?id=com.rivlo.app",
            ],
            screenshot: "https://rivlo.3bytes.org/og-image.png",
            description: "Free gamified step counter app with leaderboards, challenges, and achievements. Track steps, compete globally, and earn badges without a subscription. Available on iOS and Android.",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is Rivlo free to download?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Rivlo is completely free to download and use on iOS and Android. There is no subscription required to access leaderboards, step challenges, or achievement badges."
                }
              },
              {
                "@type": "Question",
                "name": "Is Rivlo available on iPhone and Android?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Rivlo is available for free on both iOS (iPhone and Apple Watch) and Android. Download it from the App Store or Google Play — no subscription required."
                }
              },
              {
                "@type": "Question",
                "name": "Can I compete with friends on Rivlo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Rivlo features both global leaderboards and friend-specific leaderboards. You can send 1v1 step challenges, join group competitions, and participate in seasonal events with people from around the world."
                }
              },
              {
                "@type": "Question",
                "name": "How does Rivlo count steps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Rivlo uses your smartphone's built-in accelerometer and motion sensor to accurately count steps. It runs in the background so you never miss a step, even when your phone is in your pocket."
                }
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Rivlo",
            "url": "https://rivlo.3bytes.org/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://rivlo.3bytes.org/?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
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
