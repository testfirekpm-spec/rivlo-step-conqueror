import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { LeaderboardPoster } from "@/components/leaderboard/LeaderboardPoster";

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center px-6">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
        </div>
      </nav>

      <LeaderboardPoster animated />
    </div>
  );
};

export default Leaderboard;
