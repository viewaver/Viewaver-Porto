import React, { useState, useEffect, useCallback, useRef } from 'react';
import type { Project } from '../types';
import CloseIcon from './icons/CloseIcon';
import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';
import HeartIcon from './icons/HeartIcon';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const goToPrevious = useCallback(() => {
    setIsImageLoading(true);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? project.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, project.images]);

  const goToNext = useCallback(() => {
    setIsImageLoading(true);
    const isLastSlide = currentIndex === project.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, project.images]);

  useEffect(() => {
    const modalNode = modalRef.current;
    if (!modalNode) return;

    const focusableElements = modalNode.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const timer = setTimeout(() => firstElement?.focus(), 100);
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (project.images.length > 1) {
          if (event.key === 'ArrowLeft') {
            goToPrevious();
            return;
          }
          if (event.key === 'ArrowRight') {
            goToNext();
            return;
          }
      }

      if (event.key === 'Tab') {
        if (!focusableElements || focusableElements.length === 0) return;
        
        if (event.shiftKey) { 
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            event.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, goToPrevious, goToNext, project.images.length]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center animate-fade-in cursor-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      ref={modalRef}
      onClick={onClose}
    >
      <div 
        className="relative w-full h-full flex flex-col p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-start text-white p-4 gap-4">
          <div className="flex-1">
            <h2 id="project-modal-title" className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-400 text-base max-w-2xl">{project.description}</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
                onClick={handleLike} 
                className={`text-white transition-colors duration-300 ${isLiked ? 'text-red-500' : 'hover:text-red-400'}`}
                aria-label={isLiked ? 'Unlike project' : 'Like project'}
            >
                <HeartIcon isFilled={isLiked} />
            </button>
            <button 
                onClick={onClose} 
                className="text-white hover:text-gray-400 transition-colors cursor-pointer"
                aria-label="Close project details"
            >
                <CloseIcon />
            </button>
          </div>
        </header>

        <div className="relative flex-grow flex items-center justify-center min-h-0">
            {project.images.length > 1 && (
                <>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-4">
                        <button onClick={goToPrevious} className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all cursor-pointer" aria-label="Previous image">
                            <ChevronLeft />
                        </button>
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-4">
                        <button onClick={goToNext} className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all cursor-pointer" aria-label="Next image">
                            <ChevronRight />
                        </button>
                    </div>
                </>
            )}

            <div className="w-full h-full flex items-center justify-center">
                {isImageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 z-20">
                      <div className="text-white text-lg animate-pulse">
                          Loading...
                      </div>
                    </div>
                )}
                <img 
                    src={project.images[currentIndex]} 
                    alt={`${project.title} - slide ${currentIndex + 1}`} 
                    className={`max-w-full max-h-full object-contain transition-opacity duration-500 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`} 
                    onLoad={() => setIsImageLoading(false)}
                />
            </div>
        </div>

        {project.images.length > 1 && (
            <footer className="text-center text-white p-4">
              <p>{currentIndex + 1} / {project.images.length}</p>
            </footer>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;