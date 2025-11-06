import { useState, useEffect } from 'react';

/**
 * Hook to detect if the viewport is mobile-sized
 * @param breakpoint - The maximum width to consider as mobile (default: 768px)
 * @returns boolean - true if viewport width is less than breakpoint
 */
export const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return;

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Initial check
    checkIsMobile();

    // Add event listener
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [breakpoint]);

  return isMobile;
};
