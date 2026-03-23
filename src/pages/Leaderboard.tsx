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
    <div className="min-h-screen bg-background">
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

      <LeaderboardPoster animated theme={theme} />
    </div>
  );
};

export default Leaderboard;
