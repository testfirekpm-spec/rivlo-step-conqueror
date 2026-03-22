
Goal: determine whether the export bugs come from styling mistakes or from the export strategy itself.

What’s wrong in the latest exported image
1. Rank badges are still vertically off-center, especially 1–5. The numbers sit low/high inconsistently inside circles/squares.
2. Row flags for ranks 4 and 5 still sit slightly above the visual centerline.
3. The composition still has too much dead space in the lower half.
4. Export output does not fully match the cleaner on-page design, even though the same component is being rendered.

Why this points to an export-approach problem
1. The current export relies on html2canvas to rasterize a fairly complex React/Tailwind layout with:
   - flex alignment
   - transforms
   - shadows, blur, backdrop blur
   - SVGs
   - remote flag images
   - Framer Motion components in adjacent code paths
2. html2canvas is known to be approximate, not pixel-perfect. It often misrenders:
   - vertical centering in tiny badges
   - transformed/absolutely positioned elements
   - blurred/glass layers
   - cross-origin images and fonts
3. Your code already shows “export-specific fixes” being layered in:
   - `animated={false}`
   - `exportMode`
   - emoji stripping
   - offscreen hidden render
   This is a sign the current approach is fighting the renderer instead of using a layout html2canvas handles naturally.

Code-level causes I found
1. `RankBadge` still depends on small fixed boxes with absolute positioning and text metrics (`width: 20`, `height: 20`, `fontSize: 10`, `lineHeight: 1`). Tiny text inside tiny shapes is exactly where html2canvas often drifts.
2. Podium badges use `position: absolute` plus `transform: translateX(-50%)`. Horizontal placement is okay, but these transformed micro-elements are fragile in canvas export.
3. Rows 4–5 use flex with mixed text/image baselines. Even with `alignItems: center`, html2canvas can render image boxes slightly off compared with live DOM.
4. Footer still uses `mt-auto`, so export space is being “solved” by flex stretching rather than by intentionally designed vertical distribution.
5. Decorative layers (`blur`, glows, background SVG/noise, motion-based mascots) add rendering complexity without helping export fidelity.

Conclusion
Yes: there is an issue with the current export approach.
The problem is not only “a few bad CSS classes.” The bigger issue is that html2canvas is being asked to capture a visually rich, effect-heavy layout that needs very precise alignment. That mismatch is why fixes keep appearing correct in code but still fail in the exported PNG.

Recommended implementation direction
Option A — Best fix
Create a dedicated export-only poster layout component, separate from the live preview structure.

How it would work
1. Keep the current on-page `LeaderboardPoster` for the interactive site.
2. Add a new `LeaderboardPosterExport` built specifically for screenshot reliability:
   - no Framer Motion
   - no backdrop blur
   - fewer transforms
   - no tiny absolute badges dependent on text metrics
   - deliberate spacing for full 1080x1920 composition
   - rows built with CSS grid, not mixed flex/image baseline behavior
3. Render this export-only component into the hidden export host for html2canvas.

Why this is best
- Lets the site version stay visually rich.
- Lets the export version be stable and predictable.
- Stops the repeated loop of “fix live layout, but export still looks wrong.”

Suggested export-only design constraints
1. Replace badge text centering with explicit inner wrapper sizing.
2. Replace podium badge absolute transforms with anchored containers.
3. Use grid columns for rows:
   - rank
   - flag
   - name/club
   - steps
4. Remove `mt-auto`; instead assign fixed section spacing so the poster fills height intentionally.
5. Disable or simplify blur-heavy decorative layers in export mode.

Option B — Partial fix, less reliable
Keep one component, but make export mode much flatter:
- remove transforms from badges
- remove decorative motion components in export
- remove blur/backdrop blur
- convert row layout to grid
- redesign spacing with fixed margins
This is simpler but still more fragile than Option A.

Planned implementation steps
1. Audit the export surface and separate “live-only visuals” from “export-safe visuals.”
2. Create a dedicated export poster component or a strongly simplified export branch.
3. Redesign badge and row structure using export-safe centering/grid patterns.
4. Rebalance vertical spacing so the story uses the full frame.
5. Keep html2canvas only as the final rasterizer, not as a layout interpreter for complex effects.

Technical details
```text
Current pipeline:
React component -> hidden offscreen DOM -> html2canvas -> PNG

Problem:
html2canvas is interpreting a complex stylized DOM inaccurately.

Better pipeline:
Interactive poster (for screen)
Export poster (for capture-safe DOM)
                -> hidden offscreen DOM
                -> html2canvas
                -> PNG
```

Files likely involved
- `src/pages/Leaderboard.tsx`
- `src/components/leaderboard/LeaderboardPoster.tsx`
- likely a new export-focused component such as:
  `src/components/leaderboard/LeaderboardPosterExport.tsx`

Acceptance criteria for the fix
1. Ranks 1–5 are visually centered in badges in the downloaded PNG.
2. Flags in rows 4–5 align to the row midline in the downloaded PNG.
3. Lower half of the story is intentionally filled, with no awkward dead zone.
4. Export matches the intended site design closely, without relying on fragile CSS effects.
