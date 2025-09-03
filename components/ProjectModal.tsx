import React, { useState, useEffect, useCallback, useRef } from 'react';
import type { Project } from '../types';
import CloseIcon from './icons/CloseIcon';
import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';
import HeartIcon from './icons/HeartIcon';

interface ProjectModalProps {
  projects: Project[];
  initialIndex: number;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ projects, initialIndex, onClose }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(initialIndex);
  const [isLiked, setIsLiked] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  
  const project = projects[currentProjectIndex];

  useEffect(() => {
    setIsLiked(false);
  }, [project.id]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const goToPreviousProject = useCallback(() => {
    setCurrentProjectIndex(prevIndex => (prevIndex - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const goToNextProject = useCallback(() => {
    setCurrentProjectIndex(prevIndex => (prevIndex + 1) % projects.length);
  }, [projects.length]);

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
      if (event.key === 'ArrowLeft') {
        goToPreviousProject();
        return;
      }
      if (event.key === 'ArrowRight') {
        goToNextProject();
        return;
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
  }, [onClose, goToPreviousProject, goToNextProject]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center cursor-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      ref={modalRef}
      onClick={onClose}
    >
      <div 
        key={project.id}
        className="relative w-full h-full flex flex-col p-4 md:p-8 animate-content-fade-in"
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
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-4">
                <button onClick={goToPreviousProject} className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all cursor-pointer" aria-label="Previous project">
                    <ChevronLeft />
                </button>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-4">
                <button onClick={goToNextProject} className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all cursor-pointer" aria-label="Next project">
                    <ChevronRight />
                </button>
            </div>

            <div className="w-full h-full flex items-center justify-center p-4">
                <img 
                    src={project.coverImage.replace('=w800', '=w2400')}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain"
                    draggable={false}
                />
            </div>
        </div>

        <footer className="text-center text-white p-4">
            <p>{currentProjectIndex + 1} / {projects.length}</p>
        </footer>
      </div>
    </div>
  );
};

export default ProjectModal;