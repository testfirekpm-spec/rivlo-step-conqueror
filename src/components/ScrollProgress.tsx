import { useEffect, useState } from "react";
import ArrowUp from "lucide-react/dist/esm/icons/arrow-up";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setShowTop(scrollTop > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-primary transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300"
        style={{
          opacity: showTop ? 1 : 0,
          transform: showTop ? "scale(1)" : "scale(0.8)",
          pointerEvents: showTop ? "auto" : "none",
        }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};

export default ScrollProgress;
