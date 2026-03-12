const testimonials = [
  {
    quote:
      "Rivlo turned my boring commute into a daily competition. I've walked 3x more since I started using it.",
    name: "Sarah K.",
    role: "Marketing Manager",
    initials: "SK",
  },
  {
    quote:
      "The club feature is genius. My office team competes every week and it's become our favourite thing.",
    name: "James T.",
    role: "Software Engineer",
    initials: "JT",
  },
  {
    quote:
      "I love the achievements system. Unlocking badges gives me real motivation to hit my step goals daily.",
    name: "Priya M.",
    role: "Fitness Enthusiast",
    initials: "PM",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground font-grotesk tracking-tight">
            Loved by walkers everywhere
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between"
            >
              <p className="text-foreground leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-xs font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
