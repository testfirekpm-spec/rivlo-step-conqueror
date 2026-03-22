/**
 * Export-only leaderboard poster optimized for html2canvas rendering.
 * No Framer Motion, no backdrop-blur, no transforms on micro-elements.
 * Uses inline styles and CSS grid for pixel-perfect export at 1080×1920.
 */
import rivloLogo from "@/assets/logo-rivlo.png";

const leaderboardData = [
  { rank: 1, name: "walking", club: "DailyWalkers", flag: "RO", steps: 11426 },
  { rank: 2, name: "luffy", club: "Top pickers", flag: "CA", steps: 10622 },
  { rank: 3, name: "saumya", club: "DailyWalkers", flag: "IN", steps: 10324 },
  { rank: 4, name: "paceby harsh", club: "DailyWalkers", flag: "IN", steps: 10317 },
  { rank: 5, name: "top", club: "Top club", flag: "US", steps: 10278 },
];

const top3 = leaderboardData.slice(0, 3);
const rest = leaderboardData.slice(3);
const podiumOrder = [top3[1], top3[0], top3[2]]; // 2nd, 1st, 3rd

const COLORS = {
  1: { badge: "#eab308", badgeText: "#422006", glow: "rgba(234,179,8,0.35)", bar: "rgba(234,179,8,0.25)" },
  2: { badge: "#94a3b8", badgeText: "#0f172a", glow: "rgba(148,163,184,0.2)", bar: "rgba(148,163,184,0.15)" },
  3: { badge: "#b45309", badgeText: "#fffbeb", glow: "rgba(217,119,6,0.2)", bar: "rgba(217,119,6,0.15)" },
} as const;

const BAR_HEIGHTS = { 1: 160, 2: 112, 3: 96 } as const;
const AVATAR_SIZES = { 1: 64, 2: 48, 3: 48 } as const;

