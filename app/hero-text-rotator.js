"use client";

import { useEffect, useMemo, useState } from "react";

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mediaQuery.matches);

    onChange();
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return reducedMotion;
}

export default function HeroTextRotator({ items, intervalMs = 3200 }) {
  const safeItems = useMemo(() => items.filter(Boolean), [items]);
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const longestItem = useMemo(
    () =>
      safeItems.reduce((longest, current) =>
        current.length > longest.length ? current : longest
      , safeItems[0] ?? ""),
    [safeItems]
  );

  useEffect(() => {
    if (safeItems.length < 2 || reducedMotion) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % safeItems.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, reducedMotion, safeItems.length]);

  return (
    <span className="hero-rotator">
      <span className="hero-rotator-sizer" aria-hidden="true">
        {longestItem}
      </span>
      {safeItems.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className={`hero-rotator-item ${index === activeIndex ? "is-active" : ""}`}
          aria-hidden={index === activeIndex ? undefined : true}
        >
          {item}
        </span>
      ))}
    </span>
  );
}
