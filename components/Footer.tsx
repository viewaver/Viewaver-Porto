import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta', // Based on phone number in contact
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      };
      const timeString = new Date().toLocaleTimeString('en-US', options);
      setCurrentTime(`WIB ${timeString}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="py-12 md:py-16 text-gray-300 border-t border-[#DA5A2A]/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Email */}
          <div>
            <span className="text-gray-400 uppercase text-sm tracking-widest mb-2 block">Email</span>
            <a href="mailto:Viewaver@gmail.com" className="hover:text-[#DA5A2A] transition-colors text-sm break-words">
              Viewaver@gmail.com
            </a>
          </div>
          {/* Social */}
          <div>
            <span className="text-gray-400 uppercase text-sm tracking-widest mb-2 block">Social</span>
            <div className="flex flex-col items-center md:items-start">
              <a href="https://www.instagram.com/viewaver" target="_blank" rel="noopener noreferrer" className="hover:text-[#DA5A2A] transition-colors text-sm mb-1">
                Instagram
              </a>
              <a href="#" className="hover:text-[#DA5A2A] transition-colors text-sm">
                Linkedin
              </a>
            </div>
          </div>
          {/* Location */}
          <div>
            <span className="text-gray-400 uppercase text-sm tracking-widest mb-2 block">Location</span>
            <p className="text-sm">Jakarta, IDN</p>
            <p className="text-sm">{currentTime}</p>
          </div>
        </div>
        <div className="border-t border-gray-700/50 pt-8 text-center">
          <p>&copy; {currentYear} VIEWAVER. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;