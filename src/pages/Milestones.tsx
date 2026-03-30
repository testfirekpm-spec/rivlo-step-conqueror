import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import Flame from "lucide-react/dist/esm/icons/flame";
import Zap from "lucide-react/dist/esm/icons/zap";
import Gem from "lucide-react/dist/esm/icons/gem";
import Swords from "lucide-react/dist/esm/icons/swords";
import Quote from "lucide-react/dist/esm/icons/quote";
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down";
import Target from "lucide-react/dist/esm/icons/target";
import TrendingUp from "lucide-react/dist/esm/icons/trending-up";
import Trophy from "lucide-react/dist/esm/icons/trophy";
import CheckCircle from "lucide-react/dist/esm/icons/check-circle";
import BarChart3 from "lucide-react/dist/esm/icons/bar-chart-3";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { useRef, useEffect, useState } from "react";

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

/* ─── Simple Tilt Card (CSS only) ─── */
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`transition-transform duration-300 hover:scale-[1.02] ${className}`}>
      {children}
    </div>
  );
};

/* ─── Floating Orbs (ambient background, CSS animation) ─── */
const AmbientOrbs = ({ color }: { color: string }) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="absolute rounded-full blur-3xl opacity-30 animate-pulse"
        style={{
          background: color,
          width: `${300 + i * 100}px`,
          height: `${300 + i * 100}px`,
          left: `${15 + i * 25}%`,
          top: `${20 + i * 15}%`,
          animationDuration: `${8 + i * 2}s`,
        }}
      />
    ))}
  </div>
);

/* ─── Legendary Particles (CSS animation) ─── */
const LegendaryParticles = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="absolute h-1 w-1 rounded-full bg-yellow-400 animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${3 + Math.random() * 3}s`,
        }}
      />
    ))}
  </div>
);

/* ─── Quote reveal with CSS animation ─── */
const QuoteReveal = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <p className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.3em]"
          style={{
            animation: `fade-in-up 0.4s ease-out ${0.6 + i * 0.08}s backwards`,
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
};

/* ─── Scroll reveal hook ─── */
const useScrollReveal = (ref: React.RefObject<HTMLElement | null>) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin: "-80px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
};

