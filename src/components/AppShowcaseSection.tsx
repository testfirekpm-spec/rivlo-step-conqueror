import { useState } from "react";
import { Trophy, BarChart3, Users, Flame } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import LeaderboardImg from "@/assets/Leaderboard.PNG";
import InsightsImg from "@/assets/Insights.PNG";
import ClubImg from "@/assets/Club.PNG";
import ClubLeaderboardImg from "@/assets/Club_Leaderboard.PNG";
import SeasonChallengesImg from "@/assets/Season_Challenges.PNG";

const tabs = [
  {
    id: "leaderboard",
    label: "Leaderboard",
    icon: Trophy,
    image: LeaderboardImg,
    headline: "Climb the Global Rankings",
    description:
      "Compete against walkers worldwide with themed seasonal leaderboards. Filter by Global, Country, or Friends to see where you stand.",
    bullets: [
      "Real-time global, country & friends rankings",
      "Seasonal themes that keep things fresh",
      "Track your rank progression over time",
    ],
  },
  {
    id: "insights",
    label: "Insights",
    icon: BarChart3,
    image: InsightsImg,
    headline: "Know Your Numbers",
    description:
      "Deep analytics on your walking habits — lifetime stats, daily averages, activity by time of day, and weekday vs weekend breakdowns.",
    bullets: [
      "Lifetime steps, distance & calories tracked",
      "Daily average & peak activity hours",
      "Weekday vs weekend activity patterns",
    ],
  },
  {
    id: "clubs",
    label: "Clubs",
    icon: Users,
    image: ClubImg,
    secondaryImage: ClubLeaderboardImg,
    headline: "Walk Together, Win Together",
    description:
      "Create or join walking clubs. Pool steps together, compete in Club Wars, and climb the club leaderboard as a team.",
    bullets: [
      "Create clubs & invite friends",
      "Club Wars — team vs team challenges",
      "Club leaderboards & member rankings",
    ],
  },
  {
    id: "challenges",
    label: "Challenges",
    icon: Flame,
    image: SeasonChallengesImg,
    headline: "Seasonal Challenges",
    description:
      "Take on limited-time challenges like the Winter Arc. Track your progress, earn trophies, and push your limits with every season.",
    bullets: [
      "Time-limited seasonal events",
      "Progress tracking with trophy rewards",
      "Compete for seasonal rankings",
    ],
  },
];

const PhoneFrame = ({ image, alt }: { image: string; alt: string }) => (
  <div
    className="relative w-[260px] h-[530px] sm:w-[280px] sm:h-[570px] rounded-[3rem] border-2 border-border bg-card overflow-hidden shadow-2xl mx-auto"
    style={{
      boxShadow:
        "0 0 80px hsl(var(--primary) / 0.12), 0 25px 60px rgba(0,0,0,0.5)",
    }}
  >
    {/* Notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-background rounded-b-2xl z-10" />
    <img
      src={image}
      alt={alt}
      className="w-full h-full object-cover object-top"
      loading="lazy"
    />
  </div>
);

const AppShowcaseSection = () => {
  const [activeTab, setActiveTab] = useState("leaderboard");
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  const activeFeature = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="relative py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground font-grotesk tracking-tight leading-[1.05]">
            See Rivlo
            <br />
            <span className="text-muted-foreground">in action</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex gap-2 p-1.5 rounded-2xl bg-card border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Phone */}
          <div className="flex justify-center">
            <div
              key={activeTab}
              style={{
                animation:
                  "fade-in-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) backwards",
              }}
            >
              <PhoneFrame
                image={activeFeature.image}
                alt={`Rivlo ${activeFeature.label} screen`}
              />
            </div>
          </div>

          {/* Text */}
          <div
            key={`text-${activeTab}`}
            style={{
              animation:
                "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s backwards",
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <activeFeature.icon className="w-3.5 h-3.5" />
              {activeFeature.label}
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground font-grotesk tracking-tight mb-4">
              {activeFeature.headline}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {activeFeature.description}
            </p>
            <ul className="space-y-3">
              {activeFeature.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
