import { motion } from "framer-motion";
import rivloLogo from "@/assets/logo-rivlo.png";
import { useCountUp } from "@/hooks/use-count-up";
import EsportsBackground from "./EsportsBackground";
import { DiamondWarrior, HexShield, TriangleSentinel, EnergyOrb } from "./AbstractMascots";

type LeaderboardPosterProps = {
  animated?: boolean;
  exportMode?: boolean;
};

const leaderboardData = [
  { rank: 1, name: "walking", club: "DailyWalkers 🍃", flag: "RO", steps: 11426 },
  { rank: 2, name: "luffy", club: "Top pickers", flag: "CA", steps: 10622 },
  { rank: 3, name: "saumya_obsidi…", club: "DailyWalkers 🍃", flag: "IN", steps: 10324 },
  { rank: 4, name: "paceby harsh", club: "DailyWalkers 🍃", flag: "IN", steps: 10317 },
  { rank: 5, name: "top", club: "Top club", flag: "US", steps: 10278 },
  { rank: 6, name: "shubhu_vasani", club: "Gujarat Kesari", flag: "IN", steps: 9464 },
  { rank: 7, name: "i11mmu", club: "", flag: "GB", steps: 9317 },
  { rank: 8, name: "dpranali064", club: "", flag: "US", steps: 9222 },
];

const top3 = leaderboardData.slice(0, 3);
const rest = leaderboardData.slice(3);
const podiumOrder = [top3[1], top3[0], top3[2]];
const podiumAnimOrder = [0, 2, 1];
const totalSteps = leaderboardData.reduce((sum, p) => sum + p.steps, 0);

const podiumStyles: Record<number, {
  barH: string; avatarSize: string; glow: string; border: string;
  badgeBg: string; badgeText: string; nameSize: string;
  neonColor: string; barGradient: string; barBorder: string; barShadow: string;
}> = {
  1: {
    barH: "h-32",
    avatarSize: "w-16 h-16",
    glow: "shadow-[0_0_30px_rgba(234,179,8,0.4)]",
    border: "border-yellow-500/60",
    badgeBg: "bg-yellow-500",
    badgeText: "text-yellow-950",
    nameSize: "text-sm",
    neonColor: "43 96% 56%",
    barGradient: "linear-gradient(to top, hsl(43 96% 40% / 0.4), hsl(43 96% 56% / 0.1) 70%, transparent)",
    barBorder: "border-yellow-500/30",
    barShadow: "shadow-[inset_0_0_30px_rgba(234,179,8,0.1),0_-4px_20px_rgba(234,179,8,0.15)]",
  },
  2: {
    barH: "h-24",
    avatarSize: "w-12 h-12",
    glow: "shadow-[0_0_25px_rgba(148,163,184,0.25)]",
    border: "border-slate-400/50",
    badgeBg: "bg-slate-300",
    badgeText: "text-slate-900",
    nameSize: "text-xs",
    neonColor: "215 20% 65%",
    barGradient: "linear-gradient(to top, hsl(215 20% 50% / 0.35), hsl(215 20% 65% / 0.1) 70%, transparent)",
    barBorder: "border-slate-400/25",
    barShadow: "shadow-[inset_0_0_30px_rgba(148,163,184,0.08),0_-4px_20px_rgba(148,163,184,0.1)]",
  },
  3: {
    barH: "h-20",
    avatarSize: "w-12 h-12",
    glow: "shadow-[0_0_25px_rgba(217,119,6,0.25)]",
    border: "border-amber-600/50",
    badgeBg: "bg-amber-700",
    badgeText: "text-amber-50",
    nameSize: "text-xs",
    neonColor: "26 90% 44%",
    barGradient: "linear-gradient(to top, hsl(26 90% 40% / 0.35), hsl(26 90% 50% / 0.1) 70%, transparent)",
    barBorder: "border-amber-600/25",
    barShadow: "shadow-[inset_0_0_30px_rgba(217,119,6,0.08),0_-4px_20px_rgba(217,119,6,0.1)]",
  },
};

const FlagBadge = ({ code, size = "normal" }: { code: string; size?: "normal" | "small" }) => (
  <img
    src={`https://flagcdn.com/w80/${code.toLowerCase()}.png`}
    alt={code}
    className={`${size === "small" ? "w-5 h-3.5" : "w-6 h-4"} rounded-[2px] object-cover`}
    crossOrigin="anonymous"
    loading="eager"
  />
);

