import { Download, Footprints, Trophy } from "lucide-react";

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Download Rivlo",
    description: "Grab the app from the App Store. Setup takes less than 30 seconds.",
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
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground font-grotesk tracking-tight">
            Three steps to get started
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">
                Step {step.number}
              </span>
              <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-[30ch] mx-auto leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
