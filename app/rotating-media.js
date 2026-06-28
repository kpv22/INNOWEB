"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

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

export default function RotatingMedia({
  items,
  sizes,
  priority = false,
  intervalMs = 4200
}) {
  const safeItems = useMemo(() => items.filter(Boolean), [items]);
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    if (safeItems.length < 2 || reducedMotion) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % safeItems.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, reducedMotion, safeItems.length]);

  const goTo = (nextIndex) => {
    setActiveIndex((nextIndex + safeItems.length) % safeItems.length);
  };

  const onTouchStart = (event) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const onTouchEnd = (event) => {
    if (touchStartX === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const deltaX = touchEndX - touchStartX;

    if (Math.abs(deltaX) > 42) {
      goTo(activeIndex + (deltaX < 0 ? 1 : -1));
    }

    setTouchStartX(null);
  };

  return (
    <div className="media-rotator" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {safeItems.map((item, index) => (
        <div
          key={`${item.src}-${index}`}
          className={`media-slide ${index === activeIndex ? "is-active" : ""}`}
          aria-hidden={index === activeIndex ? undefined : true}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes={sizes}
            priority={priority && index === 0}
            className="media-slide-image"
          />
        </div>
      ))}

    </div>
  );
}
