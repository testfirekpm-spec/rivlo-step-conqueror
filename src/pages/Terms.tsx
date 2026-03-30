import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const Terms = () => {
  return (
    <main className="bg-background min-h-screen">
      <Helmet>
        <title>Terms of Service — Rivlo Step Counter App</title>
        <meta name="description" content="Read Rivlo's terms of service. Understand the rules and guidelines for using the Rivlo step counter and fitness app." />
        <link rel="canonical" href="https://rivlo.3bytes.org/terms/" />
        <meta property="og:title" content="Terms of Service — Rivlo" />
        <meta property="og:url" content="https://rivlo.3bytes.org/terms/" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Navbar />

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Legal
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-grotesk tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: March 13, 2026
          </p>

          <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed text-[15px]">
            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using the Rivlo mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the App. Rivlo is operated by 3Bytes ("we", "us", "our").
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">2. Eligibility</h2>
              <p>
                You must be at least 13 years of age to use Rivlo. If you are under 18, you represent that your parent or legal guardian has reviewed and agreed to these Terms on your behalf.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">3. Account &amp; Security</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. We are not liable for any loss arising from unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">4. User Conduct</h2>
              <p>
                You agree not to: (a) use the App for any unlawful purpose; (b) attempt to manipulate leaderboards, rankings, or step data through fraudulent means; (c) harass, abuse, or harm other users; (d) reverse-engineer, decompile, or disassemble any part of the App.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">5. Subscriptions &amp; In-App Purchases</h2>
              <p>
                Rivlo offers optional Pro subscriptions and in-app purchases. Payment is processed through Apple's App Store. Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current billing period. Refunds are subject to Apple's refund policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">6. Intellectual Property</h2>
              <p>
                All content, trademarks, logos, and software within the App are owned by 3Bytes or its licensors. You may not reproduce, distribute, or create derivative works without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">7. Disclaimer of Warranties</h2>
              <p>
                The App is provided "as is" and "as available" without warranties of any kind, express or implied. We do not guarantee uninterrupted or error-free operation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">8. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, 3Bytes shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">9. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the United States. Any disputes shall be resolved in the courts of the State of Delaware.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">10. Contact</h2>
              <p>
                If you have questions about these Terms, contact us at{" "}
                <a href="mailto:dev@3bytes.org" className="text-primary hover:underline">
                  dev@3bytes.org
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">Related Pages</h2>
              <ul className="space-y-2">
                <li><Link to="/privacy/" className="text-primary hover:underline font-medium">Privacy Policy</Link> — How we protect your data.</li>
                <li><Link to="/best-step-counter-app/" className="text-primary hover:underline font-medium">Best step counter app</Link> — See why Rivlo is the top-rated pedometer.</li>
                <li><Link to="/fitness-challenge-app/" className="text-primary hover:underline font-medium">Fitness challenge app</Link> — Explore Rivlo's competitive features.</li>
                <li><Link to="/leaderboard/" className="text-primary hover:underline font-medium">Walking competition app</Link> — Compete on global leaderboards.</li>
                <li><Link to="/blog/" className="text-primary hover:underline font-medium">Rivlo Blog</Link> — Walking tips and challenge guides.</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Terms;
