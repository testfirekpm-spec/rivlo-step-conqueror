import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreButtons from "@/components/StoreButtons";
import rivloLogo from "@/assets/logo-rivlo.webp";

const Clubs = () => {
  useEffect(() => {
    // Universal Links: iOS will intercept this navigation before the page loads
    // if the app is installed. This page acts as a graceful fallback.
  }, []);

  return (
    <>
      <Helmet>
        <title>Rivlo Clubs — Join Fitness Communities | Rivlo</title>
        <meta
          name="description"
          content="Open Rivlo Clubs to join fitness communities, compete in step challenges, and climb the leaderboard with friends. Download the app to get started."
        />
        <link rel="canonical" href="https://rivlo.3bytes.org/clubs" />
      </Helmet>
      <Navbar />
      <main className="bg-background min-h-screen flex flex-col">
        <section className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="max-w-xl w-full text-center">
            <img
              src={rivloLogo}
              alt="Rivlo"
              className="w-20 h-20 rounded-2xl mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-5xl font-bold font-grotesk text-foreground mb-4 tracking-tight">
              Open Rivlo Clubs
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              If you have the Rivlo app installed, it should open automatically.
              Otherwise, download it below to join clubs, compete in challenges,
              and climb the leaderboard with friends.
            </p>
            <div className="flex justify-center mb-8">
              <StoreButtons />
            </div>
            <p className="text-sm text-muted-foreground">
              Already have the app? Make sure you're signed in, then tap the
              link again from your iPhone.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Clubs;
