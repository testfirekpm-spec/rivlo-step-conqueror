import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Flame, Zap, Gem, Swords, Quote, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef } from "react";

/* ─── Data ─── */
interface MilestoneData {
  steps: string;
  player: string;
  country: string;
  quote: string;
  icon: React.ElementType;
  tier: "bronze" | "silver" | "gold" | "legendary";
}

const milestones: MilestoneData[] = [
  { steps: "10,000", player: "Top", country: "us", quote: "Just getting started!", icon: Flame, tier: "bronze" },
  { steps: "100,000", player: "Top", country: "us", quote: "Didn't even realize I was close.", icon: Zap, tier: "silver" },
  { steps: "500,000", player: "Top", country: "us", quote: "Half a million feels unreal.", icon: Gem, tier: "gold" },
  { steps: "1,000,000", player: "Luffy", country: "ca", quote: "King of the steps.", icon: Swords, tier: "legendary" },
];

const tierColors: Record<string, { accent: string; glow: string; bg: string; text: string; iconBg: string }> = {
  bronze: {
    accent: "hsl(25, 75%, 47%)",
    glow: "rgba(180, 83, 9, 0.15)",
    bg: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(180,83,9,0.08) 0%, transparent 70%)",
    text: "text-orange-400",
    iconBg: "bg-orange-500/10 border-orange-500/20",
  },
  silver: {
    accent: "hsl(215, 20%, 65%)",
    glow: "rgba(148,163,184,0.12)",
    bg: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(148,163,184,0.06) 0%, transparent 70%)",
    text: "text-slate-300",
    iconBg: "bg-slate-400/10 border-slate-400/20",
  },
  gold: {
    accent: "hsl(43, 96%, 56%)",
    glow: "rgba(234,179,8,0.18)",
    bg: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(234,179,8,0.08) 0%, transparent 70%)",
    text: "text-yellow-400",
    iconBg: "bg-yellow-500/10 border-yellow-500/20",
  },
  legendary: {
    accent: "hsl(43, 96%, 56%)",
    glow: "rgba(250,204,21,0.25)",
    bg: "radial-gradient(ellipse 90% 60% at 50% 50%, rgba(250,204,21,0.12) 0%, rgba(234,179,8,0.04) 40%, transparent 70%)",
    text: "text-yellow-300",
    iconBg: "bg-yellow-400/15 border-yellow-400/30",
  },
};

/* ─── 3D Tilt Card ─── */
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-150, 150], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-6, 6]), { stiffness: 300, damping: 30 });

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.div>
  );
};

