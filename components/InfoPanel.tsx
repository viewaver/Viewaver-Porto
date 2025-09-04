import React, { useState, useEffect } from 'react';
import QuoteCycler from './QuoteCycler';

const InfoPanel: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta', // Based on phone number in contact
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const timeString = new Date().toLocaleTimeString('en-US', options);
      setCurrentTime(`WIB ${timeString}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white font-sans flex flex-col flex-grow w-full text-right">
      <div>
        <div className="flex flex-col mb-10">
          <span className="text-gray-400 uppercase text-sm tracking-widest mb-1">Email</span>
          <a href="mailto:Viewaver@gmail.com" className="hover:text-[#DA5A2A] transition-colors text-sm break-words">
            Viewaver@gmail.com
          </a>
        </div>
        <div className="flex flex-col mb-10">
          <span className="text-gray-400 uppercase text-sm tracking-widest mb-1">Social</span>
          <a href="https://www.instagram.com/viewaver" target="_blank" rel="noopener noreferrer" className="hover:text-[#DA5A2A] transition-colors text-sm">
            Instagram
          </a>
          <a href="#" className="hover:text-[#DA5A2A] transition-colors text-sm">
            Linkedin
          </a>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400 uppercase text-sm tracking-widest mb-1">Location</span>
          <p className="text-sm">Jakarta, IDN</p>
          <p className="text-sm">{currentTime}</p>
        </div>
      </div>

      <div className="flex-grow" />

      <div className="mb-12">
        <QuoteCycler />
      </div>
    </div>
  );
};

export default InfoPanel;