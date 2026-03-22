import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { useRef, useState, useCallback } from "react";
import html2canvas from "html2canvas";
import { LeaderboardPoster } from "@/components/leaderboard/LeaderboardPoster";
import { Button } from "@/components/ui/button";

const STORY_W = 1080;
const STORY_H = 1920;
const DESIGN_W = 540;

const Leaderboard = () => {
  const posterRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);

  const handleDownload = useCallback(async () => {
    if (!posterRef.current || exporting) return;
    setExporting(true);

    try {
      // Create an offscreen container at the design width
      const clone = posterRef.current.cloneNode(true) as HTMLElement;
      clone.style.width = `${DESIGN_W}px`;
      clone.style.height = "auto";
      clone.style.position = "fixed";
      clone.style.left = "-9999px";
      clone.style.top = "0";
      document.body.appendChild(clone);

      // Wait for layout + images
      await new Promise((r) => setTimeout(r, 300));

      const scale = STORY_W / DESIGN_W; // 2x

      const canvas = await html2canvas(clone, {
        width: DESIGN_W,
        height: Math.ceil(STORY_H / scale),
        scale,
        backgroundColor: null,
        useCORS: true,
        logging: false,
      });

      document.body.removeChild(clone);

      // Compose onto exact 1080x1920 canvas
      const out = document.createElement("canvas");
      out.width = STORY_W;
      out.height = STORY_H;
      const ctx = out.getContext("2d")!;
      // Fill with background color
      ctx.fillStyle = "#0d0f17";
      ctx.fillRect(0, 0, STORY_W, STORY_H);
      // Draw captured content
      ctx.drawImage(canvas, 0, 0, STORY_W, Math.min(canvas.height, STORY_H));

      out.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "rivlo-winter-arc-story.png";
        a.click();
        URL.revokeObjectURL(url);
      }, "image/png");
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setExporting(false);
    }
  }, [exporting]);

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-14 items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            disabled={exporting}
            className="gap-2 border-primary/30 text-primary hover:bg-primary/10"
          >
            <Download className="h-4 w-4" />
            {exporting ? "Exporting…" : "Story"}
          </Button>
        </div>
      </nav>

      <div ref={posterRef}>
        <LeaderboardPoster animated />
      </div>
    </div>
  );
};

export default Leaderboard;
