const stats = [
  { value: "500K+", label: "Steps Tracked Daily" },
  { value: "50K+", label: "Active Users" },
  { value: "120+", label: "Countries" },
  { value: "4.9★", label: "App Store Rating" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-foreground font-grotesk tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
