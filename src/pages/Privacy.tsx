import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Legal
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-grotesk tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: March 13, 2026
          </p>

          <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed text-[15px]">
            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">1. Information We Collect</h2>
              <p>
                We collect information you provide directly (e.g., name, email, profile data) and information generated through your use of the App, including step count, distance, calories, GPS data for hikes and runs, and device information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">2. How We Use Your Information</h2>
              <p>
                We use your data to: (a) provide and improve the App's features, including leaderboards, clubs, and challenges; (b) personalize your experience; (c) send relevant notifications; (d) analyze usage patterns to enhance performance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">3. Health &amp; Fitness Data</h2>
              <p>
                Rivlo accesses Apple HealthKit data (steps, distance, workouts) with your explicit permission. This data is used solely within the App and is never sold to third parties or used for advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">4. Data Sharing</h2>
              <p>
                We do not sell your personal data. We may share limited data with: (a) service providers who help operate the App; (b) law enforcement when required by law; (c) other users as part of public leaderboard and club features you opt into.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data. However, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">6. Data Retention</h2>
              <p>
                We retain your personal data for as long as your account is active. You may request deletion of your account and associated data at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">7. Children's Privacy</h2>
              <p>
                Rivlo is rated 13+. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with data, please contact us so we can delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">8. Your Rights</h2>
              <p>
                Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data. To exercise these rights, contact us at{" "}
                <a href="mailto:dev@3bytes.org" className="text-primary hover:underline">
                  dev@3bytes.org
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes through the App or via email. Continued use of the App after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">10. Contact</h2>
              <p>
                For privacy-related inquiries, contact us at{" "}
                <a href="mailto:dev@3bytes.org" className="text-primary hover:underline">
                  dev@3bytes.org
                </a>.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Privacy;
