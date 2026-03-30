import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Trophy, Check, X, Download, Star, Footprints, Target, Users, BarChart3, Smartphone } from "lucide-react";
import { redirectToStore } from "@/lib/store-redirect";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const faqData = [
  {
    question: "What is the best step counter app in 2026?",
    answer: "Rivlo is widely regarded as the best step counter app in 2026, offering free leaderboards, friend challenges, club competitions, and achievement badges — features that most competitors charge monthly subscriptions for.",
  },
  {
    question: "Are step counter apps accurate?",
    answer: "Yes, modern step counter apps like Rivlo use your phone's built-in accelerometer and motion coprocessor to accurately count steps. When paired with Apple Health or Google Fit, accuracy typically exceeds 95% for walking and running activities.",
  },
  {
    question: "Do I need a smartwatch to use a step counter app?",
    answer: "No, you don't need a smartwatch. Rivlo works with just your smartphone by leveraging the built-in motion sensors. However, if you do have an Apple Watch or Wear OS device, the app can sync data from those for even more precise tracking.",
  },
  {
    question: "Is Rivlo free to use as a step counter?",
    answer: "Yes, Rivlo's core step counting features are completely free, including step tracking, goal setting, leaderboards, friend challenges, clubs, and achievements. The optional Pro plan ($3.99/mo) unlocks advanced analytics, GPS hike tracking, and premium themes.",
  },
  {
    question: "How does Rivlo compare to Strava and Nike Run Club for step tracking?",
    answer: "While Strava and Nike Run Club focus primarily on running and cycling, Rivlo is purpose-built for step counting and walking competitions. Rivlo offers free global leaderboards, season challenges, and achievement badges — features that Strava locks behind its $11.99/mo subscription.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const comparisonApps = [
  { name: "Rivlo", steps: true, leaderboards: true, challenges: true, clubs: true, achievements: true, gps: true, free: true, price: "Free / $3.99/mo" },
  { name: "Strava", steps: false, leaderboards: "Paid", challenges: true, clubs: true, achievements: "Limited", gps: true, free: false, price: "$11.99/mo" },
  { name: "Nike Run Club", steps: true, leaderboards: false, challenges: true, clubs: false, achievements: true, gps: true, free: true, price: "Free" },
  { name: "Pacer", steps: true, leaderboards: "Paid", challenges: "Paid", clubs: false, achievements: true, gps: true, free: false, price: "$5.99/mo" },
  { name: "Google Fit", steps: true, leaderboards: false, challenges: false, clubs: false, achievements: true, gps: true, free: true, price: "Free" },
];

const StatusIcon = ({ value }: { value: boolean | string }) => {
  if (value === true) return <Check className="w-4 h-4 text-green-400 mx-auto" />;
  if (value === false) return <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
  return <span className="text-xs text-yellow-500 font-medium">{value}</span>;
};

const BestStepCounterApp = () => {
  return (
    <>
      <Helmet>
        <title>Best Step Counter App 2026 — Rivlo vs Pacer vs StepsApp Compared</title>
        <meta
          name="description"
          content="Looking for the best step counter app? We compare Rivlo, Pacer, StepsApp, and more. See which free pedometer app has the best leaderboards, challenges, and accuracy."
        />
        <link rel="canonical" href="https://rivlo.3bytes.org/best-step-counter-app/" />
        <meta property="og:title" content="Best Step Counter App (2026) | Rivlo" />
        <meta property="og:description" content="Free pedometer with leaderboards, challenges, and achievements. Compare top step tracker apps." />
        <meta property="og:url" content="https://rivlo.3bytes.org/best-step-counter-app/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="bg-background text-foreground">
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-6 max-w-4xl">
            <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Best Step Counter App" }]} />
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold font-grotesk tracking-tight leading-[1.05] text-foreground">
              Best Step Counter App{" "}
              <span className="text-primary">(2026)</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Whether you're trying to hit 10,000 steps a day or training for a walking marathon,
              the right <strong>step counter app</strong> can make every stride count. As the leading{" "}
              <strong>pedometer</strong> and <strong>walking app</strong> on the market, Rivlo combines
              accurate step tracking with social competition. We tested and compared the top pedometer
              apps of 2026 so you don't have to.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={redirectToStore}
                className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold text-gold-foreground font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-gold)]"
              >
                <Download className="w-5 h-5" />
                Download Rivlo Free
              </button>
            </div>
          </div>
        </section>

        {/* Section CTA Component */}
        {/* What Is a Step Counter App */}
        <section className="py-20 lg:py-28 bg-card/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold font-grotesk tracking-tight text-foreground mb-6">
              What Is a Step Counter App?
            </h2>
            <div className="prose prose-lg prose-invert max-w-none text-muted-foreground space-y-5 leading-relaxed">
              <p>
                A <strong>step counter app</strong> — also known as a <strong>pedometer app</strong> — is a mobile
                application that tracks the number of steps you take throughout the day. Using your smartphone's
                built-in accelerometer and motion coprocessor, these apps detect walking, running, and
                hiking movements without requiring any additional hardware.
              </p>
              <p>
                Modern <strong>step tracker</strong> apps go far beyond simple counting. The best ones integrate
                with Apple Health and Google Fit, offer goal-setting features, provide detailed analytics on
                distance walked, calories burned, and active minutes. Some, like Rivlo, add social competition
                through leaderboards and friend challenges — turning daily walking into an engaging game.
              </p>
              <p>
                Research from the British Journal of Sports Medicine shows that people who use a{" "}
                <strong>pedometer app</strong> walk an average of 2,500 more steps per day than non-users.
                That's roughly an extra mile of walking — enough to meaningfully reduce the risk of
                cardiovascular disease, type 2 diabetes, and depression.
              </p>
              <p>
                Whether you're a casual walker looking to stay active or a fitness enthusiast training
                for endurance events, a quality <strong>step counter app</strong> provides the motivation and
                accountability you need to stick with your goals. The key is choosing one that fits your
                lifestyle — and that's exactly what this guide helps you do.
              </p>
              <p>
                Want to see how daily step tracking translates into real competition? Check out Rivlo's{" "}
                <Link to="/leaderboard/" className="text-primary hover:underline font-medium">global step leaderboard</Link>{" "}
                to see how walkers worldwide are stacking up — and learn{" "}
                <Link to="/blog/how-to-walk-10000-steps-a-day/" className="text-primary hover:underline font-medium">how to walk 10,000 steps a day</Link>{" "}
                with our science-backed guide.
              </p>
            </div>

          </div>
        </section>

        {/* Features to Look For */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold font-grotesk tracking-tight text-foreground mb-4">
              Features to Look for in a Step Counter App
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl leading-relaxed">
              Not all <strong>pedometer apps</strong> are created equal. Here are the essential features
              that separate the best <strong>step tracker</strong> apps from the rest:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Footprints,
                  title: "Accurate Step Counting",
                  desc: "The foundation of any good step counter app. Look for apps that use sensor fusion — combining accelerometer, gyroscope, and barometer data — to minimize false positives and accurately track real steps, even when your phone is in a bag or pocket.",
                },
                {
                  icon: Target,
                  title: "Customizable Daily Goals",
                  desc: "10,000 steps isn't right for everyone. The best step tracker apps let you set personalized daily, weekly, and monthly targets based on your fitness level, adapting as you improve over time.",
                },
                {
                  icon: Users,
                  title: "Social Competitions & Leaderboards",
                  desc: "Walking alone gets boring. Apps like Rivlo offer global leaderboards, friend challenges, and club competitions that turn daily steps into a social game — dramatically boosting motivation and consistency.",
                },
                {
                  icon: BarChart3,
                  title: "Detailed Analytics & Insights",
                  desc: "Beyond step counts, look for apps that track distance, calories, active minutes, pace, and weekly trends. Visual charts and streak tracking help you understand patterns and stay accountable.",
                },
                {
                  icon: Trophy,
                  title: "Achievements & Badges",
                  desc: "Gamification works. The best pedometer apps reward milestones with unlockable badges — your first 10K day, a 30-day streak, walking a marathon distance. These small wins compound into lasting habits.",
                },
                {
                  icon: Smartphone,
                  title: "Health App Integration",
                  desc: "Seamless sync with Apple Health, Google Fit, or Samsung Health ensures your step data is consistent across all your devices and apps, giving you a complete picture of your daily activity.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-muted-foreground leading-relaxed">
              If you're specifically interested in walking for fitness and competition, check out our guide to the
              best <Link to="/walking-app/" className="text-primary hover:underline font-medium">walking app</Link> options
              available today. For those who love group challenges, our{" "}
              <Link to="/fitness-challenge-app/" className="text-primary hover:underline font-medium">fitness challenge app</Link>{" "}
              roundup covers the most engaging competitive features in detail. You can also see how Rivlo's{" "}
              <Link to="/leaderboard/" className="text-primary hover:underline font-medium">step leaderboard</Link>{" "}
              drives daily motivation.
            </p>

            <div className="mt-10 text-center">
              <button
                onClick={redirectToStore}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold text-gold-foreground font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-gold)]"
              >
                <Download className="w-5 h-5" />
                Try Rivlo Free
              </button>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 lg:py-28 bg-card/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl lg:text-4xl font-bold font-grotesk tracking-tight text-foreground mb-4">
              Top Step Counter Apps Compared (2026)
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl leading-relaxed">
              We tested the five most popular <strong>step tracker</strong> apps side by side. Here's how they stack up on the features that matter most:
            </p>

            <div className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-card/60">
                      <th className="text-left py-5 px-5 text-muted-foreground font-medium min-w-[140px]">App</th>
                      <th className="py-5 px-3 text-center text-muted-foreground font-medium">Steps</th>
                      <th className="py-5 px-3 text-center text-muted-foreground font-medium">Leaderboards</th>
                      <th className="py-5 px-3 text-center text-muted-foreground font-medium">Challenges</th>
                      <th className="py-5 px-3 text-center text-muted-foreground font-medium">Clubs</th>
                      <th className="py-5 px-3 text-center text-muted-foreground font-medium">Achievements</th>
                      <th className="py-5 px-3 text-center text-muted-foreground font-medium">GPS</th>
                      <th className="py-5 px-3 text-center text-muted-foreground font-medium min-w-[120px]">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonApps.map((app) => (
                      <tr
                        key={app.name}
                        className={`border-b border-border/40 last:border-b-0 ${
                          app.name === "Rivlo" ? "bg-primary/[0.06]" : ""
                        }`}
                      >
                        <td className="py-4 px-5 font-bold text-foreground">
                          {app.name === "Rivlo" ? (
                            <span className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-gold fill-gold" />
                              {app.name}
                            </span>
                          ) : (
                            app.name
                          )}
                        </td>
                        <td className="py-4 px-3 text-center"><StatusIcon value={app.steps} /></td>
                        <td className="py-4 px-3 text-center"><StatusIcon value={app.leaderboards} /></td>
                        <td className="py-4 px-3 text-center"><StatusIcon value={app.challenges} /></td>
                        <td className="py-4 px-3 text-center"><StatusIcon value={app.clubs} /></td>
                        <td className="py-4 px-3 text-center"><StatusIcon value={app.achievements} /></td>
                        <td className="py-4 px-3 text-center"><StatusIcon value={app.gps} /></td>
                        <td className="py-4 px-3 text-center text-muted-foreground text-xs font-medium">{app.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground text-center">
              Data as of March 2026. Prices reflect monthly subscription costs.
            </p>

          </div>
        </section>

        {/* Why Rivlo Is the Best */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold font-grotesk tracking-tight text-foreground mb-6">
              Why Rivlo Is the Best Step Counter App in 2026
            </h2>
            <div className="prose prose-lg prose-invert max-w-none text-muted-foreground space-y-5 leading-relaxed">
              <p>
                After testing dozens of <strong>step counter apps</strong>, one clear winner emerged: <strong>Rivlo</strong>.
                Here's why it stands head and shoulders above the competition:
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">1. Most Free Features of Any Step Tracker</h3>
              <p>
                Where Strava charges $11.99/month and Runna costs $19.99/month for premium features, Rivlo
                gives you leaderboards, friend challenges, club competitions, achievement badges, and season
                challenges — all <strong>completely free</strong>. The optional Pro plan at $3.99/month unlocks
                advanced analytics and GPS hike tracking, but the free tier alone beats most competitors'
                paid offerings.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">2. Built for Walking Competition</h3>
              <p>
                Most fitness apps treat walking as an afterthought — they're built for runners and cyclists.
                Rivlo is purpose-built as a <strong>pedometer app</strong> that puts step counting front and center.
                The global leaderboard ranks users by daily, weekly, and all-time step counts, creating a
                competitive atmosphere that keeps you moving.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">3. Social Challenges That Actually Motivate</h3>
              <p>
                Rivlo's friend challenge system lets you create 1v1 or group step competitions with custom
                durations (1 day to 1 month). There's nothing quite like the accountability of knowing your
                friend can see your step count in real time. Studies show social accountability increases
                physical activity by 40% compared to solo tracking.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">4. Clubs & Season Challenges</h3>
              <p>
                No other <strong>step tracker</strong> app offers season-based challenges where users compete
                across multi-week periods for exclusive rewards. Combined with the club system — where teams
                compete on aggregate steps — Rivlo creates a community-driven fitness experience that no
                other app can match.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">5. 50+ Achievements to Unlock</h3>
              <p>
                From your first 10,000-step day to walking the equivalent of the Great Wall of China, Rivlo's
                achievement system provides over 50 unlockable badges that celebrate your milestones. Each
                achievement comes with a beautifully designed badge you can share on social media — turning
                personal wins into bragging rights.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">6. Privacy-First Design</h3>
              <p>
                Your health data stays on your device. Rivlo never sells or shares personal information with
                third parties. Only aggregate step counts are synced to power leaderboards, and you can
                delete all data at any time. In an era of data breaches, this commitment to privacy is a
                genuine differentiator.
              </p>

              <p className="mt-8">
                If you prefer a broader fitness tracking experience, you might also want to explore our picks for the
                best <Link to="/pedometer-app/" className="text-primary hover:underline font-medium">pedometer app</Link> options.
                For runners who also want step tracking, our{" "}
                <Link to="/walking-app/" className="text-primary hover:underline font-medium">walking app</Link>{" "}
                guide covers hybrid options. And don't miss our deep dive into{" "}
                <Link to="/blog/how-to-walk-10000-steps-a-day/" className="text-primary hover:underline font-medium">how to walk 10,000 steps every day</Link>{" "}
                for practical strategies that pair perfectly with Rivlo's tracking.
              </p>
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={redirectToStore}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold text-gold-foreground font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-gold)]"
              >
                <Download className="w-5 h-5" />
                Start Tracking with Rivlo
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
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold font-grotesk tracking-tight text-foreground leading-tight">
              Ready to find your best
              <br />
              <span className="text-primary">step counter app?</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-md mx-auto">
              Join thousands of walkers already competing, tracking, and achieving more with Rivlo.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={redirectToStore}
                className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold text-gold-foreground font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-gold)]"
              >
                <Download className="w-5 h-5" />
                Download Rivlo Free
              </button>
              <p className="text-sm text-muted-foreground">
                Free on iOS & Android · No credit card required
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>Related guides:</span>
              <Link to="/pedometer-app/" className="text-primary hover:underline font-medium">Pedometer App</Link>
              <span>·</span>
              <Link to="/walking-app/" className="text-primary hover:underline font-medium">Walking App</Link>
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

export default BestStepCounterApp;
