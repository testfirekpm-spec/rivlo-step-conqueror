import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import LogoMarquee from "@/components/LogoMarquee";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import AppShowcaseSection from "@/components/AppShowcaseSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import AchievementsSection from "@/components/AchievementsSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <main className="bg-background">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
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
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
