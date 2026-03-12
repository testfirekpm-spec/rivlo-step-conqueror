import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const plans = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Get started with the basics",
    features: [
      "Step tracking & daily goals",
      "Friends leaderboard",
      "5 basic achievements",
      "1 active challenge",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    monthlyPrice: 4.99,
    yearlyPrice: 39.99,
    description: "For serious walkers & runners",
    features: [
      "Everything in Free",
      "GPS hike & run tracking",
      "50+ achievements",
      "Unlimited challenges",
      "Detailed analytics",
      "Custom daily goals",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Team",
    monthlyPrice: 9.99,
    yearlyPrice: 79.99,
    description: "For clubs & organizations",
    features: [
      "Everything in Pro",
      "Create & manage clubs",
      "Team leaderboards",
      "Admin dashboard",
      "Priority support",
      "Custom branding",
    ],
    cta: "Start Team",
    popular: false,
  },
];

const PricingSection = () => {
  const [yearly, setYearly] = useState(false);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="pricing" className="relative py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground font-grotesk tracking-tight leading-[1.05]">
            Simple pricing,
            <br />
            <span className="text-muted-foreground">no surprises</span>
          </h2>

          {/* Toggle */}
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
              <span className="ml-1.5 text-xs text-primary font-bold">Save 33%</span>
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => {
            const { ref, isVisible } = useScrollReveal(0.1);
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                ref={ref}
                className={`relative rounded-3xl border p-8 lg:p-10 transition-all duration-500 ${
                  plan.popular
                    ? "border-primary/40 bg-card shadow-[0_0_60px_rgba(79,106,255,0.12)]"
                    : "border-border bg-card hover:border-primary/20"
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-bold text-foreground font-grotesk">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>

                <div className="mt-6 mb-8">
                  <span className="text-5xl font-black text-foreground font-grotesk">
                    {price === 0 ? "Free" : `$${price}`}
                  </span>
                  {price > 0 && (
                    <span className="text-muted-foreground text-sm ml-1">
                      /{yearly ? "year" : "month"}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-10">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(79,106,255,0.4)]"
                      : "border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
