import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Rivlo",
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sarah K." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Rivlo turned my boring commute into a daily competition. I've walked 3x more since I started using it."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "James T." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "The club feature is genius. My office team competes every week and it's become our favourite thing."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Priya M." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "I love the achievements system. Unlocking badges gives me real motivation to hit my step goals daily."
    }
  ]
};

const TestimonialsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <section id="testimonials" className="relative py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-6">
        {/* Featured quote — Jitter-style big quote */}
        <div
          ref={headerRef}
          className="max-w-4xl mx-auto text-center mb-24"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <p className="text-3xl lg:text-5xl xl:text-6xl font-bold text-foreground font-grotesk tracking-tight leading-[1.15]">
            "Rivlo gives you{" "}
            <span className="text-primary">no excuse to skip walking</span>.
            It's that addictive."
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-sm font-bold text-primary">
              SK
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">Sarah K.</p>
              <p className="text-xs text-muted-foreground">Marketing Manager</p>
            </div>
          </div>
        </div>

        {/* Supporting quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.slice(1).map((t, i) => {
            const { ref, isVisible } = useScrollReveal(0.1);
            return (
              <div
                key={t.name}
                ref={ref}
                className="rounded-3xl border border-border bg-card p-8 flex flex-col justify-between"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                }}
              >
                <p className="text-foreground leading-relaxed text-lg mb-6">
                  "{t.quote}"
                </p>
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
