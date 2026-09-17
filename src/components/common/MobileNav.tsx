import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Droplets, ArrowRight } from 'lucide-react';
import { GhatDivider } from './GhatDivider';

interface NavLinkItem {
  name: string;
  path: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLinkItem[];
  currentPath: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navLinks,
  currentPath
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Focus the close button when opened
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Focus trap inside drawer
  useEffect(() => {
    if (!isOpen || !drawerRef.current) return;

    const drawer = drawerRef.current;
    const focusableElements = drawer.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    drawer.addEventListener('keydown', handleTabKey);
    return () => drawer.removeEventListener('keydown', handleTabKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      id="mobile-navigation-drawer"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#06131D]/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#0A1E2C] border-l border-[#1B394E] shadow-2xl flex flex-col justify-between overflow-y-auto"
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#1B394E]/60">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-xs bg-[#135C63]/30 border border-[#135C63]/60">
                <Droplets className="w-4 h-4 text-[#F6C667]" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg text-[#EEF2F1]">JalRakshak</span>
                <span className="text-[10px] text-[#9BB0AC] tracking-wider uppercase">
                  Varanasi Water Advisory
                </span>
              </div>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2 rounded-xs text-[#9BB0AC] hover:text-[#EEF2F1] hover:bg-[#1B394E] focus-visible:ring-2 focus-visible:ring-[#E29433]"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <GhatDivider variant="dark" className="my-3" />

          {/* Navigation Links */}
          <nav className="mt-4 flex flex-col space-y-1.5" aria-label="Mobile Menu Links">
            {navLinks.map((item) => {
              const isActive =
                item.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between px-4 py-3 rounded-xs text-sm font-medium transition-colors duration-200 border-l-2 ${
                    isActive
                      ? 'border-[#E29433] bg-[#135C63]/25 text-[#F6C667]'
                      : 'border-transparent text-[#EEF2F1]/85 hover:bg-[#1B394E]/40 hover:text-[#EEF2F1]'
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? 'text-[#E29433] translate-x-1' : 'text-[#9BB0AC]/50'
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer info in drawer */}
        <div className="p-6 bg-[#0E293B]/60 border-t border-[#1B394E]/60">
          <p className="text-xs text-[#9BB0AC] leading-relaxed">
            1M1B–IBM SkillsBuild AI for Sustainability Virtual Internship.
          </p>
          <div className="mt-2 text-[11px] text-[#E29433]">
            Civic water awareness platform inspired by the Ganga.
          </div>
        </div>
      </div>
    </div>
  );
};
