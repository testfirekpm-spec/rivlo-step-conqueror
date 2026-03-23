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

const countryToFlag: Record<string, string> = {
  India: "IN", Canada: "CA", USA: "US", UK: "GB", Pakistan: "PK",
  Romania: "RO", Netherlands: "NL", Spain: "ES", Italy: "IT",
  France: "FR", Qatar: "QA", Georgia: "GE", Poland: "PL", Unknown: "",
};

const leaderboardData = [
  { rank: 1, name: "paceby harsh", flag: "IN", trophies: 12849, steps: 1031432 },
  { rank: 2, name: "luffy", flag: "CA", trophies: 12103, steps: 1034881 },
  { rank: 3, name: "top", flag: "US", trophies: 11668, steps: 856857 },
  { rank: 4, name: "j11mmy", flag: "GB", trophies: 11467, steps: 812048 },
  { rank: 5, name: "saumya_obsidian", flag: "IN", trophies: 11164, steps: 742532 },
  { rank: 6, name: "krishtheking", flag: "US", trophies: 10505, steps: 833554 },
  { rank: 7, name: "shubhu_vasani", flag: "IN", trophies: 10345, steps: 826049 },
  { rank: 8, name: "dpranali064", flag: "US", trophies: 9853, steps: 592667 },
  { rank: 9, name: "bhm", flag: "", trophies: 9771, steps: 907605 },
  { rank: 10, name: "naisargee", flag: "IN", trophies: 9355, steps: 486026 },
  { rank: 11, name: "shankarlalnakrani", flag: "", trophies: 9203, steps: 893357 },
  { rank: 12, name: "manjot", flag: "", trophies: 7818, steps: 642180 },
  { rank: 13, name: "phb", flag: "", trophies: 7592, steps: 710204 },
  { rank: 14, name: "prayagpatel", flag: "US", trophies: 7185, steps: 501579 },
  { rank: 15, name: "matty", flag: "GB", trophies: 7042, steps: 474732 },
  { rank: 16, name: "henrique", flag: "US", trophies: 6409, steps: 630719 },
  { rank: 17, name: "jim", flag: "", trophies: 6374, steps: 486973 },
  { rank: 18, name: "walking", flag: "RO", trophies: 6351, steps: 517664 },
  { rank: 19, name: "nouser", flag: "", trophies: 6153, steps: 420096 },
  { rank: 20, name: "vaibhav", flag: "IN", trophies: 6131, steps: 476190 },
  { rank: 21, name: "vrajp", flag: "", trophies: 6101, steps: 556693 },
  { rank: 22, name: "smithpatel45", flag: "IN", trophies: 6021, steps: 446644 },
  { rank: 23, name: "harshitpatell", flag: "", trophies: 6012, steps: 466899 },
  { rank: 24, name: "boss", flag: "", trophies: 5961, steps: 569134 },
  { rank: 25, name: "dawood", flag: "PK", trophies: 5651, steps: 554167 },
  { rank: 26, name: "ronit", flag: "IN", trophies: 5549, steps: 422997 },
  { rank: 27, name: "r_mounce95", flag: "US", trophies: 5441, steps: 505661 },
  { rank: 28, name: "parthpokar2511", flag: "IN", trophies: 5025, steps: 267030 },
  { rank: 29, name: "pokar", flag: "IN", trophies: 5005, steps: 316508 },
  { rank: 30, name: "koni", flag: "", trophies: 4993, steps: 479159 },
  { rank: 31, name: "skyboy350", flag: "", trophies: 4960, steps: 387541 },
  { rank: 32, name: "3strps", flag: "GB", trophies: 4784, steps: 355978 },
  { rank: 33, name: "dotnys", flag: "US", trophies: 4318, steps: 302125 },
  { rank: 34, name: "jaypatelbusiness05", flag: "IN", trophies: 4033, steps: 220967 },
  { rank: 35, name: "bales1801", flag: "US", trophies: 3954, steps: 295908 },
  { rank: 36, name: "singh.09", flag: "IN", trophies: 3777, steps: 266583 },
  { rank: 37, name: "chembunker", flag: "", trophies: 3632, steps: 300157 },
  { rank: 38, name: "aashishp1402", flag: "", trophies: 3564, steps: 202217 },
  { rank: 39, name: "prem", flag: "", trophies: 3372, steps: 337236 },
  { rank: 40, name: "aevangelista", flag: "", trophies: 3280, steps: 310031 },
  { rank: 41, name: "hirenkumar", flag: "IN", trophies: 3088, steps: 212210 },
  { rank: 42, name: "jay700027", flag: "IN", trophies: 3071, steps: 292601 },
  { rank: 43, name: "eviesgentle", flag: "", trophies: 3040, steps: 272066 },
  { rank: 44, name: "hetpatel", flag: "IN", trophies: 2892, steps: 254208 },
  { rank: 45, name: "jime", flag: "GB", trophies: 2711, steps: 253176 },
  { rank: 46, name: "vedpokar", flag: "IN", trophies: 2711, steps: 232147 },
  { rank: 47, name: "whoisgroot", flag: "", trophies: 2699, steps: 182466 },
  { rank: 48, name: "sannie", flag: "NL", trophies: 2595, steps: 228515 },
  { rank: 49, name: "maria", flag: "", trophies: 2511, steps: 234155 },
  { rank: 50, name: "سالم", flag: "", trophies: 2430, steps: 239584 },
  { rank: 51, name: "lisha", flag: "US", trophies: 2297, steps: 212210 },
  { rank: 52, name: "den", flag: "", trophies: 2265, steps: 202569 },
  { rank: 53, name: "fabrice", flag: "", trophies: 2151, steps: 195144 },
  { rank: 54, name: "animalcatcher", flag: "US", trophies: 2079, steps: 176974 },
  { rank: 55, name: "spinotti", flag: "", trophies: 2030, steps: 201057 },
  { rank: 56, name: "calebbrush300", flag: "US", trophies: 1924, steps: 156903 },
  { rank: 57, name: "gjxgh", flag: "", trophies: 1872, steps: 172226 },
  { rank: 58, name: "moreno86", flag: "ES", trophies: 1709, steps: 153913 },
  { rank: 59, name: "cohen", flag: "", trophies: 1679, steps: 150963 },
  { rank: 60, name: "chris", flag: "", trophies: 1659, steps: 153959 },
  { rank: 61, name: "sid5", flag: "", trophies: 1622, steps: 150263 },
  { rank: 62, name: "kacper", flag: "", trophies: 1542, steps: 143222 },
  { rank: 63, name: "aniello1712@!", flag: "IT", trophies: 1527, steps: 140763 },
  { rank: 64, name: "vgb", flag: "", trophies: 1523, steps: 140335 },
  { rank: 65, name: "dwij159", flag: "IN", trophies: 1456, steps: 145662 },
  { rank: 66, name: "joline", flag: "", trophies: 1402, steps: 126236 },
  { rank: 67, name: "kiettt", flag: "", trophies: 1392, steps: 109543 },
  { rank: 68, name: "elise1326", flag: "", trophies: 1231, steps: 107106 },
  { rank: 69, name: "tommy89", flag: "IT", trophies: 1192, steps: 109217 },
  { rank: 70, name: "guerrero", flag: "", trophies: 1167, steps: 100739 },
  { rank: 71, name: "tona_fr", flag: "", trophies: 1156, steps: 91916 },
  { rank: 72, name: "fadimaayah", flag: "", trophies: 1137, steps: 112733 },
  { rank: 73, name: "hasmukh", flag: "", trophies: 1091, steps: 88186 },
  { rank: 74, name: "hubert123", flag: "", trophies: 1048, steps: 89382 },
  { rank: 75, name: "dali", flag: "", trophies: 1033, steps: 94397 },
  { rank: 76, name: "manciavillano", flag: "FR", trophies: 984, steps: 89403 },
  { rank: 77, name: "tq262015qatar", flag: "QA", trophies: 934, steps: 84460 },
  { rank: 78, name: "skylar", flag: "", trophies: 909, steps: 90966 },
  { rank: 79, name: "popică", flag: "", trophies: 872, steps: 73296 },
  { rank: 80, name: "gretik", flag: "", trophies: 856, steps: 78662 },
  { rank: 81, name: "beepboop", flag: "", trophies: 821, steps: 82148 },
  { rank: 82, name: "tommy2kote", flag: "GE", trophies: 810, steps: 81054 },
  { rank: 83, name: "jashan1664", flag: "IN", trophies: 795, steps: 48628 },
  { rank: 84, name: "jk2", flag: "IN", trophies: 788, steps: 68882 },
  { rank: 85, name: "zenek", flag: "", trophies: 787, steps: 70721 },
  { rank: 86, name: "parth", flag: "IN", trophies: 739, steps: 71443 },
  { rank: 87, name: "conor", flag: "", trophies: 703, steps: 62332 },
  { rank: 88, name: "tirth", flag: "", trophies: 691, steps: 69148 },
  { rank: 89, name: "teresa", flag: "PL", trophies: 685, steps: 63570 },
  { rank: 90, name: "weeeeelo", flag: "", trophies: 656, steps: 60654 },
  { rank: 91, name: "senkute", flag: "", trophies: 655, steps: 57594 },
  { rank: 92, name: "karol", flag: "", trophies: 641, steps: 56135 },
  { rank: 93, name: "spicy_mayo", flag: "", trophies: 621, steps: 57127 },
  { rank: 94, name: "ped", flag: "", trophies: 615, steps: 56501 },
  { rank: 95, name: "zailyn", flag: "", trophies: 600, steps: 51093 },
  { rank: 96, name: "tulsiparth06", flag: "IN", trophies: 536, steps: 53603 },
  { rank: 97, name: "himmat", flag: "IN", trophies: 533, steps: 53342 },
  { rank: 98, name: "pmlbs", flag: "", trophies: 531, steps: 38179 },
  { rank: 99, name: "archana", flag: "", trophies: 529, steps: 44910 },
  { rank: 100, name: "hendog", flag: "", trophies: 521, steps: 42602 },
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
    barH: "h-32",
    avatarSize: "w-[4.5rem] h-[4.5rem]",
    glow: "shadow-[0_0_35px_rgba(234,179,8,0.45)]",
    border: "border-yellow-500/70",
    badgeBg: "bg-yellow-500",
    badgeText: "text-yellow-950",
    nameSize: "text-sm",
    neonColor: "43 96% 56%",
    barGradient: "linear-gradient(to top, hsl(43 96% 40% / 0.5), hsl(43 96% 56% / 0.15) 60%, transparent)",
    barBorder: "border-yellow-500/30",
    barShadow: "shadow-[inset_0_0_30px_rgba(234,179,8,0.12),0_-4px_20px_rgba(234,179,8,0.2)]",
    glassBg: "bg-yellow-500/[0.06]",
    glassGlow: "shadow-[0_0_50px_rgba(234,179,8,0.15),inset_0_1px_0_rgba(255,255,255,0.1)]",
  },
  2: {
    barH: "h-24",
    avatarSize: "w-14 h-14",
    glow: "shadow-[0_0_25px_rgba(148,163,184,0.25)]",
    border: "border-slate-400/50",
    badgeBg: "bg-slate-300",
    badgeText: "text-slate-900",
    nameSize: "text-xs",
    neonColor: "215 20% 65%",
    barGradient: "linear-gradient(to top, hsl(215 20% 50% / 0.4), hsl(215 20% 65% / 0.12) 60%, transparent)",
    barBorder: "border-slate-400/25",
    barShadow: "shadow-[inset_0_0_30px_rgba(148,163,184,0.08),0_-4px_20px_rgba(148,163,184,0.1)]",
    glassBg: "bg-slate-400/[0.04]",
    glassGlow: "shadow-[0_0_30px_rgba(148,163,184,0.08),inset_0_1px_0_rgba(255,255,255,0.06)]",
  },
  3: {
    barH: "h-20",
    avatarSize: "w-14 h-14",
    glow: "shadow-[0_0_25px_rgba(217,119,6,0.25)]",
    border: "border-amber-600/50",
    badgeBg: "bg-amber-700",
    badgeText: "text-amber-50",
    nameSize: "text-xs",
    neonColor: "26 90% 44%",
    barGradient: "linear-gradient(to top, hsl(26 90% 40% / 0.4), hsl(26 90% 50% / 0.12) 60%, transparent)",
    barBorder: "border-amber-600/25",
    barShadow: "shadow-[inset_0_0_30px_rgba(217,119,6,0.08),0_-4px_20px_rgba(217,119,6,0.1)]",
    glassBg: "bg-amber-600/[0.04]",
    glassGlow: "shadow-[0_0_30px_rgba(217,119,6,0.08),inset_0_1px_0_rgba(255,255,255,0.06)]",
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

const CountedTrophies = ({ trophies, rank }: { trophies: number; rank: number }) => {
  const duration = rank === 1 ? 1800 : rank <= 3 ? 1400 : 1000;
  const delay = rank === 1 ? 800 : rank === 2 ? 500 : rank === 3 ? 600 : 0;
  const value = useCountUp(trophies, duration, delay);
  return <>{value.toLocaleString()}</>;
};

const StaticTrophies = ({ trophies }: { trophies: number }) => <>{trophies.toLocaleString()}</>;

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

              const trophiesElement = (
                <p className="text-[11px] font-bold tabular-nums text-foreground/90 flex items-center gap-0.5 justify-center" style={{ textShadow: `0 0 12px hsl(${styles.neonColor} / 0.4)` }}>
                  <span className="text-[10px]">🏆</span>
                  {animated ? <CountedTrophies trophies={player.trophies} rank={player.rank} /> : <StaticTrophies trophies={player.trophies} />}
                </p>
              );

              const barElement = (
                <div className={`relative mt-2 w-full overflow-hidden rounded-t-xl border border-b-0 ${styles.barH} ${styles.barBorder} ${styles.barShadow}`} style={{ transformOrigin: "bottom" }}>
                  <div className="absolute inset-0" style={{ background: styles.barGradient }} />
                  <div className="absolute inset-0 bg-card/20 backdrop-blur-sm" />
                  <div className="absolute inset-x-0 top-0 h-[1px]" style={{ background: `linear-gradient(90deg, transparent, hsl(${styles.neonColor} / 0.6), transparent)`, boxShadow: `0 0 10px hsl(${styles.neonColor} / 0.4)` }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="select-none text-4xl font-black" style={{ color: `hsl(${styles.neonColor} / 0.12)` }}>{player.rank}</span>
                  </div>
                </div>
              );

              const content = (
                <div className={`relative rounded-xl border border-white/[0.08] ${styles.glassBg} ${styles.glassGlow} backdrop-blur-xl p-3 pt-4 flex flex-col items-center overflow-hidden`}>
                  {/* Top accent line */}
                  <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent, hsl(${styles.neonColor} / 0.7), transparent)` }} />
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
                      {trophiesElement}
                    </motion.div>
                  ) : trophiesElement}

                  

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

        {/* Player rows — ranks 4-100 */}
        <div className={`mx-auto max-w-sm space-y-1.5 ${exportMode ? "mt-4" : "mt-1"}`}>
          {rest.map((player, index) => {
            const accentOpacity = Math.max(0.05, 0.4 - index * 0.004);
            const row = (
              <>
                <div
                  className="absolute bottom-0 left-0 top-0 w-[2px] rounded-l-lg"
                  style={{
                    background: `linear-gradient(to bottom, hsl(196 80% 55% / ${accentOpacity}), transparent)`,
                  }}
                />
                <span className="inline-grid h-7 w-7 shrink-0 place-items-center rounded-md bg-muted/60 text-[11px] font-bold leading-none text-muted-foreground">
                  <span className="relative -translate-y-[0.5px] leading-none">{player.rank}</span>
                </span>
                <div className="grid h-7 w-5 shrink-0 place-items-center">
                  {player.flag ? (
                    <img
                      src={`https://flagcdn.com/w80/${player.flag.toLowerCase()}.png`}
                      alt={player.flag}
                      className="h-3.5 w-5 rounded-[2px] object-cover"
                      crossOrigin="anonymous"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-3.5 w-5 rounded-[2px] bg-muted/40" />
                  )}
                </div>
                <div className="min-w-0 flex-1 pr-2">
                  <p className="text-sm font-semibold leading-tight text-foreground break-words truncate">
                    {player.name}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-sm font-black tabular-nums text-foreground flex items-center gap-1">
                    <span className="text-xs">🏆</span>
                    {animated && player.rank <= 5 ? <CountedTrophies trophies={player.trophies} rank={player.rank} /> : <StaticTrophies trophies={player.trophies} />}
                  </p>
                </div>
              </>
            );

            return (
              <div key={player.rank}>
                {animated && index < 10 ? (
                  <motion.div
                    className="relative grid grid-cols-[auto_auto_minmax(0,1fr)_auto] items-center gap-3 overflow-hidden rounded-lg border border-border/20 bg-card/30 px-3 py-2.5 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.08, type: "spring", stiffness: 200, damping: 25 }}
                  >
                    {row}
                  </motion.div>
                ) : (
                  <div className="relative grid grid-cols-[auto_auto_minmax(0,1fr)_auto] items-center gap-3 overflow-hidden rounded-lg border border-border/20 bg-card/30 px-3 py-2.5">
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
