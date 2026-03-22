import { motion } from "framer-motion";
import rivloLogo from "@/assets/logo-rivlo.png";
import { useCountUp } from "@/hooks/use-count-up";
import EsportsBackground from "./EsportsBackground";
import MinimalDarkBackground from "./MinimalDarkBackground";
import AuroraBackground from "./AuroraBackground";
import { DiamondWarrior, HexShield, TriangleSentinel, EnergyOrb } from "./AbstractMascots";

export type LeaderboardTheme = "esports" | "minimal" | "aurora";

type LeaderboardPosterProps = {
  animated?: boolean;
  exportMode?: boolean;
  theme?: LeaderboardTheme;
};

const leaderboardData = [
  { rank: 1, name: "walking", club: "DailyWalkers 🍃", flag: "RO", steps: 11426 },
  { rank: 2, name: "luffy", club: "Top pickers", flag: "CA", steps: 10622 },
  { rank: 3, name: "saumya", club: "DailyWalkers 🍃", flag: "IN", steps: 10324 },
  { rank: 4, name: "paceby harsh", club: "DailyWalkers 🍃", flag: "IN", steps: 10317 },
  { rank: 5, name: "top", club: "Top club", flag: "US", steps: 10278 },
];

const top3 = leaderboardData.slice(0, 3);
const rest = leaderboardData.slice(3);
const podiumOrder = [top3[1], top3[0], top3[2]];
const podiumAnimOrder = [0, 2, 1];

