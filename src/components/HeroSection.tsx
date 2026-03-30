import { useEffect, useRef, lazy, Suspense } from "react";
const HomeScreenImg = "/Home.webp";
import { redirectToStore } from "@/lib/store-redirect";
import StoreButtons from "@/components/StoreButtons";

const ParticleBackground = lazy(() => import("./ParticleBackground"));
const FloatingLeaderboardCard = lazy(() => import("./FloatingLeaderboardCard"));
const StepCounterRing = lazy(() => import("./StepCounterRing"));
const FloatingTrophy = lazy(() => import("./FloatingTrophy"));

// Lazy-load icons to keep them out of the main bundle
const Trophy = lazy(() => import("lucide-react").then(m => ({ default: m.Trophy })));
const ChevronRight = lazy(() => import("lucide-react").then(m => ({ default: m.ChevronRight })));

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const scrollY = window.scrollY;
        const maxScroll = 240;
        const clamped = Math.min(scrollY, maxScroll);
        const isWideDesktop = window.innerWidth >= 1280;

        if (phoneRef.current) {
          phoneRef.current.style.transform = isWideDesktop
            ? `translateY(${clamped * 0.05}px)`
            : "translateY(0px)";
          phoneRef.current.style.opacity = "1";
        }

        if (cardsRef.current) {
          cardsRef.current.style.transform = isWideDesktop
            ? `translateY(${clamped * 0.07}px)`
            : "translateY(0px)";
          cardsRef.current.style.opacity = "1";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-background"
    >
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full py-20 lg:py-0">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h1
              className="font-grotesk font-bold tracking-tight text-foreground leading-[0.95]"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
            >
              {["Turn", "Every", "Step", "Into"].map((word, i) => (
                <span key={word} className="inline-block overflow-hidden mr-[0.25em]">
                  <span
                    className="inline-block"
                    style={{
                      animation: `fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s backwards`,
                    }}
                  >
                    {word}
                  </span>
                </span>
              ))}
              <br />
              <span className="inline-block overflow-hidden">
                <span
                  className="inline-block text-primary relative"
                  style={{
                    animation: "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards",
                  }}
                >
                  Competition
                  <span
                    className="absolute -bottom-1 left-0 h-[3px] bg-primary rounded-full w-full"
                    style={{
                      animation: "underline-grow 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.9s backwards",
                    }}
                  />
                </span>
              </span>
            </h1>

            <p
              className="text-muted-foreground text-lg leading-relaxed max-w-[45ch]"
              style={{
                animation: "fade-in-up 0.8s ease-out 0.15s backwards",
              }}
            >
              Rivlo is a gamified step counter where walking becomes a global
              challenge. Compete with friends, climb leaderboards, track hikes
              and runs, and unlock achievements.
            </p>

            <p
              className="text-sm text-muted-foreground"
              style={{
                animation: "fade-in-up 0.8s ease-out 0.2s backwards",
              }}
            >
              Available on iOS & Android — free to download
            </p>

            <div
              className="flex flex-col gap-4 mt-2"
              style={{
                animation: "fade-in-up 0.8s ease-out 0.3s backwards",
              }}
            >
              <StoreButtons />
              <button
                onClick={() => document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-foreground font-semibold text-sm transition-all duration-300 hover:bg-white/5 hover:border-white/25 hover:scale-105 w-fit"
              >
                See How It Works
                <Suspense fallback={<span className="w-4 h-4" />}>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Suspense>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center lg:justify-center xl:justify-end lg:pr-10 xl:pr-4 overflow-visible">
            <div
              ref={phoneRef}
              className="relative"
              style={{
                perspective: "1200px",
                animation: "fade-in-up 1s ease-out 0.2s backwards",
              }}
            >
              <div
                className="relative w-[260px] h-[520px] xl:w-[280px] xl:h-[560px] rounded-[3rem] border-2 border-white/10 bg-gradient-to-b from-card to-background overflow-hidden shadow-2xl"
                style={{
                  boxShadow: "0 0 80px rgba(79, 106, 255, 0.15), 0 25px 60px rgba(0,0,0,0.5)",
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-background rounded-b-2xl z-10" />
                <img
                  src={HomeScreenImg}
                  alt="Rivlo app home screen"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  width={448}
                  height={974}
                  fetchPriority="high"
                />
              </div>

              <Suspense fallback={null}>
                <div ref={cardsRef} className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-4 -left-36 lg:-left-44 xl:-left-52">
                    <FloatingLeaderboardCard />
                  </div>
                  <div className="absolute -bottom-2 right-0 lg:right-2 xl:-right-8">
                    <StepCounterRing />
                  </div>
                  <div className="absolute top-20 right-1 lg:right-2 xl:-right-6">
                    <FloatingTrophy />
                  </div>
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
