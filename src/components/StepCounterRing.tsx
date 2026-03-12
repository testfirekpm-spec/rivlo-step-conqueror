const StepCounterRing = () => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = 0.72;
  const offset = circumference * (1 - progress);

  return (
    <div
      className="glass rounded-2xl p-4 flex flex-col items-center gap-2"
      style={{ animation: "float-delayed 7s ease-in-out infinite" }}
    >
      <div className="relative w-24 h-24">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="6"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ filter: "drop-shadow(0 0 6px rgba(21, 8, 217, 0.6))" }}
          />
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(243, 89%, 44%)" />
              <stop offset="100%" stopColor="hsl(270, 60%, 50%)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-black text-foreground leading-none">7.2k</span>
          <span className="text-[9px] text-muted-foreground">steps</span>
        </div>
      </div>
    </div>
  );
};

export default StepCounterRing;
