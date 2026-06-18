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
            Last updated: June 2026
          </p>

          <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed text-[15px]">
            <section>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of Rivlo, including the Rivlo mobile applications, features, subscriptions, leaderboards, clubs, challenges, advertisements, content, and related services (collectively, the &ldquo;App&rdquo; or &ldquo;Services&rdquo;).
              </p>
              <p className="mt-3">
                By creating an account, accessing, or using Rivlo, you agree to these Terms. If you do not agree, do not use Rivlo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">1. Eligibility</h2>
              <p>
                You must be at least 13 years old, or the minimum age required in your jurisdiction, to use Rivlo. If you are under the age required to enter into a binding agreement in your jurisdiction, you may use Rivlo only with permission from a parent or legal guardian.
              </p>
              <p className="mt-3">
                By using Rivlo, you represent that you are legally allowed to use the App and that your use complies with all applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">2. Accounts</h2>
              <p>
                You must create an account to use Rivlo. You agree to provide accurate and current account information and to keep your account information up to date.
              </p>
              <p className="mt-3">
                You are responsible for maintaining the confidentiality and security of your account credentials and for all activity that occurs under your account. You must not share, sell, transfer, or allow another person to use your account.
              </p>
              <p className="mt-3">
                You agree to notify us if you believe your account has been accessed without permission or if you become aware of any security issue related to your account.
              </p>
              <p className="mt-3">
                We may suspend, restrict, or terminate your account if you violate these Terms, misuse the App, create risk for other users, or use Rivlo in a way that we believe harms the App, our users, or our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">3. Third-Party Sign-In and Integrations</h2>
              <p>
                Rivlo may allow you to sign up or log in using third-party services such as Apple, Google, or other supported providers. Your use of those services is governed by their own terms and privacy policies.
              </p>
              <p className="mt-3">
                Rivlo may also connect with or read activity-related information from device services or third-party platforms, such as Apple Health, Google Fit, or similar fitness and health data sources. Your use of those services is subject to their own terms, privacy settings, permissions, and policies.
              </p>
              <p className="mt-3">
                You are responsible for reviewing and managing the permissions you grant to Rivlo and to any connected third-party service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">4. Fitness and Health Disclaimer</h2>
              <p>
                Rivlo provides activity, step, calorie, distance, floor, leaderboard, challenge, and fitness-related information for informational, entertainment, and motivational purposes only.
              </p>
              <p className="mt-3">
                Rivlo is not a medical device. Rivlo does not provide medical, health, fitness, training, safety, or professional advice. You should not rely on Rivlo to diagnose, treat, prevent, or manage any medical condition.
              </p>
              <p className="mt-3">
                You are solely responsible for your physical activity and safety. Before beginning or changing any fitness routine, you should consult a qualified medical professional if you have any health concerns.
              </p>
              <p className="mt-3">
                You understand that physical activity involves risk, including injury, illness, or other harm. You use Rivlo and participate in any challenges, clubs, competitions, or activity-based features at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">5. Activity Data, Accuracy, and Leaderboards</h2>
              <p>
                Rivlo uses activity data, including steps and related fitness metrics, to provide features such as rankings, clubs, challenges, recaps, trophies, streaks, and leaderboards.
              </p>
              <p className="mt-3">
                Activity data may come from your device, connected health services, or supported third-party integrations. Rivlo does not guarantee that activity data will always be complete, accurate, timely, or available.
              </p>
              <p className="mt-3">
                Leaderboards, rankings, trophies, challenge results, seasonal results, and recap statistics are provided for entertainment and motivational purposes. They may be affected by syncing delays, device limitations, missing permissions, data source issues, calculation changes, or technical errors.
              </p>
              <p className="mt-3">
                We may correct, adjust, remove, or recalculate rankings, trophies, leaderboard entries, challenge rewards, seasonal results, or other activity-based values if we believe there has been an error, misuse, manipulation, cheating, suspicious activity, or system issue.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">6. Fair Play and Anti-Cheat</h2>
              <p>
                Rivlo is designed for authentic activity and fair competition. You agree that activity submitted to Rivlo should reflect real activity performed by you.
              </p>
              <p className="mt-3">
                You must not manipulate, fake, automate, spoof, or artificially inflate steps, activity data, trophies, rankings, challenges, club results, or any other Rivlo metric. This includes using unauthorized tools, modified apps, scripts, emulators, data manipulation, device shaking for dishonest purposes, or other methods intended to gain an unfair advantage.
              </p>
              <p className="mt-3">
                We may investigate suspicious activity and may limit, remove, reset, or adjust activity data, trophies, rankings, challenge rewards, club results, or account access if we believe the App is being misused.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">7. Subscriptions and Paid Features</h2>
              <p>
                Rivlo may offer free features and paid features, including Rivlo Pro or other subscription-based features.
              </p>
              <p className="mt-3">
                Subscription pricing, billing periods, trial offers, included features, and availability may vary by platform, country, region, device, or app store. Subscription purchases may be processed by Apple App Store, Google Play, or another authorized payment provider.
              </p>
              <p className="mt-3">
                Subscriptions may automatically renew unless canceled before the end of the current billing period, according to the rules of the app store or payment provider used for purchase. You are responsible for managing and canceling your subscription through the platform where you purchased it.
              </p>
              <p className="mt-3">
                When a subscription ends, you may lose access to paid features. We may add, modify, limit, or remove free or paid features at any time, subject to applicable law and app store rules.
              </p>
              <p className="mt-3">
                Except where required by law or app store policy, payments are non-refundable. Refund requests for purchases made through Apple App Store or Google Play are handled by the applicable app store.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">8. Ads and Third-Party Services</h2>
              <p>
                Rivlo may display advertisements through third-party ad networks or advertising partners. We are not responsible for the content, products, services, claims, or practices of third-party advertisers.
              </p>
              <p className="mt-3">
                The App may also contain links to third-party websites, services, platforms, or content. These third-party services are not controlled by Rivlo, and your use of them is governed by their own terms and policies.
              </p>
              <p className="mt-3">
                We are not responsible for any loss, damage, or issue arising from your use of third-party services, ads, links, products, or integrations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">9. User Content</h2>
              <p>
                Rivlo may allow you to create, upload, post, share, or display content, including usernames, profile information, profile photos, club names, club descriptions, messages, challenge results, leaderboard placements, recap cards, shared images, and other materials (&ldquo;User Content&rdquo;).
              </p>
              <p className="mt-3">
                You are responsible for your User Content and for ensuring that you have the rights needed to use and share it. You must not upload or share content that violates another person&rsquo;s rights, violates the law, is misleading, harmful, abusive, hateful, sexually explicit, harassing, threatening, or otherwise inappropriate.
              </p>
              <p className="mt-3">
                You retain ownership of your User Content. By using Rivlo, you grant us a worldwide, non-exclusive, royalty-free license to host, store, reproduce, display, process, modify, and distribute your User Content as needed to operate, improve, promote, and provide the App and its features.
              </p>
              <p className="mt-3">
                This license includes the ability to display your username, profile photo, activity summaries, leaderboard position, club participation, trophies, seasonal results, and shared recap content within Rivlo and in features connected to Rivlo.
              </p>
              <p className="mt-3">
                If you delete your account or remove content, we will take reasonable steps to remove it from active use, but some content may remain where retention is required for legal, security, backup, anti-abuse, accounting, or operational purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">10. Clubs, Competitions, and Community Features</h2>
              <p>
                Rivlo may include clubs, leaderboards, seasonal arcs, club competitions, challenges, trophies, rankings, and other social or competitive features.
              </p>
              <p className="mt-3">
                You are responsible for your conduct in clubs and community features. If you create or manage a club, you are responsible for ensuring that the club name, description, members, and activity comply with these Terms.
              </p>
              <p className="mt-3">
                You must not use clubs, rankings, or community features to harass others, impersonate any person or organization, promote illegal activity, abuse other users, manipulate competition results, or post inappropriate content.
              </p>
              <p className="mt-3">
                We may remove, rename, restrict, transfer, or delete clubs, club content, rankings, or competition results if we believe they violate these Terms or create risk for Rivlo or other users.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">11. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>use Rivlo for unlawful, harmful, abusive, fraudulent, or misleading purposes;</li>
                <li>interfere with or disrupt the App, servers, databases, or networks;</li>
                <li>attempt to access accounts, data, systems, or services without permission;</li>
                <li>reverse engineer, modify, copy, scrape, or extract data from the App except where allowed by law;</li>
                <li>use bots, scripts, automation, fake accounts, or unauthorized tools;</li>
                <li>manipulate activity data, rankings, trophies, or challenge results;</li>
                <li>upload malware, harmful code, or content that disrupts the App;</li>
                <li>impersonate another person, company, club, or organization;</li>
                <li>violate the privacy, publicity, intellectual property, or other rights of others;</li>
                <li>use Rivlo to harass, threaten, bully, shame, or target others.</li>
              </ul>
              <p className="mt-3">
                We may take action against accounts or content that violate these rules, including warnings, content removal, trophy or leaderboard adjustments, feature restrictions, suspension, or termination.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">12. Privacy</h2>
              <p>
                Your use of Rivlo is also governed by our Privacy Policy, which explains how we collect, use, store, and share information.
              </p>
              <p className="mt-3">
                By using Rivlo, you agree that we may process your information as described in the Privacy Policy, including information needed to provide account features, activity tracking, subscriptions, ads, leaderboards, clubs, challenges, support, safety, analytics, and app functionality.
              </p>
              <p className="mt-3">
                You are responsible for managing your device permissions, health data permissions, notification settings, and privacy settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">13. Feedback</h2>
              <p>
                If you provide ideas, suggestions, feedback, bug reports, feature requests, or other comments about Rivlo, you grant us the right to use them without restriction or compensation to you.
              </p>
              <p className="mt-3">
                We may use feedback to improve, modify, market, or develop Rivlo or related products and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">14. Ownership and Intellectual Property</h2>
              <p>
                Rivlo and its content, design, software, code, features, graphics, logos, trademarks, text, visual elements, and other materials are owned by Rivlo or its licensors and are protected by intellectual property and other laws.
              </p>
              <p className="mt-3">
                These Terms do not grant you ownership of Rivlo or any part of the App. You receive only a limited, personal, non-exclusive, non-transferable, revocable right to use Rivlo in accordance with these Terms.
              </p>
              <p className="mt-3">
                You must not copy, modify, distribute, sell, lease, reverse engineer, or create derivative works from Rivlo or any part of the App, except where allowed by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">15. Copyright and Intellectual Property Complaints</h2>
              <p>
                If you believe content in Rivlo infringes your copyright, trademark, or other intellectual property rights, contact us at{" "}
                <a href="mailto:dev@3bytes.org" className="text-primary hover:underline">
                  dev@3bytes.org
                </a>{" "}
                with enough information for us to review the claim.
              </p>
              <p className="mt-3">
                We may remove or restrict content that we believe infringes intellectual property rights or violates these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">16. Beta Features and Changes</h2>
              <p>
                We may release experimental, beta, early access, seasonal, or limited features. These features may change, stop working, contain bugs, or be removed at any time.
              </p>
              <p className="mt-3">
                We may update, modify, suspend, or discontinue any part of Rivlo at any time, including features, subscriptions, leaderboards, clubs, challenges, trophies, arcs, themes, ads, or availability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">17. Account Deletion and Termination</h2>
              <p>
                You may delete your account from within the App where account deletion is available.
              </p>
              <p className="mt-3">
                We may suspend, restrict, or terminate your account or access to Rivlo at any time if you violate these Terms, misuse the App, create legal or security risk, or if we discontinue or materially change the App.
              </p>
              <p className="mt-3">
                Termination may result in loss of access to your account, subscriptions, content, trophies, rankings, clubs, challenge progress, and other data associated with your account.
              </p>
              <p className="mt-3">
                Sections that by their nature should survive termination will continue to apply, including ownership, user content licenses, disclaimers, limitations of liability, indemnity, dispute terms, and general provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">18. Disclaimer of Warranties</h2>
              <p>
                Rivlo is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis.
              </p>
              <p className="mt-3">
                To the maximum extent permitted by law, we disclaim all warranties, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, title, non-infringement, availability, accuracy, reliability, and uninterrupted or error-free operation.
              </p>
              <p className="mt-3">
                We do not guarantee that Rivlo will always be secure, available, accurate, complete, compatible with your device, or free from bugs, errors, data loss, syncing issues, or interruptions.
              </p>
              <p className="mt-3">
                You use Rivlo, its activity features, health-related information, clubs, competitions, and challenges at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">19. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Rivlo, its owners, developers, affiliates, partners, service providers, and licensors shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including lost profits, lost data, loss of goodwill, personal injury, activity-related harm, device issues, business interruption, or other losses arising from or related to your use of Rivlo.
              </p>
              <p className="mt-3">
                To the maximum extent permitted by law, our total liability for any claim related to Rivlo or these Terms shall not exceed the greater of: (a) the amount you paid to Rivlo for paid features during the 12 months before the claim, or (b) USD $50.
              </p>
              <p className="mt-3">
                Some jurisdictions do not allow certain limitations of liability, so some limitations may not apply to you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">20. Indemnity</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Rivlo, its owners, developers, affiliates, partners, service providers, and licensors from any claims, damages, losses, liabilities, costs, and expenses, including reasonable legal fees, arising from or related to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>your use or misuse of Rivlo;</li>
                <li>your activity, fitness, club, challenge, leaderboard, or competition participation;</li>
                <li>your User Content;</li>
                <li>your violation of these Terms;</li>
                <li>your violation of any law or third-party rights;</li>
                <li>your manipulation or misuse of activity data, rankings, trophies, clubs, or challenges.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">21. Governing Law</h2>
              <p>
                These Terms are governed by the laws of India, Gujarat, without regard to conflict of law principles, unless applicable law requires otherwise.
              </p>
              <p className="mt-3">
                If Rivlo is later operated by a different legal entity or from a different jurisdiction, this section may be updated.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">22. Dispute Resolution</h2>
              <p>
                Before filing any formal claim, you agree to contact us at{" "}
                <a href="mailto:dev@3bytes.org" className="text-primary hover:underline">
                  dev@3bytes.org
                </a>{" "}
                and attempt to resolve the dispute informally.
              </p>
              <p className="mt-3">
                Any dispute arising from or related to Rivlo or these Terms shall be handled in the courts or forums permitted under the governing law section, unless applicable consumer protection law gives you rights in another jurisdiction.
              </p>
              <p className="mt-3">
                Nothing in these Terms limits rights you may have under mandatory consumer protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">23. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. If we make material changes, we may notify you through the App, by email, or by other reasonable means.
              </p>
              <p className="mt-3">
                Your continued use of Rivlo after updated Terms become effective means you accept the updated Terms. If you do not agree to the updated Terms, you must stop using Rivlo and may delete your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">24. General</h2>
              <p>
                These Terms, together with any policies or additional terms referenced in the App, form the entire agreement between you and Rivlo regarding your use of the App.
              </p>
              <p className="mt-3">
                If any part of these Terms is found invalid or unenforceable, the remaining parts will remain in effect.
              </p>
              <p className="mt-3">
                Our failure to enforce any part of these Terms is not a waiver of our rights.
              </p>
              <p className="mt-3">
                You may not transfer or assign your rights or obligations under these Terms without our permission. We may assign or transfer our rights and obligations as part of a merger, acquisition, reorganization, sale, or other business transaction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground font-grotesk mb-3">25. Contact Information</h2>
              <p>
                For questions about these Terms, contact:
              </p>
              <p className="mt-3">
                Email:{" "}
                <a href="mailto:dev@3bytes.org" className="text-primary hover:underline">
                  dev@3bytes.org
                </a>
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
