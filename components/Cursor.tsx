
import React, { useState, useEffect } from 'react';

interface CursorProps {
    variant: 'default' | 'grabbing' | 'hover';
}

const Cursor: React.FC<CursorProps> = ({ variant }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    
    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  const variants = {
    default: {
      height: '12px',
      width: '12px',
      border: '1px solid white',
      backgroundColor: 'transparent',
    },
    grabbing: {
      height: '32px',
      width: '32px',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    hover: {
        height: '40px',
        width: '40px',
        border: '1px solid white',
        backgroundColor: 'transparent',
    }
  };

  const style = variants[variant] || variants.default;

  return (
    <div
      className="fixed rounded-full pointer-events-none z-50 transition-all duration-200 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        opacity: isVisible ? 1 : 0,
        ...style
      }}
    />
  );
};

export default Cursor;
