/** Clean minimal dark background — subtle gradients only, no grids or streaks */

const MinimalDarkBackground = ({ exportMode = false }: { exportMode?: boolean }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Deep base */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 30%, hsl(230 30% 10%) 0%, hsl(230 25% 5%) 70%, hsl(230 30% 3%) 100%)",
      }}
    />

    {/* Soft primary glow — center top */}
    <div
      className="absolute left-1/2 -translate-x-1/2 top-[5%] w-[600px] h-[400px] rounded-full blur-[180px]"
      style={{ background: "radial-gradient(circle, hsl(230 75% 52% / 0.08) 0%, transparent 70%)" }}
    />

    {/* Warm accent — bottom right */}
    <div
      className="absolute right-[-10%] bottom-[10%] w-[500px] h-[500px] rounded-full blur-[160px]"
      style={{ background: "radial-gradient(circle, hsl(43 96% 56% / 0.04) 0%, transparent 70%)" }}
    />

    {/* Cool accent — bottom left */}
    <div
      className="absolute left-[-10%] bottom-[20%] w-[400px] h-[400px] rounded-full blur-[140px]"
      style={{ background: "radial-gradient(circle, hsl(270 60% 50% / 0.04) 0%, transparent 70%)" }}
    />

    {/* Noise texture overlay */}
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  </div>
);

export default MinimalDarkBackground;
