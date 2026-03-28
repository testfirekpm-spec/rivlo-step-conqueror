import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index.tsx";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const About = lazy(() => import("./pages/About.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Terms = lazy(() => import("./pages/Terms.tsx"));
const Privacy = lazy(() => import("./pages/Privacy.tsx"));
const Leaderboard = lazy(() => import("./pages/Leaderboard.tsx"));
const Milestones = lazy(() => import("./pages/Milestones.tsx"));
const BestStepCounterApp = lazy(() => import("./pages/BestStepCounterApp.tsx"));
const FitnessChallengeApp = lazy(() => import("./pages/FitnessChallengeApp.tsx"));
const RivloVsPacer = lazy(() => import("./pages/RivloVsPacer.tsx"));
const BlogIndex = lazy(() => import("./pages/BlogIndex.tsx"));
const BlogPost10kSteps = lazy(() => import("./pages/blog/HowToWalk10000Steps.tsx"));
const BlogPostWeightLoss = lazy(() => import("./pages/blog/WalkingForWeightLoss.tsx"));
const BlogPostGroupChallenges = lazy(() => import("./pages/blog/BestWalkingChallenges.tsx"));
const StepChallengeCity = lazy(() => import("./pages/StepChallengeCity.tsx"));
const AboutRivloAI = lazy(() => import("./pages/AboutRivloAI.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/best-step-counter-app" element={<BestStepCounterApp />} />
            <Route path="/fitness-challenge-app" element={<FitnessChallengeApp />} />
            <Route path="/compare/rivlo-vs-pacer" element={<RivloVsPacer />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/how-to-walk-10000-steps-a-day" element={<BlogPost10kSteps />} />
            <Route path="/blog/walking-for-weight-loss" element={<BlogPostWeightLoss />} />
            <Route path="/blog/best-walking-challenges-for-groups" element={<BlogPostGroupChallenges />} />
            <Route path="/step-challenge/:city" element={<StepChallengeCity />} />
            <Route path="/about-rivlo-ai" element={<AboutRivloAI />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
