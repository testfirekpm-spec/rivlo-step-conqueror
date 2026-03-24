import { Star, Users, Shield, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const trustItems = [
  { icon: Star, text: "4.9★ App Store", highlight: true },
  { icon: Users, text: "50K+ Active Users", highlight: false },
  { icon: Shield, text: "Privacy First", highlight: false },
  { icon: Award, text: "App of the Day", highlight: true },
];

const TrustBar = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-8 border-b border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {trustItems.map((item, i) => (
            <div
              key={item.text}
              className="flex items-center gap-2.5 transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(12px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <item.icon
                className={`w-4 h-4 ${
                  item.highlight ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <span className="text-sm font-medium text-muted-foreground">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
