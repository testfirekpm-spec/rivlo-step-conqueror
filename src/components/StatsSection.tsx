import { useEffect, useState, useRef, useCallback } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { value: 2.5, suffix: "M+", label: "Steps Tracked Daily", decimals: 1 },
  { value: 50, suffix: "K+", label: "Active Users", decimals: 0 },
  { value: 150, suffix: "+", label: "Countries", decimals: 0 },
  { value: 4.9, suffix: "★", label: "App Store Rating", decimals: 1 },
];

function useCountUp(target: number, decimals: number, start: boolean, duration = 1800) {
  const [current, setCurrent] = useState(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [start, target, decimals, duration]);

  return current;
}

const StatItem = ({ stat, index }: { stat: typeof stats[number]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const count = useCountUp(stat.value, stat.decimals, isVisible);

  return (
    <div
      ref={ref}
      className="text-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
      }}
    >
      <p className="text-5xl lg:text-6xl font-bold text-foreground font-grotesk tracking-tight">
        {stat.decimals > 0 ? count.toFixed(stat.decimals) : Math.round(count)}
        {stat.suffix}
      </p>
      <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
