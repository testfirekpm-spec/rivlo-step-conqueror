

# Milestones Page — Complete Redesign

## Concept: "Monument" Layout
Instead of a generic timeline, each milestone gets treated as a full-width immersive section you scroll through — like a gallery exhibition. The page feels like you're walking through a hall of records.

## Layout Structure

```text
┌─────────────────────────────────────────────┐
│  Nav (sticky, blur backdrop)                │
├─────────────────────────────────────────────┤
│  HERO: Full-viewport intro                  │
│  "Hall of Fame" badge + large title         │
│  Ambient gradient orbs + particle canvas    │
│  Scroll indicator at bottom                 │
├─────────────────────────────────────────────┤
│  MILESTONE 1 — 10K (full-width section)     │
│  Left: huge "10,000" number with            │
│        horizontal reveal animation          │
│  Right: player card (name, flag, quote)     │
│  Tier accent: warm bronze gradient bg       │
├─────────────────────────────────────────────┤
│  MILESTONE 2 — 100K                         │
│  Flipped layout (card left, number right)   │
│  Tier accent: cool silver                   │
├─────────────────────────────────────────────┤
│  MILESTONE 3 — 500K                         │
│  Same as #1 layout                          │
│  Tier accent: rich gold                     │
├─────────────────────────────────────────────┤
│  MILESTONE 4 — 1M (LEGENDARY)              │
│  Full-width centered, oversized             │
│  Crown icon with radial glow burst          │
│  Floating particles, shimmer border         │
│  Player name rendered large                 │
├─────────────────────────────────────────────┤
│  Footer CTA: "Your name could be next"     │
└─────────────────────────────────────────────┘
```

## Key Design Details

- **Hero section**: Full viewport height, large "Milestones" title with individual letter spring animations, subtitle, ambient background orbs (reusing the style from HeroSection), scroll-down chevron that bounces
- **Each milestone is a full-width section** (~70-80vh) with generous padding — not crammed cards on a timeline
- **Massive step numbers**: The step count (e.g. "10,000") is rendered at ~8-10rem, clipped with a gradient, and slides in from the side on scroll
- **Player info panel**: Glassmorphic card beside the number with flag, name, quote — 3D tilt on hover (reuse TiltCard)
- **Alternating layouts**: Odd milestones = number left / card right; even = flipped
- **Tier-specific ambient lighting**: Each section has a subtle full-width radial gradient matching the tier color (bronze warm, silver cool, gold rich, legendary intense)
- **Legendary 1M section**: Breaks the pattern — centered layout, larger scale, particle effects, pulsing golden glow ring behind the crown icon, the player name "Luffy" gets its own spotlight treatment
- **Connecting element**: A thin vertical progress line between sections (scroll-driven, already have this logic)
- **Bottom CTA**: "Your name could be next" with a subtle glow button linking back to the app

## Animations (Framer Motion)

- **Hero letters**: Spring-based staggered entrance (keep existing)
- **Step numbers**: `whileInView` slide from left/right with scale, using spring physics
- **Player cards**: Fade + slide up with delay after the number appears
- **Quote text**: Typewriter-style fade per word
- **Legendary section**: Crown icon does a slow continuous float + rotate; golden ring pulses; particles drift
- **Scroll progress line**: Grows as user scrolls (keep existing logic)
- **Section transitions**: Each section has a subtle parallax offset on its background gradient

## Files
1. **Rewrite `src/pages/Milestones.tsx`** — Complete overhaul with the monument layout, all animations, tier-specific styling

## Technical Notes
- No new dependencies — framer-motion, lucide-react, existing Tailwind tokens
- Reuse ParticleBackground component for the hero section (or a lighter inline version for legendary)
- Keep the same data array (player, country, quote, icon, tier)
- Mobile: stacks vertically, number on top, card below — no alternating

