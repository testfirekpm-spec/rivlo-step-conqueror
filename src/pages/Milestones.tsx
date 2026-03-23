import { Link } from "react-router-dom";
import { ArrowLeft, Footprints, Target, Mountain, Crown, Calendar, Clock, Users, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface MilestoneData {
  steps: number;
  label: string;
  player: string;
  country: string;
  date: string;
  daysToReach: number;
  totalPlayers: number;
  quote: string;
  icon: React.ElementType;
  tier: "bronze" | "silver" | "gold" | "legendary";
}

const milestones: MilestoneData[] = [
  {
    steps: 10000,
    label: "10,000",
    player: "Top",
    country: "US",
    date: "Jan 18, 2025",
    daysToReach: 3,
    totalPlayers: 1247,
    quote: "Just getting started!",
    icon: Footprints,
    tier: "bronze",
  },
  {
    steps: 100000,
    label: "100,000",
    player: "Top",
    country: "US",
    date: "Feb 22, 2025",
    daysToReach: 38,
    totalPlayers: 314,
    quote: "Didn't even realize I was close.",
    icon: Target,
    tier: "silver",
  },
  {
    steps: 500000,
    label: "500,000",
    player: "Top",
    country: "US",
    date: "May 10, 2025",
    daysToReach: 115,
    totalPlayers: 27,
    quote: "Half a million feels unreal.",
    icon: Mountain,
    tier: "gold",
  },
  {
    steps: 1000000,
    label: "1,000,000",
    player: "Luffy",
    country: "CA",
    date: "Sep 3, 2025",
    daysToReach: 210,
    totalPlayers: 1,
    quote: "King of the steps.",
    icon: Crown,
    tier: "legendary",
  },
];

const tierStyles: Record<string, { border: string; glow: string; badge: string; text: string }> = {
  bronze: {
    border: "border-orange-700/30",
    glow: "",
    badge: "bg-orange-900/40 text-orange-300",
    text: "text-orange-300",
  },
  silver: {
    border: "border-slate-400/30",
    glow: "",
    badge: "bg-slate-700/40 text-slate-200",
    text: "text-slate-200",
  },
  gold: {
    border: "border-yellow-500/40",
    glow: "shadow-[0_0_25px_rgba(234,179,8,0.15)]",
    badge: "bg-yellow-900/40 text-yellow-300",
    text: "text-yellow-300",
  },
  legendary: {
    border: "border-yellow-400/50",
    glow: "shadow-[0_0_40px_rgba(234,179,8,0.3)]",
    badge: "bg-yellow-800/50 text-yellow-200",
    text: "text-yellow-200",
  },
};

const Milestones = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-14 items-center px-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="container mx-auto px-6 pt-16 pb-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          Milestones
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-4 max-w-lg text-muted-foreground"
        >
          The first players to conquer each step milestone — forever etched in history.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-6 pb-24">
        <div className="relative mx-auto max-w-2xl">
          {/* Glowing vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent sm:left-1/2 sm:-translate-x-px" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/20 blur-sm sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-16">
            {milestones.map((m, i) => {
              const style = tierStyles[m.tier];
              const Icon = m.icon;
              const isLegendary = m.tier === "legendary";
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={m.steps}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative pl-16 sm:pl-0 sm:w-1/2 ${isEven ? "sm:pr-12 sm:text-right sm:ml-0" : "sm:pl-12 sm:ml-auto"}`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 top-6 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 sm:top-6 ${
                      isEven ? "sm:left-auto sm:-right-2.5 sm:translate-x-1/2" : "sm:-left-2.5 sm:-translate-x-1/2"
                    } ${isLegendary ? "border-yellow-400 bg-yellow-400/30" : "border-primary bg-primary/30"}`}
                  >
                    <div className={`h-2 w-2 rounded-full ${isLegendary ? "bg-yellow-400" : "bg-primary"}`} />
                  </div>

                  {/* Card */}
                  <div
                    className={`rounded-2xl border bg-card/60 backdrop-blur-xl p-6 ${style.border} ${style.glow} ${
                      isLegendary ? "ring-1 ring-yellow-400/20" : ""
                    }`}
                  >
                    {/* Badge + Icon */}
                    <div className={`flex items-center gap-3 ${isEven ? "sm:flex-row-reverse" : ""}`}>
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${style.badge}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className={`text-2xl font-bold ${style.text}`}>{m.label}</span>
                        <span className="ml-2 text-sm text-muted-foreground">steps</span>
                      </div>
                    </div>

                    {/* Player */}
                    <div className={`mt-4 flex items-center gap-2 ${isEven ? "sm:flex-row-reverse" : ""}`}>
                      <img
                        src={`https://flagcdn.com/24x18/${m.country.toLowerCase()}.png`}
                        alt={m.country}
                        className="h-4 w-5 rounded-sm object-cover"
                      />
                      <span className="font-semibold text-foreground">{m.player}</span>
                    </div>

                    {/* Meta grid */}
                    <div className={`mt-4 grid grid-cols-2 gap-3 text-sm ${isEven ? "sm:text-right" : ""}`}>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 shrink-0" />
                        <span>{m.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 shrink-0" />
                        <span>{m.daysToReach} days</span>
                      </div>
                      <div className="col-span-2 flex items-center gap-1.5 text-muted-foreground">
                        <Users className="h-3.5 w-3.5 shrink-0" />
                        <span>
                          {m.totalPlayers === 1 ? (
                            <span className={`font-semibold ${style.text}`}>Only one player</span>
                          ) : (
                            `${m.totalPlayers.toLocaleString()} players`
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Quote */}
                    <div
                      className={`mt-4 flex items-start gap-2 rounded-lg bg-muted/40 px-3 py-2.5 ${
                        isEven ? "sm:flex-row-reverse sm:text-right" : ""
                      }`}
                    >
                      <Quote className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${style.text} opacity-60`} />
                      <p className="text-sm italic text-muted-foreground">"{m.quote}"</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
