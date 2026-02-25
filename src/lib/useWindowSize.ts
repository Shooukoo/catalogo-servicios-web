"use client";

import { useState, useEffect } from "react";

interface WindowSize {
    width: number | undefined;
    height: number | undefined;
    isMobile: boolean;   // < 768px
    isTablet: boolean;   // 768px – 1024px
    isDesktop: boolean;  // > 1024px
}

/**
 * Returns live window dimensions and convenience breakpoint flags.
 * Safe for SSR — values are `undefined` until the first client render.
 */
export function useWindowSize(): WindowSize {
    const [size, setSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
        isMobile: false,
        isTablet: false,
        isDesktop: false,
    });

    useEffect(() => {
        function update() {
            const w = window.innerWidth;
            const h = window.innerHeight;
            setSize({
                width: w,
                height: h,
                isMobile: w < 768,
                isTablet: w >= 768 && w < 1024,
                isDesktop: w >= 1024,
            });
        }

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return size;
}
