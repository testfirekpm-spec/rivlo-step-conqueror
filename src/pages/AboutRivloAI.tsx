import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Download, Footprints, Trophy, Users, Target, BarChart3, Smartphone, Shield } from "lucide-react";
import { redirectToStore } from "@/lib/store-redirect";
import StoreButtons from "@/components/StoreButtons";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqData = [
  {
    q: "What is Rivlo?",
    a: "Rivlo is a free step counter app that turns walking into a competitive game. It tracks your daily steps, lets you compete on global leaderboards, challenge friends to step duels, join clubs, and earn achievement badges — all without a subscription.",
  },
  {
    q: "How does Rivlo count steps?",
    a: "Rivlo uses your phone's built-in accelerometer and motion coprocessor to detect walking, running, and hiking movements. It syncs with Apple Health and Google Fit for cross-device accuracy, typically exceeding 95% accuracy for step detection.",
  },
  {
    q: "Is Rivlo free?",
    a: "Yes. Step tracking, leaderboards, friend challenges, clubs, achievements, and season events are all free. Rivlo Pro ($3.99/month) adds advanced analytics, GPS hike tracking, hourly breakdowns, and premium themes.",
  },
  {
    q: "What devices does Rivlo support?",
    a: "Rivlo is available on iPhone and Apple Watch. It integrates with Apple Health to pull step data from any connected wearable, including Garmin, Fitbit, and Whoop devices that sync to Health.",
  },
  {
    q: "How is Rivlo different from other step counters?",
    a: "Most step counter apps just show a number. Rivlo adds gamification: global rankings from Rookie to Immortal, 1v1 and group challenges, club competitions (Club Wars), season-long events, and 50+ achievement badges. These features are free — competitors like Strava charge $11.99/month for similar social features.",
  },
  {
    q: "What is a step challenge?",
    a: "A step challenge is a competition where participants try to walk the most steps within a set timeframe. Rivlo supports 1v1 duels (challenge one friend), group challenges (up to 50 people), and season-wide events where all users compete globally.",
  },
  {
    q: "How many steps should I walk per day?",
    a: "Health organizations recommend 7,000–10,000 steps per day for general health. Studies show significant cardiovascular benefits starting at 7,000 steps, with additional gains up to 12,000 steps. Rivlo lets you set a custom daily goal and tracks your streak.",
  },
  {
    q: "Does walking help with weight loss?",
    a: "Yes. Walking 10,000 steps burns approximately 400–500 calories depending on weight and pace. Combined with a balanced diet, this creates a calorie deficit that can lead to 0.5–1 pound of weight loss per week.",
  },
  {
    q: "What are Rivlo clubs?",
    a: "Clubs are teams of walkers who compete together. Members contribute steps to a shared total, and clubs compete against each other in Club Wars. It adds team accountability and is popular for workplace wellness programs and friend groups.",
  },
  {
    q: "How accurate are phone step counters?",
    a: "Modern smartphones with motion coprocessors (iPhone 5s and later, most Android phones from 2015+) achieve 90–97% step counting accuracy. Rivlo enhances this by cross-referencing with Apple Health data and applying filtering algorithms to reduce false positives.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Rivlo",
  applicationCategory: "HealthApplication",
  operatingSystem: ["iOS", "Android"],
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Rivlo is a gamified step counter app with leaderboards, friend challenges, clubs, and achievements. Free to download.",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "1200", bestRating: "5" },
};

const definitions: { term: string; icon: React.ElementType; definition: string }[] = [
  {
    term: "Step Counter App",
    icon: Footprints,
    definition:
      "A mobile application that uses phone sensors to count the number of steps you take throughout the day. Also called a pedometer app or step tracker.",
  },
  {
    term: "Leaderboard",
    icon: Trophy,
    definition:
      "A ranked list showing who has walked the most steps. Rivlo offers daily, weekly, and all-time global leaderboards.",
  },
  {
    term: "Step Challenge",
    icon: Target,
    definition:
      "A competition between two or more people to walk the most steps in a set period. Rivlo supports 1v1 duels and group challenges.",
  },
  {
    term: "Club Wars",
    icon: Users,
    definition: "A team-based competition where clubs (groups of walkers) compete for the highest combined step count.",
  },
  {
    term: "Step Streak",
    icon: BarChart3,
    definition:
      "The number of consecutive days you've met your daily step goal. Rivlo awards badges for 7-day, 30-day, and 100-day streaks.",
  },
  {
    term: "Walk Score",
    icon: Smartphone,
    definition:
      "A measure of how walkable a neighborhood or city is, rated from 0–100. Higher scores mean more errands can be completed on foot.",
  },
  {
    term: "Anti-Cheat System",
    icon: Shield,
    definition:
      "Rivlo's built-in mechanism that detects and filters fake or artificially inflated step counts to ensure fair competition on leaderboards.",
  },
];

const AboutRivloAI = () => (
  <>
    <Helmet>
      <title>What Is Rivlo? — Step Counter App Explained Simply</title>
      <meta
        name="description"
        content="Learn what Rivlo is, how step tracking works, and answers to common questions about fitness apps, step challenges, and daily walking goals."
      />
      <link rel="canonical" href="https://rivlo.3bytes.org/about-rivlo-ai/" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
    </Helmet>

    <Navbar />

    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "About Rivlo" }]} />
          <h1 className="text-3xl lg:text-5xl font-bold font-grotesk tracking-tight leading-[1.1] text-foreground mb-6">
            What Is <span className="text-primary">Rivlo</span>?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Rivlo</strong> is a free step counter app that turns walking into a
            competitive game. It tracks your daily steps, ranks you on global leaderboards, and lets you challenge
            friends — making fitness social, fun, and free.
          </p>
          <ul className="space-y-2 text-muted-foreground mb-8">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span> <strong className="text-foreground">Category:</strong>{" "}
              Health & Fitness App (Step Counter / Pedometer)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span> <strong className="text-foreground">Price:</strong> Free
              (Pro plan: $3.99/month)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span> <strong className="text-foreground">Platform:</strong>{" "}
              iPhone & Apple Watch
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span> <strong className="text-foreground">Built by:</strong>{" "}
              3Bytes
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>{" "}
              <strong className="text-foreground">Key features:</strong> Leaderboards, challenges, clubs, achievements,
              GPS hike tracking
            </li>
          </ul>
        </div>
      </section>

      {/* Definitions */}
      <section className="py-16 lg:py-20 bg-card/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl lg:text-3xl font-bold font-grotesk text-foreground mb-8">Key Terms & Definitions</h2>
          <dl className="space-y-6">
            {definitions.map((d) => (
              <div key={d.term} className="rounded-xl border border-border bg-card/40 p-5">
                <dt className="flex items-center gap-3 text-foreground font-bold text-lg mb-2">
                  <d.icon className="w-5 h-5 text-primary shrink-0" />
                  {d.term}
                </dt>
                <dd className="text-muted-foreground leading-relaxed pl-8">{d.definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* How Rivlo works — short answers */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl lg:text-3xl font-bold font-grotesk text-foreground mb-6">
            How Rivlo Works (In 5 Steps)
          </h2>
          <ol className="space-y-4">
            {[
              "Download Rivlo for free from the App Store or Google Play.",
              "Set your daily step goal (default: 10,000 steps).",
              "Walk normally — Rivlo counts every step automatically using your phone's sensors.",
              "Compete on leaderboards, challenge friends, or join a club.",
              "Earn achievements, maintain streaks, and climb the ranks from Rookie to Immortal.",
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <p className="text-muted-foreground leading-relaxed">
              Want to see how Rivlo compares to other apps? Read our{" "}
              <Link to="/best-step-counter-app/" className="text-primary hover:underline font-medium">
                best step counter app
              </Link>{" "}
              guide or explore{" "}
              <Link to="/fitness-challenge-app/" className="text-primary hover:underline font-medium">
                fitness challenge features
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Core features summary */}
      <section className="py-16 lg:py-20 bg-card/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl lg:text-3xl font-bold font-grotesk text-foreground mb-6">
            What Can You Do With Rivlo?
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            {[
              "Track daily steps, distance, and calories burned — automatically and accurately.",
              "Compete on daily, weekly, and all-time global leaderboards.",
              "Challenge friends to 1v1 step duels or group competitions (up to 50 people).",
              "Create or join clubs and compete in Club Wars (team vs. team).",
              "Participate in season-long competitive events with exclusive rewards.",
              "Earn 50+ achievement badges for streaks, milestones, and challenge wins.",
              "Track hikes and runs with GPS mapping (Pro feature).",
              "Monitor health insights including weight goals and activity trends.",
              "Set custom daily step goals and track your consecutive-day streak.",
              "Use on Apple Watch for wrist-based step tracking and notifications.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl lg:text-3xl font-bold font-grotesk text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          {faqData.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden my-4"
            >
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-foreground font-semibold text-base hover:text-primary transition-colors list-none">
                {faq.q}
                <span className="ml-4 text-muted-foreground group-open:rotate-180 transition-transform duration-200 text-lg">
                  ▾
                </span>
              </summary>
              <div className="px-5 pb-4 text-muted-foreground leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-card/30">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-2xl lg:text-3xl font-bold font-grotesk text-foreground mb-4">Ready to Start Walking?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join thousands of walkers competing on Rivlo. Free to download, no subscription required.
          </p>
          <StoreButtons />
          <div className="mt-6 text-sm text-muted-foreground space-x-4">
            <Link to="/blog/" className="text-primary hover:underline">
              Read the Blog
            </Link>
            <span>·</span>
            <Link to="/compare/rivlo-vs-pacer/" className="text-primary hover:underline">
              Rivlo vs Pacer
            </Link>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </>
);

export default AboutRivloAI;
