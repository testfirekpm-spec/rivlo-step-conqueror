

## Research Findings & Improvement Plan

After studying the current leaderboard and researching premium esports/fitness leaderboard designs, here's what would take this from good to exceptional:

### Current State
The leaderboard already has a strong foundation — cinematic banner, podium layout, aurora effects, and multi-format sharing. But it still reads as a "list with decorations" rather than a premium poster/result screen.

### Proposed Improvements

**1. Animated step counter for #1 player (counter-up effect)**
Add a counting-up animation on the winner's step count that rolls from 0 to 11,426 when the page loads. This is the single most impactful micro-interaction — every esports results screen does this. Use `useEffect` + `requestAnimationFrame` for a smooth 1.5s easing animation. Apply a subtler version to #2 and #3.

**2. Staggered entrance animations with Framer Motion**
Install `framer-motion`. Animate the hero title sliding down, podium avatars popping in with stagger (left → center → right, with the #1 slot arriving last for dramatic effect), and the rest-of-list rows fading in sequentially. This transforms the static page into a "reveal" moment — crucial for shareability.

**3. Glassmorphic podium bars with inner gradient shimmer**
Replace the current flat podium bars with frosted glass panels that have a slow-moving shimmer animation (a diagonal light streak that sweeps across every 4 seconds). Add a subtle inner glow matching each rank's color (gold, silver, bronze). This is a hallmark of premium gaming UI.

**4. Rank-specific accent colors on player rows**
Currently all rows (#4-8) look identical. Add a left-side colored accent line: a thin 2px vertical bar on the left edge of each card, with opacity fading as rank increases. This creates visual hierarchy even in the list section.

**5. Total season stats bar**
Add a compact stats strip between the podium and the list: "8 Players · 81,370 Total Steps · 30 Days". Small, mono-spaced, with subtle dividers. This adds context and makes the poster feel more "official results" rather than just a ranked list.

**6. Improved podium connection line**
Replace the simple `h-px` divider below the podium with a styled "stage floor" — a gradient line that's brighter in the center and fades to the edges, with a subtle reflection/glow underneath, simulating a lit stage platform.

### Technical Notes
- Requires adding `framer-motion` as a dependency
- All animations use CSS or Framer Motion — fully compatible with `html-to-image` capture (animations will capture at their final state)
- Counter animation uses native `requestAnimationFrame`, no extra deps
- Changes confined to `src/pages/Leaderboard.tsx` only

### What stays the same
- Share functionality untouched
- All cinematic background layers (banner, glows, aurora, grain) preserved
- Data structure, podium layout, and responsive behavior unchanged

