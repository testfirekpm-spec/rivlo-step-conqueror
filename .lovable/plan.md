

# Performance Optimization Plan for Rivlo Website

## Summary

The site loads 15+ sections on the homepage eagerly, imports heavy libraries (framer-motion, recharts, html2canvas) upfront, uses PNG images without optimization, and runs a canvas particle animation on every frame. This plan addresses all major bottlenecks.

---

## Step 1: Lazy-load below-the-fold sections

**Problem**: All 15+ sections are bundled together and rendered immediately, even though users only see the hero on load.

**Solution**: Use `React.lazy()` + `Suspense` to code-split every section below the hero. Only HeroSection, Navbar, and ScrollProgress load eagerly.

Sections to lazy-load: TrustBar, LogoMarquee, StatsSection, FeaturesSection, AppShowcaseSection, VideoShowcaseSection, AchievementsSection, ComparisonSection, PricingSection, HowItWorksSection, TestimonialsSection, BlogSection, FAQSection, CTASection, Footer.

**Files**: `src/pages/Index.tsx`

---

## Step 2: Replace framer-motion with CSS/IntersectionObserver

**Problem**: `framer-motion` (~32KB gzipped) is imported by TrustBar, ComparisonSection, PricingSection, and LeaderboardPoster for simple fade/slide animations that CSS can handle.

**Solution**: Remove framer-motion `motion.div` usages and replace with the existing `useScrollReveal` hook + inline CSS transitions (already used by most sections). This eliminates the entire framer-motion dependency.

**Files**: `src/components/TrustBar.tsx`, `src/components/ComparisonSection.tsx`, `src/components/PricingSection.tsx`, `src/components/leaderboard/LeaderboardPoster.tsx`, then remove `framer-motion` from `package.json`.

---

## Step 3: Optimize images

**Problem**: 13 PNG assets in `src/assets/` are uncompressed PNGs (likely large). Blog section loads external Unsplash images.

**Solution**:
- Add `loading="lazy"` to all images except the hero (`Home.PNG` already has `fetchPriority="high"`).
- Add explicit `width`/`height` attributes to prevent layout shifts.
- Ensure blog images use Unsplash's `&q=75&fm=webp` params for smaller payloads.
- Consider converting local PNGs to WebP (manual step outside Lovable).

**Files**: `src/components/AppShowcaseSection.tsx`, `src/components/BlogSection.tsx`, `src/components/ComparisonSection.tsx`, `src/components/Navbar.tsx`, `src/components/Footer.tsx`

---

## Step 4: Optimize ParticleBackground canvas

**Problem**: 60 particles animate every frame via `requestAnimationFrame`, running even when the hero is scrolled out of view.

**Solution**: Use IntersectionObserver to pause the animation loop when the hero section is not visible. Also reduce particle count on mobile (30 instead of 60).

**Files**: `src/components/ParticleBackground.tsx`

---

## Step 5: Remove unused App.css

**Problem**: `src/App.css` contains legacy Vite boilerplate styles (`.logo`, `.card`, `.read-the-docs`) that aren't used anywhere.

**Solution**: Delete `src/App.css` and remove any import of it.

**Files**: `src/App.css` (delete)

---

## Step 6: Lazy-load the video

**Problem**: The video in VideoShowcaseSection has a `<source>` tag that may trigger early download.

**Solution**: Set `preload="none"` on the `<video>` element since the IntersectionObserver already handles autoplay. This prevents the browser from buffering the video until the user scrolls near it.

**Files**: `src/components/VideoShowcaseSection.tsx`

---

## Step 7: Add font `display: swap`

**Problem**: Google Fonts link in `index.html` doesn't specify `display=swap`, which can cause invisible text during font load.

**Solution**: Append `&display=swap` to the Google Fonts URL (already present based on the link, but verify).

**Files**: `index.html`

---

## Technical Details

```text
Before:
  Index.tsx imports 15 sections → single large bundle
  framer-motion: ~32KB gzipped, used in 4 components
  ParticleBackground: runs 60fps always
  All images eager-loaded
  App.css: dead code

After:
  Hero + Navbar load instantly; rest code-split
  framer-motion removed entirely (CSS transitions)
  Canvas pauses off-screen, fewer particles on mobile
  Images lazy-loaded with dimensions
  Video deferred with preload="none"
  ~40-50% smaller initial JS bundle
```

**Estimated impact**: Initial bundle reduced by ~40-50%. LCP stays fast (hero image already preloaded). No visual changes — all animations preserved via CSS.

