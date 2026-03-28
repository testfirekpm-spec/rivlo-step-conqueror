import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { Download, MapPin, Trophy, Users, TrendingUp } from "lucide-react";
import { redirectToStore } from "@/lib/store-redirect";
import { getCityBySlug, getOtherCities } from "@/data/city-challenges";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqForCity = (city: string) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: `Is there a step challenge in ${city}?`,
      acceptedAnswer: { "@type": "Answer", text: `Yes! Rivlo lets you join or create step challenges in ${city}. Compete against friends, coworkers, or the entire ${city} community on real-time leaderboards — completely free.` },
    },
    {
      "@type": "Question",
      name: `How do I join a walking challenge in ${city}?`,
      acceptedAnswer: { "@type": "Answer", text: `Download Rivlo, set your location to ${city}, and browse active challenges. You can join public challenges or create private ones and invite friends. No subscription required.` },
    },
    {
      "@type": "Question",
      name: `What's the best step counter app for ${city} walkers?`,
      acceptedAnswer: { "@type": "Answer", text: `Rivlo is the best step counter app for ${city} walkers because it combines accurate step tracking with social competition. Leaderboards, friend challenges, and achievement badges keep you motivated to explore ${city} on foot.` },
    },
    {
      "@type": "Question",
      name: `How many steps should I walk per day in ${city}?`,
      acceptedAnswer: { "@type": "Answer", text: `The recommended target is 10,000 steps per day, which equals roughly 5 miles. In ${city}, most people can hit this by combining commute walking with a dedicated 30–45 minute walk in local parks or trails.` },
    },
    {
      "@type": "Question",
      name: `Can I compete with other walkers in ${city}?`,
      acceptedAnswer: { "@type": "Answer", text: `Absolutely. Rivlo's leaderboard shows step counts from walkers across ${city}. You can also create private challenges with friends, family, or coworkers and compete over daily, weekly, or monthly timeframes.` },
    },
  ],
});

