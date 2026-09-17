import React from 'react';

interface GhatStepBandProps {
  children: React.ReactNode;
  stepLevel?: 1 | 2 | 3;
  className?: string;
  variant?: 'night' | 'mist' | 'teal';
}

export const GhatStepBand: React.FC<GhatStepBandProps> = ({
  children,
  stepLevel = 1,
  className = '',
  variant = 'night',
}) => {
  const getStyles = () => {
    switch (variant) {
      case 'mist':
        return {
          wrapper:
            'bg-[#EEF2F1] text-[#0A1E2C] border-t-2 border-[#135C63] hover:border-[#E29433] hover:shadow-md',
          accentStep: 'bg-[#E29433]',
          secondaryStep: 'bg-[#135C63]/40',
        };
      case 'teal':
        return {
          wrapper:
            'bg-[#135C63]/15 text-[#EEF2F1] border-t-2 border-[#135C63] hover:border-[#F6C667] hover:shadow-lg hover:shadow-[#135C63]/20',
          accentStep: 'bg-[#F6C667]',
          secondaryStep: 'bg-[#EEF2F1]/30',
        };
      case 'night':
      default:
        return {
          wrapper:
            'liquid-glass text-[#EEF2F1] rounded-2xl border border-white/15 hover:border-[#1D7A84]/70 hover:shadow-2xl hover:shadow-[#06131D]/50 transition-all duration-300 backdrop-blur-md',
          accentStep: 'bg-[#E29433]',
          secondaryStep: 'bg-[#135C63]/60',
        };
    }
  };

  const current = getStyles();

  // Tier stepped widths
  const stepWidth =
    stepLevel === 1 ? 'w-20' : stepLevel === 2 ? 'w-32' : 'w-44';

  // Architectural tier indentation for desktop connected rhythm
  const tierMargin =
    stepLevel === 1
      ? 'md:ml-0'
      : stepLevel === 2
      ? 'md:ml-3'
      : 'md:ml-6';

  return (
    <div
      className={`relative group rounded-xs transition-all duration-300 hover:-translate-y-[2px] ${tierMargin} ${current.wrapper} ${className}`}
    >
      {/* Top ghat step architectural tier ornament with hover reaction */}
      <div
        className="absolute -top-[3px] left-6 sm:left-8 flex items-center gap-1.5 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
        aria-hidden="true"
      >
        <div
          className={`h-[3px] ${stepWidth} ${current.accentStep} rounded-t-sm shadow-sm transition-all duration-300`}
        />
        <div
          className={`h-[2px] w-8 ${current.secondaryStep} rounded-t-sm transition-all duration-300`}
        />
        <div className="h-[1.5px] w-3 bg-[#EEF2F1]/20 rounded-t-sm" />
      </div>

      {children}
    </div>
  );
};
