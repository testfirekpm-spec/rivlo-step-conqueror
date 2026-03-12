import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Trophy, Flame, Mountain, Footprints, Zap, Crown, Target, MapPin } from "lucide-react";

const badges = [
  { icon: Footprints, name: "First Steps", desc: "Walk 1,000 steps", color: "from-primary/20 to-primary/5", earned: true },
  { icon: Flame, name: "7-Day Streak", desc: "Hit goal 7 days in a row", color: "from-orange-500/20 to-orange-500/5", earned: true },
  { icon: Target, name: "10K Club", desc: "Walk 10,000 steps in a day", color: "from-emerald-500/20 to-emerald-500/5", earned: true },
  { icon: Mountain, name: "Summit Reached", desc: "Complete a mountain hike", color: "from-sky-500/20 to-sky-500/5", earned: true },
  { icon: Trophy, name: "#1 Weekly", desc: "Top the weekly leaderboard", color: "from-amber-500/20 to-amber-500/5", earned: false },
  { icon: Zap, name: "Speed Demon", desc: "Walk 5K in under 40 min", color: "from-violet-500/20 to-violet-500/5", earned: false },
  { icon: Crown, name: "Marathon", desc: "Walk 42.2 km in one day", color: "from-rose-500/20 to-rose-500/5", earned: false },
  { icon: MapPin, name: "Explorer", desc: "Track 50 unique routes", color: "from-teal-500/20 to-teal-500/5", earned: false },
];

const AchievementsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="relative py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-20"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground font-grotesk tracking-tight leading-[1.05]">
            Unlock badges,
            <br />
            <span className="text-muted-foreground">earn bragging rights</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {badges.map((badge, i) => {
            const { ref, isVisible } = useScrollReveal(0.05);
            return (
              <div
                key={badge.name}
                ref={ref}
                className={`group relative rounded-3xl border p-6 text-center transition-all duration-500 hover:scale-105 cursor-default ${
                  badge.earned
                    ? "border-border bg-card hover:border-primary/30"
                    : "border-border/40 bg-card/50 opacity-60 hover:opacity-80"
                }`}
                style={{
                  opacity: isVisible ? (badge.earned ? 1 : 0.6) : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.06}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.06}s`,
                }}
              >
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${badge.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <badge.icon className="w-7 h-7 text-foreground" />
                </div>
                <h4 className="text-sm font-bold text-foreground font-grotesk">{badge.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{badge.desc}</p>
                {!badge.earned && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-muted-foreground/50 uppercase tracking-widest">Locked</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
