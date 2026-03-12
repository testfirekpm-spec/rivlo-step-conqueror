import { Check, X, Minus } from "lucide-react";
import { motion } from "framer-motion";

type Status = "yes" | "no" | "partial" | "free" | "paid";

// Verified feature comparison (March 2026)
// Strava: Free tier has GPS, clubs, activity feed. Paid ($11.99/mo) adds segment leaderboards, routes, training log, etc.
// Nike Run Club: 100% free. GPS, guided runs, challenges, milestones. No leaderboards, no clubs.
// Runna: Subscription coaching app ($19.99/mo). Personalized training plans. No step tracking, no leaderboards.
const features = [
  { name: "Step Tracking & Goals", rivlo: "free", strava: "free", nike: "free", runna: "no" },
  { name: "GPS Run & Hike Tracking", rivlo: "free", strava: "free", nike: "free", runna: "no" },
  { name: "Global Leaderboards", rivlo: "free", strava: "paid", nike: "no", runna: "no" },
  { name: "Friend Challenges", rivlo: "free", strava: "free", nike: "free", runna: "no" },
  { name: "Clubs & Teams", rivlo: "free", strava: "free", nike: "no", runna: "no" },
  { name: "Achievements & Badges", rivlo: "free", strava: "partial", nike: "free", runna: "no" },
  { name: "Season Challenges", rivlo: "free", strava: "no", nike: "no", runna: "no" },
  { name: "Personalized Training Plans", rivlo: "no", strava: "no", nike: "free", runna: "paid" },
  { name: "Detailed Analytics", rivlo: "paid", strava: "paid", nike: "free", runna: "paid" },
  { name: "Custom Themes & Widgets", rivlo: "paid", strava: "no", nike: "no", runna: "no" },
  { name: "No Subscription Required", rivlo: "yes", strava: "no", nike: "yes", runna: "no" },
] as const;

const apps = [
  { key: "rivlo", name: "Rivlo", color: "hsl(var(--primary))", textClass: "text-primary" },
  { key: "strava", name: "Strava", color: "#FC4C02", textClass: "" },
  { key: "nike", name: "Nike Run Club", color: "#ffffff", textClass: "" },
  { key: "runna", name: "Runna", color: "#00C8C8", textClass: "" },
] as const;

const priceLabels: Record<string, string> = {
  rivlo: "Free / $3.99/mo",
  strava: "$11.99/mo",
  nike: "Free",
  runna: "$19.99/mo",
};

const StatusCell = ({ status }: { status: Status }) => {
  switch (status) {
    case "yes":
    case "free":
      return (
        <span className="flex items-center justify-center gap-1">
          <Check className="w-4 h-4 text-green-400" />
          {status === "free" && (
            <span className="text-[10px] font-bold text-green-400 uppercase">Free</span>
          )}
        </span>
      );
    case "paid":
      return (
        <span className="flex items-center justify-center gap-1 text-muted-foreground">
          <Check className="w-4 h-4 text-yellow-500" />
          <span className="text-[10px] font-bold text-yellow-500 uppercase">Paid</span>
        </span>
      );
    case "partial":
      return <Minus className="w-4 h-4 text-yellow-500/70 mx-auto" />;
    case "no":
      return <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />;
  }
};

const ComparisonSection = () => {
  return (
    <section className="relative py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground font-grotesk tracking-tight leading-[1.05]">
            Why choose
            <br />
            <span className="text-muted-foreground">Rivlo?</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            More features for free than what others charge monthly subscriptions for.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-5xl mx-auto overflow-x-auto"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-5 px-4 text-muted-foreground font-medium w-[220px]">
                  Feature
                </th>
                {apps.map((app) => (
                  <th key={app.key} className="py-5 px-4 text-center">
                    <div className="flex flex-col items-center gap-2">
                      {/* Brand color dot */}
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black text-background"
                        style={{ backgroundColor: app.color }}
                      >
                        {app.name[0]}
                      </div>
                      <span
                        className={`font-bold text-sm ${
                          app.key === "rivlo" ? "text-primary" : "text-foreground"
                        }`}
                        style={
                          app.key !== "rivlo"
                            ? { color: app.color }
                            : undefined
                        }
                      >
                        {app.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-medium">
                        {priceLabels[app.key]}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <motion.tr
                  key={feature.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="border-b border-border/50 hover:bg-card/50 transition-colors"
                >
                  <td className="py-4 px-4 text-foreground font-medium">
                    {feature.name}
                  </td>
                  {apps.map((app) => (
                    <td
                      key={app.key}
                      className={`py-4 px-4 ${
                        app.key === "rivlo" ? "bg-primary/[0.04]" : ""
                      }`}
                    >
                      <StatusCell
                        status={feature[app.key as keyof typeof feature] as Status}
                      />
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-muted-foreground text-sm mt-10 max-w-lg mx-auto"
        >
          Rivlo gives you leaderboards, challenges, clubs, and achievements — all{" "}
          <span className="text-primary font-semibold">completely free</span>. Pro unlocks even more for just $3.99/mo.
        </motion.p>
      </div>
    </section>
  );
};

export default ComparisonSection;
