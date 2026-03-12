const FloatingLeaderboardCard = () => {
  return (
    <div
      className="glass rounded-2xl p-4 w-52"
      style={{ animation: "float 6s ease-in-out infinite" }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground">
          #3
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">Sarah K.</p>
          <p className="text-xs text-muted-foreground">12,847 steps</p>
        </div>
      </div>
      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          style={{ width: "78%" }}
        />
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[10px] text-muted-foreground">Daily Goal</span>
        <span className="text-[10px] font-semibold text-foreground">78%</span>
      </div>
    </div>
  );
};

export default FloatingLeaderboardCard;
