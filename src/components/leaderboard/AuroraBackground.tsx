/** Northern lights / aurora background with animated flowing color bands */

const AuroraBackground = ({ exportMode = false }: { exportMode?: boolean }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Deep dark base */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 100%, hsl(230 40% 8%) 0%, hsl(230 25% 4%) 60%, hsl(230 30% 3%) 100%)",
      }}
    />

    {/* Aurora band 1 — green/cyan */}
    <div
      className="absolute top-[5%] left-[-20%] right-[-20%] h-[200px] blur-[80px] opacity-[0.15]"
      style={{
        background:
          "linear-gradient(110deg, transparent 10%, hsl(160 70% 45%) 30%, hsl(196 80% 55%) 50%, hsl(180 60% 40%) 70%, transparent 90%)",
        animation: exportMode ? "none" : "aurora-drift 12s ease-in-out infinite alternate",
      }}
    />

    {/* Aurora band 2 — purple/magenta */}
    <div
      className="absolute top-[10%] left-[-15%] right-[-15%] h-[180px] blur-[100px] opacity-[0.1]"
      style={{
        background:
          "linear-gradient(100deg, transparent 15%, hsl(270 60% 50%) 35%, hsl(300 50% 45%) 55%, hsl(260 55% 45%) 75%, transparent 95%)",
        animation: exportMode ? "none" : "aurora-drift 15s ease-in-out infinite alternate-reverse",
      }}
    />

    {/* Aurora band 3 — subtle gold highlights */}
    <div
      className="absolute top-[2%] left-[-10%] right-[-10%] h-[120px] blur-[60px] opacity-[0.06]"
      style={{
        background:
          "linear-gradient(105deg, transparent 20%, hsl(43 96% 56%) 45%, hsl(50 90% 50%) 55%, transparent 80%)",
        animation: exportMode ? "none" : "aurora-drift 18s ease-in-out infinite alternate",
      }}
    />

    {/* Star dots */}
    {!exportMode && (
      <>
        <div className="absolute top-[8%] left-[20%] w-1 h-1 rounded-full bg-foreground/10" />
        <div className="absolute top-[5%] left-[55%] w-0.5 h-0.5 rounded-full bg-foreground/15" />
        <div className="absolute top-[12%] right-[25%] w-1 h-1 rounded-full bg-foreground/8" />
        <div className="absolute top-[3%] right-[40%] w-0.5 h-0.5 rounded-full bg-foreground/10" />
        <div className="absolute top-[15%] left-[35%] w-0.5 h-0.5 rounded-full bg-foreground/12" />
        <div className="absolute top-[18%] right-[15%] w-1 h-1 rounded-full bg-foreground/6" />
      </>
    )}

    {/* Noise texture overlay */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  </div>
);

export default AuroraBackground;
