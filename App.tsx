import React, { useState, useEffect, useCallback } from 'react';
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
import MobileProjects from './components/MobileProjects';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import InfoPanel from './components/InfoPanel';
import CursorGallery from './components/CursorGallery';

type Overlay = 'about' | 'services' | 'contact' | null;

const App: React.FC = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [activeOverlay, setActiveOverlay] = useState<Overlay>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const [isMobileView, setIsMobileView] = useState(false);

  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isHeroFading, setIsHeroFading] = useState(false);
  
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorInPanel, setIsCursorInPanel] = useState(false);

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleCloseModal = () => {
    setSelectedProjectIndex(null);
  };

  const handleNavClick = (overlay: Overlay) => {
    setActiveOverlay(overlay);
  };

  const handleCloseOverlay = () => {
    setActiveOverlay(null);
  };
  
  const handleProjectClick = (index: number) => {
    setSelectedProjectIndex(index);
  }

  const handleScrollDown = useCallback(() => {
    if (!isHeroVisible || isHeroFading) return;
    
    setIsHeroFading(true);
    setTimeout(() => {
        setIsHeroVisible(false);
    }, 500); // Match transition duration
  }, [isHeroVisible, isHeroFading]);
  
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        handleScrollDown();
      }
    };

    if (isHeroVisible) {
      window.addEventListener('wheel', handleWheel, { once: true });
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isHeroVisible, handleScrollDown]);
  
  const handleGoHome = () => {
      setIsHeroFading(false);
      setIsHeroVisible(true);
      window.scrollTo(0, 0);
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div 
        className={`bg-[#3B1877] text-gray-200 font-sans leading-normal tracking-wide transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
    >
      <Header 
        onNavClick={handleNavClick} 
        />
      
      {isHeroVisible && <Hero isFading={isHeroFading} />}

      <main className={isHeroVisible ? 'hidden' : ''}>
        {isMobileView ? (
          <MobileProjects projects={PROJECTS_DATA} onProjectClick={handleProjectClick} />
        ) : (
          <div className="flex w-full">
            <div className="w-4/5">
                <Projects 
                    projects={PROJECTS_DATA}
                    onProjectClick={handleProjectClick}
                 />
            </div>
            <div 
              className="w-1/5 px-8"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsCursorInPanel(true)}
              onMouseLeave={() => setIsCursorInPanel(false)}
            >
              <div className="sticky top-0 h-screen flex flex-col pt-24 pb-8">
                 <InfoPanel />
              </div>
            </div>
          </div>
        )}
      </main>

      {!isHeroVisible && <Footer />}

      {!isHeroVisible && !isMobileView && <ScrollToTopButton onGoHome={handleGoHome} />}

      {activeOverlay === 'about' && <About onClose={handleCloseOverlay} />}
      {activeOverlay === 'services' && <Services onClose={handleCloseOverlay} />}
      {activeOverlay === 'contact' && <Contact onClose={handleCloseOverlay} />}
      
      {selectedProjectIndex !== null && (
        <ProjectModal 
            projects={PROJECTS_DATA} 
            initialIndex={selectedProjectIndex} 
            onClose={handleCloseModal} 
        />
      )}
      
      {!isHeroVisible && !isMobileView && (
          <CursorGallery projects={PROJECTS_DATA} position={cursorPosition} isVisible={isCursorInPanel} />
      )}
    </div>
  );
};

export default App;