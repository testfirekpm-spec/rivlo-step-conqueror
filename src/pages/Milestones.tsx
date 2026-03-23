import { Link } from "react-router-dom";
import { ArrowLeft, Footprints, Target, Mountain, Crown, Quote } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface MilestoneData {
  steps: number;
  label: string;
  player: string;
  country: string;
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
    quote: "Just getting started!",
    icon: Footprints,
    tier: "bronze",
  },
  {
    steps: 100000,
    label: "100,000",
    player: "Top",
    country: "US",
    quote: "Didn't even realize I was close.",
    icon: Target,
    tier: "silver",
  },
  {
    steps: 500000,
    label: "500,000",
    player: "Top",
    country: "US",
    quote: "Half a million feels unreal.",
    icon: Mountain,
    tier: "gold",
  },
  {
    steps: 1000000,
    label: "1,000,000",
    player: "Luffy",
    country: "CA",
    quote: "King of the steps.",
    icon: Crown,
    tier: "legendary",
  },
];

const tierConfig: Record<string, {
  border: string;
  glow: string;
  badge: string;
  text: string;
  accent: string;
  particle: string;
}> = {
  bronze: {
    border: "border-orange-700/30",
    glow: "",
    badge: "bg-orange-900/50 text-orange-300 border border-orange-700/30",
    text: "text-orange-300",
    accent: "rgba(234,88,12,0.4)",
    particle: "bg-orange-400",
  },
  silver: {
    border: "border-slate-400/30",
    glow: "shadow-[0_0_30px_rgba(148,163,184,0.1)]",
    badge: "bg-slate-700/50 text-slate-200 border border-slate-500/30",
    text: "text-slate-200",
    accent: "rgba(148,163,184,0.4)",
    particle: "bg-slate-300",
  },
  gold: {
    border: "border-yellow-500/40",
    glow: "shadow-[0_0_35px_rgba(234,179,8,0.2)]",
    badge: "bg-yellow-900/50 text-yellow-300 border border-yellow-600/30",
    text: "text-yellow-300",
    accent: "rgba(234,179,8,0.4)",
    particle: "bg-yellow-400",
  },
  legendary: {
    border: "border-yellow-400/60",
    glow: "shadow-[0_0_60px_rgba(234,179,8,0.35)]",
    badge: "bg-yellow-800/60 text-yellow-200 border border-yellow-400/40",
    text: "text-yellow-200",
    accent: "rgba(250,204,21,0.5)",
    particle: "bg-yellow-300",
  },
};

