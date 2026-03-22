import { Link } from "react-router-dom";
import { ArrowLeft, Download, Palette } from "lucide-react";
import { useRef, useState, useCallback } from "react";
import { createRoot } from "react-dom/client";
import html2canvas from "html2canvas";
import { LeaderboardPoster, type LeaderboardTheme } from "@/components/leaderboard/LeaderboardPoster";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const STORY_W = 1080;
const STORY_H = 1920;
const DESIGN_W = 540;

const themeLabels: Record<LeaderboardTheme, string> = {
  esports: "Esports",
  minimal: "Minimal",
  aurora: "Aurora",
};

const waitForAssets = async (container: HTMLElement) => {
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  const images = Array.from(container.querySelectorAll("img"));
  await Promise.all(
    images.map(
      (image) =>
        new Promise<void>((resolve) => {
          if (image.complete) {
            resolve();
            return;
          }

          image.addEventListener("load", () => resolve(), { once: true });
          image.addEventListener("error", () => resolve(), { once: true });
        }),
    ),
  );

  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
};

const Leaderboard = () => {
  const posterRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);
  const [theme, setTheme] = useState<LeaderboardTheme>("esports");

  const handleDownload = useCallback(async () => {
    if (!posterRef.current || exporting) return;
    setExporting(true);

    let exportRoot: ReturnType<typeof createRoot> | null = null;
    let exportHost: HTMLDivElement | null = null;

    try {
      exportHost = document.createElement("div");
      exportHost.style.position = "fixed";
      exportHost.style.left = "-9999px";
      exportHost.style.top = "0";
      exportHost.style.width = `${DESIGN_W}px`;
      exportHost.style.height = `${STORY_H / (STORY_W / DESIGN_W)}px`;
      exportHost.style.pointerEvents = "none";
      document.body.appendChild(exportHost);

      exportRoot = createRoot(exportHost);
      exportRoot.render(<LeaderboardPoster animated={false} exportMode theme={theme} />);

      await waitForAssets(exportHost);

      const scale = STORY_W / DESIGN_W; // 2x

      const canvas = await html2canvas(exportHost, {
        width: DESIGN_W,
        height: Math.ceil(STORY_H / scale),
        scale,
        backgroundColor: null,
        useCORS: true,
        logging: false,
      });

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
      exportRoot?.unmount();
      exportHost?.remove();
      setExporting(false);
    }
  }, [exporting, theme]);

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-14 items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-lg border border-border/30 bg-card/50 p-0.5">
              <Palette className="ml-1.5 h-3.5 w-3.5 text-muted-foreground" />
              <ToggleGroup
                type="single"
                value={theme}
                onValueChange={(v) => v && setTheme(v as LeaderboardTheme)}
                size="sm"
              >
                {(Object.keys(themeLabels) as LeaderboardTheme[]).map((t) => (
                  <ToggleGroupItem
                    key={t}
                    value={t}
                    className="h-7 px-2.5 text-[11px] font-medium data-[state=on]:bg-primary/20 data-[state=on]:text-primary"
                  >
                    {themeLabels[t]}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>

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
        </div>
      </nav>

      <div ref={posterRef}>
        <LeaderboardPoster animated theme={theme} />
      </div>
    </div>
  );
};

export default Leaderboard;
