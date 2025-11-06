/**
 * Static Globe - SVG version for mobile
 * Mimics the appearance of the 3D WebGL Globe without animations
 */

interface StaticGlobeProps {
  size?: number;
  className?: string;
}

export const StaticGlobe = ({ size = 280, className = "" }: StaticGlobeProps) => {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Définir les gradients */}
        <defs>
          {/* Gradient principal du globe */}
          <radialGradient id="globeGradient" cx="35%" cy="35%">
            <stop offset="0%" stopColor="oklch(0.65 0.15 260)" />
            <stop offset="30%" stopColor="oklch(0.55 0.18 250)" />
            <stop offset="60%" stopColor="oklch(0.45 0.15 245)" />
            <stop offset="100%" stopColor="oklch(0.25 0.08 240)" />
          </radialGradient>

          {/* Gradient de brillance */}
          <radialGradient id="shineGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.1)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Ombre */}
          <radialGradient id="shadowGradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="70%" stopColor="rgba(0, 0, 0, 0.1)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0.3)" />
          </radialGradient>
        </defs>

        {/* Ombre du globe */}
        <ellipse
          cx="250"
          cy="280"
          rx="200"
          ry="30"
          fill="url(#shadowGradient)"
          opacity="0.6"
        />

        {/* Corps principal du globe */}
        <circle
          cx="250"
          cy="250"
          r="200"
          fill="url(#globeGradient)"
        />

        {/* Lignes de latitude (horizontales) */}
        {[0, 60, 120, 180, 240, 300, 360, 420].map((y) => (
          <ellipse
            key={`lat-${y}`}
            cx="250"
            cy="250"
            rx="200"
            ry={y / 2}
            fill="none"
            stroke="oklch(0.4 0.1 250)"
            strokeWidth="1"
            opacity="0.3"
          />
        ))}

        {/* Lignes de longitude (verticales) - courbes */}
        {[-150, -100, -50, 0, 50, 100, 150].map((x) => (
          <ellipse
            key={`lon-${x}`}
            cx="250"
            cy="250"
            rx="200"
            ry="200"
            fill="none"
            stroke="oklch(0.4 0.1 250)"
            strokeWidth="1"
            opacity="0.3"
            transform={`rotate(90 250 250) translate(${x} 0)`}
          />
        ))}

        {/* Points lumineux sur le globe (comme les villes/points de connexion) */}
        {[
          { x: 180, y: 200 },
          { x: 280, y: 220 },
          { x: 230, y: 280 },
          { x: 310, y: 260 },
          { x: 200, y: 300 },
          { x: 270, y: 180 },
        ].map((point, i) => (
          <circle
            key={`point-${i}`}
            cx={point.x}
            cy={point.y}
            r="3"
            fill="oklch(0.8 0.2 280)"
            opacity="0.8"
          >
            {/* Pulse effect - but static for mobile */}
          </circle>
        ))}

        {/* Effet de brillance au-dessus */}
        <circle
          cx="250"
          cy="250"
          r="200"
          fill="url(#shineGradient)"
        />

        {/* Contour du globe */}
        <circle
          cx="250"
          cy="250"
          r="200"
          fill="none"
          stroke="oklch(0.5 0.1 245)"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>
    </div>
  );
};
