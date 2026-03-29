import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const BlogIndex = () => (
  <>
    <Helmet>
      <title>Rivlo Blog — Step Tracking Tips, Walking Guides & Fitness Challenges</title>
      <meta
        name="description"
        content="Expert guides on step tracking, walking for fitness, and step challenges. Tips to walk more, lose weight, and compete with friends using Rivlo."
      />
      <link rel="canonical" href="https://rivlo.3bytes.org/blog/" />
    </Helmet>

    <Navbar />

    <main className="bg-background text-foreground">
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <h1 className="text-4xl lg:text-6xl font-bold font-grotesk tracking-tight leading-[1.05] text-foreground mb-4">
            The Rivlo <span className="text-primary">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-16">
            Tips, guides, and insights to help you walk more, compete better, and build lasting fitness habits.
          </p>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}/`}
                className="group block rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 lg:p-8 hover:border-primary/30 transition-all"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-muted-foreground">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-xl border border-border bg-card/50 p-6">
            <h2 className="text-lg font-bold text-foreground font-grotesk mb-3">Explore More</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Discover the{" "}
              <Link to="/best-step-counter-app/" className="text-primary hover:underline font-medium">best step counter app</Link>{" "}
              for tracking your daily walks, explore our{" "}
              <Link to="/fitness-challenge-app/" className="text-primary hover:underline font-medium">fitness challenge app</Link>{" "}
              features for team competitions, or see how Rivlo works as a{" "}
              <Link to="/leaderboard/" className="text-primary hover:underline font-medium">walking competition app</Link>{" "}
              with real-time leaderboards. Set personal goals with our{" "}
              <Link to="/milestones/" className="text-primary hover:underline font-medium">step goals tracker</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </>
);

export default BlogIndex;
