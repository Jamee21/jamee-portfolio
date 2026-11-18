"use client";

import { useState } from "react";

/**
 * FlipCard
 * --------
 * CSS 3-D flip card.
 *
 * Desktop  — flips on hover.
 * Mobile   — flips on tap (toggles with a click).
 * Keyboard — flips on focus-within (Tab into the card).
 *
 * Props
 *   front      – ReactNode for the front face
 *   back       – ReactNode for the back face
 *   className  – extra classes on the outer wrapper
 *   height     – Tailwind height class  (default "h-72")
 */
export default function FlipCard({ front, back, className = "", height = "h-72" }) {
  const [tapped, setTapped] = useState(false);

  return (
    <div
      className={`group/flip [perspective:1200px] w-full ${height} ${className}`}
      onClick={() => setTapped((p) => !p)}
      /* keyboard: space/enter also toggle */
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          setTapped((p) => !p);
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={tapped}
      aria-label="Flip card to see details"
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] motion-reduce:transition-none"
        style={{
          transform: tapped ? "rotateY(180deg)" : undefined,
        }}
        /* hover via CSS — works on desktop without JS state */
      >
        {/* Hover via Tailwind group (desktop) — overridden by tapped state via inline style */}
        <style>{`
          @media (hover: hover) {
            .group\\/flip:hover > div {
              transform: rotateY(180deg);
            }
          }
        `}</style>

        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden">
          {front}
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden">
          {back}
        </div>
      </div>
    </div>
  );
}
