import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { value: "1.5M+", label: "Steps Tracked Daily" },
  { value: "50K+", label: "Active Users" },
  { value: "150+", label: "Countries" },
  { value: "4.9★", label: "App Store Rating" },
];

const StatsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => {
            const { ref, isVisible } = useScrollReveal(0.1);
            return (
              <div
                key={stat.label}
                ref={ref}
                className="text-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                }}
              >
                <p className="text-5xl lg:text-6xl font-bold text-foreground font-grotesk tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