const StepChallengeCity = () => {
  const { city: citySlug } = useParams<{ city: string }>();
  const cityData = citySlug ? getCityBySlug(citySlug) : undefined;

  if (!cityData) {
    return <Navigate to="/fitness-challenge-app/" replace />;
  }

  const faq = faqForCity(cityData.name);
  const otherCities = getOtherCities(cityData.slug).slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Step Challenge in {cityData.name} — Walk, Compete & Win | Rivlo</title>
        <meta
          name="description"
          content={`Join the best step challenge in ${cityData.name}. Compete on leaderboards, track your steps, and walk more with Rivlo — the free step counter app for ${cityData.name} walkers.`}
        />
        <link rel="canonical" href={`https://rivlo.3bytes.org/step-challenge/${cityData.slug}/`} />
        <script type="application/ld+json">{JSON.stringify(faq)}</script>
      </Helmet>

      <Navbar />

      <main className="bg-background text-foreground">
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="flex items-center gap-2 text-primary mb-6">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold text-sm">{cityData.name}, {cityData.state}</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold font-grotesk tracking-tight leading-[1.1] text-foreground mb-6">
              Step Challenge in {cityData.name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {cityData.intro}
            </p>
            <button
              onClick={redirectToStore}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-bold text-sm transition-all duration-300 hover:scale-105"
            >
              <Trophy className="w-4 h-4" />
              Join Step Challenge in {cityData.name}
            </button>
          </div>
        </section>

        {/* Stats bar */}
        <section className="py-8 border-y border-border bg-card/30">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-foreground">{cityData.population}</p>
                <p className="text-xs text-muted-foreground">Population</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{cityData.walkScore}</p>
                <p className="text-xs text-muted-foreground">Walk Score</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{cityData.landmarks.length}+</p>
                <p className="text-xs text-muted-foreground">Top Walking Routes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-2xl lg:text-3xl font-bold font-grotesk text-foreground mb-6">
              Why Join a Step Challenge in {cityData.name}?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Walking is the simplest form of exercise, but consistency is the hard part.
              Step challenges solve this by adding competition, community, and accountability.
              In a city like {cityData.name} — with a walk score of {cityData.walkScore} and
              a population of {cityData.population} — there's no shortage of people to compete with.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Trophy, title: "Compete Locally", desc: `See how you stack up against other ${cityData.name} walkers on real-time leaderboards.` },
                { icon: Users, title: "Build Community", desc: `Connect with ${cityData.name} walkers who share your fitness goals and push each other further.` },
                { icon: TrendingUp, title: "Track Progress", desc: "Watch your daily, weekly, and monthly step trends improve as competition drives consistency." },
                { icon: MapPin, title: "Explore Your City", desc: `Discover ${cityData.name}'s best walking routes — from ${cityData.landmarks[0]} to ${cityData.landmarks[1]}.` },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card/40 p-5">
                  <item.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Research from the American Journal of Preventive Medicine shows that people who
              participate in step challenges walk 2,400 more steps per day on average. In{" "}
              {cityData.name}, that translates to an extra mile of exploring your city every
              single day. Whether you're a seasoned walker or just starting out, a{" "}
              <Link to="/fitness-challenge-app/" className="text-primary hover:underline font-medium">
                fitness challenge app
              </Link>{" "}
              turns your daily routine into a game worth winning.
            </p>
          </div>
        </section>

        {/* Best places to walk */}
        <section className="py-16 lg:py-20 bg-card/30">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-2xl lg:text-3xl font-bold font-grotesk text-foreground mb-6">
              Best Places to Walk in {cityData.name}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {cityData.name} offers excellent walking routes for every fitness level.
              Here are the top spots to rack up steps:
            </p>
            <ul className="space-y-3 mb-8">
              {cityData.landmarks.map((landmark) => (
                <li key={landmark} className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">{landmark}</strong> — a top destination for
                    {cityData.name} walkers looking to combine exercise with sightseeing.
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              {cityData.weather}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong className="text-foreground">Pro tip:</strong> {cityData.uniqueTip}
            </p>
          </div>
        </section>

        {/* How Rivlo works */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-2xl lg:text-3xl font-bold font-grotesk text-foreground mb-6">
              How Rivlo Works in {cityData.name}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Rivlo is the{" "}
              <Link to="/best-step-counter-app/" className="text-primary hover:underline font-medium">
                best step counter app
              </Link>{" "}
              for {cityData.name} walkers who want more than just a number on a screen.
              Here's how it transforms your walking routine:
            </p>
            <ol className="space-y-4 mb-8">
              {[
                { step: "Download & Set Up", desc: `Install Rivlo for free, set your daily step goal, and you're ready to start walking in ${cityData.name}.` },
                { step: "Track Every Step", desc: "Rivlo uses your phone's sensors to count steps accurately — no smartwatch needed. Walk anywhere and your steps count." },
                { step: "Compete on Leaderboards", desc: `See where you rank among ${cityData.name} walkers. Daily and weekly leaderboards reset regularly, giving everyone a fresh chance to win.` },
                { step: "Challenge Friends", desc: "Invite friends, family, or coworkers to private step duels. Set the duration, compete, and see who walks more." },
                { step: "Earn Achievements", desc: "Unlock badges for streaks, milestones, and challenge wins. Gamification keeps you coming back day after day." },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground">{item.step}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* CTA */}
            <div className="p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm text-center">
              <p className="text-foreground font-semibold text-lg mb-4">
                Ready to join the step challenge in {cityData.name}?
              </p>
              <button
                onClick={redirectToStore}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-bold text-sm transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4" />
                Track Your Steps with Rivlo
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-card/30">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-2xl lg:text-3xl font-bold font-grotesk text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            {faq.mainEntity.map((item: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details
                key={i}
                className="group rounded-xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden my-4"
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-foreground font-semibold text-base hover:text-primary transition-colors list-none">
                  {item.name}
                  <span className="ml-4 text-muted-foreground group-open:rotate-180 transition-transform duration-200 text-lg">▾</span>
                </summary>
                <div className="px-5 pb-4 text-muted-foreground leading-relaxed">
                  {item.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Other cities */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-2xl lg:text-3xl font-bold font-grotesk text-foreground mb-6">
              Step Challenges in Other Cities
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {otherCities.map((c) => (
                <Link
                  key={c.slug}
                  to={`/step-challenge/${c.slug}/`}
                  className="group rounded-xl border border-border bg-card/40 p-5 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      Step Challenge in {c.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{c.intro.slice(0, 120)}…</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default StepChallengeCity;
