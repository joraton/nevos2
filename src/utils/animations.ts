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
 * On mobile: simpler, faster animations with reduced motion
 * On desktop: full animations
 */
export const getOptimizedAnimation = (
  isMobile: boolean,
  desktopConfig: AnimationConfig
): AnimationConfig => {
  if (!isMobile) {
    return desktopConfig;
  }

  // Mobile: simplified animations
  const mobileConfig: AnimationConfig = {
    ...desktopConfig,
    transition: {
      duration: 0.3, // Faster on mobile
      ease: "easeOut",
    },
  };

  // Remove complex transformations on mobile
  if (desktopConfig.animate) {
    const { scale, rotate, ...rest } = desktopConfig.animate;
    mobileConfig.animate = rest;
  }

  if (desktopConfig.whileInView) {
    const { scale, rotate, ...rest } = desktopConfig.whileInView;
    mobileConfig.whileInView = rest;
  }

  return mobileConfig;
};

/**
 * Returns animation props for scroll-triggered animations
 * On mobile: reduces the number of animated properties
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
    // Mobile: simple fade-in only
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin: "-50px" },
      transition: {
        duration: 0.3,
        delay: stagger ? delay * 0.05 : delay,
      },
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
 */
export const addWillChange = (properties: string[]): React.CSSProperties => {
  return {
    willChange: properties.join(", "),
  };
};