/* ─── Floating Orbs (ambient background) ─── */
const AmbientOrbs = ({ color }: { color: string }) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute rounded-full blur-3xl opacity-30"
        style={{
          background: color,
          width: `${300 + i * 100}px`,
          height: `${300 + i * 100}px`,
          left: `${15 + i * 25}%`,
          top: `${20 + i * 15}%`,
        }}
        animate={{
          x: [0, 30 * (i % 2 === 0 ? 1 : -1), 0],
          y: [0, -20 + i * 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </div>
);

/* ─── Legendary Particles ─── */
const LegendaryParticles = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-1 w-1 rounded-full bg-yellow-400"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -60 - Math.random() * 80, 0],
          x: [0, (Math.random() - 0.5) * 40, 0],
          opacity: [0, 0.8, 0],
          scale: [0, 1 + Math.random(), 0],
        }}
        transition={{
          duration: 3 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 4,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

/* ─── Word-by-word quote reveal ─── */
const QuoteReveal = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <motion.p className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

/* ─── Regular Milestone Section ─── */
const MilestoneSection = ({ data, index }: { data: MilestoneData; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const tier = tierColors[data.tier];
  const Icon = data.icon;
  const isEven = index % 2 === 1;

  return (
    <section ref={ref} className="relative min-h-[75vh] flex items-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0" style={{ background: tier.bg }} />
      <AmbientOrbs color={tier.glow} />

      <div className="container relative mx-auto px-6 py-20 lg:py-0">
        <div className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20 ${isEven ? "lg:flex-row-reverse" : ""}`}>
          {/* Massive number */}
          <motion.div
            className="flex-1"
            style={{ y: parallaxY }}
          >
            <motion.div
              initial={{ opacity: 0, x: isEven ? 80 : -80, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
            >
              {/* Tier label */}
              <motion.div
                className={`mb-4 flex items-center gap-2 ${tier.text}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg border ${tier.iconBg}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase">
                  {data.tier === "bronze" ? "First Steps" : data.tier === "silver" ? "Rising Star" : data.tier === "gold" ? "Legend" : "Mythic"}
                </span>
              </motion.div>

              {/* Step count */}
              <h2 className="relative">
                <span
                  className="block text-[2.75rem] sm:text-[5rem] lg:text-[8rem] xl:text-[10rem] font-black leading-[0.85] tracking-tighter"
                  style={{
                    background: `linear-gradient(135deg, ${tier.accent}, hsl(var(--foreground)))`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {data.steps}
                </span>
                <span className={`mt-2 block text-sm font-medium tracking-[0.3em] uppercase ${tier.text} opacity-60`}>
                  steps
                </span>
              </h2>
            </motion.div>
          </motion.div>

          {/* Player card */}
          <motion.div
            className="flex-shrink-0 lg:w-[380px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3, type: "spring", stiffness: 60, damping: 20 }}
          >
            <TiltCard className="relative rounded-2xl border border-border/40 bg-card/60 backdrop-blur-xl p-8">
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${tier.accent}40, transparent)` }}
              />

              {/* Player info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted/50 ring-2 ring-border/30">
                    <img
                      src={`https://flagcdn.com/48x36/${data.country}.png`}
                      alt={data.country.toUpperCase()}
                      className="h-7 w-9 rounded-sm object-cover"
                    />
                  </div>
                  <div
                    className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full"
                    style={{ background: tier.accent }}
                  >
                    <Icon className="h-3 w-3 text-background" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{data.player}</h3>
                  <p className="text-xs text-muted-foreground font-medium tracking-wide">First to reach this milestone</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-border/30 mb-6" />

              {/* Quote */}
              <div className="flex items-start gap-3">
                <Quote className={`mt-1 h-4 w-4 shrink-0 ${tier.text} opacity-40`} />
                <QuoteReveal
                  text={data.quote}
                  className="text-sm italic leading-relaxed text-muted-foreground"
                />
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── Legendary Section (special layout) ─── */
const LegendarySection = ({ data }: { data: MilestoneData }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const ringScale = useSpring(useTransform(scrollYProgress, [0, 1], [0.5, 1]), { stiffness: 60, damping: 20 });
  const ringOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const tier = tierColors.legendary;

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: tier.bg }} />
      <LegendaryParticles />

      {/* Pulsing rings */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: ringOpacity }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-yellow-400/20"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              scale: ringScale,
            }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </motion.div>

      <div className="container relative mx-auto px-6 py-20 text-center">
        {/* Crown icon */}
        <motion.div
          className="mx-auto mb-8"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
        >
          <motion.div
            className="relative mx-auto flex h-24 w-24 items-center justify-center"
            animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl" />
            <div className="absolute inset-2 rounded-full bg-yellow-400/10 blur-md" />
            <Swords className="relative h-12 w-12 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
          </motion.div>
        </motion.div>

        {/* Tier badge */}
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/5 px-5 py-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-yellow-300">Legendary Achievement</span>
        </motion.div>

        {/* Massive number */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 40, damping: 15, delay: 0.3 }}
        >
          <span
            className="block text-[3rem] sm:text-[6rem] lg:text-[12rem] font-black leading-[0.85] tracking-tighter"
            style={{
              background: "linear-gradient(135deg, hsl(43, 96%, 56%), hsl(38, 92%, 50%), hsl(43, 96%, 70%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 40px rgba(250,204,21,0.2))",
            }}
          >
            1,000,000
          </span>
          <span className="mt-2 block text-sm font-medium tracking-[0.4em] uppercase text-yellow-400/60">
            steps
          </span>
        </motion.h2>

        {/* Player card — centered */}
        <motion.div
          className="mx-auto mt-12 max-w-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", stiffness: 60, damping: 20 }}
        >
          <TiltCard className="relative rounded-2xl border border-yellow-400/20 bg-card/60 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(250,204,21,0.1)]">
            {/* Shimmer border */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(250,204,21,0.1), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted/50 ring-2 ring-yellow-400/20">
                  <img
                    src={`https://flagcdn.com/48x36/${data.country}.png`}
                    alt={data.country.toUpperCase()}
                    className="h-7 w-9 rounded-sm object-cover"
                  />
                </div>
                <div className="text-left">
                  <h3
                    className="text-2xl font-black"
                    style={{
                      background: "linear-gradient(135deg, hsl(43,96%,56%), hsl(43,96%,75%))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {data.player}
                  </h3>
                  <p className="text-xs text-yellow-400/50 font-medium tracking-wide">The one and only</p>
                </div>
              </div>

              <div className="h-px bg-yellow-400/10 mb-5" />

              <div className="flex items-start justify-center gap-3">
                <Quote className="mt-1 h-4 w-4 shrink-0 text-yellow-400/40" />
                <QuoteReveal
                  text={data.quote}
                  className="text-sm italic leading-relaxed text-muted-foreground"
                />
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Main Page ─── */
const Milestones = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: undefined });
  const progressHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), { stiffness: 50, damping: 20 });

  const regularMilestones = milestones.slice(0, 3);
  const legendary = milestones[3];

  return (
    <main ref={pageRef} className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Step Milestones — Celebrate Every Walking Achievement | Rivlo</title>
        <meta name="description" content="Discover Rivlo's step milestones from 10,000 to 1,000,000 steps. Celebrate every walking achievement and see what top walkers have accomplished." />
        <link rel="canonical" href="https://rivlo.3bytes.org/milestones/" />
      </Helmet>
      {/* Scroll progress line */}
      <div className="fixed left-0 top-0 bottom-0 z-50 w-px bg-border/10 ml-3 hidden lg:block">
        <motion.div
          className="w-full bg-gradient-to-b from-primary via-primary/60 to-yellow-400"
          style={{ height: progressHeight }}
        />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-2xl">
        <div className="container mx-auto flex h-14 items-center px-6">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back</span>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6">
        <AmbientOrbs color="rgba(100,130,255,0.08)" />

        <motion.div
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Hall of Fame</span>
        </motion.div>

        <h1 className="text-center">
          {"Milestones".split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-foreground"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.3 + i * 0.05, type: "spring", stiffness: 120, damping: 14 }}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mx-auto mt-6 max-w-lg text-center text-base text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          The first players to conquer each step milestone — forever etched in history.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground/50">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-4 w-4 text-muted-foreground/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* Milestone sections */}
      {regularMilestones.map((m, i) => (
        <MilestoneSection key={m.steps} data={m} index={i} />
      ))}

      {/* Legendary */}
      <LegendarySection data={legendary} />

      {/* CTA Footer */}
      <section className="relative py-32 text-center overflow-hidden">
        <AmbientOrbs color="rgba(100,130,255,0.05)" />
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your name could be next.
          </h3>
          <p className="text-muted-foreground mb-8 text-sm">
            Download the app and start your journey.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(100,130,255,0.3)]"
          >
            Get Started
          </Link>
          <div className="mt-6 text-xs text-muted-foreground space-x-3">
            <Link to="/best-step-counter-app/" className="text-primary hover:underline">Best Step Counter App</Link>
            <span>·</span>
            <Link to="/fitness-challenge-app/" className="text-primary hover:underline">Fitness Challenges</Link>
            <span>·</span>
            <Link to="/blog/" className="text-primary hover:underline">Blog</Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Milestones;
