/**
 * @description: Background Gradient - Animated radial gradients for premium card effects
 * @version: 1.0.0
 * @license: MIT
 */

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackgroundGradientProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: BackgroundGradientProps) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className={cn("relative group", containerClassName)}>
      {/* Single gradient layer - simplified */}
      <div
        className={cn(
          "absolute inset-0 rounded-3xl opacity-60 group-hover:opacity-100 blur-sm transition-opacity duration-500",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,transparent)]"
        )}
      />

      <div className={cn("relative", className)}>{children}</div>
    </div>
  );
};
