

# Milestones Page Plan

## What we're building
A dedicated `/milestones` page showcasing the first players to hit 10k, 100k, 500k, and 1M steps, with rich data and a premium visual design.

## Data (with placeholders)

| Milestone | Player | Country | Date Achieved | Days to Reach | Total Players | Quote |
|-----------|--------|---------|---------------|---------------|---------------|-------|
| 10,000 | Top | US | Jan 18, 2025 | 3 days | 1,247 | "Just getting started!" |
| 100,000 | Top | US | Feb 22, 2025 | 38 days | 314 | "Didn't even realize I was close." |
| 500,000 | Top | US | May 10, 2025 | 115 days | 27 | "Half a million feels unreal." |
| 1,000,000 | Luffy | CA | Sep 3, 2025 | 210 days | 1 | "King of the steps." |

## Design
- Dark page matching leaderboard aesthetic, same sticky nav with back button
- Page title "Milestones" with subtitle about first-ever achievements
- Vertical timeline with a glowing connecting line
- 4 glassmorphic cards, each showing: milestone badge, player name + flag, date, days-to-reach, total players who've hit it, and a player quote
- Cards escalate visually — 10k is subtle, 1M gets a golden glow and crown icon
- Staggered scroll-reveal entrance animations (reusing existing `useScrollReveal` hook)
- Rarity indicator: "1,247 players" vs "1 player — Only one" to show exclusivity

## Files
1. **Create `src/pages/Milestones.tsx`** — Full page with timeline layout, milestone cards, all data
2. **Edit `src/App.tsx`** — Add `/milestones` route and import

## Technical notes
- No new dependencies — reuse existing hooks, Tailwind tokens, lucide icons, flagcdn
- Icons per tier: Footprints (10k), Target (100k), Mountain (500k), Crown (1M)

