import { Apple } from "lucide-react";

const CTASection = () => {
  return (
    <section id="download" className="relative py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/6 blur-[150px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground font-grotesk tracking-tight max-w-xl mx-auto">
          Ready to make every step count?
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto">
          Join thousands of walkers competing, tracking, and achieving more every day.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(21,8,217,0.4)]">
            <Apple className="w-5 h-5" />
            Download on App Store
          </button>
          <p className="text-xs text-muted-foreground">Free to download · No credit card required</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
