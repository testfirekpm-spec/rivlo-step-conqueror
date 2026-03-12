import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import AppShowcaseSection from "@/components/AppShowcaseSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import AchievementsSection from "@/components/AchievementsSection";
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
      <Navbar />
      <HeroSection />
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
