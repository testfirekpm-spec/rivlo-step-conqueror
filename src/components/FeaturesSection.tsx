import { Trophy, Users, Target, MapPin, Swords, Flame } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: Trophy,
    title: "Global Leaderboards",
    description:
      "Compete against walkers worldwide. See where you rank daily, weekly, and all-time.",
    detail: "Real-time rankings across friends, clubs, and the entire world.",
  },
  {
    icon: Users,
    title: "Clubs & Teams",
    description:
      "Create or join walking clubs. Pool steps together and challenge other teams.",
    detail: "Build your crew. Walk together, win together.",
  },
  {
    icon: Target,
    title: "Achievements",
    description:
      "Unlock badges for milestones — first 10K day, 30-day streak, marathon distance, and more.",
    detail: "Over 50 unlockable badges to collect.",
  },
  {
    icon: MapPin,
    title: "Run & Hike Tracking",
    description:
      "Map your routes with GPS. Track elevation, pace, and distance for every outdoor session.",
    detail: "Full GPS tracking with elevation profiles.",
  },
  {
    icon: Swords,
    title: "Friend Challenges",
    description:
      "Challenge any friend to a step duel. Set the duration, set the stakes, and walk it out.",
    detail: "1v1 or group challenges with custom rules.",
  },
  {
    icon: Flame,
    title: "Daily Goals",
    description:
      "Set personal targets and build streaks. Rivlo keeps you accountable every single day.",
    detail: "Smart goals that adapt to your activity level.",
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className="group relative rounded-3xl border border-border bg-card p-8 lg:p-10 transition-all duration-500 hover:border-primary/20"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
      }}
    >
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
        <feature.icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3 font-grotesk">
        {feature.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        {feature.description}
      </p>
      <p className="text-xs text-muted-foreground/60 font-medium uppercase tracking-wider">
        {feature.detail}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="features" className="relative py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-20"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <h2
            className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground font-grotesk tracking-tight leading-[1.05]"
          >
            Everything you need
            <br />
            <span className="text-muted-foreground">to stay moving</span>
          </h2>
        </div>

        {/* Grid — 2 cols on lg, staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
