import { useRef, useState, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { Link } from "react-router-dom";
import { ArrowLeft, Share2 } from "lucide-react";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";
import { LeaderboardPoster } from "@/components/leaderboard/LeaderboardPoster";

type ShareFormat = "story" | "square" | "post";

const formatConfig: Record<ShareFormat, { label: string; icon: string; width: number; height: number }> = {
  story: { label: "Story / Status", icon: "📱", width: 1080, height: 1920 },
  square: { label: "Square Post", icon: "🟦", width: 1080, height: 1080 },
  post: { label: "Landscape Post", icon: "🖼️", width: 1200, height: 675 },
};

const BG_COLOR = "#121425";

const Leaderboard = () => {
  const [sharing, setSharing] = useState(false);
  const [showFormats, setShowFormats] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const generateImage = useCallback(async (format: ShareFormat) => {
    setSharing(true);
    setShowFormats(false);

    const { width: targetW, height: targetH } = formatConfig[format];

    // We render the poster at a fixed "design" width, then CSS-scale it to
    // fill the target canvas exactly. This avoids stretching — the layout
    // is always the same, just zoomed.
    const DESIGN_W = 540; // px — the width the poster is designed for

    // Create an off-screen container
    const wrapper = document.createElement("div");
    wrapper.style.cssText = `
      position: fixed; left: -9999px; top: 0; z-index: -1;
      width: ${DESIGN_W}px;
      background: ${BG_COLOR};
      overflow: hidden;
    `;
    document.body.appendChild(wrapper);

    // Mount a React tree with the static poster
    const root = createRoot(wrapper);
    root.render(<LeaderboardPoster animated={false} exportMode />);

    // Wait for React render + images
    await new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r())));
    await document.fonts.ready;

    const images = Array.from(wrapper.querySelectorAll("img"));
    await Promise.all(
      images.map(
        (img) =>
          new Promise<void>((resolve) => {
            if (img.complete && img.naturalWidth > 0) return resolve();
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
      )
    );

    // Let layout settle
    await new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r())));

    try {
      const contentH = wrapper.scrollHeight;

      // Calculate scale so poster fills the target width
      const scale = targetW / DESIGN_W;
      const scaledContentH = contentH * scale;

      // Create the final canvas at exact target dimensions
      const canvas = document.createElement("canvas");
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext("2d")!;

      // Fill background
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, targetW, targetH);

      // Capture the poster at 1x (we'll scale via drawImage)
      const posterCanvas = await html2canvas(wrapper, {
        width: DESIGN_W,
        height: contentH,
        backgroundColor: BG_COLOR,
        scale: 2, // 2x for sharpness
        useCORS: true,
        allowTaint: true,
        logging: false,
      });

      // Draw the captured poster scaled to fill width, vertically centered
      // if content is shorter than target, or top-aligned if taller
      const drawH = Math.min(scaledContentH, targetH);
      const sourceH = drawH / scale;
      const yOffset = scaledContentH < targetH ? Math.round((targetH - scaledContentH) / 2) : 0;

      ctx.drawImage(
        posterCanvas,
        0, 0, DESIGN_W * 2, sourceH * 2, // source (at 2x)
        0, yOffset, targetW, drawH        // destination
      );

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
      root.unmount();
      document.body.removeChild(wrapper);
      setSharing(false);
    }
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
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
                    const f = formatConfig[key];
                    return (
                      <button
                        key={key}
                        onClick={() => generateImage(key)}
                        className="flex w-full items-center gap-3 px-3 py-3 text-left transition-colors hover:bg-muted/50"
                      >
                        <span className="text-lg">{f.icon}</span>
                        <div>
                          <p className="text-sm font-medium text-foreground">{f.label}</p>
                          <p className="text-[10px] text-muted-foreground">{f.width}×{f.height}px</p>
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
  );
};

export default Leaderboard;