/* Floating particles for legendary card */
const FloatingParticles = ({ color }: { color: string }) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={i}
        className={`absolute h-1 w-1 rounded-full ${color} opacity-60`}
        initial={{
          x: `${20 + Math.random() * 60}%`,
          y: `${20 + Math.random() * 60}%`,
          scale: 0,
        }}
        animate={{
          y: [
            `${30 + Math.random() * 40}%`,
            `${10 + Math.random() * 30}%`,
            `${30 + Math.random() * 40}%`,
          ],
          x: [
            `${20 + Math.random() * 60}%`,
            `${30 + Math.random() * 40}%`,
            `${20 + Math.random() * 60}%`,
          ],
          scale: [0, 1.5, 0],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: i * 0.4,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

/* Animated step counter */
const AnimatedNumber = ({ value, className }: { value: string; className?: string }) => {
  const [displayed, setDisplayed] = useState(false);

  return (
    <motion.span
      className={className}
      onViewportEnter={() => setDisplayed(true)}
      viewport={{ once: true }}
    >
      {value.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          animate={displayed ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{
            duration: 0.4,
            delay: i * 0.05,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

/* 3D tilt card wrapper */
const TiltCard = ({ children, className, isLegendary }: { children: React.ReactNode; className?: string; isLegendary?: boolean }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ scale: { type: "spring", stiffness: 400, damping: 25 } }}
    >
      {children}
    </motion.div>
  );
};

const Milestones = () => {
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setLineProgress(docHeight > 0 ? Math.min(scrolled / docHeight, 1) : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
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
      <div className="container mx-auto px-6 pt-20 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium tracking-wider uppercase text-primary">Hall of Fame</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          {"Milestones".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.04, type: "spring", stiffness: 150 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-5 max-w-md text-muted-foreground leading-relaxed"
        >
          The first players to conquer each step milestone — forever etched in history.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-6 pb-32">
        <div className="relative mx-auto max-w-2xl">
          {/* Animated glowing vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border/30 sm:left-1/2 sm:-translate-x-px" />
          <motion.div
            className="absolute left-6 top-0 w-px bg-gradient-to-b from-primary via-primary/60 to-primary/20 sm:left-1/2 sm:-translate-x-px"
            style={{ height: `${lineProgress * 100}%` }}
          />
          <motion.div
            className="absolute left-6 top-0 w-1 -translate-x-[1px] bg-primary/30 blur-md sm:left-1/2 sm:-translate-x-[2px]"
            style={{ height: `${lineProgress * 100}%` }}
          />

          <div className="space-y-20 sm:space-y-24">
            {milestones.map((m, i) => {
              const style = tierConfig[m.tier];
              const Icon = m.icon;
              const isLegendary = m.tier === "legendary";
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={m.steps}
                  initial={{ opacity: 0, x: isEven ? -60 : 60, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1,
                    type: "spring",
                    stiffness: 80,
                    damping: 18,
                  }}
                  className={`relative pl-16 sm:pl-0 sm:w-[46%] ${
                    isEven ? "sm:pr-8 sm:ml-0" : "sm:pl-8 sm:ml-auto"
                  }`}
                >
                  {/* Timeline dot with pulse */}
                  <div
                    className={`absolute left-4 top-8 z-10 sm:top-8 ${
                      isEven ? "sm:left-auto sm:-right-3 sm:translate-x-1/2" : "sm:-left-3 sm:-translate-x-1/2"
                    }`}
                  >
                    {isLegendary && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-yellow-400/40"
                        animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                    <div
                      className={`relative flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                        isLegendary
                          ? "border-yellow-400 bg-yellow-400/30"
                          : "border-primary bg-primary/30"
                      }`}
                    >
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          isLegendary ? "bg-yellow-400" : "bg-primary"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Card with 3D tilt */}
                  <TiltCard
                    isLegendary={isLegendary}
                    className={`relative rounded-2xl border bg-card/70 backdrop-blur-2xl p-7 transition-colors ${style.border} ${style.glow} ${
                      isLegendary ? "ring-1 ring-yellow-400/20" : ""
                    }`}
                  >
                    {/* Legendary particles */}
                    {isLegendary && <FloatingParticles color={style.particle} />}

                    {/* Gradient top edge */}
                    <div
                      className="absolute top-0 left-4 right-4 h-px"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${style.accent}, transparent)`,
                      }}
                    />

                    {/* Icon + Step count */}
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${style.badge}`}
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>
                      <div>
                        <AnimatedNumber
                          value={m.label}
                          className={`text-3xl font-bold tracking-tight ${style.text}`}
                        />
                        <p className="mt-0.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                          steps
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div
                      className="my-5 h-px"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${style.accent}, transparent)`,
                      }}
                    />

                    {/* Player */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50 ring-1 ring-border/50">
                        <img
                          src={`https://flagcdn.com/24x18/${m.country.toLowerCase()}.png`}
                          alt={m.country}
                          className="h-4 w-5 rounded-sm object-cover"
                        />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">{m.player}</span>
                        <span className="ml-2 text-xs text-muted-foreground">
                          First to reach
                        </span>
                      </div>
                    </div>

                    {/* Quote */}
                    <motion.div
                      className="mt-5 flex items-start gap-2.5 rounded-xl bg-muted/30 border border-border/20 px-4 py-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <Quote className={`mt-0.5 h-4 w-4 shrink-0 ${style.text} opacity-50`} />
                      <p className="text-sm italic leading-relaxed text-muted-foreground">
                        "{m.quote}"
                      </p>
                    </motion.div>
                  </TiltCard>
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
