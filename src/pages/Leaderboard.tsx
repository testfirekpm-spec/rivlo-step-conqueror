import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Palette } from "lucide-react";
import { useState } from "react";
import { LeaderboardPoster, type LeaderboardTheme } from "@/components/leaderboard/LeaderboardPoster";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const themeLabels: Record<LeaderboardTheme, string> = {
  esports: "Esports",
  minimal: "Minimal",
  aurora: "Aurora",
};

const Leaderboard = () => {
  const [theme, setTheme] = useState<LeaderboardTheme>("esports");

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Rivlo Leaderboard — Global Step Rankings & Competitions</title>
        <meta name="description" content="See the top walkers worldwide on Rivlo's global leaderboard. Compete for the #1 spot in daily, weekly, and all-time step rankings." />
        <link rel="canonical" href="https://rivlo.3bytes.org/leaderboard/" />
      </Helmet>
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-14 items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>

          <div className="flex items-center gap-1.5 rounded-lg border border-border/30 bg-card/50 p-0.5">
            <Palette className="ml-1.5 h-3.5 w-3.5 text-muted-foreground" />
            <ToggleGroup
              type="single"
              value={theme}
              onValueChange={(v) => v && setTheme(v as LeaderboardTheme)}
              size="sm"
            >
              {(Object.keys(themeLabels) as LeaderboardTheme[]).map((t) => (
                <ToggleGroupItem
                  key={t}
                  value={t}
                  className="h-7 px-2.5 text-[11px] font-medium data-[state=on]:bg-primary/20 data-[state=on]:text-primary"
                >
                  {themeLabels[t]}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>
      </nav>

      <h1 className="sr-only">Rivlo Global Step Leaderboard</h1>
      <LeaderboardPoster animated theme={theme} />

      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-6 max-w-3xl text-center text-sm text-muted-foreground space-y-2">
          <p>
            Want to climb the leaderboard? Download the{" "}
            <Link to="/best-step-counter-app/" className="text-primary hover:underline font-medium">best step counter app</Link>{" "}
            and start competing in{" "}
            <Link to="/fitness-challenge-app/" className="text-primary hover:underline font-medium">fitness challenges</Link>{" "}
            today. Read our{" "}
            <Link to="/blog/how-to-walk-10000-steps-a-day/" className="text-primary hover:underline font-medium">guide to 10,000 steps</Link>{" "}
            for tips.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Leaderboard;