const CountedSteps = ({ steps, rank }: { steps: number; rank: number }) => {
  const duration = rank === 1 ? 1800 : rank <= 3 ? 1400 : 1000;
  const delay = rank === 1 ? 800 : rank === 2 ? 500 : rank === 3 ? 600 : 0;
  const value = useCountUp(steps, duration, delay);
  return <>{value.toLocaleString()}</>;
};

const StaticSteps = ({ steps }: { steps: number }) => <>{steps.toLocaleString()}</>;

export const LeaderboardPoster = ({ animated = true, exportMode = false }: LeaderboardPosterProps) => {
  const Wrap = animated ? motion.div : "div";

  return (
    <div className="relative overflow-hidden bg-background min-h-screen">
      <EsportsBackground exportMode={exportMode} />

      {/* Abstract mascot shapes */}
      <DiamondWarrior className="absolute top-[6%] left-[2%] w-16 h-20 opacity-50" delay={0.3} />
      <HexShield className="absolute top-[4%] right-[2%] w-14 h-16 opacity-40" delay={0.5} />
      <TriangleSentinel className="absolute bottom-[18%] left-[3%] w-12 h-16 opacity-30" delay={0.7} />
      <EnergyOrb className="absolute top-[35%] right-[5%] w-8 h-8" color="270 60% 55%" delay={0.9} />
      <EnergyOrb className="absolute bottom-[30%] left-[8%] w-6 h-6" color="196 80% 55%" delay={1.1} />

      <div className="relative px-5 pb-12 pt-10">
        {/* Header */}
        <Wrap
          className="mb-8 text-center"
          {...(animated && {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, ease: "easeOut" },
          })}
        >
          <div className="mb-4 flex items-center justify-center">
            <img src={rivloLogo} alt="Rivlo" className="h-9 w-9 rounded-xl" crossOrigin="anonymous" loading="eager" />
          </div>

          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, hsl(196 80% 55% / 0.5))" }} />
            <p className="text-[9px] font-bold uppercase tracking-[0.4em]" style={{ color: "hsl(196 80% 65%)" }}>
              Season 1 · Final Results
            </p>
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, hsl(196 80% 55% / 0.5), transparent)" }} />
          </div>

          {animated ? (
            <motion.h1
              className="text-5xl font-black leading-[0.9] text-foreground sm:text-6xl"
              style={{ letterSpacing: "-0.04em", textShadow: "0 0 40px hsl(230 75% 52% / 0.3)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              THE WINTER<br />ARC
            </motion.h1>
          ) : (
            <h1
              className="text-5xl font-black leading-[0.9] text-foreground sm:text-6xl"
              style={{ letterSpacing: "-0.04em", textShadow: "0 0 40px hsl(230 75% 52% / 0.3)" }}
            >
              THE WINTER<br />ARC
            </h1>
          )}

          {/* Neon underline */}
          <div className="relative mx-auto mt-4 w-24">
            <div className="h-[2px]" style={{ background: "linear-gradient(90deg, transparent, hsl(196 80% 55%), hsl(270 60% 55%), transparent)" }} />
            <div className="absolute inset-0 h-[2px] blur-[6px]" style={{ background: "linear-gradient(90deg, transparent, hsl(196 80% 55% / 0.5), hsl(270 60% 55% / 0.5), transparent)" }} />
          </div>
        </Wrap>

        {/* Podium */}
        <div className="mx-auto mb-3 max-w-sm">
          <div className="flex items-end justify-center gap-1.5 sm:gap-3">
            {podiumOrder.map((player, visualIdx) => {
              const styles = podiumStyles[player.rank];
              const animIdx = podiumAnimOrder[visualIdx];

              const content = (
                <>
                  {player.rank === 1 && (
                    <svg viewBox="0 0 24 24" fill="none" className="mb-0.5 h-6 w-6 text-yellow-400" style={{ filter: "drop-shadow(0 0 6px rgba(234,179,8,0.6))" }}>
                      <path d="M2 18L4 8L8.5 12L12 4L15.5 12L20 8L22 18H2Z" fill="currentColor" />
                    </svg>
                  )}
                  <div
                    className={`${styles.avatarSize} ${styles.border} ${styles.glow} relative mb-1.5 flex items-center justify-center rounded-full border-2 bg-card`}
                  >
                    <FlagBadge code={player.flag} />
                    <span
                      className={`absolute -bottom-1 left-1/2 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full ${styles.badgeBg} ${styles.badgeText} text-[10px] font-black ring-2 ring-background`}
                    >
                      {player.rank}
                    </span>
                  </div>
                  <p className={`mt-0.5 max-w-full truncate font-bold text-foreground ${styles.nameSize}`}>{player.name}</p>
                  <p className="text-[11px] font-semibold tabular-nums text-foreground/90">
                    {animated ? <CountedSteps steps={player.steps} rank={player.rank} /> : <StaticSteps steps={player.steps} />}
                  </p>
                  {player.club && <p className="max-w-full truncate text-[9px] text-primary/50">{player.club}</p>}

                  <div className={`relative mt-2 w-full overflow-hidden rounded-t-lg border border-b-0 ${styles.barH} ${styles.barBorder} ${styles.barShadow}`}>
                    <div className="absolute inset-0" style={{ background: styles.barGradient }} />
                    <div className="absolute inset-0 bg-card/30 backdrop-blur-[2px]" />
                    {/* Neon edge glow */}
                    <div className="absolute inset-x-0 top-0 h-[1px]" style={{ background: `linear-gradient(90deg, transparent, hsl(${styles.neonColor} / 0.5), transparent)`, boxShadow: `0 0 8px hsl(${styles.neonColor} / 0.3)` }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="select-none text-3xl font-black text-foreground/[0.04]">{player.rank}</span>
                    </div>
                  </div>
                </>
              );

              return animated ? (
                <motion.div
                  key={player.rank}
                  className="flex max-w-[130px] flex-1 flex-col items-center"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + animIdx * 0.2, ease: "easeOut" }}
                >
                  {content}
                </motion.div>
              ) : (
                <div key={player.rank} className="flex max-w-[130px] flex-1 flex-col items-center">
                  {content}
                </div>
              );
            })}
          </div>

          {/* Neon stage floor */}
          <div className="relative h-3">
            <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent 5%, hsl(196 80% 55% / 0.4) 25%, hsl(230 75% 52% / 0.6) 50%, hsl(270 60% 55% / 0.4) 75%, transparent 95%)" }} />
            <div className="absolute inset-x-0 top-0 h-4 blur-[10px] opacity-50" style={{ background: "linear-gradient(90deg, transparent 10%, hsl(196 80% 55% / 0.2) 25%, hsl(230 75% 52% / 0.3) 50%, hsl(270 60% 55% / 0.2) 75%, transparent 90%)" }} />
          </div>
        </div>

        {/* Stats bar */}
        <Wrap
          className="mx-auto mb-6 max-w-sm"
          {...(animated && { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1.2, duration: 0.6 } })}
        >
          <div className="flex items-center justify-center gap-5 rounded-lg border border-border/20 bg-card/20 backdrop-blur-sm px-5 py-2.5">
            {[
              { val: leaderboardData.length.toString(), label: "Players" },
              { val: totalSteps.toLocaleString(), label: "Total Steps" },
              { val: "30", label: "Days" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-5">
                {i > 0 && <div className="h-5 w-px bg-border/30" />}
                <div className="text-center">
                  <p className="text-xs font-bold tabular-nums text-foreground">{stat.val}</p>
                  <p className="text-[8px] uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Wrap>

        {/* Player rows */}
        <div className="mx-auto max-w-sm space-y-2">
          {rest.map((player, index) => {
            const row = (
              <>
                <div
                  className="absolute bottom-0 left-0 top-0 w-[2px] rounded-l-lg"
                  style={{
                    background: `linear-gradient(to bottom, hsl(196 80% 55% / ${0.4 - index * 0.07}), transparent)`,
                  }}
                />
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-muted/60 text-[11px] font-bold text-muted-foreground">
                  {player.rank}
                </span>
                <FlagBadge code={player.flag} size="small" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-foreground">{player.name}</p>
                  {player.club && <p className="truncate text-[10px] text-primary/50">{player.club}</p>}
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-sm font-black tabular-nums text-foreground">
                    {animated ? <CountedSteps steps={player.steps} rank={player.rank} /> : <StaticSteps steps={player.steps} />}
                  </p>
                  <p className="text-[8px] uppercase tracking-widest text-muted-foreground">steps</p>
                </div>
              </>
            );

            return animated ? (
              <motion.div
                key={player.rank}
                className="relative flex items-center gap-3 overflow-hidden rounded-lg border border-border/20 bg-card/30 backdrop-blur-sm px-3.5 py-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1, ease: "easeOut" }}
              >
                {row}
              </motion.div>
            ) : (
              <div
                key={player.rank}
                className="relative flex items-center gap-3 overflow-hidden rounded-lg border border-border/20 bg-card/30 px-3.5 py-3"
              >
                {row}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-[9px] tracking-wider text-muted-foreground/30">rivlo.app · Download on the App Store</p>
        </div>
      </div>
    </div>
  );
};
