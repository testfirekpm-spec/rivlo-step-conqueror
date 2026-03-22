import { motion } from "framer-motion";

/** Abstract geometric mascot shapes — decorative energy characters */

export const DiamondWarrior = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.svg
    viewBox="0 0 120 160"
    fill="none"
    className={className}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
  >
    {/* Body — angular diamond */}
    <polygon points="60,10 110,80 60,150 10,80" fill="url(#dw-grad)" opacity="0.85" />
    <polygon points="60,10 110,80 60,150 10,80" fill="none" stroke="hsl(196 80% 55%)" strokeWidth="1.5" opacity="0.6" />
    {/* Inner core */}
    <polygon points="60,40 85,80 60,120 35,80" fill="hsl(230 75% 52% / 0.3)" />
    <polygon points="60,40 85,80 60,120 35,80" fill="none" stroke="hsl(230 75% 65%)" strokeWidth="1" opacity="0.8" />
    {/* Eye slit */}
    <line x1="45" y1="75" x2="75" y2="75" stroke="hsl(196 80% 70%)" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="60" cy="75" r="3" fill="hsl(196 80% 80%)" />
    {/* Energy lines */}
    <line x1="10" y1="80" x2="-5" y2="72" stroke="hsl(196 80% 55%)" strokeWidth="1" opacity="0.4" />
    <line x1="110" y1="80" x2="125" y2="72" stroke="hsl(196 80% 55%)" strokeWidth="1" opacity="0.4" />
    <line x1="60" y1="10" x2="60" y2="-5" stroke="hsl(270 60% 55%)" strokeWidth="1" opacity="0.3" />
    <defs>
      <linearGradient id="dw-grad" x1="60" y1="10" x2="60" y2="150" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(270 60% 50%)" stopOpacity="0.4" />
        <stop offset="100%" stopColor="hsl(230 75% 52%)" stopOpacity="0.15" />
      </linearGradient>
    </defs>
  </motion.svg>
);

export const HexShield = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.svg
    viewBox="0 0 140 160"
    fill="none"
    className={className}
    initial={{ opacity: 0, rotate: -15 }}
    animate={{ opacity: 1, rotate: 0 }}
    transition={{ delay, duration: 0.9, ease: "easeOut" }}
  >
    {/* Hexagon body */}
    <polygon points="70,8 130,42 130,118 70,152 10,118 10,42" fill="url(#hs-grad)" opacity="0.7" />
    <polygon points="70,8 130,42 130,118 70,152 10,118 10,42" fill="none" stroke="hsl(43 96% 56%)" strokeWidth="1.5" opacity="0.5" />
    {/* Inner hex */}
    <polygon points="70,35 105,55 105,105 70,125 35,105 35,55" fill="hsl(43 96% 56% / 0.08)" />
    <polygon points="70,35 105,55 105,105 70,125 35,105 35,55" fill="none" stroke="hsl(43 96% 56%)" strokeWidth="0.8" opacity="0.4" />
    {/* Crown symbol */}
    <path d="M50 72 L58 60 L66 70 L70 55 L74 70 L82 60 L90 72 L85 82 L55 82 Z" fill="hsl(43 96% 56%)" opacity="0.7" />
    {/* Energy pulses */}
    <circle cx="70" cy="80" r="20" fill="none" stroke="hsl(43 96% 56%)" strokeWidth="0.5" opacity="0.2" />
    <circle cx="70" cy="80" r="35" fill="none" stroke="hsl(43 96% 56%)" strokeWidth="0.3" opacity="0.1" />
    <defs>
      <linearGradient id="hs-grad" x1="70" y1="8" x2="70" y2="152" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(43 96% 56%)" stopOpacity="0.2" />
        <stop offset="100%" stopColor="hsl(43 96% 40%)" stopOpacity="0.05" />
      </linearGradient>
    </defs>
  </motion.svg>
);

export const TriangleSentinel = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.svg
    viewBox="0 0 100 140"
    fill="none"
    className={className}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.7, ease: "easeOut" }}
  >
    {/* Main triangle */}
    <polygon points="50,5 95,130 5,130" fill="url(#ts-grad)" opacity="0.7" />
    <polygon points="50,5 95,130 5,130" fill="none" stroke="hsl(0 85% 60%)" strokeWidth="1.2" opacity="0.4" />
    {/* Inner triangle */}
    <polygon points="50,40 75,110 25,110" fill="hsl(0 85% 60% / 0.08)" />
    <polygon points="50,40 75,110 25,110" fill="none" stroke="hsl(0 85% 55%)" strokeWidth="0.8" opacity="0.3" />
    {/* Eye */}
    <circle cx="50" cy="82" r="8" fill="none" stroke="hsl(0 85% 65%)" strokeWidth="1.5" opacity="0.6" />
    <circle cx="50" cy="82" r="3" fill="hsl(0 85% 70%)" opacity="0.8" />
    {/* Energy streaks */}
    <line x1="50" y1="5" x2="50" y2="-10" stroke="hsl(0 85% 60%)" strokeWidth="1" opacity="0.3" />
    <line x1="95" y1="130" x2="105" y2="138" stroke="hsl(0 85% 55%)" strokeWidth="0.8" opacity="0.2" />
    <line x1="5" y1="130" x2="-5" y2="138" stroke="hsl(0 85% 55%)" strokeWidth="0.8" opacity="0.2" />
    <defs>
      <linearGradient id="ts-grad" x1="50" y1="5" x2="50" y2="130" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(0 85% 60%)" stopOpacity="0.3" />
        <stop offset="100%" stopColor="hsl(0 85% 45%)" stopOpacity="0.08" />
      </linearGradient>
    </defs>
  </motion.svg>
);

export const EnergyOrb = ({ className = "", color = "196 80% 55%", delay = 0 }: { className?: string; color?: string; delay?: number }) => (
  <motion.div
    className={`rounded-full ${className}`}
    style={{
      background: `radial-gradient(circle, hsl(${color} / 0.4) 0%, hsl(${color} / 0.1) 40%, transparent 70%)`,
      boxShadow: `0 0 20px hsl(${color} / 0.3), 0 0 60px hsl(${color} / 0.1)`,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.6, type: "spring" }}
  />
);
