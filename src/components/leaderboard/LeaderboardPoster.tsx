import { motion } from "framer-motion";
import rivloLogo from "@/assets/logo-rivlo.png";
import winterBanner from "@/assets/winter-arc-banner.png";
import { useCountUp } from "@/hooks/use-count-up";

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
const totalSteps = leaderboardData.reduce((sum, player) => sum + player.steps, 0);

const podiumStyles: Record<
  number,
  {
    barH: string;
    avatarSize: string;
    glow: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    nameSize: string;
    shimmerColor: string;
    barGradient: string;
    barBorder: string;
    barShadow: string;
  }
> = {
  1: {
    barH: "h-36",
    avatarSize: "w-[72px] h-[72px]",
    glow: "shadow-[0_0_40px_rgba(234,179,8,0.3)]",
    border: "border-yellow-500/50",
    badgeBg: "bg-yellow-500",
    badgeText: "text-yellow-950",
    nameSize: "text-base",
    shimmerColor: "rgba(234, 179, 8, 0.1)",
    barGradient: "linear-gradient(to top, hsl(43 96% 40% / 0.35), hsl(43 96% 56% / 0.12) 60%, transparent)",
    barBorder: "border-yellow-500/20",
    barShadow: "shadow-[inset_0_0_30px_rgba(234,179,8,0.08),0_-4px_20px_rgba(234,179,8,0.1)]",
  },
  2: {
    barH: "h-24",
    avatarSize: "w-14 h-14",
    glow: "shadow-[0_0_30px_rgba(148,163,184,0.2)]",
    border: "border-slate-400/40",
    badgeBg: "bg-slate-300",
    badgeText: "text-slate-900",
    nameSize: "text-sm",
    shimmerColor: "rgba(148, 163, 184, 0.1)",
    barGradient: "linear-gradient(to top, hsl(215 20% 50% / 0.3), hsl(215 20% 65% / 0.1) 60%, transparent)",
    barBorder: "border-slate-400/20",
    barShadow: "shadow-[inset_0_0_30px_rgba(148,163,184,0.06),0_-4px_20px_rgba(148,163,184,0.08)]",
  },
  3: {
    barH: "h-20",
    avatarSize: "w-14 h-14",
    glow: "shadow-[0_0_30px_rgba(217,119,6,0.2)]",
    border: "border-amber-600/40",
    badgeBg: "bg-amber-700",
    badgeText: "text-amber-50",
    nameSize: "text-sm",
    shimmerColor: "rgba(217, 119, 6, 0.08)",
    barGradient: "linear-gradient(to top, hsl(26 90% 40% / 0.3), hsl(26 90% 50% / 0.1) 60%, transparent)",
    barBorder: "border-amber-600/20",
    barShadow: "shadow-[inset_0_0_30px_rgba(217,119,6,0.06),0_-4px_20px_rgba(217,119,6,0.08)]",
  },
};

const rankAccentColors: Record<number, string> = {
  4: "bg-primary/40",
  5: "bg-primary/30",
  6: "bg-primary/20",
  7: "bg-primary/15",
  8: "bg-primary/10",
};

