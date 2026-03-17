import { useEffect, useState } from "react";

export function useCountUp(target: number, duration = 1500, delay = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let start: number | null = null;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, duration, delay]);

  return value;
}
