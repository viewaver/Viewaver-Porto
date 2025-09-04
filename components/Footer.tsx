import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center text-gray-300 border-t border-[#DA5A2A]/30">
      <div className="container mx-auto px-6">
        <p>&copy; {currentYear} VIEWAVER. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;