import React, { useMemo } from "react";
import { RoughNotation } from "react-rough-notation";

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket";

interface HighlighterProps {
  action?: AnnotationAction;
  color?: string;
  colorVar?: "primary" | "accent" | "foreground" | "secondary" | "ring" | "border";
  strokeWidth?: number;
  animationDuration?: number;
  animationDelay?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  show?: boolean;
  animate?: boolean;
  className?: string;
  children: React.ReactNode;
  /** Utilise une implémentation CSS pour 'highlight' afin d'obtenir un calage parfait */
  cssHighlight?: boolean;
}

export default function Highlighter({
  action = "underline",
  color,
  colorVar = "accent",
  strokeWidth = 1.5,
  animationDuration = 600,
  animationDelay = 0,
  iterations = 1,
  padding = 2,
  multiline = true,
  show = true,
  animate = true,
  className,
  children,
  cssHighlight = true,
}: HighlighterProps) {
  // Résolution de la couleur une seule fois
  const resolvedColor = useMemo(() => {
    if (color) return color;
    
    if (typeof window !== "undefined") {
      const cssVar = getComputedStyle(document.documentElement)
        .getPropertyValue(`--${colorVar}`)
        .trim();
      if (cssVar) return cssVar;
    }
    
    // Fallback colors basés sur le thème
    const fallbacks = {
      primary: "hsl(262.1 83.3% 57.8%)",
      accent: "hsl(262.1 83.3% 57.8%)", 
      foreground: "hsl(210 40% 98%)",
      secondary: "hsl(217.2 32.6% 17.5%)",
      ring: "hsl(262.1 83.3% 57.8%)",
      border: "hsl(217.2 32.6% 17.5%)"
    };
    
    return fallbacks[colorVar] || fallbacks.accent;
  }, [color, colorVar]);

  // S'assure que l'annotation épouse exactement le mot ciblé
  const spanStyle: React.CSSProperties = useMemo(() => ({
    display: "inline-block",
    position: "relative",
    width: "max-content",
    whiteSpace: multiline ? "normal" : "nowrap",
    verticalAlign: "baseline",
  }), [multiline]);

  // Fallback CSS pour 'highlight' : calage strict sur le mot
  if (action === "highlight" && cssHighlight) {
    const varStyle = {
      "--marker-color": resolvedColor,
      "--marker-duration": `${animationDuration}ms`,
      "--marker-delay": `${animationDelay}ms`,
    } as React.CSSProperties;

    return (
      <span className={className} style={{ ...spanStyle, ...varStyle }} data-show={(show && animate) ? "true" : "false"}>
        <span className="marker-highlight">
          {children}
        </span>
      </span>
    );
  }

  return (
    <RoughNotation
      type={action}
      show={show}
      animate={animate}
      color={resolvedColor}
      strokeWidth={strokeWidth}
      animationDuration={animationDuration}
      animationDelay={animationDelay}
      iterations={iterations}
      padding={padding}
      multiline={multiline}
    >
      <span className={className} style={spanStyle}>
        {children}
      </span>
    </RoughNotation>
  );
}