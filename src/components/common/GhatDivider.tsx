import React from 'react';

interface GhatDividerProps {
  variant?: 'dark' | 'light' | 'accent';
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export const GhatDivider: React.FC<GhatDividerProps> = ({
  variant = 'dark',
  className = '',
  align = 'left'
}) => {
  const getColors = () => {
    switch (variant) {
      case 'light':
        return {
          step1: 'bg-[#0A1E2C]/20',
          step2: 'bg-[#135C63]/50',
          step3: 'bg-[#E29433]'
        };
      case 'accent':
        return {
          step1: 'bg-[#EEF2F1]/10',
          step2: 'bg-[#135C63]',
          step3: 'bg-[#F6C667]'
        };
      case 'dark':
      default:
        return {
          step1: 'bg-[#EEF2F1]/15',
          step2: 'bg-[#135C63]/60',
          step3: 'bg-[#E29433]'
        };
    }
  };

  const colors = getColors();
  const alignmentClass =
    align === 'center'
      ? 'mx-auto justify-center'
      : align === 'right'
      ? 'ml-auto justify-end'
      : 'mr-auto justify-start';

  return (
    <div
      className={`flex flex-col gap-[3px] py-3 ${alignmentClass} ${className}`}
      aria-hidden="true"
    >
      {/* Tier 1 (Widest step) */}
      <div className={`h-[2px] w-32 md:w-44 rounded-full ${colors.step1} transition-all duration-300`} />
      {/* Tier 2 (Intermediate step) */}
      <div className={`h-[2.5px] w-20 md:w-28 rounded-full ${colors.step2} transition-all duration-300`} />
      {/* Tier 3 (Focal accent step) */}
      <div className={`h-[3px] w-10 md:w-14 rounded-full ${colors.step3} transition-all duration-300`} />
    </div>
  );
};
