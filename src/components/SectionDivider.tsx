const SectionDivider = () => (
  <div className="relative h-24 lg:h-32 overflow-hidden">
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <linearGradient id="dividerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          <stop offset="30%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
          <stop offset="70%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,60 C360,20 720,100 1080,50 C1260,25 1380,60 1440,60"
        fill="none"
        stroke="url(#dividerGrad)"
        strokeWidth="1.5"
      />
      <path
        d="M0,70 C300,90 600,30 900,70 C1100,95 1300,45 1440,65"
        fill="none"
        stroke="url(#dividerGrad)"
        strokeWidth="0.8"
        opacity="0.5"
      />
    </svg>
  </div>
);

export default SectionDivider;
