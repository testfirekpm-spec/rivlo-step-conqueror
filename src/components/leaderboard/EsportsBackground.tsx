/** Layered gaming/esports background with neon grids, energy streaks, and atmosphere */

const EsportsBackground = ({ exportMode = false }: { exportMode?: boolean }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Deep dark base gradient */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 20%, hsl(230 40% 12%) 0%, hsl(230 25% 6%) 60%, hsl(230 30% 4%) 100%)",
      }}
    />

    {/* Neon accent glow — top */}
    <div
      className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[400px] rounded-full blur-[160px]"
      style={{ background: "radial-gradient(circle, hsl(270 60% 50% / 0.18) 0%, transparent 70%)" }}
    />

    {/* Cyan glow — mid-left */}
    <div
      className="absolute left-0 top-[30%] w-[500px] h-[500px] rounded-full blur-[140px]"
      style={{ background: "radial-gradient(circle, hsl(196 80% 55% / 0.1) 0%, transparent 70%)" }}
    />

    {/* Gold glow — mid-right */}
    <div
      className="absolute right-0 top-[20%] w-[400px] h-[400px] rounded-full blur-[120px]"
      style={{ background: "radial-gradient(circle, hsl(43 96% 56% / 0.08) 0%, transparent 70%)" }}
    />

    {/* Perspective grid lines */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 540 960" preserveAspectRatio="none">
      {/* Horizontal grid */}
      {Array.from({ length: 20 }, (_, i) => (
        <line key={`h-${i}`} x1="0" y1={i * 50} x2="540" y2={i * 50} stroke="hsl(230 75% 65%)" strokeWidth="0.5" />
      ))}
      {/* Vertical grid */}
      {Array.from({ length: 12 }, (_, i) => (
        <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="960" stroke="hsl(230 75% 65%)" strokeWidth="0.5" />
      ))}
    </svg>

    {/* Diagonal energy streaks */}
    <div
      className="absolute top-[8%] left-[5%] w-[200px] h-[1px] rotate-[25deg] opacity-20"
      style={{ background: "linear-gradient(90deg, transparent, hsl(196 80% 55%), transparent)" }}
    />
    <div
      className="absolute top-[15%] right-[8%] w-[150px] h-[1px] -rotate-[30deg] opacity-15"
      style={{ background: "linear-gradient(90deg, transparent, hsl(270 60% 55%), transparent)" }}
    />
    <div
      className="absolute top-[45%] left-[3%] w-[120px] h-[1px] rotate-[15deg] opacity-10"
      style={{ background: "linear-gradient(90deg, transparent, hsl(43 96% 56%), transparent)" }}
    />
    <div
      className="absolute bottom-[25%] right-[5%] w-[180px] h-[1px] -rotate-[20deg] opacity-15"
      style={{ background: "linear-gradient(90deg, transparent, hsl(196 80% 55%), transparent)" }}
    />

    {/* Corner accent brackets */}
    <svg className="absolute top-6 left-6 w-8 h-8 text-primary/20" viewBox="0 0 32 32" fill="none">
      <path d="M0 12V0H12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
    <svg className="absolute top-6 right-6 w-8 h-8 text-primary/20" viewBox="0 0 32 32" fill="none">
      <path d="M32 12V0H20" stroke="currentColor" strokeWidth="1.5" />
    </svg>
    <svg className="absolute bottom-6 left-6 w-8 h-8 text-primary/20" viewBox="0 0 32 32" fill="none">
      <path d="M0 20V32H12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
    <svg className="absolute bottom-6 right-6 w-8 h-8 text-primary/20" viewBox="0 0 32 32" fill="none">
      <path d="M32 20V32H20" stroke="currentColor" strokeWidth="1.5" />
    </svg>

    {/* Floating neon dots */}
    <div
      className="absolute left-[15%] top-[12%] h-2 w-2 rounded-full"
      style={{
        background: "hsl(196 80% 55%)",
        boxShadow: "0 0 8px hsl(196 80% 55% / 0.6)",
        animation: exportMode ? "none" : "pulse-glow 3s ease-in-out infinite",
      }}
    />
    <div
      className="absolute right-[18%] top-[25%] h-1.5 w-1.5 rounded-full"
      style={{
        background: "hsl(270 60% 55%)",
        boxShadow: "0 0 6px hsl(270 60% 55% / 0.5)",
        animation: exportMode ? "none" : "pulse-glow 4s ease-in-out infinite 1s",
      }}
    />
    <div
      className="absolute left-[25%] top-[55%] h-1 w-1 rounded-full"
      style={{
        background: "hsl(43 96% 56%)",
        boxShadow: "0 0 6px hsl(43 96% 56% / 0.4)",
        animation: exportMode ? "none" : "pulse-glow 3.5s ease-in-out infinite 0.5s",
      }}
    />

    {/* Noise texture overlay */}
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  </div>
);

export default EsportsBackground;
