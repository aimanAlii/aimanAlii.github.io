"use client";

import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotate: number;
}

const SPARKLE_COLORS = [
  "#f6b9e6", // soft pink
  "#e3b6f7", // orchid
  "#c9a6f5", // lavender
  "#ffd3f0", // pale pink
  "#ffe3a8", // soft gold glint
  "#d8c2ff", // periwinkle
];

const MAX_SPARKLES = 26;
const SPAWN_INTERVAL_MS = 35;
const LIFETIME_MS = 700;

let idCounter = 0;

export function Cursor() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isFinePointer = useMediaQuery("(pointer: fine)");
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const lastSpawn = useRef(0);

  useEffect(() => {
    if (!isDesktop || !isFinePointer) return;

    function handleMove(e: MouseEvent) {
      const now = performance.now();
      if (now - lastSpawn.current < SPAWN_INTERVAL_MS) return;
      lastSpawn.current = now;

      const id = ++idCounter;
      const sparkle: Sparkle = {
        id,
        x: e.clientX + (Math.random() * 14 - 7),
        y: e.clientY + (Math.random() * 14 - 7),
        size: 5 + Math.random() * 6,
        color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
        rotate: Math.random() * 360,
      };

      setSparkles((prev) => {
        const next = [...prev, sparkle];
        return next.length > MAX_SPARKLES ? next.slice(next.length - MAX_SPARKLES) : next;
      });

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, LIFETIME_MS);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isDesktop, isFinePointer]);

  if (!isDesktop || !isFinePointer) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] overflow-hidden" aria-hidden>
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="star-shape absolute animate-sparkle"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            backgroundColor: s.color,
            boxShadow: `0 0 6px ${s.color}, 0 0 2px ${s.color}`,
            transform: `translate(-50%, -50%) rotate(${s.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
