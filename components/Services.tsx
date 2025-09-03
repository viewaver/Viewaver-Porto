import React, { useState } from 'react';
import { SERVICES_DATA } from '../constants';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';
import CloseIcon from './icons/CloseIcon';

interface ServicesProps {
    onClose: () => void;
}

const ServiceItem: React.FC<{
  service: typeof SERVICES_DATA[0];
  isOpen: boolean;
  onClick: () => void;
}> = ({ service, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700 py-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left cursor-pointer"
      >
        <h3 className="text-xl md:text-2xl font-light uppercase tracking-wider">{service.title}</h3>
        <span className="text-gray-400">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-400 text-base md:text-lg leading-relaxed pr-8">
          {service.description}
        </p>
      </div>
    </div>
  );
};

const Services: React.FC<ServicesProps> = ({ onClose }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center p-4 cursor-pointer"
        onClick={onClose}
    >
        <div 
            className="bg-[#111111] p-8 md:p-12 relative max-w-4xl w-full max-h-[90vh] overflow-y-auto cursor-auto"
            onClick={(e) => e.stopPropagation()}
        >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 cursor-pointer">
                <CloseIcon />
            </button>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-widest mb-10 border-b border-gray-700 pb-3">
                Services
            </h2>
            <div>
                {SERVICES_DATA.map((service, index) => (
                <ServiceItem
                    key={index}
                    service={service}
                    isOpen={openIndex === index}
                    onClick={() => handleItemClick(index)}
                />
                ))}
            </div>
        </div>
    </div>
  );
};

export default Services;