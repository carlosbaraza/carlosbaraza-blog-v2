"use client";

import { useId, useRef, useEffect, useCallback, type ReactNode } from "react";

interface NoiseDistortionImageProps {
  children: ReactNode;
  className?: string;
  maxScale?: number;
  duration?: number;
  baseFrequency?: number;
  groupHover?: boolean;
}

export function NoiseDistortionImage({
  children,
  className,
  maxScale = 20,
  duration = 400,
  baseFrequency = 0.015,
  groupHover = false,
}: NoiseDistortionImageProps) {
  const reactId = useId();
  const filterId = `distort${reactId.replace(/:/g, "")}`;

  const containerRef = useRef<HTMLDivElement>(null);
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null);
  const animRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const fromRef = useRef<number>(0);
  const toRef = useRef<number>(0);

  // Derive a stable seed from the ID for per-card noise variety
  const seed = (() => {
    let h = 0;
    for (const c of filterId) h = ((h << 5) - h + c.charCodeAt(0)) | 0;
    return Math.abs(h) % 1000;
  })();

  const getCurrentScale = useCallback((): number => {
    const val = displacementRef.current?.getAttribute("scale");
    return val ? parseFloat(val) : 0;
  }, []);

  const animate = useCallback(
    (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const t = Math.min(elapsed / duration, 1);
      // Cubic ease-in-out
      const eased =
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const current =
        fromRef.current + (toRef.current - fromRef.current) * eased;

      displacementRef.current?.setAttribute("scale", String(current));

      if (t < 1) {
        animRef.current = requestAnimationFrame(animate);
      }
    },
    [duration],
  );

  const startAnimation = useCallback(
    (target: number) => {
      cancelAnimationFrame(animRef.current);
      startTimeRef.current = 0;
      fromRef.current = getCurrentScale();
      toRef.current = target;
      animRef.current = requestAnimationFrame(animate);
    },
    [animate, getCurrentScale],
  );

  useEffect(() => {
    if (!groupHover) return () => cancelAnimationFrame(animRef.current);

    const el = containerRef.current?.closest(".group") as HTMLElement | null;
    if (!el) return () => cancelAnimationFrame(animRef.current);

    const enter = () => startAnimation(maxScale);
    const leave = () => startAnimation(0);
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);

    return () => {
      cancelAnimationFrame(animRef.current);
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, [groupHover, maxScale, startAnimation]);

  return (
    <>
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
      >
        <filter id={filterId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={`${baseFrequency} ${baseFrequency}`}
            numOctaves={3}
            seed={seed}
            result="noise"
          />
          <feDisplacementMap
            ref={displacementRef}
            in="SourceGraphic"
            in2="noise"
            scale={0}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <div
        ref={containerRef}
        className={className}
        style={{
          filter: `url(#${filterId})`,
          willChange: "filter",
        }}
        onMouseEnter={groupHover ? undefined : () => startAnimation(maxScale)}
        onMouseLeave={groupHover ? undefined : () => startAnimation(0)}
      >
        {children}
      </div>
    </>
  );
}
