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
}

/**
 * ScrollReveal component that uses Intersection Observer to trigger 
 * Tailwind-based animations when an element enters the viewport.
 * 
 * Uses 'animate-in' classes (assuming tailwindcss-animate or custom equivalents are available).
 */
export default function ScrollReveal({
    children,
    className = "",
    delay = "",
    duration = "duration-500",
    animation = "animate-pop-bounce",
    threshold = 0.05,
    once = true,
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
            { threshold }
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
    }, [once, threshold]);

    return (
        <div
            ref={ref}
            className={`
                ${className}
                ${isVisible 
                    ? `${animation} ${delay} ${duration} fill-mode-both` 
                    : "opacity-0 pointer-events-none"
                }
            `}
        >
            {children}
        </div>
    );
}
