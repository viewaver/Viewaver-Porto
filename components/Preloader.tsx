import React from 'react';

const Preloader: React.FC = () => {
  const logoText = "HELLO, F*CKERS";

  return (
    <div className="fixed inset-0 bg-[#3B1877] z-50 flex items-center justify-center p-4">
      <div className="preloader-logo font-poppins font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-widest text-center">
        {logoText.split('').map((char, index) => (
          <span
            key={index}
            className={char === '*' ? 'animate-asterisk-colors' : ''}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
