import { Download, Footprints, Trophy } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Download Rivlo",
    description: "Grab the app from the App Store or Google Play. Setup takes less than 30 seconds.",
  },
  {
    icon: Footprints,
    number: "02",
    title: "Start Walking",
    description: "Rivlo automatically counts your steps in the background. Just move.",
  },
  {
    icon: Trophy,
    number: "03",
    title: "Compete & Win",
    description: "Challenge friends, climb leaderboards, and unlock achievements as you go.",
  },
];

const HowItWorksSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="how-it-works" className="relative py-32 lg:py-40 bg-card/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-20"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground font-grotesk tracking-tight leading-[1.05]">
            Three steps
            <br />
            <span className="text-muted-foreground">to get started</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => {
            const { ref, isVisible } = useScrollReveal(0.1);
            return (
              <div
                key={step.number}
                ref={ref}
                className="relative text-center group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.15}s`,
                }}
              >
                {/* Large number */}
                <span className="text-[8rem] lg:text-[10rem] font-bold font-grotesk text-foreground/[0.03] leading-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 select-none pointer-events-none">
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-grotesk">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground max-w-[28ch] mx-auto leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
