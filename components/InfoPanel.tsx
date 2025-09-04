import React from 'react';
import QuoteCycler from './QuoteCycler';

const InfoPanel: React.FC = () => {
  return (
    <div className="text-white font-sans flex flex-col flex-grow w-full text-right">
      <div className="flex-grow" />

      <div className="mb-12">
        <QuoteCycler />
      </div>
    </div>
  );
};

export default InfoPanel;