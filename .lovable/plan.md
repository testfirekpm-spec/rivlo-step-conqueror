

# Leaderboard UI Enhancement Plan

Implementing 5 ideas (skipping Idea 2 — no player avatars available):

---

## Step 1: Glassmorphic Podium Cards (Idea 1)
Replace the current flat podium bars with frosted glass cards. Each card gets `bg-white/5 backdrop-blur-md border border-white/10` with a subtle inner glow. The #1 card gets a stronger gold-tinted glass effect. The overall podium column becomes a unified glass card instead of separate avatar + bar sections.

**File:** `LeaderboardPoster.tsx` — restyle the podium bar div into a rounded glass card wrapping the entire player column content.

---

## Step 2: Spotlight Effect on #1 (Idea 3)
Add a radial gradient "beam" behind the center podium (#1 player). A cone-shaped light coming from above, plus 3-4 tiny floating sparkle dots with CSS keyframe animations around the crown.

**Files:**
- `LeaderboardPoster.tsx` — add a spotlight div positioned behind the #1 column
- `index.css` — add `@keyframes sparkle` for the floating dots

---

## Step 3: Rank Gap Indicators (Idea 4)
Between ranks 4 and 5 rows, show a small inline element displaying the step difference (e.g., "39 steps apart") with a thin proportional colored bar. Simple visual addition between the existing row divs.

**File:** `LeaderboardPoster.tsx` — insert gap indicator elements between the `rest.map()` rows.

---

## Step 4: Cinematic Entrance Choreography (Idea 5)
Redesign the framer-motion animations so each element type has a distinct entrance:
- **Podium bars**: grow upward from 0 height (`scaleY: [0, 1]` with origin bottom)
- **Avatars**: drop in from above with spring bounce (`y: [-40, 0]` with `type: "spring"`)
- **Crown**: spin + scale in (`rotate: [180, 0], scale: [0, 1]`)
- **Step counts**: already have count-up, add a slight fade+scale
- **Rank 4-5 rows**: slide in from left with stagger (keep existing but add spring)

**File:** `LeaderboardPoster.tsx` — split the podium content into individually animated sub-elements instead of one big block.

---

## Step 5: Background Theme Variants (Idea 6)
Create two alternative backgrounds alongside the existing `EsportsBackground`:
- **MinimalDarkBackground**: Clean gradients only, no grid lines or energy streaks
- **AuroraBackground**: Animated northern lights color bands flowing across the top

Add a `theme` prop to `LeaderboardPoster` (`"esports" | "minimal" | "aurora"`) and a small toggle in the `Leaderboard.tsx` nav bar to switch between them.

**Files:**
- New: `src/components/leaderboard/MinimalDarkBackground.tsx`
- New: `src/components/leaderboard/AuroraBackground.tsx`
- `LeaderboardPoster.tsx` — accept `theme` prop, render the correct background
- `Leaderboard.tsx` — add theme toggle buttons in the nav
- `index.css` — add `@keyframes aurora` for the flowing color animation

