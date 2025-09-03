
import React from 'react';

interface HeaderProps {
  onNavClick: (section: 'about' | 'services' | 'contact' | null) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  return (
    <header className="fixed top-0 left-0 w-full p-6 md:p-8 z-30 flex justify-between items-center text-white mix-blend-difference">
      <div>
        <h1 className="text-2xl font-bold tracking-wider uppercase">
          VIEWAVER
        </h1>
      </div>

      <nav className="flex items-center gap-4 md:gap-6 text-sm uppercase tracking-widest">
        <button onClick={() => onNavClick('about')} className="hover:text-gray-400 transition-colors cursor-pointer">About</button>
        <button onClick={() => onNavClick('services')} className="hover:text-gray-400 transition-colors cursor-pointer">Services</button>
        <button onClick={() => onNavClick('contact')} className="hover:text-gray-400 transition-colors cursor-pointer">Contact</button>
      </nav>
    </header>
  );
};

export default Header;
