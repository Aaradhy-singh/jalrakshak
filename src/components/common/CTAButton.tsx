import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  ariaLabel?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  ariaLabel,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#135C63] text-[#EEF2F1] hover:bg-[#1D7A84] border border-[#1D7A84]/70 shadow-md hover:shadow-lg hover:shadow-[#135C63]/35 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#E29433] focus-visible:outline-hidden';
      case 'accent':
        return 'bg-[#E29433] text-[#0A1E2C] hover:bg-[#F6C667] font-medium border border-[#E29433] shadow-md hover:shadow-xl hover:shadow-[#E29433]/35 diya-button-glow active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#0A1E2C] focus-visible:outline-hidden';
      case 'secondary':
        return 'bg-[#0E293B]/40 text-[#EEF2F1] hover:text-[#F6C667] border border-[#CBD5D1]/30 hover:border-[#F6C667]/70 hover:bg-[#135C63]/20 shadow-sm hover:shadow-md active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#E29433] focus-visible:outline-hidden';
      case 'ghost':
        return 'bg-transparent text-[#EEF2F1]/85 hover:text-[#EEF2F1] hover:bg-[#EEF2F1]/10 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#E29433] focus-visible:outline-hidden';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'text-xs px-4 py-2 gap-2 min-h-[40px]';
      case 'lg':
        return 'text-base sm:text-[17px] px-7 py-3.5 gap-3 min-h-[48px]';
      case 'md':
      default:
        return 'text-sm sm:text-[15px] px-5 py-2.5 gap-2.5 min-h-[44px]';
    }
  };

  const baseStyles =
    'group inline-flex items-center justify-center font-medium rounded-sm transition-all duration-200 hover:-translate-y-[2px] cursor-pointer select-none';

  const combinedStyles = `${baseStyles} ${getVariantStyles()} ${getSizeStyles()} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} aria-label={ariaLabel}>
        <span>{children}</span>
        {icon && (
          <span className="transition-transform duration-200 ease-out group-hover:translate-x-1.5 flex items-center">
            {icon}
          </span>
        )}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedStyles} aria-label={ariaLabel}>
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-200 ease-out group-hover:translate-x-1.5 flex items-center">
          {icon}
        </span>
      )}
    </button>
  );
};
