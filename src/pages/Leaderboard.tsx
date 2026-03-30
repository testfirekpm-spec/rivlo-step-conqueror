import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Palette, Trophy, TrendingUp, Users, Target, Zap, BarChart3 } from "lucide-react";
import { useState } from "react";
import { LeaderboardPoster, type LeaderboardTheme } from "@/components/leaderboard/LeaderboardPoster";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import Footer from "@/components/Footer";
import { redirectToStore } from "@/lib/store-redirect";

const themeLabels: Record<LeaderboardTheme, string> = {
  esports: "Esports",
  minimal: "Minimal",
  aurora: "Aurora",
};

const faqItems = [
  { q: "What is a fitness leaderboard app?", a: "A fitness leaderboard app ranks users by their physical activity—steps, distance, or calories—so you can see how you stack up against friends, coworkers, or the global community in real time." },
  { q: "How does a step tracker with leaderboard improve motivation?", a: "Seeing your rank next to other walkers creates healthy competition. Research shows that social comparison can increase physical activity by up to 50% compared to tracking alone." },
  { q: "Is Rivlo's leaderboard free?", a: "Yes. Rivlo's global leaderboard, daily rankings, and seasonal competitions are completely free. Download the app on iOS or Android to start competing." },
  { q: "Can I create a private leaderboard for my team?", a: "Absolutely. Rivlo supports private clubs where you can invite friends, family, or coworkers to compete on a dedicated leaderboard with custom challenge rules." },
  { q: "How is Rivlo different from basic step counter apps?", a: "Basic pedometers only count steps. Rivlo adds real-time leaderboards, trophies, seasonal competitions, team challenges, and achievement milestones—turning every walk into a game." },
];

