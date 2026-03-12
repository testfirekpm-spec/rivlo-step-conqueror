

# Rivlo — Remove Gradient + Switch Font + Build Full Website

## Issues to Fix

### 1. Remove AI-looking gradient
The gradient text on "Competition" (`bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent`) — replace with solid primary color or just white text to look more refined and human-designed. Also tone down the ambient glow blobs behind the phone.

### 2. Switch to Space Grotesk
Replace Satoshi font with Space Grotesk from Google Fonts. Update `index.html` link, `index.css` body font-family, and `tailwind.config.ts` font family.

## Full Website Sections to Build

### 3. Navbar
Sticky top navigation with Rivlo logo, nav links (Features, How It Works, Pricing, FAQ), and a "Download" CTA button. Transparent on top, blurred glass on scroll.

### 4. Features Section
Grid of 4-6 feature cards with icons: Leaderboards, Clubs, Achievements, Run/Hike Tracking, Friends Challenges, Daily Goals. Clean card layout with subtle borders.

### 5. How It Works Section
3-step horizontal flow: Download → Walk → Compete. Numbered steps with icons and short descriptions.

### 6. Stats/Social Proof Section
Large numbers: "500K+ Steps Tracked", "50K+ Users", "120+ Countries". Clean horizontal row.

### 7. Testimonials Section
2-3 user testimonial cards with avatar, name, quote. Glass card styling.

### 8. CTA Section
Final call-to-action before footer. Bold headline, App Store download button, centered layout.

### 9. Footer
Logo, nav links columns (Product, Company, Legal), social media icons, copyright.

## Files to Create
- `src/components/Navbar.tsx`
- `src/components/FeaturesSection.tsx`
- `src/components/HowItWorksSection.tsx`
- `src/components/StatsSection.tsx`
- `src/components/TestimonialsSection.tsx`
- `src/components/CTASection.tsx`
- `src/components/Footer.tsx`

## Files to Modify
- `index.html` — swap Satoshi for Space Grotesk Google Font
- `src/index.css` — update font-family to Space Grotesk
- `tailwind.config.ts` — update fontFamily config
- `src/components/HeroSection.tsx` — remove gradient text, use solid color; reduce ambient glow intensity
- `src/pages/Index.tsx` — compose all sections

