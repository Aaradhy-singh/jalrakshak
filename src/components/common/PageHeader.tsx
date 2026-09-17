import React from 'react';
import { GhatDivider } from './GhatDivider';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  variant?: 'night' | 'mist';
  badge?: string;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  variant = 'night',
  badge,
  className = ''
}) => {
  const isNight = variant === 'night';

  return (
    <div
      className={`relative pt-10 pb-8 md:pt-16 md:pb-12 border-b ${
        isNight
          ? 'bg-gradient-to-b from-[#0A1E2C] to-[#0E293B] border-[#1B394E] text-[#EEF2F1]'
          : 'bg-gradient-to-b from-[#EEF2F1] to-[#E3E9E7] border-[#CBD5D1] text-[#0A1E2C]'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow / Category */}
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            {eyebrow && (
              <span
                className={`text-xs font-semibold tracking-wider uppercase ${
                  isNight ? 'text-[#E29433]' : 'text-[#135C63]'
                }`}
              >
                {eyebrow}
              </span>
            )}
            {badge && (
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-xs text-[11px] font-medium tracking-wide ${
                  isNight
                    ? 'bg-[#135C63]/30 text-[#F6C667] border border-[#135C63]/60'
                    : 'bg-[#135C63]/10 text-[#135C63] border border-[#135C63]/30'
                }`}
              >
                {badge}
              </span>
            )}
          </div>

          {/* Editorial H1 */}
          <h1
            className={`font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight ${
              isNight ? 'text-[#EEF2F1]' : 'text-[#0A1E2C]'
            }`}
          >
            {title}
          </h1>

          {/* Ghat Divider */}
          <GhatDivider variant={isNight ? 'dark' : 'light'} className="my-4" />

          {/* Subtitle */}
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isNight ? 'text-[#9BB0AC]' : 'text-[#2D4543]'
            }`}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
