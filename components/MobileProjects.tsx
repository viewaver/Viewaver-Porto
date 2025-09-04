import React from 'react';
import type { Project } from '../types';

interface MobileProjectsProps {
  projects: Project[];
  onProjectClick: (index: number) => void;
}

const MobileProjects: React.FC<MobileProjectsProps> = ({ projects, onProjectClick }) => {
  return (
    <section id="projects" className="bg-[#111111]">
      <div className="grid grid-cols-2">
        {projects.map((project, index) => (
          <button 
            key={project.id} 
            className="group cursor-pointer" 
            onClick={() => onProjectClick(index)}
            aria-label={`View details for ${project.title}`}
          >
            <div className="overflow-hidden bg-gray-900 aspect-square">
              <img 
                src={project.coverImage} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
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