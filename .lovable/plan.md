

## Leaderboard Hero Redesign Plan

**Current state**: The header area has the winter banner at low opacity, "THE WINTER" in white and "ARC" in a blue-purple gradient. It looks decent but flat — the banner barely shows, the text lacks depth, and the overall hero feels generic.

**Design direction**: Inspired by premium esports tournament result screens and Apple's event graphics — cinematic, layered, atmospheric.

### Changes to `src/pages/Leaderboard.tsx`

**1. Cinematic background layering**
- Increase banner opacity from 25% to 40% and extend it to cover more of the viewport
- Add a secondary radial glow in icy blue/cyan (`rgba(56, 189, 248, 0.08)`) alongside the existing primary glow
- Add a subtle animated noise/grain texture overlay using a CSS pseudo-element for cinematic depth
- Add horizontal light streaks — thin gradient lines across the top area simulating aurora/frost effects

**2. Hero text overhaul**
- "SEASON 1 · FINAL RESULTS" — keep as subtle label but add a decorative line on each side (horizontal rule motif)
- "THE WINTER ARC" — combine into a single visual block:
  - "THE WINTER" stays white but bump to `text-6xl md:text-8xl` with tighter letter-spacing (`tracking-[-0.04em]`)
  - "ARC" becomes much larger (`text-7xl md:text-9xl`), with a layered effect: gradient text + a faint text-shadow glow behind it using an absolutely positioned duplicate at lower opacity
  - Add a decorative snowflake/mountain icon cluster between the label and title (using simple SVG inline — a small mountain silhouette)
- Add a subtle frost line divider below — wider, with a glow effect instead of a plain `h-px`

**3. Ambient decorative elements**
- Add 2-3 small diamond/star sparkle shapes (pure CSS) scattered in the header area at low opacity, using a slow pulse animation
- These are tiny (4-8px), purely decorative, positioned absolute

**4. Keep share functionality untouched**
- All capture/share logic remains identical
- `crossOrigin="anonymous"` preserved on all images
- The visual upgrades use CSS only (gradients, shadows, positioning) so `html-to-image` will capture them correctly

### Technical notes
- No new dependencies needed
- All effects are CSS/inline styles — compatible with `html-to-image` capture
- Changes are confined to the header/background section of `Leaderboard.tsx` (lines ~218-240)

