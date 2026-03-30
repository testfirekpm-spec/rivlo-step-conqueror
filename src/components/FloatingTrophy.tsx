import Trophy from "lucide-react/dist/esm/icons/trophy";

const FloatingTrophy = () => {
  return (
    <div
      className="glass rounded-xl p-3 flex items-center gap-2"
      style={{ animation: "float-slow 8s ease-in-out infinite" }}
    >
      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-yellow-500/20 to-amber-500/10 flex items-center justify-center">
        <Trophy className="w-5 h-5 text-yellow-400" style={{ filter: "drop-shadow(0 0 4px rgba(250, 204, 21, 0.5))" }} />
      </div>
      <div>
        <p className="text-xs font-bold text-foreground">Marathon</p>
        <p className="text-[10px] text-muted-foreground">Unlocked!</p>
      </div>
    </div>
  );
};

export default FloatingTrophy;
