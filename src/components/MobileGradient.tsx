import { motion } from "framer-motion";

interface MobileGradientProps {
  size?: number;
  className?: string;
}

/**
 * Lightweight animated gradient to replace Globe on mobile
 * Uses pure CSS animations for better performance
 */
export const MobileGradient = ({ size = 280, className = "" }: MobileGradientProps) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Animated gradient orb */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            radial-gradient(circle at 30% 30%,
              oklch(0.7 0.15 280) 0%,
              oklch(0.6 0.18 260) 25%,
              oklch(0.5 0.15 240) 50%,
              oklch(0.3 0.1 245) 75%,
              oklch(0.2 0.05 250) 100%
            )
          `,
          filter: "blur(1px)",
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Overlay shine effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            radial-gradient(circle at 20% 20%,
              rgba(255, 255, 255, 0.3) 0%,
              transparent 50%
            )
          `,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/20"
          style={{
            left: `${30 + i * 20}%`,
            top: `${40 + i * 10}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};
