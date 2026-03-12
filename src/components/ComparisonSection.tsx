import { Check, X, Minus } from "lucide-react";
import { motion } from "framer-motion";

type Status = "yes" | "no" | "partial" | "free" | "paid";

const features = [
  { name: "Step Tracking", rivlo: "free", strava: "free", nike: "free", runna: "no" },
  { name: "GPS Run & Hike Tracking", rivlo: "free", strava: "free", nike: "free", runna: "paid" },
  { name: "Global Leaderboards", rivlo: "free", strava: "paid", nike: "no", runna: "no" },
  { name: "Friend Challenges", rivlo: "free", strava: "partial", nike: "partial", runna: "no" },
  { name: "Clubs & Teams", rivlo: "free", strava: "paid", nike: "no", runna: "no" },
  { name: "Achievements & Badges", rivlo: "free", strava: "paid", nike: "partial", runna: "no" },
  { name: "Season Challenges", rivlo: "free", strava: "no", nike: "no", runna: "no" },
  { name: "Detailed Analytics", rivlo: "free", strava: "paid", nike: "free", runna: "paid" },
  { name: "Custom Themes", rivlo: "free", strava: "no", nike: "no", runna: "no" },
  { name: "No Subscription Required", rivlo: "yes", strava: "no", nike: "yes", runna: "no" },
] as const;

const apps = [
  { key: "rivlo", name: "Rivlo", highlight: true },
  { key: "strava", name: "Strava", highlight: false },
  { key: "nike", name: "Nike Run Club", highlight: false },
  { key: "runna", name: "Runna", highlight: false },
] as const;

const StatusCell = ({ status }: { status: Status }) => {
  switch (status) {
    case "yes":
    case "free":
      return (
        <span className="flex items-center justify-center gap-1">
          <Check className="w-4 h-4 text-primary" />
          {status === "free" && (
            <span className="text-[10px] font-bold text-primary uppercase">Free</span>
          )}
        </span>
      );
    case "paid":
      return (
        <span className="flex items-center justify-center gap-1 text-muted-foreground">
          <Check className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase">Paid</span>
        </span>
      );
    case "partial":
      return <Minus className="w-4 h-4 text-muted-foreground mx-auto" />;
    case "no":
      return <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
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
            Get more features for free than what competitors charge a monthly subscription for.
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
                <th className="text-left py-4 px-4 text-muted-foreground font-medium w-[200px]">
                  Feature
                </th>
                {apps.map((app) => (
                  <th
                    key={app.key}
                    className={`py-4 px-4 text-center font-bold ${
                      app.highlight
                        ? "text-primary text-base"
                        : "text-muted-foreground"
                    }`}
                  >
                    {app.name}
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
                        app.highlight ? "bg-primary/[0.03]" : ""
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
          <span className="text-primary font-semibold">completely free</span>. No paywalls, no surprises.
        </motion.p>
      </div>
    </section>
  );
};

export default ComparisonSection;
