import React from 'react';

interface QuotePhraseProps {
  children: React.ReactNode;
}

const DraggableQuote: React.FC<QuotePhraseProps> = ({ children }) => {
  return (
    <p className="font-sans font-light text-base text-white leading-relaxed pointer-events-none">
      <span className="highlight-bg">
        {children}
      </span>
    </p>
  );
};

export default DraggableQuote;