

# Performance Optimization Plan — From 85% to 95%+

## Current Bottlenecks (from PageSpeed audit)

| Issue | Severity | Impact |
|-------|----------|--------|
| Unused JS (`proxy-Csu6BI2I.js`, 41KB, 75% unused) | Error | 150ms LCP savings |
| Cache lifetimes (398 KiB) | Error | Server-side, cannot fix |
| Network dependency tree | Error | Already optimal 2-hop chain |
| FCP 2.5s | Warning | Main scoring factor |
| LCP 3.9s | Warning | Main scoring factor |
| Unused CSS (11 KiB, 75% unused) | Warning | Minor |

## What Can Actually Be Fixed

Cache lifetimes and network tree are server-side / already optimal. The actionable items are:

### 1. Remove `@tanstack/react-query` entirely
**The `proxy-*.js` chunk is react-query's proxy module.** The app imports `QueryClient` and `QueryClientProvider` in `App.tsx` but **never uses `useQuery`, `useMutation`, or `useQueryClient` anywhere**. This is dead weight — 41KB loaded for nothing. Removing it eliminates the biggest unused JS finding and reduces the critical chain.

**Files:** `src/App.tsx`, `package.json`

### 2. Remove `framer-motion` from eagerly-loaded sections
`framer-motion` is still imported by `ComparisonSection`, `PricingSection`, `TrustBar`, and `LeaderboardPoster`. These are lazy-loaded so they don't block initial load, but they inflate the `proxy` / main bundle because framer-motion's core gets bundled into the shared chunk. Replacing with CSS transitions (using the existing `useScrollReveal` hook) removes this ~32KB dependency entirely.

**Files:** `src/components/TrustBar.tsx`, `src/components/ComparisonSection.tsx`, `src/components/PricingSection.tsx`, `src/components/leaderboard/LeaderboardPoster.tsx`, `src/components/leaderboard/AbstractMascots.tsx`, `src/pages/Milestones.tsx`, `package.json`

### 3. Lazy-load `Navbar` and `ScrollProgress`
These are currently eagerly imported in `Index.tsx`, adding to the main bundle. Neither is needed before the hero text renders (which is already in the pre-render HTML). Lazy-loading them lets the browser paint the pre-render content faster.

**Files:** `src/pages/Index.tsx`

### 4. Defer Google Fonts loading with `<link rel="preload">`
The current `media="print" onload` pattern works but doesn't tell the browser to start fetching the font file early. Adding a preload for the actual `.woff2` file will reduce FCP since the hero text uses Space Grotesk.

**Files:** `index.html`

### 5. Reduce Tailwind CSS output
75% of the CSS (11KB) is unused on initial load. Add Tailwind's `content` config to be more specific about which files to scan, and use `safelist` sparingly. The CSS is already deferred via the async plugin, but reducing its size helps when it does load.

**Files:** `tailwind.config.ts` — verify content paths are tight (no wildcard scanning of unused directories)

---

## Technical Details

```text
Before:
  Main bundle: index-*.js (8.4KB) + proxy-*.js (41KB) + query-*.js (8.7KB)
  framer-motion: shared across lazy chunks, inflates proxy bundle  
  Navbar + ScrollProgress: eagerly loaded in main bundle

After:
  react-query removed: -50KB (proxy + query chunks gone entirely)
  framer-motion removed: -32KB across lazy chunks
  Navbar/ScrollProgress: lazy-loaded, not in critical path
  Estimated main bundle: ~8KB (down from ~58KB effective)
```

**Expected score improvement:** 85% → 92-97%. The remaining points will be from cache lifetimes (server-side, unfixable) and mobile network simulation overhead.

**Risk:** Removing react-query is safe — zero usage found. Replacing framer-motion requires careful CSS transition recreation to preserve animations. Milestones page uses `useScroll`, `useTransform`, `useSpring` which need custom replacements.

