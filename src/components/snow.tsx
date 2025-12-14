"use client";
import React, { useEffect, useState } from 'react';

type Flake = { id: number; left: number; size: number; delay: number; duration: number; opacity: string };

export default function Snow() {
  const [mounted, setMounted] = useState(false);
  const [flakes, setFlakes] = useState<Flake[]>([]);

  useEffect(() => {
    // Only generate flakes on the client after mount to avoid SSR/client hydration mismatch
    setMounted(true);
    const generated = Array.from({ length: 40 }).map((_, i) => {
      const left = Math.round(Math.random() * 10000) / 100; // percent
      const size = Math.round(6 + Math.random() * 18); // px
      const delay = Math.round(Math.random() * -20 * 100) / 100; // negative delay to stagger
      const duration = Math.round(8 + Math.random() * 12); // seconds
      const opacity = (0.3 + Math.random() * 0.7).toFixed(2);
      return { id: i, left, size, delay, duration, opacity };
    });
    setFlakes(generated);
  }, []);

  if (!mounted) return null;

  return (
    <div aria-hidden className="snow pointer-events-none fixed inset-0 z-50">
      {flakes.map(f => (
        <span
          key={f.id}
          className="flake"
          style={{
            left: `${f.left}%`,
            fontSize: `${f.size}px`,
            animationDelay: `${f.delay}s, ${f.delay}s`,
            animationDuration: `${f.duration}s, ${Math.max(4, Math.round(f.duration / 2))}s`,
            opacity: f.opacity,
          }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}
