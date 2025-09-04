import React from 'react';
import Clock from './Clock';

const InfoPanel: React.FC = () => {
  return (
    // Flex container to push the content to the bottom
    <div className="flex flex-col h-full w-full">
      <div className="flex-grow" /> {/* Spacer */}
      
      {/* Container for the clock component */}
      <div className="p-4">
        <Clock />
      </div>
    </div>
  );
};

export default InfoPanel;
