import React from 'react';
import ChevronUp from './icons/ChevronUp';

interface ScrollToTopButtonProps {
  onGoHome: () => void;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ onGoHome }) => {
  return (
    <button
      onClick={onGoHome}
      aria-label="Scroll to top"
      className="fixed bottom-10 right-10 z-40 p-3 bg-[#DA5A2A] rounded-full text-white hover:opacity-90 transition-all duration-300 animate-content-fade-in cursor-pointer"
    >
      <ChevronUp />
    </button>
  );
};

export default ScrollToTopButton;