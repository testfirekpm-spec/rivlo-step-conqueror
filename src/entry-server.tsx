import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, HelmetServerState } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";

// Eagerly import all pages for SSR (no lazy loading needed at build time)
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Leaderboard from "./pages/Leaderboard";
import Milestones from "./pages/Milestones";
import BestStepCounterApp from "./pages/BestStepCounterApp";
import FitnessChallengeApp from "./pages/FitnessChallengeApp";
import RivloVsPacer from "./pages/RivloVsPacer";
import BlogIndex from "./pages/BlogIndex";
import BlogPost10kSteps from "./pages/blog/HowToWalk10000Steps";
import BlogPostWeightLoss from "./pages/blog/WalkingForWeightLoss";
import BlogPostGroupChallenges from "./pages/blog/BestWalkingChallenges";
import StepChallengeCity from "./pages/StepChallengeCity";
import AboutRivloAI from "./pages/AboutRivloAI";

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <TooltipProvider>
        <StaticRouter location={url}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about/" element={<About />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="/terms/" element={<Terms />} />
            <Route path="/privacy/" element={<Privacy />} />
            <Route path="/leaderboard/" element={<Leaderboard />} />
            <Route path="/milestones/" element={<Milestones />} />
            <Route path="/best-step-counter-app/" element={<BestStepCounterApp />} />
            <Route path="/fitness-challenge-app/" element={<FitnessChallengeApp />} />
            <Route path="/compare/rivlo-vs-pacer/" element={<RivloVsPacer />} />
            <Route path="/blog/" element={<BlogIndex />} />
            <Route path="/blog/how-to-walk-10000-steps-a-day/" element={<BlogPost10kSteps />} />
            <Route path="/blog/walking-for-weight-loss/" element={<BlogPostWeightLoss />} />
            <Route path="/blog/best-walking-challenges-for-groups/" element={<BlogPostGroupChallenges />} />
            <Route path="/step-challenge/:city/" element={<StepChallengeCity />} />
            <Route path="/about-rivlo-ai/" element={<AboutRivloAI />} />
          </Routes>
        </StaticRouter>
      </TooltipProvider>
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet;

  return { html, helmet };
}
