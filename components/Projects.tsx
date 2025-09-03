import React from 'react';
import type { Project } from '../types';
import DraggableQuote from './DraggableQuote';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  // Create 9 tiles for the 3x3 grid to enable seamless looping
  const gridTiles = Array.from({ length: 9 }).map((_, tileIndex) => {
    
    // For each tile, render all the projects
    const projectItems = projects.map((project) => {
      // Each project is wrapped in an absolutely positioned div
      return (
        <div
          key={`${tileIndex}-${project.id}`} // Unique key per project instance
          data-project-id={project.id}
          className="group absolute cursor-pointer project-item z-10 transition-transform duration-300 ease-in-out hover:scale-125 hover:z-20"
          style={{
            // Position is set using project data
            left: `${project.position.x}%`,
            // FIX: Corrected typo from `positiony` to `position.y`
            top: `${project.position.y}%`,
            width: '15vw',
            maxWidth: '220px',
          }}
        >
          <div className="relative overflow-hidden">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-auto object-cover"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300"></div>
          </div>
          <div className="mt-2 text-center project-item-title">
            <h3 className="text-white text-lg font-light">{project.title}</h3>
          </div>
        </div>
      );
    });

    return (
      <div key={tileIndex} className="relative w-[100vw] h-[100vh]">
        {projectItems}
        
        {/* Scattered Quotes */}
        <div className="absolute z-20 pointer-events-none" style={{ top: '55%', left: '30%' }}>
          <DraggableQuote>A process of experimentation.</DraggableQuote>
        </div>
        <div className="absolute z-20 pointer-events-none" style={{ top: '10%', left: '60%' }}>
          <DraggableQuote>Spark imagination.</DraggableQuote>
        </div>
        <div className="absolute z-20 pointer-events-none" style={{ top: '80%', left: '15%' }}>
          <DraggableQuote>Beyond the confines.</DraggableQuote>
        </div>
        <div className="absolute z-20 pointer-events-none" style={{ top: '70%', left: '75%' }}>
          <DraggableQuote>Unconventional explorations.</DraggableQuote>
        </div>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-3 w-full h-full">
      {gridTiles}
    </div>
  );
};

export default Projects;
