import React from 'react';
import CloseIcon from './icons/CloseIcon';

interface ContactProps {
    onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ onClose }) => {
  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center p-4 cursor-pointer"
        onClick={onClose}
    >
        <div 
            className="bg-[#111111] p-8 md:p-16 relative max-w-2xl w-full text-center cursor-auto"
            onClick={(e) => e.stopPropagation()}
        >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer">
                <CloseIcon />
            </button>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-widest mb-6">
                Get In Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
                Ready to bring a creative vision to life? Whether it's a design project, a photo shoot, or a video production, we'd love to collaborate. Let's talk.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <a 
                href="mailto:Viewaver@gmail.com" 
                className="text-lg md:text-xl text-gray-200 hover:text-white border-b border-gray-500 hover:border-white transition-all duration-300 cursor-pointer"
                >
                Viewaver@gmail.com
                </a>
                <a 
                href="https://www.instagram.com/viewaver" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg md:text-xl text-gray-200 hover:text-white border-b border-gray-500 hover:border-white transition-all duration-300 cursor-pointer"
                >
                Instagram
                </a>
            </div>
        </div>
    </div>
  );
};

export default Contact;