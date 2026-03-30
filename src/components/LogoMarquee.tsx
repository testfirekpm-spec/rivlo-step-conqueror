const logos = [
  "Apple Health", "Google Fit", "Apple Watch", "Garmin", "Fitbit",
];

const LogoMarquee = () => {
  return (
    <section className="py-16 border-b border-border bg-background overflow-hidden">
      <p className="text-center text-sm text-muted-foreground mb-10">
        Works with your <span className="text-foreground font-semibold">favorite apps</span>
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="flex-shrink-0 mx-10 text-muted-foreground/40 text-xl font-bold font-grotesk tracking-tight select-none"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
