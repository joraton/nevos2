/**
 * @author: @dorian_baffier
 * @description: Background Paths
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { memo, useMemo } from "react";
import { motion } from "framer-motion";

interface Point {
    x: number;
    y: number;
}

interface PathData {
    id: string;
    d: string;
    opacity: number;
    width: number;
    duration: number;
    delay: number;
}

// Path generation function
function generateAestheticPath(
    index: number,
    position: number,
    type: "primary" | "secondary" | "accent"
): string {
    const baseAmplitude =
        type === "primary" ? 150 : type === "secondary" ? 100 : 60;
    const phase = index * 0.2;
    const points: Point[] = [];
    const segments = type === "primary" ? 10 : type === "secondary" ? 8 : 6;

    const startX = 2400;
    const startY = 800;
    const endX = -2400;
    const endY = -800 + index * 25;

    for (let i = 0; i <= segments; i++) {
        const progress = i / segments;
        const eased = 1 - (1 - progress) ** 2;

        const baseX = startX + (endX - startX) * eased;
        const baseY = startY + (endY - startY) * eased;

        const amplitudeFactor = 1 - eased * 0.3;
        const wave1 =
            Math.sin(progress * Math.PI * 3 + phase) *
            (baseAmplitude * 0.7 * amplitudeFactor);
        const wave2 =
            Math.cos(progress * Math.PI * 4 + phase) *
            (baseAmplitude * 0.3 * amplitudeFactor);
        const wave3 =
            Math.sin(progress * Math.PI * 2 + phase) *
            (baseAmplitude * 0.2 * amplitudeFactor);

        points.push({
            x: baseX * position,
            y: baseY + wave1 + wave2 + wave3,
        });
    }

    const pathCommands = points.map((point: Point, i: number) => {
        if (i === 0) return `M ${point.x} ${point.y}`;
        const prevPoint = points[i - 1];
        const tension = 0.4;
        const cp1x = prevPoint.x + (point.x - prevPoint.x) * tension;
        const cp1y = prevPoint.y;
        const cp2x = prevPoint.x + (point.x - prevPoint.x) * (1 - tension);
        const cp2y = point.y;
        return `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
    });

    return pathCommands.join(" ");
}

const generateUniqueId = (prefix: string): string =>
    `${prefix}-${Math.random().toString(36).substr(2, 9)}`;

// Memoized FloatingPaths component
const FloatingPaths = memo(function FloatingPaths({
    position,
}: {
    position: number;
}) {
    // Increased number of paths while maintaining optimization
    const primaryPaths: PathData[] = useMemo(
        () =>
            Array.from({ length: 12 }, (_, i) => ({
                id: generateUniqueId("primary"),
                d: generateAestheticPath(i, position, "primary"),
                opacity: 0.15 + i * 0.02,
                width: 4 + i * 0.3,
                duration: 25,
                delay: 0,
            })),
        [position]
    );

    const secondaryPaths: PathData[] = useMemo(
        () =>
            Array.from({ length: 15 }, (_, i) => ({
                id: generateUniqueId("secondary"),
                d: generateAestheticPath(i, position, "secondary"),
                opacity: 0.12 + i * 0.015,
                width: 3 + i * 0.25,
                duration: 20,
                delay: 0,
            })),
        [position]
    );

    const accentPaths: PathData[] = useMemo(
        () =>
            Array.from({ length: 10 }, (_, i) => ({
                id: generateUniqueId("accent"),
                d: generateAestheticPath(i, position, "accent"),
                opacity: 0.08 + i * 0.12,
                width: 2 + i * 0.2,
                duration: 15,
                delay: 0,
            })),
        [position]
    );

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
                className="w-full h-full text-primary"
                viewBox="-2400 -800 4800 1600"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                <defs>
                    <linearGradient
                        id="primaryGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop offset="0%" stopColor="oklch(0.6723 0.1606 244.9955)" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="oklch(0.6692 0.1607 245.0110)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="oklch(0.6818 0.1584 243.3540)" stopOpacity="0.3" />
                    </linearGradient>
                </defs>

                <g className="primary-waves">
                    {primaryPaths.map((path) => (
                        <motion.path
                            key={path.id}
                            d={path.d}
                            stroke="url(#primaryGradient)"
                            strokeWidth={path.width}
                            strokeLinecap="round"
                            animate={{
                                y: [0, -120, 0],
                                x: [0, 40, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "reverse",
                                },
                                x: {
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "reverse",
                                },
                            }}
                            style={{ opacity: path.opacity }}
                        />
                    ))}
                </g>

                <g className="secondary-waves" style={{ opacity: 0.8 }}>
                    {secondaryPaths.map((path) => (
                        <motion.path
                            key={path.id}
                            d={path.d}
                            stroke="url(#primaryGradient)"
                            strokeWidth={path.width}
                            strokeLinecap="round"
                            animate={{
                                y: [0, -80, 0],
                                x: [0, 30, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "reverse",
                                },
                                x: {
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "reverse",
                                },
                            }}
                            style={{ opacity: path.opacity }}
                        />
                    ))}
                </g>

                <g className="accent-waves" style={{ opacity: 0.6 }}>
                    {accentPaths.map((path) => (
                        <motion.path
                            key={path.id}
                            d={path.d}
                            stroke="url(#primaryGradient)"
                            strokeWidth={path.width}
                            strokeLinecap="round"
                            animate={{
                                y: [0, -40, 0],
                                x: [0, 20, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "reverse",
                                },
                                x: {
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "reverse",
                                },
                            }}
                            style={{ opacity: path.opacity }}
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
});

export default memo(FloatingPaths);