/* ─── Regular Milestone Section ─── */
const MilestoneSection = ({ data, index }: { data: MilestoneData; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollReveal(ref);
  const tier = tierColors[data.tier];
  const Icon = data.icon;
  const isEven = index % 2 === 1;

  return (
    <section ref={ref} className="relative min-h-[75vh] flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: tier.bg }} />
      <AmbientOrbs color={tier.glow} />

      <div className="container relative mx-auto px-6 py-20 lg:py-0">
        <div className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20 ${isEven ? "lg:flex-row-reverse" : ""}`}>
          <div className="flex-1">
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0) scale(1)" : `translateX(${isEven ? 80 : -80}px) scale(0.9)`,
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
              }}
            >
              <div
                className={`mb-4 flex items-center gap-2 ${tier.text}`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s",
                }}
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg border ${tier.iconBg}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase">
                  {data.tier === "bronze" ? "First Steps" : data.tier === "silver" ? "Rising Star" : data.tier === "gold" ? "Legend" : "Mythic"}
                </span>
              </div>

              <h3 className="relative">
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
              </h3>
            </div>
          </div>

          <div
            className="flex-shrink-0 lg:w-[380px]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.7s ease-out 0.3s, transform 0.7s ease-out 0.3s",
            }}
          >
            <TiltCard className="relative rounded-2xl border border-border/40 bg-card/60 backdrop-blur-xl p-8">
              <div
                className="absolute top-0 left-6 right-6 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${tier.accent}40, transparent)` }}
              />
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
                  <h4 className="text-xl font-bold text-foreground">{data.player}</h4>
                  <p className="text-xs text-muted-foreground font-medium tracking-wide">First to reach this milestone</p>
                </div>
              </div>
              <div className="h-px bg-border/30 mb-6" />
              <div className="flex items-start gap-3">
                <Quote className={`mt-1 h-4 w-4 shrink-0 ${tier.text} opacity-40`} />
                <QuoteReveal text={data.quote} className="text-sm italic leading-relaxed text-muted-foreground" />
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Legendary Section ─── */
const LegendarySection = ({ data }: { data: MilestoneData }) => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollReveal(ref);
  const tier = tierColors.legendary;

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: tier.bg }} />
      <LegendaryParticles />

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease-out" }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-yellow-400/20 animate-pulse"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              transform: visible ? "scale(1)" : "scale(0.5)",
              transition: `transform 0.8s ease-out ${i * 0.2}s`,
              animationDuration: `${3 + i}s`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-6 py-20 text-center">
        <div
          className="mx-auto mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <div className="relative mx-auto flex h-24 w-24 items-center justify-center animate-bounce" style={{ animationDuration: "4s" }}>
            <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl" />
            <div className="absolute inset-2 rounded-full bg-yellow-400/10 blur-md" />
            <Swords className="relative h-12 w-12 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
          </div>
        </div>

        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/5 px-5 py-2"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s",
          }}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-yellow-300">Legendary Achievement</span>
        </div>

        <h3
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.8)",
            transition: "opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s",
          }}
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
          <span className="mt-2 block text-sm font-medium tracking-[0.4em] uppercase text-yellow-400/60">steps</span>
        </h3>

        <div
          className="mx-auto mt-12 max-w-md"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s ease-out 0.5s, transform 0.7s ease-out 0.5s",
          }}
        >
          <TiltCard className="relative rounded-2xl border border-yellow-400/20 bg-card/60 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(250,204,21,0.1)]">
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
                  <h4
                    className="text-2xl font-black"
                    style={{
                      background: "linear-gradient(135deg, hsl(43,96%,56%), hsl(43,96%,75%))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {data.player}
                  </h4>
                  <p className="text-xs text-yellow-400/50 font-medium tracking-wide">The one and only</p>
                </div>
              </div>
              <div className="h-px bg-yellow-400/10 mb-5" />
              <div className="flex items-start justify-center gap-3">
                <Quote className="mt-1 h-4 w-4 shrink-0 text-yellow-400/40" />
                <QuoteReveal text={data.quote} className="text-sm italic leading-relaxed text-muted-foreground" />
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

/* ─── FAQ Data ─── */
const faqs = [
  {
    q: "What is the best fitness goals app for walking?",
    a: "Rivlo is the best fitness goals app for walking because it combines automatic step tracking with structured milestones, social leaderboards, and gamified challenges that keep you motivated long-term.",
  },
  {
    q: "How does a step goals tracker help you stay consistent?",
    a: "A step goals tracker like Rivlo sets clear daily and cumulative targets. By visualizing progress toward milestones — from 10,000 to 1,000,000 steps — you build habits through positive reinforcement and streak tracking.",
  },
  {
    q: "Can I set custom step goals in Rivlo?",
    a: "Yes. Rivlo lets you define your own daily step goals and automatically tracks your progress toward both personal targets and community milestones. You can adjust goals as your fitness improves.",
  },
  {
    q: "What milestones can I unlock in Rivlo?",
    a: "Rivlo features milestones at 10,000 steps, 100,000 steps, 500,000 steps, and the legendary 1,000,000 step achievement. Each milestone unlocks a tier badge and a spot in the Hall of Fame.",
  },
  {
    q: "How is Rivlo different from a basic pedometer app?",
    a: "Unlike basic pedometer apps that only count steps, Rivlo is a complete fitness goals app with structured milestones, social competition through leaderboards, team challenges, and progress analytics that turn walking into an engaging game.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* ─── Scroll Progress Hook ─── */
const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return progress;
};

/* ─── Main Page ─── */
const Milestones = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress();

  const regularMilestones = milestones.slice(0, 3);
  const legendary = milestones[3];

  return (
    <main ref={pageRef} className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Step Goals Tracker & Fitness Milestones | Rivlo</title>
        <meta name="description" content="Set step goals and track fitness milestones with Rivlo — the fitness goals app that turns walking into an achievement system. From 10K to 1M steps." />
        <link rel="canonical" href="https://rivlo.3bytes.org/milestones/" />
        <meta property="og:title" content="Step Goals Tracker & Fitness Milestones | Rivlo" />
        <meta property="og:description" content="Set step goals, track milestones, and unlock achievements. Turn walking into a game with Rivlo." />
        <meta property="og:url" content="https://rivlo.3bytes.org/milestones/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rivlo.3bytes.org/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Scroll progress line */}
      <div className="fixed left-0 top-0 bottom-0 z-50 w-px bg-border/10 ml-3 hidden lg:block">
        <div
          className="w-full bg-gradient-to-b from-primary via-primary/60 to-yellow-400 transition-[height] duration-100"
          style={{ height: `${progress * 100}%` }}
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

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Step Goals & Milestones" }]} />

      {/* Hero */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6">
        <AmbientOrbs color="rgba(100,130,255,0.08)" />

        <div
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
          style={{ animation: "fade-in-up 0.6s ease-out backwards" }}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Fitness Goals App</span>
        </div>

        <h1 className="text-center">
          {"Step Goals".split("").map((char, i) => (
            <span
              key={i}
              className="inline-block text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-foreground"
              style={{
                animation: `fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + i * 0.05}s backwards`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p
          className="mx-auto mt-6 max-w-lg text-center text-base text-muted-foreground leading-relaxed"
          style={{ animation: "fade-in-up 0.6s ease-out 0.9s backwards" }}
        >
          Set meaningful fitness goals, track every step, and celebrate milestones that keep you moving. Rivlo is the step goals tracker that turns daily walks into lifetime achievements.
        </p>

        <div
          className="absolute bottom-10 flex flex-col items-center gap-2"
          style={{ animation: "fade-in-up 0.6s ease-out 1.4s backwards" }}
        >
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground/50">Scroll</span>
          <div className="animate-bounce">
            <ChevronDown className="h-4 w-4 text-muted-foreground/40" />
          </div>
        </div>
      </section>

      {/* ─── SEO Content: Setting Step Goals ─── */}
      <section className="container mx-auto px-6 py-20 max-w-4xl">
        <ScrollRevealDiv>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Setting Step Goals That Actually Work</h2>
          </div>

          <div className="prose prose-invert max-w-none space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Most people start a fitness journey with good intentions but quit within weeks. The problem isn't willpower — it's the lack of a clear, structured goal system. A <strong>step goals tracker</strong> solves this by breaking your fitness ambitions into concrete, measurable targets. Instead of vaguely promising to "walk more," you commit to specific milestones: 10,000 steps today, 100,000 this month, half a million by the end of the quarter.
            </p>

            <p>
              Rivlo is a <strong>fitness goals app</strong> designed around the science of goal-setting. Research from the American Psychological Association shows that specific, challenging goals lead to higher performance than vague ones. That's why Rivlo doesn't just count your steps — it structures your entire walking journey into a progression system with four achievement tiers, from your first 10,000-step day to the legendary million-step milestone.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">How to Set Effective Step Goals</h3>
            <ul className="space-y-3">
              <li><strong>Start with your baseline.</strong> Walk normally for a week and note your average daily steps. Most sedentary adults average 3,000–5,000 steps per day.</li>
              <li><strong>Increase gradually.</strong> Add 1,000 steps per week until you reach your target. Jumping from 4,000 to 10,000 overnight leads to burnout.</li>
              <li><strong>Use milestone tiers.</strong> Rivlo's bronze (10K), silver (100K), gold (500K), and legendary (1M) tiers give you clear checkpoints to celebrate along the way.</li>
              <li><strong>Pair with challenges.</strong> Join a <Link to="/fitness-challenge-app/" className="text-primary hover:underline">fitness challenge</Link> to add social accountability to your personal goals.</li>
            </ul>

            <p>
              The best <strong>step goals tracker</strong> doesn't just record numbers — it creates a sense of progression. When you can see yourself moving from bronze to silver tier, every walk feels purposeful. That's the difference between a basic pedometer and a true fitness goals app.
            </p>
          </div>
        </ScrollRevealDiv>
      </section>

      {/* ─── SEO Content: Tracking Progress ─── */}
      <section className="container mx-auto px-6 py-20 max-w-4xl">
        <ScrollRevealDiv>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Tracking Progress With a Step Goals Tracker</h2>
          </div>

          <div className="prose prose-invert max-w-none space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Tracking fitness progress is about more than watching a number climb. An effective step goals tracker provides context — it shows where you've been, where you are, and exactly how far you need to go to reach your next milestone. Rivlo visualizes your journey across four achievement tiers, making every session feel like part of a larger story.
            </p>

            <p>
              What separates Rivlo from a basic <Link to="/best-step-counter-app/" className="text-primary hover:underline">step counter app</Link> is depth of tracking. You don't just see today's steps. You see cumulative progress toward your next milestone, your ranking on the <Link to="/leaderboard/" className="text-primary hover:underline">global leaderboard</Link>, your streak history, and how your pace compares to other walkers in your region.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">What Rivlo Tracks for You</h3>

            <div className="grid gap-4 sm:grid-cols-2 not-prose">
              {[
                { icon: TrendingUp, title: "Cumulative Steps", desc: "Total lifetime steps with milestone progress bars showing how close you are to your next tier." },
                { icon: Trophy, title: "Tier Achievements", desc: "Unlock bronze, silver, gold, and legendary badges as you hit each milestone threshold." },
                { icon: Flame, title: "Daily Streaks", desc: "Track consecutive days of hitting your step goal. Streaks build habits and unlock bonus rewards." },
                { icon: CheckCircle, title: "Goal Completion Rate", desc: "See what percentage of days you've hit your target — and identify patterns in your most active periods." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border/40 bg-card/40 p-5">
                  <item.icon className="h-5 w-5 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-6">
              According to a study published in the <em>Journal of Medical Internet Research</em>, people who use fitness tracking apps with goal visualization are 27% more likely to maintain physical activity over six months. A <strong>fitness goals app</strong> with structured milestones outperforms simple step counting every time.
            </p>
          </div>
        </ScrollRevealDiv>
      </section>

      {/* ─── SEO Content: Benefits of Milestones ─── */}
      <section className="container mx-auto px-6 py-20 max-w-4xl">
        <ScrollRevealDiv>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
              <Trophy className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Milestones Transform Your Fitness Journey</h2>
          </div>

          <div className="prose prose-invert max-w-none space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Milestones are the psychological engine behind long-term fitness consistency. When you break a massive goal like "walk a million steps" into smaller, achievable checkpoints, each milestone creates a moment of celebration that reinforces the habit. This is the endowed progress effect — research shows that people are more motivated to complete a goal when they can see tangible progress toward it.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">The Science Behind Milestone Motivation</h3>
            <p>
              Behavioral psychologists have identified three key mechanisms that make milestone-based fitness tracking so effective:
            </p>
            <ul className="space-y-3">
              <li><strong>Variable reward scheduling.</strong> Each tier takes exponentially more steps to reach, creating a dopamine response that mirrors the most engaging game mechanics.</li>
              <li><strong>Social proof.</strong> Seeing that other players have reached legendary status on the Hall of Fame proves it's achievable — and creates healthy competitive motivation.</li>
              <li><strong>Identity reinforcement.</strong> When you earn a "gold tier" badge, you start thinking of yourself as someone who walks seriously. This identity shift is the strongest predictor of long-term behavior change.</li>
            </ul>

            <p>
              That's why Rivlo isn't just another pedometer. It's a <strong>fitness goals app</strong> that uses milestone psychology to keep you walking week after week. Whether you're training for a <Link to="/fitness-challenge-app/" className="text-primary hover:underline">step challenge</Link> or building a personal walking habit, the milestone system provides the structure most fitness apps lack.
            </p>

            <p>
              Ready to see what structured step goals can do for your fitness? Explore Rivlo's achievement tiers below, or learn more about <Link to="/blog/how-to-walk-10000-steps-a-day/" className="text-primary hover:underline">how to walk 10,000 steps a day</Link> to start your journey toward the first milestone.
            </p>
          </div>
        </ScrollRevealDiv>
      </section>

      {/* ─── Visual Milestone Sections ─── */}
      <div className="border-t border-border/20">
        <div className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">The Four Achievement Tiers</h2>
          <p className="text-muted-foreground text-sm">Meet the first players to conquer each step milestone.</p>
        </div>
      </div>

      {regularMilestones.map((m, i) => (
        <MilestoneSection key={m.steps} data={m} index={i} />
      ))}

      <LegendarySection data={legendary} />

      {/* ─── FAQ Section ─── */}
      <section className="container mx-auto px-6 py-20 max-w-3xl">
        <h2 className="text-3xl font-bold text-foreground text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <ScrollRevealDiv key={i}>
              <div className="rounded-xl border border-border/40 bg-card/40 p-6">
                <h3 className="text-base font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </ScrollRevealDiv>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative py-32 text-center overflow-hidden">
        <AmbientOrbs color="rgba(100,130,255,0.05)" />
        <ScrollRevealDiv>
          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Start Tracking Your Step Goals Today
            </h3>
            <p className="text-muted-foreground mb-8 text-sm max-w-md mx-auto">
              Join thousands of walkers using Rivlo to set fitness goals, track progress, and unlock milestones.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(100,130,255,0.3)]"
            >
              Get Started with Rivlo
            </Link>
            <div className="mt-6 text-xs text-muted-foreground space-x-3">
              <Link to="/best-step-counter-app/" className="text-primary hover:underline">Best Step Counter App</Link>
              <span>·</span>
              <Link to="/fitness-challenge-app/" className="text-primary hover:underline">Fitness Challenges</Link>
              <span>·</span>
              <Link to="/blog/" className="text-primary hover:underline">Blog</Link>
            </div>
          </div>
        </ScrollRevealDiv>
      </section>
      <Footer />
    </main>
  );
};

/* ─── Helper: scroll-reveal wrapper ─── */
const ScrollRevealDiv = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollReveal(ref);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {children}
    </div>
  );
};

export default Milestones;
