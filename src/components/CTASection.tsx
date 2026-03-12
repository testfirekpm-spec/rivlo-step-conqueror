import { Trophy } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { redirectToStore } from "@/lib/store-redirect";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="download" className="relative py-32 lg:py-40 bg-card/50 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[180px] pointer-events-none" />

      <div
        ref={ref}
        className="relative z-10 container mx-auto px-6 text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground font-grotesk tracking-tight leading-[1.05] max-w-2xl mx-auto">
          Ready to make every
          <br />
          <span className="text-muted-foreground">step count?</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg max-w-md mx-auto">
          Join thousands of walkers competing, tracking, and achieving more every day.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Available on iOS & Android
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={redirectToStore}
            className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold text-gold-foreground font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-gold)]"
          >
            <Trophy className="w-5 h-5" />
            Start Your Journey
          </button>
          <p className="text-sm text-muted-foreground">
            Free to download · No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
