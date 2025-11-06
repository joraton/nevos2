import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackgroundBeamsProps {
  className?: string;
}

// Generate a cubic bezier path between two points with control points
function makeCurve(width: number, height: number, seed: number) {
  const rand = (min: number, max: number) => min + (max - min) * Math.abs(Math.sin(seed += 0.7));
  const x1 = rand(0, width);
  const y1 = rand(0, height);
  const x2 = rand(0, width);
  const y2 = rand(0, height);
  const cx1 = rand(0, width);
  const cy1 = rand(0, height);
  const cx2 = rand(0, width);
  const cy2 = rand(0, height);
  return `M ${x1},${y1} C ${cx1},${cy1} ${cx2},${cy2} ${x2},${y2}`;
}

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  // Precompute beam configs for stable render
  const beams = useMemo(() => {
    const count = 50;
    const arr = Array.from({ length: count }, (_, i) => {
      const seed = i * 12.3456;
      const duration = 10 + (i % 10) + Math.random() * 10; // 10-20s
      const delay = (i % 5) * 0.3;
      const width = 1000;
      const height = 1000;
      return {
        d: makeCurve(width, height, seed),
        duration,
        delay,
        opacity: 0.25 + (i % 5) * 0.1,
        strokeWidth: 0.8 + (i % 3) * 0.4,
      };
    });
    return arr;
  }, []);

  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#18CCFC" />
            <stop offset="50%" stopColor="#6344F5" />
            <stop offset="100%" stopColor="#AE48FF" />
          </linearGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#softGlow)" style={{ mixBlendMode: "screen" }}>
          {beams.map((beam, i) => (
            <motion.path
              key={i}
              d={beam.d}
              stroke="url(#beamGradient)"
              strokeWidth={beam.strokeWidth}
              fill="none"
              opacity={beam.opacity}
              vectorEffect="non-scaling-stroke"
              // Dash flow illusion along the path
              pathLength={1}
              strokeDasharray="0.06 1"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -1 }}
              transition={{ duration: beam.duration, repeat: Infinity, ease: "linear", delay: beam.delay }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

export default BackgroundBeams;