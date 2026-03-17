import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Share2, Trophy, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toPng } from "html-to-image";
import rivloLogo from "@/assets/logo-rivlo.png";

const leaderboardData = [
  { rank: 1, name: "walking", club: "DailyWalkers 🍃", flag: "🇷🇴", steps: 11426 },
  { rank: 2, name: "luffy", club: "Top pickers", flag: "🇨🇦", steps: 10622 },
  { rank: 3, name: "saumya_obsidi…", club: "DailyWalkers 🍃", flag: "🇮🇳", steps: 10324 },
  { rank: 4, name: "paceby harsh", club: "DailyWalkers 🍃", flag: "🇮🇳", steps: 10317 },
  { rank: 5, name: "top", club: "Top club", flag: "🇺🇸", steps: 10278 },
  { rank: 6, name: "shubhu_vasani", club: "Gujarat Kesari", flag: "🇮🇳", steps: 9464 },
  { rank: 7, name: "i11mmu", club: "", flag: "🇬🇧", steps: 9317 },
  { rank: 8, name: "dpranali064", club: "", flag: "🇺🇸", steps: 9222 },
];

const top3 = leaderboardData.slice(0, 3);
const rest = leaderboardData.slice(3);

const podiumOrder = [top3[1], top3[0], top3[2]]; // 2nd, 1st, 3rd

const podiumConfig: Record<number, { height: string; gradient: string; ring: string; crown: boolean; size: string }> = {
  1: { height: "h-32", gradient: "from-yellow-500/30 to-yellow-600/10", ring: "ring-2 ring-yellow-500/60", crown: true, size: "w-20 h-20" },
  2: { height: "h-24", gradient: "from-slate-300/20 to-slate-400/5", ring: "ring-2 ring-slate-400/50", crown: false, size: "w-16 h-16" },
  3: { height: "h-20", gradient: "from-amber-600/20 to-amber-700/5", ring: "ring-2 ring-amber-600/50", crown: false, size: "w-16 h-16" },
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
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <Button onClick={handleShare} disabled={sharing} size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            <Share2 className="w-4 h-4" />
            {sharing ? "Generating…" : "Share"}
          </Button>
        </div>
      </nav>

      <div ref={captureRef} className="pb-16">
        {/* Header */}
        <div className="relative overflow-hidden pt-12 pb-6">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
          <div className="relative container mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <img src={rivloLogo} alt="Rivlo" className="w-9 h-9 rounded-xl" />
              <Trophy className="w-8 h-8 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-2">
              The Winter Arc
            </h1>
            <p className="text-muted-foreground text-lg">Final Leaderboard</p>
          </div>
        </div>

        {/* Podium */}
        <div className="container mx-auto px-6 max-w-lg mb-10">
          <div className="flex items-end justify-center gap-3">
            {podiumOrder.map((player) => {
              const cfg = podiumConfig[player.rank];
              return (
                <div key={player.rank} className="flex flex-col items-center flex-1">
                  {/* Avatar area */}
                  <div className="relative mb-2">
                    {cfg.crown && (
                      <Crown className="w-6 h-6 text-yellow-400 absolute -top-5 left-1/2 -translate-x-1/2" />
                    )}
                    <div className={`${cfg.size} rounded-full ${cfg.ring} bg-gradient-to-br ${cfg.gradient} flex items-center justify-center text-3xl`}>
                      {player.flag}
                    </div>
                  </div>
                  <p className="text-foreground font-bold text-sm truncate max-w-[90px] text-center">{player.name}</p>
                  <p className="text-muted-foreground text-xs tabular-nums">{player.steps.toLocaleString()}</p>
                  {player.club && <p className="text-[10px] text-primary/70 truncate max-w-[90px]">{player.club}</p>}

                  {/* Podium bar */}
                  <div className={`mt-2 w-full ${cfg.height} rounded-t-xl bg-gradient-to-t ${cfg.gradient} border border-b-0 border-border/40 flex items-center justify-center`}>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black ${rankBadgeColors[player.rank]}`}>
                      {player.rank}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Podium base */}
          <div className="h-1 w-full bg-border/30 rounded-b-lg" />
        </div>

        {/* Remaining players */}
        <div className="container mx-auto px-6 max-w-2xl space-y-3">
          {rest.map((player) => (
            <div
              key={player.rank}
              className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card/60 p-4 backdrop-blur-sm transition-all hover:scale-[1.01]"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black shrink-0 bg-muted text-muted-foreground">
                {player.rank}
              </div>
              <span className="text-2xl shrink-0">{player.flag}</span>
              <div className="flex-1 min-w-0">
                <p className="text-foreground font-bold truncate">{player.name}</p>
                {player.club && <p className="text-xs text-primary/80 truncate">{player.club}</p>}
              </div>
              <div className="text-right shrink-0">
                <p className="text-foreground font-black text-lg tabular-nums">{player.steps.toLocaleString()}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">steps</p>
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 mt-10 text-center">
          <p className="text-xs text-muted-foreground/60">rivlo.app • Download on the App Store</p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
