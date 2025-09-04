import React from 'react';
import type { Project } from '../types';

interface MobileProjectsProps {
  projects: Project[];
  onProjectClick: (index: number) => void;
}

const MobileProjects: React.FC<MobileProjectsProps> = ({ projects, onProjectClick }) => {
  return (
    <section id="projects" className="bg-[#3B1877] p-0">
      <div className="columns-2 gap-0">
        {projects.map((project, index) => (
          <button 
            key={project.id} 
            className="group cursor-pointer block w-full mb-0 break-inside-avoid" 
            onClick={() => onProjectClick(index)}
            aria-label={`View details for ${project.title}`}
          >
            <div className="overflow-hidden bg-[#2a1053]">
              <img 
                src={project.coverImage} 
                alt={project.title} 
                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
                loading="lazy"
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default MobileProjects;