import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Share2, Download, Trophy, Timer, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toPng } from "html-to-image";
import rivloLogo from "@/assets/logo-rivlo.png";

const leaderboardData = [
  { rank: 1, name: "walking", club: "DailyWalkers 🍃", flag: "🇷🇴", steps: 11426, tier: "diamond" },
  { rank: 2, name: "luffy", club: "Top pickers", flag: "🇨🇦", steps: 10622, tier: "diamond" },
  { rank: 3, name: "saumya_obsidi…", club: "DailyWalkers 🍃", flag: "🇮🇳", steps: 10324, tier: "diamond" },
  { rank: 4, name: "paceby harsh", club: "DailyWalkers 🍃", flag: "🇮🇳", steps: 10317, tier: "diamond" },
  { rank: 5, name: "top", club: "Top club", flag: "🇺🇸", steps: 10278, tier: "diamond" },
  { rank: 6, name: "shubhu_vasani", club: "Gujarat Kesari", flag: "🇮🇳", steps: 9464, tier: "gold" },
  { rank: 7, name: "i11mmu", club: "", flag: "🇬🇧", steps: 9317, tier: "gold" },
  { rank: 8, name: "dpranali064", club: "", flag: "🇺🇸", steps: 9222, tier: "gold" },
];

const rankColors: Record<number, string> = {
  1: "from-yellow-500/20 to-yellow-600/5 border-yellow-500/40",
  2: "from-slate-300/15 to-slate-400/5 border-slate-400/30",
  3: "from-amber-600/15 to-amber-700/5 border-amber-600/30",
};

const rankBadgeColors: Record<number, string> = {
  1: "bg-yellow-500 text-yellow-950",
  2: "bg-slate-300 text-slate-900",
  3: "bg-amber-600 text-amber-950",
};

const Leaderboard = () => {
  const captureRef = useRef<HTMLDivElement>(null);
  const [sharing, setSharing] = useState(false);

  const handleShare = async () => {
    if (!captureRef.current) return;
    setSharing(true);

    try {
      const dataUrl = await toPng(captureRef.current, {
        quality: 1,
        pixelRatio: 3,
        backgroundColor: "hsl(230, 25%, 8%)",
      });

      // Try native share first, else download
      if (navigator.share) {
        const blob = await (await fetch(dataUrl)).blob();
        const file = new File([blob], "rivlo-winter-arc-leaderboard.png", { type: "image/png" });
        await navigator.share({
          title: "Rivlo – The Winter Arc Leaderboard",
          text: "Check out The Winter Arc leaderboard on Rivlo! 🏔️❄️",
          files: [file],
        });
      } else {
        const link = document.createElement("a");
        link.download = "rivlo-winter-arc-leaderboard.png";
        link.href = dataUrl;
        link.click();
      }
    } catch (err) {
      console.error("Share failed:", err);
    } finally {
      setSharing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav bar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <Button
            onClick={handleShare}
            disabled={sharing}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <Share2 className="w-4 h-4" />
            {sharing ? "Generating…" : "Share"}
          </Button>
        </div>
      </nav>

      {/* Capturable area */}
      <div ref={captureRef} className="pb-16">
        {/* Hero header */}
        <div className="relative overflow-hidden pt-12 pb-10">
          {/* Snow / mountain ambient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <Snowflake
                key={i}
                className="absolute text-primary/20 animate-pulse"
                style={{
                  width: `${8 + Math.random() * 12}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          <div className="relative container mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <img src={rivloLogo} alt="Rivlo" className="w-9 h-9 rounded-xl" />
              <Trophy className="w-8 h-8 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-2">
              The Winter Arc
            </h1>
            <p className="text-muted-foreground text-lg mb-5">Ascend the Cold Summit</p>
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-sm font-semibold text-foreground">
              <Timer className="w-4 h-4 text-primary" />
              8 Days Left
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="container mx-auto px-6 mb-8">
          <div className="flex justify-center">
            <div className="glass rounded-full p-1 inline-flex gap-1">
              <button className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold transition-colors">
                Global
              </button>
              <button className="px-5 py-2 rounded-full text-muted-foreground text-sm font-medium hover:text-foreground transition-colors">
                Country
              </button>
              <button className="px-5 py-2 rounded-full text-muted-foreground text-sm font-medium hover:text-foreground transition-colors">
                Friends
              </button>
            </div>
          </div>
        </div>

        {/* Leaderboard list */}
        <div className="container mx-auto px-6 max-w-2xl space-y-3">
          {leaderboardData.map((player) => {
            const isTop3 = player.rank <= 3;
            const rowBg = isTop3
              ? `bg-gradient-to-r ${rankColors[player.rank]}`
              : "bg-card/60 border-border/50";

            return (
              <div
                key={player.rank}
                className={`relative flex items-center gap-4 rounded-2xl border p-4 backdrop-blur-sm transition-all hover:scale-[1.01] ${rowBg}`}
              >
                {/* Rank badge */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black shrink-0 ${
                    isTop3
                      ? rankBadgeColors[player.rank]
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {player.rank}
                </div>

                {/* Flag */}
                <span className="text-2xl shrink-0">{player.flag}</span>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-foreground font-bold truncate">{player.name}</p>
                  {player.club && (
                    <p className="text-xs text-primary/80 truncate">{player.club}</p>
                  )}
                </div>

                {/* Steps */}
                <div className="text-right shrink-0">
                  <p className="text-foreground font-black text-lg tabular-nums">
                    {player.steps.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">steps</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Watermark for shared image */}
        <div className="container mx-auto px-6 mt-10 text-center">
          <p className="text-xs text-muted-foreground/60">
            rivlo.app • Download on the App Store
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