const podiumStyles: Record<number, {
  barH: string; avatarSize: string; glow: string; border: string;
  badgeBg: string; badgeText: string; nameSize: string;
  neonColor: string; barGradient: string; barBorder: string; barShadow: string;
  glassBg: string; glassGlow: string;
}> = {
  1: {
    barH: "h-28",
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
    glassBg: "bg-yellow-500/[0.04]",
    glassGlow: "shadow-[0_0_40px_rgba(234,179,8,0.12),inset_0_1px_0_rgba(255,255,255,0.08)]",
  },
  2: {
    barH: "h-20",
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
    glassBg: "bg-slate-400/[0.03]",
    glassGlow: "shadow-[0_0_30px_rgba(148,163,184,0.06),inset_0_1px_0_rgba(255,255,255,0.06)]",
  },
  3: {
    barH: "h-16",
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
    glassBg: "bg-amber-600/[0.03]",
    glassGlow: "shadow-[0_0_30px_rgba(217,119,6,0.06),inset_0_1px_0_rgba(255,255,255,0.06)]",
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

/* Sparkle dots around the #1 crown */
const SparkleParticles = ({ exportMode = false }: { exportMode?: boolean }) => {
  if (exportMode) return null;
  const particles = [
    { left: "-8px", top: "-4px", size: 3, delay: "0s" },
    { left: "20px", top: "-6px", size: 2.5, delay: "0.8s" },
    { left: "-12px", top: "10px", size: 2, delay: "1.6s" },
    { left: "24px", top: "8px", size: 2, delay: "2.4s" },
  ];
  return (
    <>
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: "hsl(43 96% 70%)",
            boxShadow: "0 0 4px hsl(43 96% 56% / 0.8)",
            animation: `sparkle 2.5s ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}
    </>
  );
};

const BackgroundRenderer = ({ theme, exportMode }: { theme: LeaderboardTheme; exportMode: boolean }) => {
  switch (theme) {
    case "minimal":
      return <MinimalDarkBackground exportMode={exportMode} />;
    case "aurora":
      return <AuroraBackground exportMode={exportMode} />;
    default:
      return <EsportsBackground exportMode={exportMode} />;
  }
};

export const LeaderboardPoster = ({ animated = true, exportMode = false, theme = "esports" }: LeaderboardPosterProps) => {
  const Wrap = animated ? motion.div : "div";

  return (
    <div className={`relative overflow-hidden bg-background ${exportMode ? "mx-auto h-[960px] w-[540px]" : ""}`}>
      <BackgroundRenderer theme={theme} exportMode={exportMode} />

      {/* Spotlight beam on #1 — only for esports & aurora themes */}
      {theme !== "minimal" && (
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none"
          style={{
            width: "200px",
            height: "500px",
            background: "radial-gradient(ellipse 100% 100% at 50% 0%, hsl(43 96% 56% / 0.06) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Abstract mascot shapes — positioned to not overlap content */}
      <DiamondWarrior className="absolute top-[3%] left-[3%] w-10 h-14 opacity-40" delay={0.3} />
      <HexShield className="absolute top-[2%] right-[3%] w-10 h-12 opacity-30" delay={0.5} />
      <TriangleSentinel className="absolute bottom-[8%] left-[4%] w-8 h-12 opacity-25" delay={0.7} />
      <EnergyOrb className="absolute top-[30%] right-[4%] w-6 h-6" color="270 60% 55%" delay={0.9} />
      <EnergyOrb className="absolute bottom-[15%] right-[6%] w-5 h-5" color="196 80% 55%" delay={1.1} />

      <div className={`relative px-5 pt-8 ${exportMode ? "flex h-full flex-col pb-8" : "pb-10"}`}>
        {/* Header */}
        <Wrap
          className="mb-6 text-center"
          {...(animated && {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, ease: "easeOut" },
          })}
        >
          <div className="mb-3 flex items-center justify-center">
            <img src={rivloLogo} alt="Rivlo" className="h-8 w-8 rounded-lg" crossOrigin="anonymous" loading="eager" />
          </div>

          <div className="mb-2 flex items-center justify-center gap-3">
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, hsl(196 80% 55% / 0.5))" }} />
            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-primary">
              Season 1 · Final Results
            </p>
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, hsl(196 80% 55% / 0.5), transparent)" }} />
          </div>

          {animated ? (
            <motion.h1
              className="text-4xl font-black leading-[0.9] text-foreground sm:text-5xl"
              style={{ letterSpacing: "-0.04em", textShadow: "0 0 40px hsl(230 75% 52% / 0.3)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              THE WINTER ARC
            </motion.h1>
          ) : (
            <h1
              className="text-4xl font-black leading-[0.9] text-foreground sm:text-5xl"
              style={{ letterSpacing: "-0.04em", textShadow: "0 0 40px hsl(230 75% 52% / 0.3)" }}
            >
              THE WINTER ARC
            </h1>
          )}

          {/* Neon underline */}
          <div className="relative mx-auto mt-3 w-20">
            <div className="h-[2px]" style={{ background: "linear-gradient(90deg, transparent, hsl(196 80% 55%), hsl(270 60% 55%), transparent)" }} />
            <div className="absolute inset-0 h-[2px] blur-[6px]" style={{ background: "linear-gradient(90deg, transparent, hsl(196 80% 55% / 0.5), hsl(270 60% 55% / 0.5), transparent)" }} />
          </div>
        </Wrap>

        {/* Podium */}
        <div className={`mx-auto max-w-sm ${exportMode ? "mb-0" : "mb-2"}`}>
          <div className="flex items-end justify-center gap-2 sm:gap-3">
            {podiumOrder.map((player, visualIdx) => {
              const styles = podiumStyles[player.rank];
              const animIdx = podiumAnimOrder[visualIdx];

              const crownElement = player.rank === 1 && (
                <div className="relative mb-0.5">
                  {animated ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0, rotate: 180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 200 }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-yellow-400" style={{ filter: "drop-shadow(0 0 6px rgba(234,179,8,0.6))" }}>
                        <path d="M2 18L4 8L8.5 12L12 4L15.5 12L20 8L22 18H2Z" fill="currentColor" />
                      </svg>
                    </motion.div>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-yellow-400" style={{ filter: "drop-shadow(0 0 6px rgba(234,179,8,0.6))" }}>
                      <path d="M2 18L4 8L8.5 12L12 4L15.5 12L20 8L22 18H2Z" fill="currentColor" />
                    </svg>
                  )}
                  <SparkleParticles exportMode={exportMode} />
                </div>
              );

              const avatarElement = (
                <div className={`${styles.avatarSize} ${styles.border} ${styles.glow} relative mb-1 flex items-center justify-center rounded-full border-2 bg-card`}>
                  <FlagBadge code={player.flag} />
                  <span className={`absolute -bottom-1 left-1/2 inline-grid h-5 w-5 -translate-x-1/2 place-items-center rounded-full ${styles.badgeBg} ${styles.badgeText} text-[10px] font-black leading-none ring-2 ring-background`}>
                    <span className="relative -translate-y-[0.5px] leading-none">{player.rank}</span>
                  </span>
                </div>
              );

              const stepsElement = (
                <p className="text-[11px] font-semibold tabular-nums text-foreground/90">
                  {animated ? <CountedSteps steps={player.steps} rank={player.rank} /> : <StaticSteps steps={player.steps} />}
                </p>
              );

              const barElement = (
                <div className={`relative mt-2 w-full overflow-hidden rounded-t-lg border border-b-0 ${styles.barH} ${styles.barBorder} ${styles.barShadow}`} style={{ transformOrigin: "bottom" }}>
                  <div className="absolute inset-0" style={{ background: styles.barGradient }} />
                  <div className="absolute inset-0 bg-card/30 backdrop-blur-[2px]" />
                  <div className="absolute inset-x-0 top-0 h-[1px]" style={{ background: `linear-gradient(90deg, transparent, hsl(${styles.neonColor} / 0.5), transparent)`, boxShadow: `0 0 8px hsl(${styles.neonColor} / 0.3)` }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="select-none text-3xl font-black text-foreground/[0.04]">{player.rank}</span>
                  </div>
                </div>
              );

              const content = (
                <div className={`relative rounded-xl border border-white/[0.06] ${styles.glassBg} ${styles.glassGlow} backdrop-blur-md p-2 pt-3 flex flex-col items-center`}>
                  {crownElement}

                  {animated ? (
                    <motion.div
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + animIdx * 0.15, type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {avatarElement}
                    </motion.div>
                  ) : avatarElement}

                  <p className={`mt-0.5 max-w-full px-1 text-center font-bold leading-tight text-foreground ${styles.nameSize}`}>
                    {player.name}
                  </p>

                  {animated ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + animIdx * 0.15, duration: 0.4, ease: "easeOut" }}
                    >
                      {stepsElement}
                    </motion.div>
                  ) : stepsElement}

                  {player.club && <p className="max-w-full px-1 text-center text-[9px] leading-tight text-primary/50">{player.club}</p>}

                  {animated ? (
                    <motion.div
                      className="w-full"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.3 + animIdx * 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: "bottom" }}
                    >
                      {barElement}
                    </motion.div>
                  ) : barElement}
                </div>
              );

              return animated ? (
                <motion.div
                  key={player.rank}
                  className="flex max-w-[130px] flex-1 flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + animIdx * 0.2, ease: "easeOut" }}
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

        {/* Player rows — ranks 4-5 with gap indicators */}
        <div className={`mx-auto max-w-sm space-y-1 ${exportMode ? "mt-4" : ""}`}>
          {rest.map((player, index) => {
            const prevPlayer = index === 0 ? leaderboardData[2] : rest[index - 1];
            const stepGap = prevPlayer.steps - player.steps;

            const gapIndicator = (
              <div className="flex items-center gap-2 px-4 py-0.5">
                <div className="flex-1 h-[1px] rounded-full overflow-hidden bg-border/20">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${Math.min(100, (stepGap / 200) * 100)}%`,
                      background: "linear-gradient(90deg, hsl(196 80% 55% / 0.4), hsl(270 60% 55% / 0.3))",
                    }}
                  />
                </div>
                <span className="text-[8px] font-medium tabular-nums text-muted-foreground/60 shrink-0">
                  {stepGap} steps apart
                </span>
              </div>
            );

            const row = (
              <>
                <div
                  className="absolute bottom-0 left-0 top-0 w-[2px] rounded-l-lg"
                  style={{
                    background: `linear-gradient(to bottom, hsl(196 80% 55% / ${0.4 - index * 0.1}), transparent)`,
                  }}
                />
                <span className="inline-grid h-7 w-7 shrink-0 place-items-center rounded-md bg-muted/60 text-[11px] font-bold leading-none text-muted-foreground">
                  <span className="relative -translate-y-[0.5px] leading-none">{player.rank}</span>
                </span>
                <div className="grid h-7 w-5 shrink-0 place-items-center">
                  <img
                    src={`https://flagcdn.com/w80/${player.flag.toLowerCase()}.png`}
                    alt={player.flag}
                    className="h-3.5 w-5 rounded-[2px] object-cover"
                    crossOrigin="anonymous"
                    loading="eager"
                  />
                </div>
                <div className="min-w-0 flex-1 pr-2">
                  <p className="text-sm font-semibold leading-tight text-foreground break-words">
                    {player.name}
                  </p>
                  {player.club && <p className="text-[10px] leading-tight text-primary/50 break-words">{player.club}</p>}
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-sm font-black tabular-nums text-foreground">
                    {animated ? <CountedSteps steps={player.steps} rank={player.rank} /> : <StaticSteps steps={player.steps} />}
                  </p>
                  <p className="text-[8px] uppercase tracking-widest text-muted-foreground">steps</p>
                </div>
              </>
            );

            return (
              <div key={player.rank}>
                {gapIndicator}
                {animated ? (
                  <motion.div
                    className="relative grid grid-cols-[auto_auto_minmax(0,1fr)_auto] items-center gap-3 overflow-hidden rounded-lg border border-border/20 bg-card/30 px-3.5 py-3 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.15, type: "spring", stiffness: 200, damping: 25 }}
                  >
                    {row}
                  </motion.div>
                ) : (
                  <div className="relative grid grid-cols-[auto_auto_minmax(0,1fr)_auto] items-center gap-3 overflow-hidden rounded-lg border border-border/20 bg-card/30 px-3.5 py-3">
                    {row}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className={`text-center ${exportMode ? "mt-auto pt-6" : "mt-6"}`}>
          <p className="text-[9px] tracking-wider text-muted-foreground/30">rivlo.app · Download on the App Store</p>
        </div>
      </div>
    </div>
  );
};
