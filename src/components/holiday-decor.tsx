import React, { useState } from 'react';

export default function HolidayDecor() {
  const [santaFailed, setSantaFailed] = useState(false);
  const [reindeerFailed, setReindeerFailed] = useState(false);

  return (
    <div aria-hidden className="holiday-decor pointer-events-none fixed inset-y-0 z-40">
      {/* Left: Santa image with SVG fallback */}
      <div className="decor-left hidden lg:block">
        {!santaFailed ? (
          <img
            src="/assets/holiday/santa.png"
            alt="Santa"
            className="santa"
            width={120}
            height={120}
            onError={() => setSantaFailed(true)}
          />
        ) : (
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="santa">
            <title>Santa</title>
            <circle cx="60" cy="60" r="36" fill="#FFE0D6" />
            <rect x="26" y="26" width="68" height="36" rx="18" fill="#C8102E" />
            <circle cx="40" cy="60" r="6" fill="#6B2B1F" />
            <circle cx="80" cy="60" r="6" fill="#6B2B1F" />
            <path d="M48 76c4 4 20 4 24 0" stroke="#6B2B1F" strokeWidth="3" strokeLinecap="round" />
            <circle cx="90" cy="30" r="8" fill="#fff" />
          </svg>
        )}
      </div>

      {/* Right: Reindeer image with SVG fallback */}
      <div className="decor-right hidden lg:block">
        {!reindeerFailed ? (
          <img
            src="/assets/holiday/reindeer.png"
            alt="Reindeer"
            className="reindeer"
            width={120}
            height={120}
            onError={() => setReindeerFailed(true)}
          />
        ) : (
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="reindeer">
            <title>Reindeer</title>
            <ellipse cx="60" cy="64" rx="34" ry="28" fill="#A66C39" />
            <circle cx="44" cy="58" r="6" fill="#fff" />
            <circle cx="76" cy="58" r="6" fill="#fff" />
            <rect x="52" y="76" width="16" height="14" rx="7" fill="#5B2E0B" />
            <path d="M20 16c12 8 16 20 16 20" stroke="#A66C39" strokeWidth="6" strokeLinecap="round" />
            <path d="M100 16c-12 8-16 20-16 20" stroke="#A66C39" strokeWidth="6" strokeLinecap="round" />
          </svg>
        )}
      </div>
    </div>
  );
}