const FlagBadge = ({ code, size = "normal" }: { code: string; size?: "normal" | "small" }) => (
  <img
    src={`https://flagcdn.com/w80/${code.toLowerCase()}.png`}
    alt={code}
    className={`${size === "small" ? "w-6 h-4" : "w-7 h-5"} rounded-[3px] object-cover`}
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
  const statCardClass = exportMode ? "bg-card/80" : "bg-card/20 backdrop-blur-sm";
  const rowCardClass = exportMode ? "bg-card/75" : "bg-card/40 backdrop-blur-sm";
  const podiumGlassClass = exportMode ? "bg-card/55" : "bg-card/40 backdrop-blur-[2px]";

  return (
    <div className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <img src={winterBanner} alt="" className="absolute inset-0 h-[480px] w-full object-cover opacity-40" crossOrigin="anonymous" loading="eager" />
        <div className="absolute inset-0 h-[480px] bg-gradient-to-b from-background/10 via-background/60 to-background" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-[140px]" style={{ background: "radial-gradient(circle, hsl(230 75% 52% / 0.12) 0%, transparent 70%)" }} />
        <div className="absolute left-1/3 top-[60px] h-[400px] w-[500px] rounded-full blur-[120px]" style={{ background: "radial-gradient(circle, hsl(196 80% 55% / 0.06) 0%, transparent 70%)" }} />
        <div className="absolute left-0 right-0 top-[100px] h-px" style={{ background: "linear-gradient(90deg, transparent 5%, hsl(230 75% 52% / 0.15) 30%, hsl(196 80% 55% / 0.1) 50%, hsl(270 60% 50% / 0.12) 70%, transparent 95%)" }} />
        <div className="absolute left-0 right-0 top-[160px] h-px" style={{ background: "linear-gradient(90deg, transparent 15%, hsl(196 80% 55% / 0.08) 40%, hsl(230 75% 52% / 0.1) 60%, transparent 85%)" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />
      </div>

      <div className="absolute left-[18%] top-[90px] h-1.5 w-1.5 rounded-full bg-primary/30" style={{ animation: exportMode ? "none" : "pulse-glow 3s ease-in-out infinite" }} />
      <div className="absolute right-[22%] top-[130px] h-1 w-1 rounded-full" style={{ background: "hsl(196 80% 55% / 0.25)", animation: exportMode ? "none" : "pulse-glow 4s ease-in-out infinite 1s" }} />
      <div className="absolute left-[28%] top-[200px] h-1 w-1 rounded-full bg-accent/20" style={{ animation: exportMode ? "none" : "pulse-glow 3.5s ease-in-out infinite 0.5s" }} />

      <div className="relative px-6 pb-16 pt-14">
        {animated ? (
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-6 flex items-center justify-center">
              <img src={rivloLogo} alt="Rivlo" className="h-10 w-10 rounded-xl" crossOrigin="anonymous" loading="eager" />
            </div>

            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">Season 1 · Final Results</p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/40" />
            </div>

            <div className="mb-4 flex items-center justify-center">
              <svg viewBox="0 0 64 28" fill="none" className="h-7 w-16 text-primary/25">
                <path d="M0 28L16 6L24 16L32 2L40 16L48 8L64 28H0Z" fill="currentColor" />
              </svg>
            </div>

            <motion.h1
              className="text-6xl font-black leading-none text-foreground md:text-8xl"
              style={{ letterSpacing: "-0.04em" }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              THE WINTER ARC
            </motion.h1>

            <div className="relative mx-auto mt-6 w-32">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-[4px]" />
            </div>
          </motion.div>
        ) : (
          <div className="mb-12 text-center">
            <div className="mb-6 flex items-center justify-center">
              <img src={rivloLogo} alt="Rivlo" className="h-10 w-10 rounded-xl" crossOrigin="anonymous" loading="eager" />
            </div>

            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">Season 1 · Final Results</p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/40" />
            </div>

            <div className="mb-4 flex items-center justify-center">
              <svg viewBox="0 0 64 28" fill="none" className="h-7 w-16 text-primary/25">
                <path d="M0 28L16 6L24 16L32 2L40 16L48 8L64 28H0Z" fill="currentColor" />
              </svg>
            </div>

            <h1 className="text-6xl font-black leading-none text-foreground md:text-8xl" style={{ letterSpacing: "-0.04em" }}>
              THE WINTER ARC
            </h1>

            <div className="relative mx-auto mt-6 w-32">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-[4px]" />
            </div>
          </div>
        )}

        <div className="mx-auto mb-4 max-w-md">
          <div className="flex items-end justify-center gap-2 sm:gap-4">
            {podiumOrder.map((player, visualIdx) => {
              const styles = podiumStyles[player.rank];
              const animIdx = podiumAnimOrder[visualIdx];
              const content = (
                <>
                  {player.rank === 1 && (
                    <svg viewBox="0 0 24 24" fill="none" className="mb-1 h-7 w-7 text-yellow-400">
                      <path d="M2 18L4 8L8.5 12L12 4L15.5 12L20 8L22 18H2Z" fill="currentColor" opacity="0.9" />
                    </svg>
                  )}
                  <div className={`${styles.avatarSize} ${styles.border} ${styles.glow} relative mb-2 flex items-center justify-center rounded-full border-2 bg-card`}>
                    <FlagBadge code={player.flag} />
                    <span className={`absolute -bottom-1.5 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full ${styles.badgeBg} ${styles.badgeText} text-xs font-black ring-2 ring-background`}>
                      {player.rank}
                    </span>
                  </div>

                  <p className={`mt-1 max-w-full truncate font-bold text-foreground ${styles.nameSize}`}>{player.name}</p>
                  <p className="text-xs font-semibold tabular-nums text-foreground/90">
                    {animated ? <CountedSteps steps={player.steps} rank={player.rank} /> : <StaticSteps steps={player.steps} />}
                  </p>
                  {player.club && <p className="max-w-full truncate text-[10px] text-primary/60">{player.club}</p>}

                  <div className={`relative mt-3 w-full overflow-hidden rounded-t-xl border border-b-0 ${styles.barH} ${styles.barBorder} ${styles.barShadow}`}>
                    <div className="absolute inset-0" style={{ background: styles.barGradient }} />
                    <div className={`absolute inset-0 ${podiumGlassClass}`} />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(110deg, transparent 30%, ${styles.shimmerColor} 45%, transparent 60%)`,
                        backgroundSize: "200% 100%",
                        animation: exportMode ? "none" : "shimmer-sweep 4s ease-in-out infinite",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="select-none text-4xl font-black text-foreground/[0.04]">{player.rank}</span>
                    </div>
                  </div>
                </>
              );

              return animated ? (
                <motion.div
                  key={player.rank}
                  className="flex max-w-[140px] flex-1 flex-col items-center"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + animIdx * 0.2, ease: "easeOut" }}
                >
                  {content}
                </motion.div>
              ) : (
                <div key={player.rank} className="flex max-w-[140px] flex-1 flex-col items-center">
                  {content}
                </div>
              );
            })}
          </div>

          <div className="relative h-4">
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent 5%, hsl(230 75% 52% / 0.25) 30%, hsl(230 75% 52% / 0.5) 50%, hsl(230 75% 52% / 0.25) 70%, transparent 95%)",
              }}
            />
            <div
              className="absolute inset-x-0 top-0 h-3 blur-[8px] opacity-40"
              style={{
                background: "linear-gradient(90deg, transparent 10%, hsl(230 75% 52% / 0.2) 30%, hsl(230 75% 52% / 0.35) 50%, hsl(230 75% 52% / 0.2) 70%, transparent 90%)",
              }}
            />
          </div>
        </div>

        {animated ? (
          <motion.div className="mx-auto mb-8 max-w-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}>
            <div className={`flex items-center justify-center gap-4 rounded-lg border border-border/20 px-6 py-3 ${statCardClass}`}>
              <div className="text-center">
                <p className="text-sm font-bold tabular-nums text-foreground">{leaderboardData.length}</p>
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground">Players</p>
              </div>
              <div className="h-6 w-px bg-border/30" />
              <div className="text-center">
                <p className="text-sm font-bold tabular-nums text-foreground">{totalSteps.toLocaleString()}</p>
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground">Total Steps</p>
              </div>
              <div className="h-6 w-px bg-border/30" />
              <div className="text-center">
                <p className="text-sm font-bold tabular-nums text-foreground">30</p>
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground">Days</p>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="mx-auto mb-8 max-w-xl">
            <div className={`flex items-center justify-center gap-4 rounded-lg border border-border/20 px-6 py-3 ${statCardClass}`}>
              <div className="text-center">
                <p className="text-sm font-bold tabular-nums text-foreground">{leaderboardData.length}</p>
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground">Players</p>
              </div>
              <div className="h-6 w-px bg-border/30" />
              <div className="text-center">
                <p className="text-sm font-bold tabular-nums text-foreground">{totalSteps.toLocaleString()}</p>
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground">Total Steps</p>
              </div>
              <div className="h-6 w-px bg-border/30" />
              <div className="text-center">
                <p className="text-sm font-bold tabular-nums text-foreground">30</p>
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground">Days</p>
              </div>
            </div>
          </div>
        )}

        <div className="mx-auto max-w-xl space-y-2.5">
          {rest.map((player, index) => {
            const rowContent = (
              <>
                <div className={`absolute bottom-0 left-0 top-0 w-[2px] rounded-l-xl ${rankAccentColors[player.rank] || "bg-primary/10"}`} />
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted/60 text-xs font-bold text-muted-foreground">
                  {player.rank}
                </span>
                <FlagBadge code={player.flag} size="small" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-foreground">{player.name}</p>
                  {player.club && <p className="truncate text-xs text-primary/60">{player.club}</p>}
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-black tabular-nums text-foreground">
                    {animated ? <CountedSteps steps={player.steps} rank={player.rank} /> : <StaticSteps steps={player.steps} />}
                  </p>
                  <p className="text-[9px] uppercase tracking-widest text-muted-foreground">steps</p>
                </div>
              </>
            );

            return animated ? (
              <motion.div
                key={player.rank}
                className={`relative flex items-center gap-3.5 overflow-hidden rounded-xl border border-border/30 px-4 py-3.5 transition-all hover:bg-card/60 ${rowCardClass}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1, ease: "easeOut" }}
              >
                {rowContent}
              </motion.div>
            ) : (
              <div key={player.rank} className={`relative flex items-center gap-3.5 overflow-hidden rounded-xl border border-border/30 px-4 py-3.5 ${rowCardClass}`}>
                {rowContent}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[10px] tracking-wide text-muted-foreground/40">rivlo.app · Download on the App Store</p>
        </div>
      </div>
    </div>
  );
};
