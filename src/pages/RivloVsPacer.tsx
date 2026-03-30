import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Trophy from "lucide-react/dist/esm/icons/trophy";
import Check from "lucide-react/dist/esm/icons/check";
import X from "lucide-react/dist/esm/icons/x";
import Download from "lucide-react/dist/esm/icons/download";
import Star from "lucide-react/dist/esm/icons/star";
import Swords from "lucide-react/dist/esm/icons/swords";
import Users from "lucide-react/dist/esm/icons/users";
import Gamepad2 from "lucide-react/dist/esm/icons/gamepad-2";
import Target from "lucide-react/dist/esm/icons/target";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import { redirectToStore } from "@/lib/store-redirect";
import StoreButtons from "@/components/StoreButtons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const faqData = [
  {
    question: "Is Rivlo better than Pacer for step tracking?",
    answer: "Both apps offer accurate step tracking, but Rivlo provides significantly more free features — including global leaderboards, friend challenges, club competitions, season events, and 50+ achievement badges — all at no cost. Pacer locks most social and competitive features behind its $5.99/mo premium subscription.",
  },
  {
    question: "Is Pacer free to use?",
    answer: "Pacer offers a free tier with basic step counting and limited insights. However, features like detailed analytics, guided workouts, leaderboard access, and challenges require a Pacer Premium subscription at $5.99/month or $29.99/year.",
  },
  {
    question: "Which app has better social features — Rivlo or Pacer?",
    answer: "Rivlo has far stronger social features. It offers free global and friend leaderboards, 1v1 and group challenges, club competitions, and season-long events. Pacer's social features are more limited and mostly locked behind premium.",
  },
  {
    question: "Can I switch from Pacer to Rivlo?",
    answer: "Yes! Simply download Rivlo from the App Store or Google Play and connect it to Apple Health or Google Fit. Your historical step data will sync automatically, so you won't lose any progress.",
  },
  {
    question: "Which app is better for weight loss — Rivlo or Pacer?",
    answer: "Both apps help increase daily steps, which contributes to weight loss. However, Rivlo's competitive features (challenges, leaderboards, achievements) have been shown to increase daily step counts by 30-40% more than solo tracking, making it more effective for sustained activity.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

type CellValue = "rivlo" | "pacer" | "both" | "neither";

const comparisonRows: { feature: string; category: string; rivlo: string; pacer: string; winner: CellValue }[] = [
  { feature: "Step Counting Accuracy", category: "Accuracy", rivlo: "Sensor fusion + Health sync", pacer: "Accelerometer + Health sync", winner: "both" },
  { feature: "GPS Tracking", category: "Accuracy", rivlo: "Runs, hikes, walks", pacer: "Walks & runs", winner: "both" },
  { feature: "Calorie & Distance Tracking", category: "Accuracy", rivlo: "Free", pacer: "Free (basic)", winner: "rivlo" },
  { feature: "Global Leaderboards", category: "Features", rivlo: "Free", pacer: "Premium only", winner: "rivlo" },
  { feature: "Friend Challenges", category: "Features", rivlo: "Free (1v1 & group)", pacer: "Premium only", winner: "rivlo" },
  { feature: "Club Competitions", category: "Features", rivlo: "Free", pacer: "Not available", winner: "rivlo" },
  { feature: "Season Challenges", category: "Features", rivlo: "Free", pacer: "Not available", winner: "rivlo" },
  { feature: "Achievement Badges", category: "Gamification", rivlo: "50+ free badges", pacer: "Limited", winner: "rivlo" },
  { feature: "Streaks & Milestones", category: "Gamification", rivlo: "Yes, free", pacer: "Basic, free", winner: "rivlo" },
  { feature: "Premium Themes & Widgets", category: "Gamification", rivlo: "Pro plan", pacer: "Not available", winner: "rivlo" },
  { feature: "Social Feed", category: "Social", rivlo: "Activity sharing", pacer: "Groups (premium)", winner: "rivlo" },
  { feature: "Team/Club System", category: "Social", rivlo: "Free clubs", pacer: "Groups (limited)", winner: "rivlo" },
  { feature: "Guided Workouts", category: "Features", rivlo: "Not available", pacer: "Premium", winner: "pacer" },
  { feature: "Weight Tracking", category: "Features", rivlo: "Not available", pacer: "Free", winner: "pacer" },
  { feature: "Price", category: "Value", rivlo: "Free / $3.99/mo Pro", pacer: "Free / $5.99/mo Premium", winner: "rivlo" },
];

const WinnerBadge = ({ winner }: { winner: CellValue }) => {
  if (winner === "both") return <span className="text-xs font-bold text-muted-foreground">Tie</span>;
  return null;
};

const CtaBanner = ({ text }: { text: string }) => (
  <div className="my-12 p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm text-center">
    <p className="text-foreground font-semibold text-lg mb-4">{text}</p>
    <button
      onClick={redirectToStore}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gold text-gold-foreground font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-gold)]"
    >
      <Download className="w-4 h-4" />
      Download Rivlo Free
    </button>
  </div>
);

