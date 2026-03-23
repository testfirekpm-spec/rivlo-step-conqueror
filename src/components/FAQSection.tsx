import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Rivlo free to use?",
    a: "Yes! Rivlo is free to download and use. Our Free plan includes step tracking, leaderboards, and basic achievements. Upgrade to Pro or Team for advanced features like GPS hike tracking, unlimited challenges, and club management.",
  },
  {
    q: "Which devices are supported?",
    a: "Rivlo is available on iOS (iPhone 12 and later). We integrate with Apple Health to automatically sync your step data. Android support is coming soon.",
  },
  {
    q: "How does the leaderboard work?",
    a: "Leaderboards rank users by total steps across daily, weekly, and all-time periods. You can compete globally, among friends, or within your club. Rankings update in real-time throughout the day.",
  },
  {
    q: "Can I challenge my friends?",
    a: "Absolutely. Send a challenge to any friend — set the duration (1 day to 1 month), choose 1v1 or group mode, and walk it out. The loser buys coffee. ☕",
  },
  {
    q: "Is my health data private?",
    a: "100%. Your health data stays on your device and is never sold or shared with third parties. We only sync aggregate step counts to power leaderboards. You can delete all data at any time.",
  },
  {
    q: "What are achievements?",
    a: "Achievements are unlockable badges you earn by hitting milestones — your first 10K step day, a 7-day streak, walking a marathon distance, and more. There are over 50 badges to collect.",
  },
];

const FAQSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.05);

  return (
    <section id="faq" className="relative py-32 lg:py-40 bg-background" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 800px' }}>
      <div className="container mx-auto px-6 max-w-3xl">
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground font-grotesk tracking-tight leading-[1.05]">
            Questions?
            <br />
            <span className="text-muted-foreground">We've got answers</span>
          </h2>
        </div>

        <div
          ref={contentRef}
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
          }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-border/50 py-1"
              >
                <AccordionTrigger className="text-left text-base lg:text-lg font-semibold text-foreground hover:text-primary hover:no-underline transition-colors py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
