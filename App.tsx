

import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import type { Project } from './types';
import { PROJECTS_DATA } from './constants';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import Header from './components/Header';
import Preloader from './components/Preloader';
import Hero from './components/Hero';

type Overlay = 'about' | 'services' | 'contact' | null;

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeOverlay, setActiveOverlay] = useState<Overlay>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showInstructions, setShowInstructions] = useState(true);
  const [isInstructionFading, setIsInstructionFading] = useState(false);
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorStyle, setCursorStyle] = useState('grab');

  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0, canvasX: 0, canvasY: 0 });

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Set initial centered position for the seamless grid
  useLayoutEffect(() => {
    if (projectsContainerRef.current) {
      const { offsetWidth, offsetHeight } = projectsContainerRef.current;
      // Start viewing the center tile of the 3x3 grid
      setPosition({ x: -offsetWidth, y: -offsetHeight });
    }
  }, []);

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNavClick = (overlay: Overlay) => {
    setActiveOverlay(overlay);
  };

  const handleCloseOverlay = () => {
    setActiveOverlay(null);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current || !projectsContainerRef.current) return;
    e.preventDefault();
    
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    
    let newX = dragStartRef.current.canvasX + dx;
    let newY = dragStartRef.current.canvasY + dy;

    // Seamless looping logic
    const tileWidth = projectsContainerRef.current.offsetWidth;
    const tileHeight = projectsContainerRef.current.offsetHeight;

    // When the viewport is about to exit the center tile, reset the position
    // to the corresponding edge of the adjacent identical tile.
    if (newX >= 0) {
        newX -= tileWidth;
        dragStartRef.current.canvasX -= tileWidth; // Adjust start pos to prevent jumps
    } else if (newX <= -2 * tileWidth) {
        newX += tileWidth;
        dragStartRef.current.canvasX += tileWidth;
    }
    
    if (newY >= 0) {
        newY -= tileHeight;
        dragStartRef.current.canvasY -= tileHeight;
    } else if (newY <= -2 * tileHeight) {
        newY += tileHeight;
        dragStartRef.current.canvasY += tileHeight;
    }

    setPosition({ x: newX, y: newY });
  }, []);

  const handleMouseUp = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current) return;
    
    document.body.classList.remove('is-dragging');
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 5) { // Click threshold
      const projectElement = (e.target as HTMLElement).closest('.project-item');
      if (projectElement) {
        const projectId = projectElement.getAttribute('data-project-id');
        const project = PROJECTS_DATA.find(p => p.id === projectId);
        if (project) {
          setSelectedProject(project);
        }
      }
    }
    
    isDraggingRef.current = false;
    setCursorStyle('grab');
  }, [handleMouseMove]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (showInstructions) {
      setIsInstructionFading(true);
      setTimeout(() => setShowInstructions(false), 500);
    }
    
    if (activeOverlay || selectedProject || (e.target as HTMLElement).closest('button, a')) return;
    
    document.body.classList.add('is-dragging');
    isDraggingRef.current = true;
    setCursorStyle('grabbing');

    dragStartRef.current = { 
      x: e.clientX,
      y: e.clientY,
      canvasX: position.x,
      canvasY: position.y
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleScrollDown = () => {
    projectsContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return <Preloader />;
  }

  const finalCursorClass = activeOverlay || selectedProject ? 'cursor-auto' : `cursor-${cursorStyle}`;

  return (
    <div 
        className={`bg-[#111111] text-gray-200 font-sans leading-normal tracking-wide transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
    >
      <Header 
        onNavClick={handleNavClick} 
        />
      
      <main>
        <Hero onScrollDown={handleScrollDown} />
        <section
            id="projects"
            ref={projectsContainerRef}
            className={`w-screen h-screen overflow-hidden relative ${finalCursorClass}`}
            onMouseDown={handleMouseDown}
        >
            {showInstructions && (
              <div 
                className={`absolute inset-0 z-20 bg-black bg-opacity-70 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${isInstructionFading ? 'opacity-0' : 'opacity-100'}`}
                aria-hidden="true"
              >
                  <p className="text-white text-2xl uppercase tracking-widest font-light animate-pulse">
                      Grab to Move
                  </p>
              </div>
            )}
            <div 
                className="absolute top-0 left-0"
                style={{ 
                    width: '300vw', 
                    height: '300vh',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    willChange: 'transform',
                 }}
            >
                <Projects 
                    projects={PROJECTS_DATA} 
                 />
            </div>
        </section>
      </main>

      {activeOverlay === 'about' && <About onClose={handleCloseOverlay} />}
      {activeOverlay === 'services' && <Services onClose={handleCloseOverlay} />}
      {activeOverlay === 'contact' && <Contact onClose={handleCloseOverlay} />}
      
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