const RivloVsPacer = () => {
  return (
    <>
      <Helmet>
        <title>Rivlo vs Pacer: Which Step Counter App Is Better? (2026 Comparison)</title>
        <meta
          name="description"
          content="Rivlo vs Pacer head-to-head: leaderboards, challenges, accuracy, price, and features compared. Find out which pedometer app wins for competitive walkers."
        />
        <link rel="canonical" href="https://rivlo.3bytes.org/compare/rivlo-vs-pacer/" />
        <meta property="og:title" content="Rivlo vs Pacer: Best Step Counter App (2026)" />
        <meta property="og:description" content="Feature-by-feature comparison of Rivlo and Pacer step counter apps. See which wins for competitions." />
        <meta property="og:url" content="https://rivlo.3bytes.org/compare/rivlo-vs-pacer/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rivlo.3bytes.org/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="bg-background text-foreground">
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-6 max-w-4xl">
            <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Rivlo vs Pacer" }]} />
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold font-grotesk tracking-tight leading-[1.05] text-foreground">
              Rivlo vs Pacer:
              <br />
              <span className="text-primary">Which Step Counter App is Better?</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Both Rivlo and Pacer promise to help you walk more. But which one actually delivers?
              We compared every feature, price point, and competitive tool side by side to find out.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={redirectToStore}
                className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold text-gold-foreground font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-gold)]"
              >
                <Trophy className="w-5 h-5" />
                Try Rivlo Free
              </button>
            </div>
          </div>
        </section>

        {/* Overview Comparison */}
        <section className="py-20 lg:py-28 bg-card/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold font-grotesk tracking-tight text-foreground mb-6">
              Overview: Rivlo vs Pacer at a Glance
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                <strong className="text-foreground">Pacer</strong> has been a popular pedometer app since 2014,
                offering basic step counting, GPS walking routes, and guided workout programs. It's positioned
                as a wellness companion for casual walkers, with a premium tier ($5.99/mo) that unlocks
                detailed analytics, coaching, and some social features.
              </p>
              <p>
                <strong className="text-foreground">Rivlo</strong> is a newer step counter app built specifically
                for competition and social fitness. While it matches Pacer on core tracking features, Rivlo
                goes significantly further with free global leaderboards, friend challenges, club competitions,
                season events, and 50+ achievement badges — features that Pacer either doesn't offer or locks
                behind its premium subscription.
              </p>
              <p>
                The core difference is philosophy: Pacer is a <em>tracking</em> app with some social features.
                Rivlo is a <em>competition</em> app with excellent tracking. If you walk primarily for health
                data and guided workouts, Pacer may suit you. If you walk to compete, beat friends, and earn
                achievements, Rivlo is the clear winner.
              </p>
              <p>
                For a broader comparison of all the top step trackers, see our{" "}
                <Link to="/best-step-counter-app/" className="text-primary hover:underline font-medium">
                  best step counter app
                </Link>{" "}
                guide.
              </p>
            </div>

            <CtaBanner text="Try Rivlo for competitive step tracking — it's free." />
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl lg:text-4xl font-bold font-grotesk tracking-tight text-foreground mb-4">
              Feature-by-Feature Comparison
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl leading-relaxed">
              Here's how Rivlo and Pacer stack up across accuracy, features, gamification, social tools, and value:
            </p>

            <div className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-card/60">
                      <th className="text-left py-5 px-5 text-muted-foreground font-medium min-w-[180px]">Feature</th>
                      <th className="py-5 px-4 text-center min-w-[160px]">
                        <div className="flex flex-col items-center gap-1">
                          <span className="flex items-center gap-1.5 font-bold text-primary">
                            <Star className="w-4 h-4 text-gold fill-gold" /> Rivlo
                          </span>
                        </div>
                      </th>
                      <th className="py-5 px-4 text-center min-w-[160px]">
                        <span className="font-bold text-foreground">Pacer</span>
                      </th>
                      <th className="py-5 px-4 text-center min-w-[80px] text-muted-foreground font-medium">Winner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.feature} className="border-b border-border/40 last:border-b-0 hover:bg-card/60 transition-colors">
                        <td className="py-4 px-5 text-foreground font-medium">{row.feature}</td>
                        <td className={`py-4 px-4 text-center text-sm ${row.winner === "rivlo" ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                          {row.rivlo}
                        </td>
                        <td className={`py-4 px-4 text-center text-sm ${row.winner === "pacer" ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                          {row.pacer}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {row.winner === "rivlo" && (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-primary">
                              <Check className="w-3.5 h-3.5" /> Rivlo
                            </span>
                          )}
                          {row.winner === "pacer" && (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground">
                              <Check className="w-3.5 h-3.5" /> Pacer
                            </span>
                          )}
                          {row.winner === "both" && <WinnerBadge winner="both" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">Data as of March 2026.</p>

            <CtaBanner text="Rivlo wins 11 out of 15 categories. Try it free." />
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="py-20 lg:py-28 bg-card/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold font-grotesk tracking-tight text-foreground mb-10">
              Pros and Cons
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Rivlo */}
              <div className="rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-sm p-6">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold fill-gold" /> Rivlo
                </h3>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Pros</h4>
                  <ul className="space-y-2.5">
                    {[
                      "Free leaderboards, challenges, clubs & achievements",
                      "Season-based competitions (unique to Rivlo)",
                      "50+ unlockable achievement badges",
                      "1v1 and group friend challenges",
                      "Pro plan at just $3.99/mo (vs Pacer's $5.99/mo)",
                      "Privacy-first design — health data stays on device",
                      "Purpose-built for step competition",
                    ].map((pro) => (
                      <li key={pro} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Cons</h4>
                  <ul className="space-y-2.5">
                    {[
                      "No guided workout programs",
                      "No built-in weight tracker",
                      "Newer app (smaller user base, growing fast)",
                    ].map((con) => (
                      <li key={con} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <X className="w-4 h-4 text-muted-foreground/50 mt-0.5 shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pacer */}
              <div className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Pacer</h3>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Pros</h4>
                  <ul className="space-y-2.5">
                    {[
                      "Established app with large user base",
                      "Guided workout programs (premium)",
                      "Built-in weight and BMI tracker",
                      "GPS walking routes",
                    ].map((pro) => (
                      <li key={pro} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-muted-foreground/60 mt-0.5 shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Cons</h4>
                  <ul className="space-y-2.5">
                    {[
                      "Leaderboards locked behind $5.99/mo paywall",
                      "No club or team competitions",
                      "No season challenges or competitive events",
                      "Limited achievement system",
                      "Social features mostly require premium",
                      "Higher subscription cost than Rivlo Pro",
                    ].map((con) => (
                      <li key={con} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <X className="w-4 h-4 text-muted-foreground/50 mt-0.5 shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <CtaBanner text="More pros, fewer cons. Switch to Rivlo today." />
          </div>
        </section>

        {/* Why Rivlo Is Better for Gamification */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold font-grotesk tracking-tight text-foreground mb-6">
              Why Rivlo Is Better for Gamification
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                If you're choosing between Rivlo and Pacer based on <strong>gamification</strong> — the use of
                game mechanics to motivate fitness — it's not even close. Rivlo was built from the ground up
                as a competitive fitness platform, while Pacer treats gamification as an afterthought.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 my-10">
                <div className="p-5 rounded-xl border border-border bg-card/40 text-center">
                  <Gamepad2 className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground mt-1">Achievement badges in Rivlo</p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card/40 text-center">
                  <Swords className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground">4 types</p>
                  <p className="text-sm text-muted-foreground mt-1">of competitive challenges</p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card/40 text-center">
                  <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground">$0</p>
                  <p className="text-sm text-muted-foreground mt-1">Cost for all competitive features</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Rivlo's Gamification Stack</h3>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li><strong>Global leaderboards</strong> — daily, weekly, and all-time rankings against all users</li>
                <li><strong>Friend challenges</strong> — 1v1 or group competitions with custom durations</li>
                <li><strong>Club competitions</strong> — team-based step battles between communities</li>
                <li><strong>Season challenges</strong> — multi-week events with escalating milestones and exclusive rewards</li>
                <li><strong>50+ achievement badges</strong> — from first 10K day to walking across continents</li>
                <li><strong>Streaks</strong> — daily goal streaks with visual tracking</li>
                <li><strong>Premium themes & widgets</strong> — personalization that rewards engagement</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Pacer's Gamification</h3>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Basic step goals with daily targets</li>
                <li>Limited group challenges (premium only)</li>
                <li>No global leaderboards in free tier</li>
                <li>No season events or club competitions</li>
                <li>Minimal achievement system</li>
              </ul>

              <p className="mt-6">
                The difference is stark. Pacer gives you a number. Rivlo gives you a reason to beat that
                number. For a full breakdown of competitive fitness features, check our{" "}
                <Link to="/fitness-challenge-app/" className="text-primary hover:underline font-medium">
                  fitness challenge app
                </Link>{" "}
                guide.
              </p>
            </div>

            <CtaBanner text="Try Rivlo for competitive step tracking." />
          </div>
        </section>

        {/* Which App Is Better? — Verdict */}
        <section className="py-20 lg:py-28 bg-card/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold font-grotesk tracking-tight text-foreground mb-6">
              Which App Is Better — Rivlo or Pacer?
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                After comparing every feature side by side, the answer depends on what you want from a step
                counter app. If your priority is guided workouts and weight tracking, Pacer is a decent choice.
                But if you care about <strong>gamification, social competition, and staying motivated long-term</strong>,
                Rivlo is the clear winner.
              </p>
              <p>
                Rivlo wins 11 out of 15 comparison categories — including every gamification, social, and value
                metric. Its free tier alone offers more competitive features than Pacer's premium subscription.
                Leaderboards, friend challenges, club battles, season events, and 50+ achievement badges are all
                included at no cost. Pacer charges $5.99/month just to unlock basic leaderboard access.
              </p>
              <p>
                The research supports this approach: gamified fitness apps increase weekly physical activity by
                an average of 27 minutes compared to non-gamified alternatives. Rivlo doesn't just track your
                steps — it gives you a reason to take more of them. That's why it earns our top recommendation
                as the best step counter app for anyone who thrives on competition.
              </p>
              <p>
                For a broader look at the top pedometer apps on the market, read our{" "}
                <Link to="/best-step-counter-app/" className="text-primary hover:underline font-medium">
                  best step counter app
                </Link>{" "}
                guide. And if you're ready to turn walking into a team sport, our{" "}
                <Link to="/fitness-challenge-app/" className="text-primary hover:underline font-medium">
                  fitness challenge app
                </Link>{" "}
                roundup covers the most engaging competitive options.
              </p>
            </div>

            <div className="mt-10 p-8 rounded-2xl border border-primary/20 bg-primary/[0.04] text-center">
              <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-xl font-bold text-foreground mb-2">Our Verdict: Rivlo Wins for Gamification</p>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                More free features, better competition tools, and a lower Pro price. Rivlo is the smarter choice for walkers who want motivation that lasts.
              </p>
              <button
                onClick={redirectToStore}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gold text-gold-foreground font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-gold)]"
              >
                <Download className="w-4 h-4" />
                Try Rivlo for Competitive Step Tracking
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28 bg-card/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold font-grotesk tracking-tight text-foreground mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqData.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-foreground font-semibold text-base lg:text-lg hover:text-primary transition-colors list-none">
                    {faq.question}
                    <span className="ml-4 text-muted-foreground group-open:rotate-180 transition-transform duration-200 text-lg">▾</span>
                  </summary>
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold font-grotesk tracking-tight text-foreground leading-tight">
              The verdict is clear.
              <br />
              <span className="text-primary">Rivlo wins.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-md mx-auto">
              More free features, better gamification, lower Pro price. Make the switch today.
            </p>
            <div className="mt-10 flex flex-col items-center gap-5">
              <StoreButtons />
              <p className="text-sm text-muted-foreground">Free on iOS & Android · No credit card required</p>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>Related:</span>
              <Link to="/best-step-counter-app/" className="text-primary hover:underline font-medium">Best Step Counter App</Link>
              <span>·</span>
              <Link to="/fitness-challenge-app/" className="text-primary hover:underline font-medium">Fitness Challenge App</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RivloVsPacer;
