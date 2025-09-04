import React, { useEffect, useState } from 'react';

interface HeroProps {
  isFading: boolean;
}

const FONT_CLASSES = [
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
  'font-anton',
  'font-lobster',
  'font-bebas-neue',
  'font-caveat',
  'font-major-mono-display',
  'font-uncial-antiqua',
  'font-creepster',
];

const Hero: React.FC<HeroProps> = ({ isFading }) => {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  useEffect(() => {
    const fontInterval = setInterval(() => {
      setCurrentFontIndex(prevIndex => (prevIndex + 1) % FONT_CLASSES.length);
    }, 80); // Faster interval for shutter effect

    return () => {
      clearInterval(fontInterval);
    };
  }, []);

  return (
    <section 
      id="home" 
      className={`absolute inset-0 bg-[#3B1877] z-30 flex flex-col items-center justify-center text-white transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://lh3.googleusercontent.com/pw/AP1GczMrCEBKIiUFJDAaa2J96-6fClOeKJFsdFco2qxj9PGbVJac8bvQSCVEDFpcaeQqF_vFNCKtC5zAu7ClHwEpAQe1cUbnsEVTchoG0tRq1TNEUR0W5A=w2400"
          alt="Abstract textured background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Black gradient overlay for text readability */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#3B1877] to-transparent z-10 pointer-events-none"></div>

      <div className="relative z-20 text-center">
        <h1 className={`text-6xl sm:text-8xl md:text-9xl whitespace-nowrap font-bold ${FONT_CLASSES[currentFontIndex]} animate-vibrant-colors`}>
          VIEWAVER
        </h1>
      </div>
      
      <div className="absolute bottom-10 z-20 text-center animate-fade-in-out">
        <p className="uppercase tracking-widest text-sm">Scroll Down to Explore</p>
      </div>
    </section>
  );
};

export default Hero;