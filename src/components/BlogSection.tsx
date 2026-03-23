import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "How Walking 10K Steps Daily Changed Our Users' Lives",
    excerpt: "Discover the science-backed benefits of daily walking challenges and how Rivlo users are transforming their health.",
    category: "Health",
    readTime: "5 min read",
    date: "Mar 10, 2026",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=75&fm=webp",
  },
  {
    title: "Season 4 Recap: Records Broken & Lessons Learned",
    excerpt: "A deep dive into our biggest season yet — over 1.2 billion steps tracked and 15K new clubs formed worldwide.",
    category: "Community",
    readTime: "4 min read",
    date: "Mar 5, 2026",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop&q=75&fm=webp",
  },
  {
    title: "The Psychology Behind Competitive Fitness Apps",
    excerpt: "Why leaderboards, streaks, and social accountability work — and how Rivlo leverages them to keep you moving.",
    category: "Insights",
    readTime: "7 min read",
    date: "Feb 28, 2026",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop&q=75&fm=webp",
  },
];

const BlogCard = ({ post, index }: { post: typeof posts[number]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <article
      ref={ref}
      className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500 cursor-pointer"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s`,
      }}
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-lg font-bold text-foreground font-grotesk leading-snug mb-2 group-hover:text-primary transition-colors duration-300">
          {post.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Read more <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </article>
  );
};

const BlogSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="blog" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            From the Blog
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-grotesk tracking-tight">
            Stories & Insights
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Tips, updates, and inspiration from the Rivlo community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <BlogCard key={post.title} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
