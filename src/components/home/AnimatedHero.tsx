import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Activity } from 'lucide-react';

interface HeadingLine {
  text: string;
  isAccent?: boolean;
}

const HEADING_LINES: HeadingLine[] = [
  { text: 'See the river.' },
  { text: 'Understand the city.', isAccent: true },
  { text: 'Act with care.' },
];

export const AnimatedHero: React.FC = () => {
  const [revealedChars, setRevealedChars] = useState(false);
  const [revealedSubheading, setRevealedSubheading] = useState(false);
  const [revealedButtons, setRevealedButtons] = useState(false);
  const [revealedTag, setRevealedTag] = useState(false);

  useEffect(() => {
    // 1. Character entrance after initial delay (200ms)
    const charTimer = setTimeout(() => {
      setRevealedChars(true);
    }, 200);

    // 2. Subheading fade-in at 800ms
    const subTimer = setTimeout(() => {
      setRevealedSubheading(true);
    }, 800);

    // 3. Action buttons fade-in at 1200ms
    const btnTimer = setTimeout(() => {
      setRevealedButtons(true);
    }, 1200);

    // 4. Tag card fade-in at 1400ms
    const tagTimer = setTimeout(() => {
      setRevealedTag(true);
    }, 1400);

    return () => {
      clearTimeout(charTimer);
      clearTimeout(subTimer);
      clearTimeout(btnTimer);
      clearTimeout(tagTimer);
    };
  }, []);

  // Precompute character stagger indices across lines
  let charCounter = 0;
  const charDelay = 28; // ms per character

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#06131D] select-none"
      aria-label="Hero Introduction"
    >
      {/* Full-screen Background Video: Absolutely positioned, object-cover, NO OVERLAY / NO GRADIENT / NO DIMMING */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          type="video/mp4"
        />
      </video>

      {/* Spacing spacer for floating navbar */}
      <div className="w-full pt-28 sm:pt-32" />

      {/* Hero Content (Bottom of viewport) */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-end pb-12 lg:pb-16 max-w-7xl mx-auto">
        {/* 2-column grid on large screens: lg:grid lg:grid-cols-12 lg:items-end */}
        <div className="lg:grid lg:grid-cols-12 lg:items-end gap-8">
          {/* Left Column - Main content (7-8 cols) */}
          <div className="lg:col-span-8">
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full liquid-glass border border-white/20 mb-4 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#E29433] shadow-[0_0_10px_rgba(226,148,51,0.9)] animate-pulse" />
              <span className="text-xs sm:text-[13px] font-semibold tracking-widest uppercase text-[#F6C667]">
                A Civic Water-Awareness Project for Varanasi
              </span>
            </div>

            {/* Character-by-Character Animated Heading */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-5 leading-[1.06] text-white tracking-[-0.04em]"
            >
              {HEADING_LINES.map((line) => {
                const chars = Array.from(line.text);
                return (
                  <span key={line.text} className="block">
                    {chars.map((char) => {
                      const stagger = charCounter * charDelay;
                      charCounter++;
                      return (
                        <span
                          key={`${line.text}-${charCounter}`}
                          className={`char-span ${revealedChars ? 'revealed' : ''} ${
                            line.isAccent && char !== ' ' ? 'text-[#F6C667]' : 'text-white'
                          }`}
                          style={{ transitionDelay: `${stagger}ms` }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      );
                    })}
                  </span>
                );
              })}
            </h1>

            {/* Subheading: Fade-in 800ms delay, 1000ms duration */}
            <p
              id="hero-subheading"
              className={`fade-in-element ${
                revealedSubheading ? 'revealed' : ''
              } text-base md:text-lg text-[#CBD5D1] mb-6 max-w-xl font-normal leading-relaxed`}
              style={{ transitionDuration: '1000ms' }}
            >
              JalRakshak brings environmental context, local ward hydrology, and
              transparent municipal guidance into one calm public-facing experience.
            </p>

            {/* Action Buttons: Fade-in 1200ms delay, 1000ms duration */}
            <div
              id="hero-buttons"
              className={`fade-in-element ${
                revealedButtons ? 'revealed' : ''
              } flex flex-wrap items-center gap-3.5 sm:gap-4`}
              style={{ transitionDuration: '1000ms' }}
            >
              {/* Primary Button - bg-white text-black */}
              <Link
                to="/wards"
                className="bg-white text-black px-7 py-3 rounded-xl font-medium hover:bg-gray-100 active:scale-[0.98] transition-all duration-200 text-sm md:text-base inline-flex items-center gap-2 shadow-xl group"
              >
                <span>Explore Wards Map</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary Button - liquid-glass border border-white/20 */}
              <Link
                to="/environment"
                className="liquid-glass border border-white/20 text-white px-7 py-3 rounded-xl font-medium hover:bg-white hover:text-black hover:border-transparent active:scale-[0.98] transition-all duration-300 text-sm md:text-base inline-flex items-center gap-2 shadow-lg"
              >
                <Activity className="w-4 h-4 text-[#F6C667]" />
                <span>Environment &amp; Weather</span>
              </Link>

              {/* Tertiary Ghost Button */}
              <Link
                to="/sources"
                className="liquid-glass border border-white/10 text-white/80 hover:text-white hover:border-white/30 px-5 py-3 rounded-xl font-medium active:scale-[0.98] transition-all duration-200 text-sm md:text-base"
              >
                Review Sources
              </Link>
            </div>
          </div>

          {/* Right Column - Hero Tag / Glass Card (4 cols) */}
          <div
            id="hero-tag"
            className={`fade-in-element ${
              revealedTag ? 'revealed' : ''
            } lg:col-span-4 flex flex-col items-start lg:items-end justify-end mt-8 lg:mt-0 gap-4`}
            style={{ transitionDuration: '1000ms' }}
          >
            {/* Liquid Glass Card */}
            <div className="liquid-glass border border-white/20 p-5 sm:p-6 rounded-2xl shadow-2xl backdrop-blur-md max-w-sm w-full">
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E29433] shadow-[0_0_8px_rgba(226,148,51,0.9)] animate-pulse" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#F6C667]">
                    Ganga Basin Telemetry
                  </span>
                </div>
                <span className="text-[10px] font-mono text-white/60 bg-white/10 px-2 py-0.5 rounded-sm">
                  Varanasi 25.31°N
                </span>
              </div>

              <div className="text-lg md:text-xl font-light text-white tracking-wide">
                Hydrology. Telemetry. Action.
              </div>

              <p className="text-xs text-white/70 mt-2 leading-relaxed">
                6 focus localities • Continuous ambient &amp; river telemetry • Verifiable municipal stewardship
              </p>

              <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#E29433]">
                <span>1M1B–IBM SkillsBuild</span>
                <span className="text-white/50">Sustainability Internship</span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <a
              href="#civic-foundation"
              className="inline-flex items-center gap-2 text-xs font-medium text-white/75 hover:text-white transition-colors group px-3.5 py-1.5 rounded-full liquid-glass border border-white/15"
            >
              <span>Explore civic values &amp; telemetry</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#F6C667] group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
