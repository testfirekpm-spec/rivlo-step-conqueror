import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Share2, Download, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toPng } from "html-to-image";
import rivloLogo from "@/assets/logo-rivlo.png";
import winterBanner from "@/assets/winter-arc-banner.png";

const leaderboardData = [
  { rank: 1, name: "walking", club: "DailyWalkers 🍃", flag: "RO", steps: 11426 },
  { rank: 2, name: "luffy", club: "Top pickers", flag: "CA", steps: 10622 },
  { rank: 3, name: "saumya_obsidi…", club: "DailyWalkers 🍃", flag: "IN", steps: 10324 },
  { rank: 4, name: "paceby harsh", club: "DailyWalkers 🍃", flag: "IN", steps: 10317 },
  { rank: 5, name: "top", club: "Top club", flag: "US", steps: 10278 },
  { rank: 6, name: "shubhu_vasani", club: "Gujarat Kesari", flag: "IN", steps: 9464 },
  { rank: 7, name: "i11mmu", club: "", flag: "GB", steps: 9317 },
  { rank: 8, name: "dpranali064", club: "", flag: "US", steps: 9222 },
];

const top3 = leaderboardData.slice(0, 3);
const rest = leaderboardData.slice(3);
const podiumOrder = [top3[1], top3[0], top3[2]];

const FlagBadge = ({ code, size = "normal" }: { code: string; size?: "normal" | "small" }) => (
  <img
    src={`https://flagcdn.com/w80/${code.toLowerCase()}.png`}
    alt={code}
    className={`${size === "small" ? "w-6 h-4" : "w-7 h-5"} rounded-[3px] object-cover`}
    crossOrigin="anonymous"
  />
);

const podiumStyles: Record<number, {
  barH: string;
  avatarSize: string;
  glow: string;
  border: string;
  badgeBg: string;
  badgeText: string;
  nameSize: string;
}> = {
  1: {
    barH: "h-36",
    avatarSize: "w-[72px] h-[72px]",
    glow: "shadow-[0_0_40px_rgba(234,179,8,0.3)]",
    border: "border-yellow-500/50",
    badgeBg: "bg-yellow-500",
    badgeText: "text-yellow-950",
    nameSize: "text-base",
  },
  2: {
    barH: "h-24",
    avatarSize: "w-14 h-14",
    glow: "shadow-[0_0_30px_rgba(148,163,184,0.2)]",
    border: "border-slate-400/40",
    badgeBg: "bg-slate-300",
    badgeText: "text-slate-900",
    nameSize: "text-sm",
  },
  3: {
    barH: "h-20",
    avatarSize: "w-14 h-14",
    glow: "shadow-[0_0_30px_rgba(217,119,6,0.2)]",
    border: "border-amber-600/40",
    badgeBg: "bg-amber-700",
    badgeText: "text-amber-50",
    nameSize: "text-sm",
  },
};

type ShareFormat = "story" | "square" | "post";

const formatConfig: Record<ShareFormat, { label: string; icon: string; width: number; height: number }> = {
  story: { label: "Story / Status", icon: "📱", width: 1080, height: 1920 },
  square: { label: "Square Post", icon: "🟦", width: 1080, height: 1080 },
  post: { label: "Landscape Post", icon: "🖼️", width: 1200, height: 675 },
};

