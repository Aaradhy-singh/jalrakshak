import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import { MobileNav } from './MobileNav';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Wards', path: '/wards' },
  { name: 'Environment', path: '/environment' },
  { name: 'Methodology', path: '/methodology' },
  { name: 'Responsible AI', path: '/responsible-ai' },
  { name: 'Sources', path: '/sources' },
  { name: 'About', path: '/about' },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 w-full px-4 sm:px-8 lg:px-16 pt-4 sm:pt-6 transition-all duration-300 pointer-events-none"
        role="banner"
      >
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <nav
            className={`liquid-glass rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 border border-white/20 shadow-2xl ${
              isScrolled
                ? 'bg-black/75 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.6)]'
                : 'bg-black/35 backdrop-blur-md'
            }`}
            aria-label="Desktop Main Navigation"
          >
            {/* Left: Brand Wordmark */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#E29433] focus-visible:outline-hidden rounded-lg p-1"
              aria-label="JalRakshak - Varanasi Water Advisory Home"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/20 group-hover:border-[#F6C667] transition-colors duration-300 shadow-sm">
                <Droplets className="w-5 h-5 text-[#F6C667]" aria-hidden="true" />
                <div className="absolute -bottom-0.5 left-2 right-2 h-[2px] bg-[#E29433] rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-[#F6C667] transition-colors duration-300 leading-none">
                  JalRakshak
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-white/70 tracking-[0.18em] uppercase transition-colors mt-0.5">
                  Varanasi Water Advisory
                </span>
              </div>
            </Link>

            {/* Center: Desktop Navigation Links */}
            <div
              className="hidden lg:flex items-center space-x-1.5 xl:space-x-2"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((item) => {
                const isActive =
                  item.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-lg group focus-visible:ring-2 focus-visible:ring-[#E29433] focus-visible:outline-hidden ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive ? (
                      <motion.span
                        layoutId="activeRouteUnderline"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#F6C667] rounded-full shadow-[0_0_8px_rgba(246,198,103,0.8)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-white/0 group-hover:bg-white/40 transition-all duration-200" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right: CTA & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                to="/wards"
                className="hidden sm:inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 active:scale-[0.98] px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 shadow-md"
              >
                <span>Explore Wards</span>
                <span className="text-xs text-black/50 font-mono">MAP</span>
              </Link>

              {/* Mobile Menu Toggle */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-navigation-drawer"
                  aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                  className="p-2 rounded-xl text-white hover:bg-white/10 border border-white/20 focus-visible:ring-2 focus-visible:ring-[#E29433]"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 text-[#F6C667]" aria-hidden="true" />
                  ) : (
                    <Menu className="w-5 h-5 text-white" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={[...NAV_LINKS, { name: 'Insights', path: '/insights' }]}
        currentPath={location.pathname}
      />
    </>
  );
};
