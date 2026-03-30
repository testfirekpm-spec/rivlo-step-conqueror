import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Rivlo</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
          <div className="mt-6 text-sm text-muted-foreground space-y-2">
            <p>Try one of these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/best-step-counter-app/" className="text-primary hover:underline font-medium">Best Step Counter App</Link>
              <Link to="/fitness-challenge-app/" className="text-primary hover:underline font-medium">Fitness Challenge App</Link>
              <Link to="/leaderboard/" className="text-primary hover:underline font-medium">Leaderboard</Link>
              <Link to="/blog/" className="text-primary hover:underline font-medium">Blog</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
