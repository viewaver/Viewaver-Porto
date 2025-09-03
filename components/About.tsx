import React from 'react';
import CloseIcon from './icons/CloseIcon';

interface AboutProps {
  onClose: () => void;
}

const About: React.FC<AboutProps> = ({ onClose }) => {
  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center p-4 cursor-pointer"
        onClick={onClose}
    >
      <div 
        className="bg-[#111111] p-8 md:p-12 relative max-w-4xl w-full cursor-auto"
        onClick={(e) => e.stopPropagation()}
    >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer">
            <CloseIcon />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-widest mb-6 border-b border-gray-700 pb-3">
                About
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                I am a visual designer passionate about exploring the realms of abstract and experimental art. My work, which spans from design to photography and videography, focuses on unconventional explorations of form, color, and texture. I believe that true beauty is often found beyond the confines of realism, and I always strive to create edgy and high-taste visuals that spark imagination and emotion.
            </p>
            </div>
            <div>
            <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczOqy5hF5pIvKzjHRepRezFxeoy2eszUlsKy-sDYmWn5Q1y--3TtHDruL-lvA3BlIiED0CfvWQm8MFjeJjV5EkommnSw0m_560R6dxkmCVlHSOBC8g=w800" 
                alt="A portrait of the artist VIEWAVER" 
                className="w-full h-auto object-cover max-h-[60vh]"
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;