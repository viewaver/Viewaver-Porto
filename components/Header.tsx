import React, { useState, useEffect } from 'react';
import CloseIcon from './icons/CloseIcon';
import MenuIcon from './icons/MenuIcon';
import UserIcon from './icons/UserIcon';
import BriefcaseIcon from './icons/BriefcaseIcon';
import MailIcon from './icons/MailIcon';

interface HeaderProps {
  onNavClick: (section: 'about' | 'services' | 'contact' | null) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  const handleLinkClick = (section: 'about' | 'services' | 'contact') => {
    setIsMenuOpen(false);
    onNavClick(section);
  };

  const navItems = [
    { label: 'About', icon: <UserIcon />, action: () => handleLinkClick('about') },
    { label: 'Services', icon: <BriefcaseIcon />, action: () => handleLinkClick('services') },
    { label: 'Contact', icon: <MailIcon />, action: () => handleLinkClick('contact') },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full p-6 md:p-8 z-40 flex justify-between items-center text-white mix-blend-difference">
        <div>
          <span aria-label="Go to top of the page" className="text-2xl font-bold tracking-wider uppercase cursor-default">
            VIEWAVER
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-4 md:gap-6 text-sm uppercase tracking-widest">
          <button onClick={() => onNavClick('about')} className="hover:text-[#DA5A2A] transition-colors cursor-pointer">About</button>
          <button onClick={() => onNavClick('services')} className="hover:text-[#DA5A2A] transition-colors cursor-pointer">Services</button>
          <button onClick={() => onNavClick('contact')} className="hover:text-[#DA5A2A] transition-colors cursor-pointer">Contact</button>
        </nav>
      </header>

      {/* Mobile FAB Menu */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Radial Menu Items */}
          {navItems.map((item, index) => {
            const angle = -90 - (index * 45); // From -90 (up) to -180 (left)
            const translation = isMenuOpen ? 85 : 0;
            const scale = isMenuOpen ? 1 : 0;
            const delay = isMenuOpen ? index * 60 : (navItems.length - 1 - index) * 60;

            const itemStyle: React.CSSProperties = {
              position: 'absolute',
              transform: `rotate(${angle}deg) translateY(-${translation}px) rotate(${-angle}deg) scale(${scale})`,
              transition: `transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 150ms ease-out`,
              transitionDelay: `${delay}ms`,
              opacity: isMenuOpen ? 1 : 0,
              pointerEvents: isMenuOpen ? 'auto' : 'none',
            };

            return (
              <div key={item.label} style={itemStyle}>
                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={item.action}
                    className="w-14 h-14 bg-[#3B1877] rounded-full flex items-center justify-center text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-[#DA5A2A] ring-offset-2 ring-offset-[#3B1877]"
                    aria-label={item.label}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    {item.icon}
                  </button>
                  <span className="text-white text-xs bg-black/50 px-2 py-1 rounded-full whitespace-nowrap">{item.label}</span>
                </div>
              </div>
            );
          })}

          {/* Main FAB */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-16 h-16 bg-[#DA5A2A] rounded-full flex items-center justify-center text-white shadow-xl z-10 transform transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="transition-transform duration-300 ease-in-out" style={{transform: `rotate(${isMenuOpen ? '225deg' : '0deg'})`}}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
          </button>
        </div>
      </div>
      
      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;