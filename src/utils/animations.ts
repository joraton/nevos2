/**
 * Animation utilities for better mobile performance
 * Simplifies or disables heavy animations on mobile devices
 */

interface AnimationConfig {
  initial?: any;
  animate?: any;
  whileInView?: any;
  transition?: any;
}

/**
 * Returns optimized animation props based on device type
 * On mobile: NO animations (static display)
 * On desktop: full animations
 */
export const getOptimizedAnimation = (
  isMobile: boolean,
  desktopConfig: AnimationConfig
): AnimationConfig => {
  if (!isMobile) {
    return desktopConfig;
  }

  // Mobile: NO animations - just show the element
  return {
    initial: undefined,
    animate: undefined,
    whileInView: undefined,
    transition: undefined,
  };
};

/**
 * Returns animation props for scroll-triggered animations
 * On mobile: NO animations (static display)
 * On desktop: full animations with slide
 */
export const getScrollAnimation = (
  isMobile: boolean,
  options: {
    delay?: number;
    stagger?: boolean;
  } = {}
): AnimationConfig => {
  const { delay = 0, stagger = false } = options;

  if (isMobile) {
    // Mobile: NO animations - just show the element
    return {
      initial: undefined,
      animate: undefined,
      whileInView: undefined,
      transition: undefined,
    };
  }

  // Desktop: full animation with slide
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: {
      duration: 0.6,
      delay: stagger ? delay * 0.1 : delay,
      ease: "easeOut",
    },
  };
};

/**
 * Add will-change property for better performance on critical animations
 * On mobile: NO will-change (can cause performance issues)
 * On desktop: adds will-change for smooth animations
 */
export const addWillChange = (isMobile: boolean, properties: string[]): React.CSSProperties => {
  if (isMobile) {
    return {};
  }

  return {
    willChange: properties.join(", "),
  };
};
