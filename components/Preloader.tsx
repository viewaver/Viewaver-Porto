import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#111111] z-50 flex items-center justify-center">
      <div className="text-center animate-fade-in-out">
        <h1 className="text-3xl font-bold tracking-wider uppercase text-white">
          VIEWAVER
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
