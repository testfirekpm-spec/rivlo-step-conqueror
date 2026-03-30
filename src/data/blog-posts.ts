export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-walk-10000-steps-a-day",
    title: "How to Walk 10,000 Steps a Day — A Science-Backed Guide",
    metaDescription: "Learn how to hit 10,000 steps daily with our science-backed guide. Tips on building the habit, using a step counter app, and staying motivated.",
    category: "Fitness Tips",
    readTime: "12 min read",
    date: "2026-01-15",
    excerpt: "Hitting 10,000 steps sounds daunting — until you break it down. Here's a practical, science-backed guide to making it a daily habit.",
    image: "/placeholder.svg",
  },
  {
    slug: "walking-for-weight-loss",
    title: "Walking for Weight Loss: Steps You Need",
    metaDescription: "Discover how walking helps with weight loss, how many steps you need per day, and how a step counter app can accelerate your results.",
    category: "Health & Wellness",
    readTime: "7 min read",
    date: "2026-03-08",
    excerpt: "Walking is the most underrated weight loss exercise. Here's exactly how many steps you need — and how to stay consistent.",
    image: "/placeholder.svg",
  },
  {
    slug: "best-walking-challenges-for-groups",
    title: "Best Walking Challenges for Groups & Teams (2026)",
    metaDescription: "Explore the best walking challenges for offices, friend groups, and fitness communities. Learn how step competitions boost motivation and teamwork.",
    category: "Challenges",
    readTime: "6 min read",
    date: "2026-02-28",
    excerpt: "Group walking challenges are the secret weapon for workplace wellness and friend-group fitness. Here are the best formats to try.",
    image: "/placeholder.svg",
  },
];

export function getRelatedPosts(currentSlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, 2);
}
