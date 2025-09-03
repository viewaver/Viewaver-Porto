import React from 'react';

const Preloader: React.FC = () => {
  const logoText = "VIEWAVER";

  return (
    <div className="fixed inset-0 bg-[#111111] z-50 flex items-center justify-center p-4">
      <div className="preloader-logo font-orbitron text-4xl md:text-5xl text-white uppercase tracking-widest">
        {logoText.split('').map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;