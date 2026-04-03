"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: string;
    duration?: string;
    animation?: string;
    threshold?: number;
    once?: boolean;
    offset?: number; // Distance from viewport edge in pixels
}

/**
 * ScrollReveal component that uses Intersection Observer to trigger 
 * Tailwind-based animations when an element enters the viewport.
 */
export default function ScrollReveal({
    children,
    className = "",
    delay = "",
    duration = "duration-500",
    animation = "animate-pop-bounce",
    threshold = 0.05,
    once = true,
    offset = 70, // Trigger 40px after entering viewport by default
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) {
                        observer.unobserve(entry.target);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin: `0px 0px -${offset}px 0px` // Negative bottom margin triggers it later
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            observer.disconnect();
        };
    }, [once, threshold, offset]);

    return (
        <div
            ref={ref}
            className={`
                ${className}
                transition-all
                ${isVisible
                    ? `${animation} ${delay} ${duration} visible fill-mode-both`
                    : "invisible pointer-events-none"
                }
            `}
        >
            {children}
        </div>
    );
}