const Leaderboard = () => {
  const captureRef = useRef<HTMLDivElement>(null);
  const [sharing, setSharing] = useState(false);
  const [showFormats, setShowFormats] = useState(false);

  const generateImage = async (format: ShareFormat) => {
    if (!captureRef.current) return;
    setSharing(true);
    setShowFormats(false);

    const { width, height } = formatConfig[format];

    try {
      // Clone the capture element into a fixed-size offscreen container
      const clone = captureRef.current.cloneNode(true) as HTMLElement;
      const wrapper = document.createElement("div");

      // Fixed render size — this ensures consistent output regardless of viewport
      wrapper.style.cssText = `
        position: fixed; left: -9999px; top: 0;
        width: ${width / 2}px;
        height: ${height / 2}px;
        overflow: hidden;
        background: hsl(230, 25%, 8%);
        display: flex;
        flex-direction: column;
        justify-content: center;
      `;

      clone.style.width = "100%";
      clone.style.minHeight = "auto";
      clone.style.overflow = "hidden";

      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);

      // Wait for flag images to load
      const images = wrapper.querySelectorAll("img");
      await Promise.all(
        Array.from(images).map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete) return resolve();
              img.onload = () => resolve();
              img.onerror = () => resolve();
            })
        )
      );

      const dataUrl = await toPng(wrapper, {
        quality: 1,
        pixelRatio: 2,
        width: width / 2,
        height: height / 2,
        backgroundColor: "hsl(230, 25%, 8%)",
        cacheBust: true,
      });

      document.body.removeChild(wrapper);

      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], `rivlo-winter-arc-${format}.png`, { type: "image/png" });

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: "Rivlo – The Winter Arc",
          text: "Check out The Winter Arc final leaderboard on Rivlo! 🏔️❄️",
          files: [file],
        });
      } else {
        const link = document.createElement("a");
        link.download = file.name;
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
      }
    } catch (err) {
      // User cancelled share or error
      if ((err as Error)?.name !== "AbortError") {
        console.error("Share failed:", err);
      }
    } finally {
      setSharing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>

          <div className="relative">
            <Button
              onClick={() => setShowFormats(!showFormats)}
              disabled={sharing}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              <Share2 className="w-4 h-4" />
              {sharing ? "Generating…" : "Share"}
            </Button>

            {/* Format picker dropdown */}
            {showFormats && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowFormats(false)} />
                <div className="absolute right-0 top-full mt-2 z-50 w-56 rounded-xl border border-border bg-card shadow-xl overflow-hidden">
                  <div className="px-3 py-2 border-b border-border">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Choose format</p>
                  </div>
                  {(Object.keys(formatConfig) as ShareFormat[]).map((key) => {
                    const f = formatConfig[key];
                    return (
                      <button
                        key={key}
                        onClick={() => generateImage(key)}
                        className="w-full flex items-center gap-3 px-3 py-3 hover:bg-muted/50 transition-colors text-left"
                      >
                        <span className="text-lg">{f.icon}</span>
                        <div>
                          <p className="text-sm font-medium text-foreground">{f.label}</p>
                          <p className="text-[10px] text-muted-foreground">{f.width}×{f.height}px</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Capturable poster — visible on page, also used as source for share */}
      <div ref={captureRef} className="relative overflow-hidden">
        {/* Cinematic background layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Banner image — higher opacity for depth */}
          <img src={winterBanner} alt="" className="absolute inset-0 w-full h-[480px] object-cover opacity-40" crossOrigin="anonymous" />
          {/* Multi-stop gradient overlay */}
          <div className="absolute inset-0 h-[480px] bg-gradient-to-b from-background/10 via-background/60 to-background" />
          {/* Primary radial glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px]" style={{ background: 'radial-gradient(circle, hsl(230 75% 52% / 0.12) 0%, transparent 70%)' }} />
          {/* Icy cyan secondary glow */}
          <div className="absolute top-[60px] left-1/3 w-[500px] h-[400px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%)' }} />
          {/* Aurora light streaks */}
          <div className="absolute top-[100px] left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 5%, hsl(230 75% 52% / 0.15) 30%, rgba(56, 189, 248, 0.1) 50%, hsl(270 60% 50% / 0.12) 70%, transparent 95%)' }} />
          <div className="absolute top-[160px] left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 15%, rgba(56, 189, 248, 0.08) 40%, hsl(230 75% 52% / 0.1) 60%, transparent 85%)' }} />
          {/* Noise grain overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }} />
        </div>

        {/* Ambient sparkles */}
        <div className="absolute top-[90px] left-[18%] w-1.5 h-1.5 bg-primary/30 rounded-full" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />
        <div className="absolute top-[130px] right-[22%] w-1 h-1 rounded-full" style={{ background: 'rgba(56, 189, 248, 0.25)', animation: 'pulse-glow 4s ease-in-out infinite 1s' }} />
        <div className="absolute top-[200px] left-[28%] w-1 h-1 bg-accent/20 rounded-full" style={{ animation: 'pulse-glow 3.5s ease-in-out infinite 0.5s' }} />

        <div className="relative pt-14 pb-16 px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <img src={rivloLogo} alt="Rivlo" className="w-10 h-10 rounded-xl" crossOrigin="anonymous" />
            </div>

            {/* Season label with decorative lines */}
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/40" />
              <p className="text-[10px] uppercase tracking-[0.35em] text-primary font-semibold">Season 1 · Final Results</p>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/40" />
            </div>

            {/* Mountain silhouette icon */}
            <div className="flex items-center justify-center mb-4">
              <svg viewBox="0 0 64 28" fill="none" className="w-16 h-7 text-primary/25">
                <path d="M0 28L16 6L24 16L32 2L40 16L48 8L64 28H0Z" fill="currentColor" />
              </svg>
            </div>

            {/* THE WINTER — large, tight tracking */}
            <h1 className="text-6xl md:text-8xl font-black text-foreground leading-none mb-1" style={{ letterSpacing: '-0.04em' }}>
              THE WINTER
            </h1>

            {/* ARC — oversized with glow shadow layer */}
            <div className="relative inline-block">
              {/* Glow duplicate behind */}
              <span
                aria-hidden="true"
                className="absolute inset-0 text-7xl md:text-9xl font-black leading-none bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent blur-[6px] opacity-40"
                style={{ letterSpacing: '-0.04em' }}
              >
                ARC
              </span>
              <h1
                className="relative text-7xl md:text-9xl font-black leading-none bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                style={{ letterSpacing: '-0.04em' }}
              >
                ARC
              </h1>
            </div>

            {/* Frost line divider with glow */}
            <div className="mt-6 mx-auto w-32 relative">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-[4px]" />
            </div>
          </div>

          {/* Podium */}
          <div className="max-w-md mx-auto mb-14">
            <div className="flex items-end justify-center gap-2 sm:gap-4">
              {podiumOrder.map((player) => {
                const s = podiumStyles[player.rank];
                return (
                  <div key={player.rank} className="flex flex-col items-center flex-1 max-w-[140px]">
                    {player.rank === 1 && (
                      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 mb-1 text-yellow-400">
                        <path d="M2 18L4 8L8.5 12L12 4L15.5 12L20 8L22 18H2Z" fill="currentColor" opacity="0.9" />
                      </svg>
                    )}
                    <div className={`${s.avatarSize} rounded-full border-2 ${s.border} ${s.glow} bg-card flex items-center justify-center mb-2 relative`}>
                      <FlagBadge code={player.flag} />
                      <span className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full ${s.badgeBg} ${s.badgeText} text-xs font-black flex items-center justify-center ring-2 ring-background`}>
                        {player.rank}
                      </span>
                    </div>

                    <p className={`text-foreground font-bold ${s.nameSize} truncate max-w-full mt-1`}>{player.name}</p>
                    <p className="text-foreground/90 text-xs font-semibold tabular-nums">{player.steps.toLocaleString()}</p>
                    {player.club && (
                      <p className="text-primary/60 text-[10px] truncate max-w-full">{player.club}</p>
                    )}

                    <div className={`mt-3 w-full ${s.barH} rounded-t-xl border border-b-0 border-border/30 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-card/30 backdrop-blur-sm" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="h-px w-full bg-border/40" />
          </div>

          {/* Rest of players */}
          <div className="max-w-xl mx-auto space-y-2.5">
            {rest.map((player) => (
              <div
                key={player.rank}
                className="flex items-center gap-3.5 rounded-xl border border-border/30 bg-card/40 backdrop-blur-sm px-4 py-3.5 transition-all hover:bg-card/60"
              >
                <span className="w-8 h-8 rounded-lg bg-muted/60 flex items-center justify-center text-xs font-bold text-muted-foreground shrink-0">
                  {player.rank}
                </span>
                <FlagBadge code={player.flag} size="small" />
                <div className="flex-1 min-w-0">
                  <p className="text-foreground font-semibold text-sm truncate">{player.name}</p>
                  {player.club && <p className="text-xs text-primary/60 truncate">{player.club}</p>}
                </div>
                <div className="text-right shrink-0">
                  <p className="text-foreground font-black tabular-nums">{player.steps.toLocaleString()}</p>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-widest">steps</p>
                </div>
              </div>
            ))}
          </div>

          {/* Watermark */}
          <div className="mt-12 text-center">
            <p className="text-[10px] text-muted-foreground/40 tracking-wide">rivlo.app · Download on the App Store</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
