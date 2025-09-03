import React, { useEffect, useState } from 'react';
import ChevronDown from './icons/ChevronDown';

interface HeroProps {
  onScrollDown: () => void;
}

const fontClasses = [
  'font-metal-mania',
  'font-orbitron',
  'font-playfair-display',
  'font-dancing-script',
  'font-oswald',
  'font-press-start',
  'font-bungee-inline',
  'font-monoton',
  'font-special-elite',
  'font-sacramento',
];

const Hero: React.FC<HeroProps> = ({ onScrollDown }) => {
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex(prevIndex => (prevIndex + 1) % fontClasses.length);
    }, 150); // Change font rapidly for a shutter effect

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-full bg-black relative flex flex-col items-center justify-center text-white">
      <div className="z-20 relative w-full h-full flex items-center justify-center text-center overflow-hidden">
        <img
            src="https://lh3.googleusercontent.com/pw/AP1GczNdWB6EHW_stWXw7KtLF5sVq6B_CHfTCfOMOD1niUtOp1e7MKulJCix4MOeDhQCs64ABNUIIVsqrPA0JWdaye_PPJpCp1Mz8-Q7awaAUqR8GrcwKA=w2400"
            alt="Abstract animated art"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 opacity-60 mix-blend-lighten pointer-events-none"
        />
        <h1 
          className={`relative text-7xl md:text-9xl whitespace-nowrap animate-vibrant-colors ${fontClasses[fontIndex]}`}
        >
          VIEWAVER
        </h1>
      </div>
      
      <button 
        onClick={onScrollDown}
        aria-label="Scroll to projects"
        className="absolute bottom-10 z-20 animate-bounce cursor-pointer"
      >
        <ChevronDown />
      </button>
    </section>
  );
};

export default Hero;