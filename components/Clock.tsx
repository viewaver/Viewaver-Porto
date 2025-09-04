import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const year = now.getFullYear().toString().slice(-2);
      setCurrentDate(`${month} . ${day} . ${year}`);

      const timeOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      const timeString = now.toLocaleTimeString('en-US', timeOptions);
      setCurrentTime(`WIB ${timeString}`);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[32rem] w-full font-poppins font-light uppercase text-[#F000B8]">
      
      {/* Time (Vertical) - Positioned on the far right */}
      <div className="absolute top-0 right-0 whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)'}}>
         <span className="bg-white py-3 px-5 text-5xl tracking-wide leading-tight inline-block">
          {currentTime}
        </span>
      </div>

      {/* Date - Positioned to the left of the time block to avoid overlap */}
      <div className="absolute top-[16rem] right-[7rem]">
        <span className="bg-white text-black/80 py-2 px-3 text-lg tracking-[0.2em] whitespace-nowrap">
          {currentDate}
        </span>
      </div>

      {/* Welcometomy - Positioned at the bottom right */}
      <div className="absolute bottom-24 right-0">
        <span className="bg-white py-2 px-4 text-6xl tracking-tighter leading-tight whitespace-nowrap">
          Welcometomy
        </span>
      </div>
      
      {/* gallery - Positioned below 'Welcometomy' at the bottom right */}
      <div className="absolute bottom-8 right-0">
        <span className="bg-white py-2 px-4 text-6xl tracking-tighter leading-tight whitespace-nowrap">
          gallery
        </span>
      </div>
    </div>
  );
};

export default Clock;
