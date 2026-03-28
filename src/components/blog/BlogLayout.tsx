import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Download } from "lucide-react";
import { redirectToStore } from "@/lib/store-redirect";
import { BlogPost, getRelatedPosts } from "@/data/blog-posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BlogLayoutProps {
  post: BlogPost;
  faqSchema: object;
  children: React.ReactNode;
}

const BlogLayout = ({ post, faqSchema, children }: BlogLayoutProps) => {
  const related = getRelatedPosts(post.slug);

  return (
    <>
      <Helmet>
        <title>{post.title} — Rivlo Blog</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://rivlo.3bytes.org/blog/${post.slug}/`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription,
            datePublished: post.date,
            author: { "@type": "Organization", name: "Rivlo" },
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="bg-background text-foreground">
        <article className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-6 max-w-3xl">
            {/* Back link */}
            <Link
              to="/blog/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
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

            {/* Title */}
            <h1 className="text-3xl lg:text-5xl font-bold font-grotesk tracking-tight leading-[1.1] text-foreground mb-8">
              {post.title}
            </h1>

            {/* Content */}
            <div className="prose prose-lg prose-invert max-w-none text-muted-foreground leading-relaxed space-y-5 [&_h2]:text-2xl [&_h2]:lg:text-3xl [&_h2]:font-bold [&_h2]:font-grotesk [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-2 [&_strong]:text-foreground">
              {children}
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm text-center">
              <p className="text-foreground font-semibold text-lg mb-4">
                Ready to start tracking your steps?
              </p>
              <button
                onClick={redirectToStore}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gold text-gold-foreground font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-gold)]"
              >
                <Download className="w-4 h-4" />
                Download Rivlo Free
              </button>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-20 lg:py-28 bg-card/30">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-2xl font-bold font-grotesk text-foreground mb-8">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}/`}
                  className="group rounded-xl border border-border bg-card/40 backdrop-blur-sm p-6 hover:border-primary/30 transition-colors"
                >
                  <span className="text-xs font-semibold text-primary">{r.category}</span>
                  <h3 className="text-foreground font-bold mt-2 mb-2 group-hover:text-primary transition-colors leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{r.excerpt}</p>
                  <span className="text-xs text-muted-foreground mt-3 block">{r.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogLayout;
