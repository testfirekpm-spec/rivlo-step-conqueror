

## Analysis of Exported Screenshot Issues

### Issues Found

1. **Rank numbers (1-5) not vertically centered in their circles/badges** — The podium rank badges and list row rank badges show numbers sitting too high. Root cause: `inline-grid place-items-center` combined with `-translate-y-[0.5px]` is not reliably rendered by `html2canvas`. The transform hack doesn't survive the canvas rasterization.

2. **Flags misaligned in rows 4-5** — The flag images for "paceby harsh" and "top" float slightly above center. Root cause: the `grid place-items-center` wrapper div for flags may not render correctly in html2canvas.

3. **Massive empty dark space at the bottom** — Content only fills ~55% of the 1920px story height, leaving a huge dead zone. Root cause: the export container is `h-[960px]` (which becomes 1920px at 2x), but content is compact and the footer uses `mt-auto` which pushes it to the very bottom with nothing in between.

4. **Club name emojis (🍃) render as text/boxes in export** — html2canvas has limited emoji support, causing rendering artifacts.

### Plan

**File: `src/components/leaderboard/LeaderboardPoster.tsx`**

1. **Fix rank number centering** — Remove the `-translate-y-[0.5px]` hack. Use simple `line-height` matching the container height and `text-align: center` with inline styles instead of Tailwind grid/transform utilities, which html2canvas handles better. Use `display: flex; align-items: center; justify-content: center;` via inline styles for export reliability.

2. **Fix flag alignment in rows 4-5** — Remove the wrapping grid div around flags. Use a simple `<img>` with inline `vertical-align: middle` style.

3. **Fill the vertical space better** — Increase spacing between sections in exportMode: larger `pt` on header, bigger podium bars (`h-36`, `h-28`, `h-24`), more gap between podium and list rows, and larger padding throughout. This will make the content fill the 960px height naturally instead of relying on `mt-auto`.

4. **Strip emojis from club names in export** — When `animated={false}` (export mode), strip emoji characters from club name strings.

**File: `src/components/leaderboard/AbstractMascots.tsx`**

5. **Fix forwardRef warning** — The `EnergyOrb` uses `motion.div` but can't receive refs as a function component. This causes console errors during export. Wrap with `forwardRef` or convert to a simple div when not animated.

### Technical approach

- Prefer inline `style={{}}` for centering over Tailwind utility classes, since html2canvas parses computed styles more reliably than CSS custom properties and transforms.
- Increase exportMode-specific spacing: header pt-12, podium bars 40% taller, row gaps doubled, footer area with generous padding.
- Test by using the browser tools to export and screenshot the result after implementation.

