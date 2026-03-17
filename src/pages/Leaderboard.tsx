import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Share2 } from "lucide-react";
import { toPng } from "html-to-image";
import { Button } from "@/components/ui/button";
import { LeaderboardPoster } from "@/components/leaderboard/LeaderboardPoster";

type ShareFormat = "story" | "square" | "post";

const formatConfig: Record<ShareFormat, { label: string; icon: string; width: number; height: number }> = {
  story: { label: "Story / Status", icon: "📱", width: 1080, height: 1920 },
  square: { label: "Square Post", icon: "🟦", width: 1080, height: 1080 },
  post: { label: "Landscape Post", icon: "🖼️", width: 1200, height: 675 },
};

const EXPORT_BACKGROUND = "hsl(230, 25%, 8%)";

const waitForImages = async (node: HTMLElement) => {
  const images = Array.from(node.querySelectorAll("img"));

  await Promise.all(
    images.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete && img.naturalWidth > 0) {
            img.decode?.().catch(() => undefined).finally(() => resolve());
            return;
          }

          img.onload = () => resolve();
          img.onerror = () => resolve();
        })
    )
  );
};

const Leaderboard = () => {
  const exportRef = useRef<HTMLDivElement>(null);
  const [sharing, setSharing] = useState(false);
  const [showFormats, setShowFormats] = useState(false);

  const generateImage = async (format: ShareFormat) => {
    if (!exportRef.current) return;

    setSharing(true);
    setShowFormats(false);

    const exportNode = exportRef.current;
    const { width: targetW, height: targetH } = formatConfig[format];

    // Render at a consistent width, auto height to capture all content
    const renderWidth = 540;
    exportNode.style.width = `${renderWidth}px`;
    exportNode.style.height = "auto";

    try {
      await document.fonts.ready;
      await waitForImages(exportNode);
      await new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r())));

      const renderHeight = exportNode.scrollHeight;

      // Capture the full-height poster at 2x
      const fullDataUrl = await toPng(exportNode, {
        quality: 1,
        pixelRatio: 2,
        width: renderWidth,
        height: renderHeight,
        backgroundColor: EXPORT_BACKGROUND,
        cacheBust: true,
      });

      // Draw the captured poster onto a canvas at the exact target dimensions
      const canvas = document.createElement("canvas");
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext("2d")!;

      // Fill background
      ctx.fillStyle = EXPORT_BACKGROUND;
      ctx.fillRect(0, 0, targetW, targetH);

      const img = new Image();
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Failed to load captured image"));
        img.src = fullDataUrl;
      });

      // Scale poster to fill width, align to top, crop overflow at bottom
      const scale = targetW / img.naturalWidth;
      const drawH = img.naturalHeight * scale;
      ctx.drawImage(img, 0, 0, targetW, Math.min(drawH, targetH));

      const blob = await new Promise<Blob>((resolve) =>
        canvas.toBlob((b) => resolve(b!), "image/png", 1)
      );
      const file = new File([blob], `rivlo-winter-arc-${format}.png`, { type: "image/png" });

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: "Rivlo – The Winter Arc",
          text: "Check out The Winter Arc final leaderboard on Rivlo! 🏔️❄️",
          files: [file],
        });
      } else {
        const link = document.createElement("a");
        link.download = file.name;
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
      }
    } catch (error) {
      if ((error as Error)?.name !== "AbortError") {
        console.error("Share failed:", error);
      }
    } finally {
      exportNode.style.width = "540px";
      exportNode.style.height = "auto";
      setSharing(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
          <div className="container mx-auto flex h-16 items-center justify-between px-6">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">Back</span>
            </Link>

            <div className="relative">
              <Button
                onClick={() => setShowFormats(!showFormats)}
                disabled={sharing}
                size="sm"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Share2 className="h-4 w-4" />
                {sharing ? "Generating…" : "Share"}
              </Button>

              {showFormats && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowFormats(false)} />
                  <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-xl border border-border bg-card shadow-xl">
                    <div className="border-b border-border px-3 py-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Choose format</p>
                    </div>
                    {(Object.keys(formatConfig) as ShareFormat[]).map((key) => {
                      const currentFormat = formatConfig[key];
                      return (
                        <button
                          key={key}
                          onClick={() => generateImage(key)}
                          className="flex w-full items-center gap-3 px-3 py-3 text-left transition-colors hover:bg-muted/50"
                        >
                          <span className="text-lg">{currentFormat.icon}</span>
                          <div>
                            <p className="text-sm font-medium text-foreground">{currentFormat.label}</p>
                            <p className="text-[10px] text-muted-foreground">
                              {currentFormat.width}×{currentFormat.height}px
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>

        <LeaderboardPoster animated />
      </div>

      <div className="pointer-events-none fixed -left-[9999px] top-0 -z-10" aria-hidden="true">
        <div ref={exportRef} style={{ width: "540px", background: EXPORT_BACKGROUND }}>
          <LeaderboardPoster animated={false} exportMode />
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