export const LeaderboardPosterExport = () => {
  return (
    <div
      style={{
        width: 540,
        height: 960,
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(ellipse 80% 50% at 50% 20%, hsl(230 40% 12%) 0%, hsl(230 25% 6%) 60%, hsl(230 30% 4%) 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#f1f5f9",
      }}
    >
      {/* Simplified glow overlays — no blur, just radial gradients */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", left: "50%", top: 0, width: 600, height: 300,
          marginLeft: -300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", left: 0, top: "30%", width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
        }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%", padding: "48px 24px 40px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
            <img src={rivloLogo} alt="Rivlo" crossOrigin="anonymous" loading="eager"
              style={{ width: 32, height: 32, borderRadius: 8 }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 10 }}>
            <div style={{ width: 32, height: 1, background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.5))" }} />
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase" as const, color: "hsl(196 80% 55%)" }}>
              Season 1 · Final Results
            </span>
            <div style={{ width: 32, height: 1, background: "linear-gradient(90deg, rgba(6,182,212,0.5), transparent)" }} />
          </div>
          <h1 style={{
            fontSize: 40, fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.04em", margin: 0,
            textShadow: "0 0 40px rgba(99,102,241,0.3)",
          }}>
            THE WINTER ARC
          </h1>
          {/* Neon underline */}
          <div style={{ width: 80, height: 2, margin: "14px auto 0", background: "linear-gradient(90deg, transparent, hsl(196 80% 55%), hsl(270 60% 55%), transparent)" }} />
        </div>

        {/* Podium */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 10, marginBottom: 32 }}>
          {podiumOrder.map((player) => {
            const c = COLORS[player.rank as 1 | 2 | 3];
            const barH = BAR_HEIGHTS[player.rank as 1 | 2 | 3];
            const avatarSize = AVATAR_SIZES[player.rank as 1 | 2 | 3];

            return (
              <div key={player.rank} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "1 1 0", maxWidth: 130 }}>
                {/* Crown for #1 */}
                {player.rank === 1 && (
                  <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20, marginBottom: 2, color: "#facc15", filter: "drop-shadow(0 0 6px rgba(234,179,8,0.6))" }}>
                    <path d="M2 18L4 8L8.5 12L12 4L15.5 12L20 8L22 18H2Z" fill="currentColor" />
                  </svg>
                )}

                {/* Avatar circle with flag + rank badge */}
                <div style={{ position: "relative", marginBottom: 6 }}>
                  <div style={{
                    width: avatarSize, height: avatarSize, borderRadius: "50%",
                    border: `2px solid ${c.badge}40`,
                    boxShadow: `0 0 20px ${c.glow}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "hsl(230 25% 12%)",
                  }}>
                    <img
                      src={`https://flagcdn.com/w80/${player.flag.toLowerCase()}.png`}
                      alt={player.flag} crossOrigin="anonymous" loading="eager"
                      style={{ width: 24, height: 16, borderRadius: 2, objectFit: "cover" }}
                    />
                  </div>
                  {/* Rank badge — no transform, positioned with margin */}
                  <div style={{
                    width: 22, height: 22, borderRadius: "50%",
                    background: c.badge, color: c.badgeText,
                    fontSize: 11, fontWeight: 900, lineHeight: "22px", textAlign: "center" as const,
                    position: "absolute", bottom: -6, left: "50%", marginLeft: -11,
                    border: "2px solid hsl(230 25% 8%)",
                  }}>
                    {player.rank}
                  </div>
                </div>

                {/* Name */}
                <p style={{ fontSize: player.rank === 1 ? 14 : 12, fontWeight: 700, margin: "2px 0 0", textAlign: "center" as const, lineHeight: 1.2 }}>
                  {player.name}
                </p>
                {/* Steps */}
                <p style={{ fontSize: 11, fontWeight: 600, margin: "1px 0 0", fontVariantNumeric: "tabular-nums" }}>
                  {player.steps.toLocaleString()}
                </p>
                {/* Club */}
                {player.club && (
                  <p style={{ fontSize: 9, margin: "1px 0 0", color: "rgba(6,182,212,0.4)", textAlign: "center" as const }}>
                    {player.club}
                  </p>
                )}

                {/* Podium bar */}
                <div style={{
                  width: "100%", height: barH, marginTop: 8,
                  borderRadius: "8px 8px 0 0",
                  border: `1px solid ${c.badge}20`, borderBottom: "none",
                  background: `linear-gradient(to top, ${c.bar}, transparent 70%)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: "rgba(241,245,249,0.04)" }}>{player.rank}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stage floor line */}
        <div style={{ height: 2, marginBottom: 28, background: "linear-gradient(90deg, transparent 5%, rgba(6,182,212,0.4) 25%, rgba(99,102,241,0.6) 50%, rgba(139,92,246,0.4) 75%, transparent 95%)" }} />

        {/* Rows 4-5 — CSS grid for reliable alignment */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {rest.map((player) => (
            <div
              key={player.rank}
              style={{
                display: "grid",
                gridTemplateColumns: "32px 24px 1fr auto",
                alignItems: "center",
                gap: 12,
                padding: "14px 16px",
                borderRadius: 8,
                border: "1px solid rgba(148,163,184,0.1)",
                background: "rgba(30,41,59,0.3)",
              }}
            >
              {/* Rank */}
              <div style={{
                width: 28, height: 28, borderRadius: 6,
                background: "rgba(148,163,184,0.1)", color: "rgba(148,163,184,0.7)",
                fontSize: 11, fontWeight: 700, lineHeight: "28px", textAlign: "center" as const,
              }}>
                {player.rank}
              </div>
              {/* Flag */}
              <img
                src={`https://flagcdn.com/w80/${player.flag.toLowerCase()}.png`}
                alt={player.flag} crossOrigin="anonymous" loading="eager"
                style={{ width: 20, height: 14, borderRadius: 2, objectFit: "cover" }}
              />
              {/* Name + club */}
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.2, margin: 0 }}>{player.name}</p>
                {player.club && <p style={{ fontSize: 10, margin: "1px 0 0", color: "rgba(6,182,212,0.4)" }}>{player.club}</p>}
              </div>
              {/* Steps */}
              <div style={{ textAlign: "right" as const }}>
                <p style={{ fontSize: 14, fontWeight: 900, margin: 0, fontVariantNumeric: "tabular-nums" }}>{player.steps.toLocaleString()}</p>
                <p style={{ fontSize: 8, margin: "1px 0 0", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "rgba(148,163,184,0.5)" }}>steps</p>
              </div>
            </div>
          ))}
        </div>

        {/* Spacer + Footer */}
        <div style={{ flex: 1 }} />
        <p style={{ textAlign: "center" as const, fontSize: 9, letterSpacing: "0.05em", color: "rgba(148,163,184,0.25)", marginTop: 24 }}>
          rivlo.app · Download on the App Store
        </p>
      </div>
    </div>
  );
};
