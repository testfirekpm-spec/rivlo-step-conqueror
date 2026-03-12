import { Trophy, Users, Target, MapPin, Swords, Flame } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Global Leaderboards",
    description:
      "Compete against walkers worldwide. See where you rank daily, weekly, and all-time.",
  },
  {
    icon: Users,
    title: "Clubs & Teams",
    description:
      "Create or join walking clubs. Pool steps together and challenge other teams.",
  },
  {
    icon: Target,
    title: "Achievements",
    description:
      "Unlock badges for milestones — first 10K day, 30-day streak, marathon distance, and more.",
  },
  {
    icon: MapPin,
    title: "Run & Hike Tracking",
    description:
      "Map your routes with GPS. Track elevation, pace, and distance for every outdoor session.",
  },
  {
    icon: Swords,
    title: "Friend Challenges",
    description:
      "Challenge any friend to a step duel. Set the duration, set the stakes, and walk it out.",
  },
  {
    icon: Flame,
    title: "Daily Goals",
    description:
      "Set personal targets and build streaks. Rivlo keeps you accountable every single day.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground font-grotesk tracking-tight">
            Everything you need to stay moving
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Rivlo turns your daily steps into a game you'll actually want to play.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(79,106,255,0.08)]"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
