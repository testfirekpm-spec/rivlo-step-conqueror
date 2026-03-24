import { useState } from "react";
import { Check, X, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { redirectToStore } from "@/lib/store-redirect";

const features = [
  { name: "Step Tracking & Goals", free: true, pro: true },
  { name: "Leaderboards & Clubs", free: true, pro: true },
  { name: "Ad-Free Experience", free: false, pro: true },
  { name: "Body Goals", free: false, pro: true },
  { name: "Rivlo Adventures", free: false, pro: true },
  { name: "Deep Insights", free: false, pro: true },
  { name: "Premium Themes", free: false, pro: true },
  { name: "Premium Widgets", free: false, pro: true },
  { name: "Distinguished Status", free: false, pro: true },
];

const PricingSection = () => {
  const [yearly, setYearly] = useState(true);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  const monthlyPrice = 3.99;
  const yearlyPrice = 24.99;
  const currentPrice = yearly ? yearlyPrice : monthlyPrice;
  const monthlySavings = ((monthlyPrice * 12 - yearlyPrice) / (monthlyPrice * 12) * 100).toFixed(0);

  return (
    <section id="pricing" className="relative py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground font-grotesk tracking-tight leading-[1.05]">
            Simple pricing,
            <br />
            <span className="text-muted-foreground">no surprises</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            Rivlo is fun for everyone. The free plan already gives you a lot — Pro just takes it to the next level.
          </p>

          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`text-sm font-medium transition-colors ${!yearly ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                yearly ? "bg-primary" : "bg-border"
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-foreground transition-transform duration-300 ${
                  yearly ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${yearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly
              <span className="ml-1.5 text-xs text-primary font-bold">Save {monthlySavings}%</span>
            </span>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* Free Plan */}
          <div
            className="relative rounded-3xl border border-border bg-card p-8 lg:p-10 hover:border-primary/20 transition-all duration-700"
            style={{
              opacity: cardsVisible ? 1 : 0,
              transform: cardsVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <h3 className="text-xl font-bold text-foreground font-grotesk">Free</h3>
            <p className="text-sm text-muted-foreground mt-1">Everything you need to get started</p>

            <div className="mt-6 mb-8">
              <span className="text-5xl font-black text-foreground font-grotesk">Free</span>
              <p className="text-sm text-muted-foreground mt-1">Forever, no credit card needed</p>
            </div>

            <ul className="space-y-3.5 mb-10">
              {features.map((f) => (
                <li key={f.name} className="flex items-center gap-3 text-sm">
                  {f.free ? (
                    <Check className="w-4 h-4 text-primary shrink-0" />
                  ) : (
                    <X className="w-4 h-4 text-muted-foreground/30 shrink-0" />
                  )}
                  <span className={f.free ? "text-foreground" : "text-muted-foreground/50"}>
                    {f.name}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={redirectToStore}
              className="w-full py-3.5 rounded-full text-sm font-bold border border-border text-foreground hover:bg-muted transition-all duration-300 hover:scale-105"
            >
              Get Started Free
            </button>
          </div>

          {/* Pro Plan */}
          <div
            className="relative rounded-3xl border border-primary/40 bg-card p-8 lg:p-10 shadow-[0_0_60px_rgba(79,106,255,0.12)] transition-all duration-700"
            style={{
              opacity: cardsVisible ? 1 : 0,
              transform: cardsVisible ? "translateY(0)" : "translateY(40px)",
              transitionDelay: "100ms",
            }}
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
              <Sparkles className="w-3 h-3" />
              Best Value
            </div>

            <h3 className="text-xl font-bold text-foreground font-grotesk">Rivlo Pro</h3>
            <p className="text-sm text-muted-foreground mt-1">Unlock the full Rivlo experience</p>

            <div className="mt-6 mb-8">
              <span className="text-5xl font-black text-foreground font-grotesk">
                ${currentPrice}
              </span>
              <span className="text-muted-foreground text-sm ml-1">
                /{yearly ? "year" : "month"}
              </span>
              {yearly && (
                <p className="text-xs text-primary mt-1 font-medium">
                  Just ${(yearlyPrice / 12).toFixed(2)}/mo — 7-day free trial
                </p>
              )}
              {!yearly && (
                <p className="text-xs text-primary mt-1 font-medium">
                  7-day free trial included
                </p>
              )}
            </div>

            <ul className="space-y-3.5 mb-10">
              {features.map((f) => (
                <li key={f.name} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-foreground">{f.name}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={redirectToStore}
              className="w-full py-3.5 rounded-full text-sm font-bold bg-gold text-gold-foreground hover:shadow-[var(--shadow-gold-lg)] transition-all duration-300 hover:scale-105"
            >
              Start 7-Day Free Trial
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Available on iOS & Android
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
