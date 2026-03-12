import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const VideoShowcaseSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const hideTimerRef = useRef<number>();
  const { ref: sectionRef, isVisible } = useScrollReveal();

  // Autoplay on scroll into view, pause when out
  useEffect(() => {
    const container = videoContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
          setIsPlaying(true);
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Auto-hide controls after 2s when playing
  useEffect(() => {
    if (isPlaying) {
      setShowControls(true);
      hideTimerRef.current = window.setTimeout(() => setShowControls(false), 2000);
    } else {
      setShowControls(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    }
    return () => { if (hideTimerRef.current) clearTimeout(hideTimerRef.current); };
  }, [isPlaying]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMouseMove = () => {
    if (!isPlaying) return;
    setShowControls(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = window.setTimeout(() => setShowControls(false), 2000);
  };

  return (
    <section className="relative py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-6">
        <div
          ref={sectionRef}
          className="text-center max-w-3xl mx-auto mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground font-grotesk tracking-tight leading-[1.05]">
            Watch Rivlo
            <br />
            <span className="text-muted-foreground">in action</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            See how Rivlo turns your daily steps into an exciting competition with friends and walkers worldwide.
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          <div
            ref={videoContainerRef}
            className="relative rounded-3xl overflow-hidden border-2 border-border bg-card cursor-pointer"
            onClick={togglePlay}
            onMouseMove={handleMouseMove}
            style={{
              boxShadow:
                "0 0 80px hsl(var(--primary) / 0.1), 0 25px 60px rgba(0,0,0,0.4)",
            }}
          >
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              playsInline
              muted
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/videos/RIVLO_trailer_Beta1.mp4" type="video/mp4" />
            </video>

            {/* Play/Pause overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-background/30 transition-opacity duration-500"
              style={{ opacity: showControls ? 1 : 0, pointerEvents: showControls ? "auto" : "none" }}
            >
              <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-110">
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-primary-foreground" />
                ) : (
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;
