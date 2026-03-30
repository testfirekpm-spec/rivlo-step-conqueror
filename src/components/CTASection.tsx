import { Trophy } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import StoreButtons from "@/components/StoreButtons";

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
        <div className="mt-10 flex flex-col items-center gap-5">
          <StoreButtons />
          <p className="text-sm text-muted-foreground">
            Free to download · No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
