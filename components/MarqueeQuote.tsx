import React from 'react';

const MarqueeQuote: React.FC = () => {
  const quote = "DESIGN WITH INTENT. ▫️ CAPTURE THE MOMENT. ▫️ TELL THE STORY. ▫️ VISUALS THAT RESONATE. ▫️ ";
  
  return (
    <div 
      className="absolute bottom-0 left-0 w-full h-14 flex items-center overflow-hidden pointer-events-none mix-blend-difference"
      aria-hidden="true"
    >
      <p className="font-bold uppercase tracking-wider text-white text-2xl whitespace-nowrap animate-marquee">
        {quote.repeat(2)}
      </p>
    </div>
  );
};

export default MarqueeQuote;