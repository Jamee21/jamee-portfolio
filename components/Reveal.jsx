"use client";

import { useEffect, useRef, useState } from "react";

// Fades content in as it scrolls into view.
// - Content already on screen is never hidden, so nothing flashes on load.
// - Visitors who prefer reduced motion, or browsers without IntersectionObserver,
//   simply see everything.
export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    if (element.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    setWaiting(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWaiting(false);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition duration-500 ease-out ${
        waiting ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}