

## Plan: App Showcase Section with Real Screenshots

Based on the uploaded screenshots, the plan is to create a new **Interactive App Showcase** section that embeds the actual app screenshots inside phone frames, with a tabbed navigation to switch between features. This replaces the current generic feature cards approach with something far more compelling for brand awareness.

### What We'll Build

**1. Copy all 7 screenshots into `src/assets/`**
- Home.PNG, Leaderboard.PNG, Club.PNG, Club_Leaderboard.PNG, Premium_Themes.PNG, Insights.PNG, Season_Challenges.PNG

**2. New `AppShowcaseSection.tsx` component**
- A tabbed interface with 4 tabs: **Leaderboard**, **Insights**, **Clubs**, **Challenges**
- Each tab shows:
  - Left side: a phone frame containing the real screenshot (with scroll-reveal animation)
  - Right side: headline, description, and 2-3 bullet points about that feature
- Tabs styled as pill buttons matching the app's blue/dark aesthetic
- Smooth crossfade transition between screenshots when switching tabs
- On mobile: screenshot on top, text below

**3. Update `FeaturesSection.tsx`**
- Keep the existing 6 feature cards but simplify them into a compact 3x2 grid of icon + title + one-liner (supporting role)
- The new App Showcase becomes the primary feature presentation

**4. Update `HeroSection.tsx` phone mockup**
- Replace the hand-coded fake app UI inside the phone frame with the actual `Home.PNG` screenshot
- This immediately makes the hero more authentic

**5. Update `Index.tsx` layout**
- Insert `AppShowcaseSection` after `FeaturesSection` (before Achievements)
- Add a "Pricing" link to the navbar

### Section Order (updated)
```text
Navbar
Hero (with real Home screenshot)
LogoMarquee
Stats
Divider
Features (compact cards)
Divider
App Showcase (new - tabbed screenshots)
Divider
Achievements
Divider
Pricing
Divider
How It Works
Divider
Testimonials
Divider
FAQ
CTA
Footer
```

### Technical Details

- Screenshots imported as ES6 modules from `src/assets/` for proper bundling
- Phone frame: `rounded-[3rem]` container with `border-2 border-white/10`, `overflow-hidden`, and subtle glow shadow
- Tab switching uses React state with CSS opacity/transform transitions (no external lib)
- Each tab's content uses the existing `useScrollReveal` hook for entrance animation
- Screenshots displayed with `object-cover` and `object-top` to show the most relevant part of each screen

