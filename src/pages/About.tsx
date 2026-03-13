import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Trophy, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Trophy,
    title: "Competition Drives Growth",
    description:
      "We believe healthy competition pushes people to be their best. Rivlo turns everyday movement into a global arena.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "While other apps just count numbers, Rivlo builds communities. Clubs, challenges, and leaderboards keep you connected.",
  },
  {
    icon: Target,
    title: "Fair Play, Always",
    description:
      "Our anti-cheat mechanism ensures every rank on the leaderboard is earned with real effort. No shortcuts.",
  },
  {
    icon: Heart,
    title: "Health Made Fun",
    description:
      "From step tracking to hike GPS and body goal insights, we make fitness an adventure — not a chore.",
  },
];

const About = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            About Us
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-grotesk tracking-tight">
            Stop Walking Alone.&nbsp;Start&nbsp;Competing.
          </h1>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Rivlo is more than a pedometer — it's a global arena where every step earns you rank, trophies, and glory. Built by a small team at{" "}
            <span className="text-foreground font-medium">3Bytes</span>, we're on a mission to make fitness social, competitive, and genuinely fun.
          </p>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
              >
                <v.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground font-grotesk mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground font-grotesk tracking-tight text-center mb-8">
            What Makes Rivlo Different
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Rivlo combines a <span className="text-foreground">Global Ranking System</span> — from Rookie to Immortal — with Club Wars, real-time hike &amp; run GPS tracking, deep health insights, and seasonal challenges that keep millions of users moving every single day.
            </p>
            <p>
              Available on <span className="text-foreground">iPhone</span> and <span className="text-foreground">Apple Watch</span>, Rivlo is designed to be sleek, battery-efficient, and endlessly motivating. Whether you're chasing weight-loss goals or leading your club to victory, every step counts.
            </p>
            <p>
              Our Pro tier unlocks advanced analytics, yearly heat maps, hourly step tracking, exclusive themes, and an ad-free experience — because serious athletes deserve serious tools.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
