

# Leaderboard Polish Plan

## Changes

### 1. Add trophy icon next to trophy counts
Add a small 🏆 emoji next to the trophy number in both podium cards (top 3) and player rows (ranks 4-5).

**File:** `LeaderboardPoster.tsx`
- Update `trophiesElement` (line 254-258) to include 🏆 before the number
- Update the row trophy display (line 391-394) to include 🏆 and remove the separate "trophies" label text

### 2. Remove "trophies apart" gap indicators
Delete the `gapIndicator` block (lines 347-361) and remove its usage on line 401.

**File:** `LeaderboardPoster.tsx`

### 3. Improve podium card design
Elevate the glassmorphic podium cards with:
- **Stronger glass effect**: Increase backdrop blur, add a subtle top-edge highlight line
- **Better spacing**: More padding, slightly larger avatar sizes for #1
- **Rank-colored top border accent**: A thin colored line at the top of each card (gold/silver/bronze)
- **Trophy count styling**: Make the number bolder with a subtle glow matching the rank color
- **Remove the large ghost rank number** inside the bar (the faint "1", "2", "3") — it adds clutter
- **Increase bar heights** slightly for more visual weight
- **Add a subtle shimmer/gradient sweep** across the #1 card border

**File:** `LeaderboardPoster.tsx` — update `podiumStyles`, `content` block, and `barElement`

