import React from 'react';

export const HeroFallback: React.FC = () => {
  return (
    <div
      className="relative w-full h-full min-h-[460px] sm:min-h-[540px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0A1E2C] select-none"
      aria-hidden="true"
    >
      {/* Background depth glows */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#135C63]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-56 h-56 rounded-full bg-[#F6C667]/20 blur-2xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1D7A84]/15 to-transparent river-light-sweep pointer-events-none rounded-full blur-2xl" />

      {/* Abstract Stepped Ghat & River Ribbon SVG */}
      <svg
        className="w-full h-full max-w-2xl max-h-[560px] opacity-90 drop-shadow-lg"
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D7A84" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#135C63" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0E293B" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="stepGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#258E9B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#143B54" />
          </linearGradient>

          <linearGradient id="stepGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#194764" />
            <stop offset="100%" stopColor="#113147" />
          </linearGradient>

          <radialGradient id="diyaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD175" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#F6C667" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#E29433" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0A1E2C" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Flowing River Ribbon */}
        <path
          d="M 40 370 Q 210 290, 360 350 T 590 280 L 600 495 L 30 495 Z"
          fill="url(#riverGrad)"
        />

        {/* Stepped Ghat Tiers */}
        {/* Tier 1 (Lowest terrace) */}
        <path
          d="M 240 415 L 530 270 L 575 288 L 285 432 Z"
          fill="url(#stepGrad1)"
          stroke="#1E5474"
          strokeWidth="1.2"
        />
        {/* Tier 2 */}
        <path
          d="M 275 382 L 520 260 L 555 272 L 310 396 Z"
          fill="url(#stepGrad2)"
          stroke="#194764"
          strokeWidth="1.2"
        />
        {/* Tier 3 */}
        <path
          d="M 310 348 L 510 250 L 538 260 L 335 362 Z"
          fill="#194764"
          stroke="#1E5474"
          strokeWidth="1"
        />
        {/* Tier 4 with Marigold highlight */}
        <path
          d="M 345 316 L 498 240 L 520 248 L 368 326 Z"
          fill="#1E5474"
          fillOpacity="0.8"
          stroke="#E29433"
          strokeWidth="1.5"
        />
        {/* Tier 5 (Crest) */}
        <path
          d="M 380 284 L 488 230 L 504 236 L 396 292 Z"
          fill="#236084"
          stroke="#F6C667"
          strokeWidth="1.2"
        />

        {/* Floating Diya 1 reflection */}
        <circle cx="210" cy="355" r="42" fill="url(#diyaGlow)" />
        <circle cx="210" cy="355" r="5" fill="#FFD175" />
        <circle cx="210" cy="355" r="2" fill="#FFFFFF" />

        {/* Diya 2 reflection */}
        <circle cx="390" cy="330" r="24" fill="url(#diyaGlow)" opacity="0.7" />
        <circle cx="390" cy="330" r="3.5" fill="#F6C667" opacity="0.9" />

        {/* Atmospheric contour river ripples */}
        <line x1="70" y1="440" x2="250" y2="440" stroke="#EEF2F1" strokeOpacity="0.12" strokeDasharray="5 7" />
        <line x1="110" y1="465" x2="310" y2="465" stroke="#EEF2F1" strokeOpacity="0.1" strokeDasharray="4 6" />
      </svg>
    </div>
  );
};
