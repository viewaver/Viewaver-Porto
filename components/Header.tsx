import React, { useState, useEffect } from 'react';
import CloseIcon from './icons/CloseIcon';
import MenuIcon from './icons/MenuIcon';

interface HeaderProps {
  onNavClick: (section: 'about' | 'services' | 'contact' | null) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleLinkClick = (section: 'about' | 'services' | 'contact') => {
    setIsMenuOpen(false);
    onNavClick(section);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center text-white mix-blend-difference">
        <div>
          <span aria-label="Go to top of the page" className="text-2xl font-bold tracking-wider uppercase cursor-default">
            VIEWAVER
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 md:gap-6 text-sm uppercase tracking-widest">
          <button onClick={() => onNavClick('about')} className="hover:text-[#DA5A2A] transition-colors cursor-pointer">About</button>
          <button onClick={() => onNavClick('services')} className="hover:text-[#DA5A2A] transition-colors cursor-pointer">Services</button>
          <button onClick={() => onNavClick('contact')} className="hover:text-[#DA5A2A] transition-colors cursor-pointer">Contact</button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#3B1877] z-40 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="flex flex-col items-center gap-8 text-2xl uppercase tracking-widest text-white">
            <button onClick={() => handleLinkClick('about')} className="hover:text-[#DA5A2A] transition-colors">About</button>
            <button onClick={() => handleLinkClick('services')} className="hover:text-[#DA5A2A] transition-colors">Services</button>
            <button onClick={() => handleLinkClick('contact')} className="hover:text-[#DA5A2A] transition-colors">Contact</button>
          </nav>
      </div>
    </>
  );
};

export default Header;