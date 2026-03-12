import { Check, X, Crown, Zap, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import stravaLogo from "@/assets/logo-strava.png";
import nikeLogo from "@/assets/logo-nike.png";
import runnaLogo from "@/assets/logo-runna.png";

type Status = "yes" | "no" | "partial" | "free" | "paid";

const features = [
  { name: "Step Tracking & Goals", rivlo: "free", strava: "free", nike: "free", runna: "no" },
  { name: "GPS Run & Hike Tracking", rivlo: "free", strava: "free", nike: "free", runna: "no" },
  { name: "Global Leaderboards", rivlo: "free", strava: "paid", nike: "no", runna: "no" },
  { name: "Friend Challenges", rivlo: "free", strava: "free", nike: "free", runna: "no" },
  { name: "Clubs & Teams", rivlo: "free", strava: "free", nike: "no", runna: "no" },
  { name: "Achievements & Badges", rivlo: "free", strava: "partial", nike: "free", runna: "no" },
  { name: "Season Challenges", rivlo: "free", strava: "no", nike: "no", runna: "no" },
  { name: "Premium Themes & Widgets", rivlo: "paid", strava: "no", nike: "no", runna: "no" },
  { name: "Detailed Analytics & Insights", rivlo: "paid", strava: "paid", nike: "free", runna: "paid" },
  { name: "Adventures & Exploration", rivlo: "paid", strava: "no", nike: "no", runna: "no" },
  { name: "No Subscription Required", rivlo: "yes", strava: "no", nike: "yes", runna: "no" },
] as const;

const apps = [
  { key: "rivlo", name: "Rivlo", logo: null, price: "Free / $3.99/mo", borderColor: "hsl(var(--primary))" },
  { key: "strava", name: "Strava", logo: stravaLogo, price: "$11.99/mo", borderColor: "#FC4C02" },
  { key: "nike", name: "Nike Run Club", logo: nikeLogo, price: "Free", borderColor: "#111111" },
  { key: "runna", name: "Runna", logo: runnaLogo, price: "$19.99/mo", borderColor: "#00C8C8" },
] as const;

const StatusCell = ({ status, isRivlo }: { status: Status; isRivlo: boolean }) => {
  switch (status) {
    case "yes":
    case "free":
      return (
        <span className="flex items-center justify-center gap-1.5">
          <span className={`w-5 h-5 rounded-full flex items-center justify-center ${isRivlo ? "bg-green-500/20" : "bg-green-500/10"}`}>
            <Check className={`w-3 h-3 ${isRivlo ? "text-green-400" : "text-green-500/70"}`} />
          </span>
          {status === "free" && (
            <span className={`text-[10px] font-bold uppercase ${isRivlo ? "text-green-400" : "text-green-500/60"}`}>Free</span>
          )}
        </span>
      );
    case "paid":
      return (
        <span className="flex items-center justify-center gap-1.5">
          <span className="w-5 h-5 rounded-full bg-yellow-500/10 flex items-center justify-center">
            <Check className="w-3 h-3 text-yellow-500/70" />
          </span>
          <span className="text-[10px] font-bold text-yellow-500/70 uppercase">Paid</span>
        </span>
      );
    case "partial":
      return (
        <span className="flex items-center justify-center">
          <span className="text-[10px] font-bold text-muted-foreground uppercase">Limited</span>
        </span>
      );
    case "no":
      return (
        <span className="flex items-center justify-center">
          <span className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
            <X className="w-3 h-3 text-muted-foreground/40" />
          </span>
        </span>
      );
  }
};

const ComparisonSection = () => {
  const rivloFreeCount = features.filter((f) => f.rivlo === "free" || f.rivlo === "yes").length;

  return (
    <section className="relative py-32 lg:py-40 bg-background overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[180px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground font-grotesk tracking-tight leading-[1.05]">
            Why choose
            <br />
            <span className="text-primary">Rivlo?</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            Other apps charge you monthly just to see your own stats. Rivlo gives you{" "}
            <span className="text-foreground font-semibold">{rivloFreeCount} core features for free</span> — and Pro costs less than a coffee.
          </p>
        </motion.div>

        {/* Benefit callouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          {[
            { icon: Crown, text: "Most free features", color: "text-yellow-400" },
            { icon: Zap, text: "Pro at just $3.99/mo", color: "text-primary" },
            { icon: Trophy, text: "Only app with Season Challenges", color: "text-green-400" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur-sm"
            >
              <item.icon className={`w-3.5 h-3.5 ${item.color}`} />
              <span className="text-xs font-semibold text-foreground">{item.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-card/60">
                    <th className="text-left py-6 px-5 text-muted-foreground font-medium min-w-[200px]">
                      Feature
                    </th>
                    {apps.map((app) => (
                      <th key={app.key} className="py-6 px-4 text-center min-w-[120px]">
                        <div className="flex flex-col items-center gap-2.5">
                          {app.key === "rivlo" ? (
                            <div
                              className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-black text-primary-foreground bg-primary shadow-lg"
                              style={{
                                boxShadow: "0 0 20px hsl(var(--primary) / 0.4)",
                              }}
                            >
                              R
                            </div>
                          ) : (
                            <img
                              src={app.logo!}
                              alt={`${app.name} logo`}
                              className="w-12 h-12 rounded-2xl object-cover"
                            />
                          )}
                          <span
                            className={`font-bold text-sm ${
                              app.key === "rivlo" ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {app.name}
                          </span>
                          <span className="text-[11px] text-muted-foreground font-medium">
                            {app.price}
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
                      className="border-b border-border/40 last:border-b-0 hover:bg-card/60 transition-colors"
                    >
                      <td className="py-4 px-5 text-foreground font-medium">
                        {feature.name}
                      </td>
                      {apps.map((app) => (
                        <td
                          key={app.key}
                          className={`py-4 px-4 ${
                            app.key === "rivlo"
                              ? "bg-primary/[0.04] border-l border-r border-primary/10"
                              : ""
                          }`}
                        >
                          <StatusCell
                            status={feature[app.key as keyof typeof feature] as Status}
                            isRivlo={app.key === "rivlo"}
                          />
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-6">
            While Strava charges <span className="text-foreground font-semibold">$11.99/mo</span> and Runna charges{" "}
            <span className="text-foreground font-semibold">$19.99/mo</span> for premium features, Rivlo gives you leaderboards,
            challenges, clubs, and achievements — all{" "}
            <span className="text-primary font-bold">completely free</span>.
          </p>
          <button
            onClick={() => document.querySelector("#download")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
          >
            <Zap className="w-4 h-4" />
            Try Rivlo Free
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
