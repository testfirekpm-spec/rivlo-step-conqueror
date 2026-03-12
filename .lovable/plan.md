

# Rivlo — Cinematic Hero Section

## Files to Create/Modify

### New Files
1. **`src/components/ParticleBackground.tsx`** — Canvas-based particle animation with subtle floating dots, slowest parallax layer
2. **`src/components/HeroSection.tsx`** — Main hero with 12-col grid layout, all content orchestrated here
3. **`src/components/FloatingLeaderboardCard.tsx`** — Glassmorphic card showing rank (#3), username, step count, progress bar
4. **`src/components/StepCounterRing.tsx`** — SVG circular progress ring with glowing conic gradient stroke
5. **`src/components/FloatingTrophy.tsx`** — Glowing trophy icon with glass backing

### Modified Files
6. **`index.html`** — Add Satoshi font link from Fontshare CDN
7. **`src/index.css`** — Override CSS variables with dark navy palette, add floating/fade-in keyframes, glow utilities
8. **`tailwind.config.ts`** — Add custom keyframes (float, fade-in-up), animation durations, font family
9. **`src/pages/Index.tsx`** — Render `<HeroSection />`

## Technical Approach

### Color Tokens (index.css :root override)
- `--background: 230 25% 8%` (near-black navy)
- `--foreground: 220 20% 95%` (off-white)
- Primary stays `#1508d9` → `hsl(243, 89%, 44%)`
- Muted foreground: cool gray for subheadline

### Layout (HeroSection)
- Full viewport height, CSS grid `grid-cols-12`, items centered
- Left: cols 1-5, right: cols 6-12
- Mobile: single column stack via `lg:grid-cols-12`
- Background layers: particle canvas (absolute, z-0) → radial gradient divs (z-1) → content (z-10)

### iPhone Mockup
- Pure CSS/HTML: rounded-3xl container with notch, border glow, inner screenshot placeholder (gradient or static UI mockup built with divs)
- Radial gradient glow behind it using an absolute-positioned div with `bg-[radial-gradient()]` and blur

### Floating Elements
- Positioned absolute relative to phone container
- Glass style: `bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(21,8,217,0.15)]`
- Each has CSS `animation: float 6s ease-in-out infinite` with different delays
- 3D depth via slight `rotateY` and `rotateX` transforms

### Animations
- Staggered fade-in-up for headline (delay 0), subheadline (delay 0.2s), CTAs (delay 0.4s) using CSS animation with `animation-fill-mode: backwards`
- Float keyframe: `translateY(0) → translateY(-12px) → translateY(0)`
- Button hover: `shadow-[0_0_25px_rgba(21,8,217,0.5)]` + `scale-105` transition

### Parallax
- Lightweight scroll listener in HeroSection using `useEffect` + `requestAnimationFrame`
- Apply `transform: translateY(scrollY * factor)` where factor varies: particles 0.1, phone 0.3, cards 0.4

### CTAs
- Primary: `bg-gradient-to-r from-[#1508d9] to-[#6b21a8]`, rounded-full, glow shadow on hover
- Secondary: transparent, border `border-white/20`, text white, fills slightly on hover