const Leaderboard = () => {
  const [theme, setTheme] = useState<LeaderboardTheme>("esports");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Fitness Leaderboard App — Track Steps | Rivlo</title>
        <meta name="description" content="Rivlo is the #1 fitness leaderboard app. Track steps, compete on global rankings, and stay motivated with a step tracker with leaderboard features." />
        <link rel="canonical" href="https://rivlo.3bytes.org/leaderboard/" />
        <meta property="og:title" content="Fitness Leaderboard App — Compete & Track Steps | Rivlo" />
        <meta property="og:description" content="Rivlo is the #1 fitness leaderboard app. Track steps, compete on global rankings, and stay motivated." />
        <meta property="og:url" content="https://rivlo.3bytes.org/leaderboard/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rivlo.3bytes.org/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-14 items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <div className="flex items-center gap-1.5 rounded-lg border border-border/30 bg-card/50 p-0.5">
            <Palette className="ml-1.5 h-3.5 w-3.5 text-muted-foreground" />
            <ToggleGroup type="single" value={theme} onValueChange={(v) => v && setTheme(v as LeaderboardTheme)} size="sm">
              {(Object.keys(themeLabels) as LeaderboardTheme[]).map((t) => (
                <ToggleGroupItem key={t} value={t} className="h-7 px-2.5 text-[11px] font-medium data-[state=on]:bg-primary/20 data-[state=on]:text-primary">
                  {themeLabels[t]}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 pt-4">
        <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Fitness Leaderboard App" }]} />
      </div>

      {/* Hero intro */}
      <section className="container mx-auto px-6 pt-8 pb-12 max-w-4xl">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-grotesk tracking-tight leading-tight">
          The #1 Fitness Leaderboard App for Competitive Walkers
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Most step counter apps tell you how many steps you took. Rivlo tells you where you <em>rank</em>. As a purpose-built <strong>fitness leaderboard app</strong>, Rivlo transforms everyday walking into a global competition. Whether you want a <strong>step tracker with leaderboard</strong> features for personal motivation or team accountability, Rivlo delivers real-time rankings, seasonal competitions, and achievement milestones that keep you moving day after day.
        </p>
      </section>

      {/* Live leaderboard poster */}
      <LeaderboardPoster animated theme={theme} />

      {/* How leaderboards improve motivation */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-grotesk tracking-tight">
            How Fitness Leaderboards Improve Motivation
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Behavioral science has long established that social comparison is one of the most powerful drivers of sustained behavior change. A <strong>fitness leaderboard app</strong> taps into this psychology by making your progress visible relative to others. When you see a friend just 200 steps ahead of you, the urge to close that gap is almost irresistible.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A study published in the <em>Journal of Medical Internet Research</em> found that participants using social fitness features logged 50% more physical activity than those tracking alone. Leaderboards create what psychologists call "upward social comparison"—you benchmark against people slightly ahead of you, which raises your own performance ceiling over time.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {[
              { icon: TrendingUp, title: "Visible Progress", desc: "Daily rank changes give you instant feedback on whether you're improving, plateauing, or falling behind." },
              { icon: Users, title: "Social Accountability", desc: "Knowing friends can see your rank creates gentle pressure to stay consistent—even on low-motivation days." },
              { icon: Target, title: "Goal Anchoring", desc: "Leaderboard positions become natural goals. Climbing from #47 to #30 feels more tangible than abstract step targets." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-border bg-card/50">
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-muted-foreground leading-relaxed">
            Rivlo amplifies these effects with trophies, seasonal arcs, and club competitions. Unlike a basic pedometer that shows a number and nothing else, Rivlo's <strong>step tracker with leaderboard</strong> turns every walk into a meaningful event. You're not just walking—you're competing, climbing, and earning recognition. Pair the leaderboard with a{" "}
            <Link to="/fitness-challenge-app/" className="text-primary hover:underline font-medium">fitness challenge app</Link>{" "}
            experience and the motivation compounds.
          </p>
        </div>
      </section>

      {/* Comparison with basic step apps */}
      <section className="py-16 lg:py-20 bg-card/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-grotesk tracking-tight">
            Fitness Leaderboard App vs. Basic Step Counters
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Most free pedometer apps do one thing: count steps. That's useful for a week—maybe two—before the novelty wears off and the app gets buried in a folder. Here's how a dedicated <strong>fitness leaderboard app</strong> like Rivlo compares to basic step tracking tools:
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/30 border-b border-border">
                  <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                  <th className="text-center p-4 font-semibold text-foreground">Basic Step Apps</th>
                  <th className="text-center p-4 font-semibold text-primary">Rivlo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Step counting", "✓", "✓"],
                  ["Global leaderboard", "✗", "✓"],
                  ["Friend & club rankings", "✗", "✓"],
                  ["Daily / weekly / seasonal competitions", "✗", "✓"],
                  ["Trophies & achievements", "✗", "✓"],
                  ["Team challenges", "Limited", "✓"],
                  ["Gamified progression system", "✗", "✓"],
                  ["Real-time rank updates", "✗", "✓"],
                ].map(([feature, basic, rivlo]) => (
                  <tr key={feature}>
                    <td className="p-4 text-muted-foreground">{feature}</td>
                    <td className="p-4 text-center text-muted-foreground">{basic}</td>
                    <td className="p-4 text-center font-medium text-foreground">{rivlo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-muted-foreground leading-relaxed">
            The difference is clear: basic apps give you data; Rivlo gives you a reason to act on it. If you've tried a{" "}
            <Link to="/best-step-counter-app/" className="text-primary hover:underline font-medium">step counter app</Link>{" "}
            before and stopped using it within a month, chances are it lacked the competitive layer that sustains long-term engagement. A step tracker with leaderboard features solves exactly that problem.
          </p>
        </div>
      </section>

      {/* Why Rivlo */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-grotesk tracking-tight">
            Why Rivlo Is the Best Step Tracker with Leaderboard
          </h2>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Rivlo was built from the ground up as a competitive walking platform—not a generic health app with a leaderboard bolted on. Every feature is designed to make walking more engaging, social, and rewarding.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: BarChart3, title: "Real-Time Global Rankings", desc: "See where you stand among thousands of walkers worldwide. Rankings update throughout the day so every walk matters." },
                { icon: Trophy, title: "Trophies & Seasons", desc: "Earn trophies for consistency, milestones, and seasonal performance. Each season resets the competitive slate." },
                { icon: Users, title: "Clubs & Team Play", desc: "Create or join clubs to compete as a group. Perfect for workplace wellness programs and friend groups." },
                { icon: Zap, title: "Gamified Progression", desc: "Unlock achievements, climb tiers, and build streaks. The more you walk, the more you unlock." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-border bg-card/50">
                  <item.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>
              Whether you're training for a{" "}
              <Link to="/fitness-challenge-app/" className="text-primary hover:underline font-medium">fitness challenge</Link>, trying to hit{" "}
              <Link to="/blog/how-to-walk-10000-steps-a-day/" className="text-primary hover:underline font-medium">10,000 steps a day</Link>, or simply want accountability, Rivlo's leaderboard keeps you honest and motivated.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-grotesk">
            Start Competing Today
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join thousands of walkers on the world's most competitive fitness leaderboard app. Free on iOS & Android.
          </p>
          <button
            onClick={redirectToStore}
            className="mt-8 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold text-gold-foreground font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-gold)]"
          >
            <Trophy className="w-5 h-5" />
            Join a Live Step Challenge with Rivlo
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground font-grotesk tracking-tight mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="group rounded-xl border border-border bg-card/50 overflow-hidden">
                <summary className="cursor-pointer p-5 font-medium text-foreground flex items-center justify-between">
                  {item.q}
                  <span className="text-muted-foreground transition-transform group-open:rotate-45 text-lg">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related links footer */}
      <section className="py-12 bg-card/30 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl text-center text-sm text-muted-foreground space-y-2">
          <p>
            Explore more:{" "}
            <Link to="/best-step-counter-app/" className="text-primary hover:underline font-medium">Best Step Counter App</Link>{" · "}
            <Link to="/fitness-challenge-app/" className="text-primary hover:underline font-medium">Fitness Challenge App</Link>{" · "}
            <Link to="/step-challenge/new-york/" className="text-primary hover:underline font-medium">Step Challenge NYC</Link>{" · "}
            <Link to="/blog/best-walking-challenges-for-groups/" className="text-primary hover:underline font-medium">Best Walking Challenges for Groups</Link>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Leaderboard;
