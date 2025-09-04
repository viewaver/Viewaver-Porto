import React from 'react';
import type { Project } from '../types';

interface MobileProjectsProps {
  projects: Project[];
  onProjectClick: (index: number) => void;
}

const MobileProjects: React.FC<MobileProjectsProps> = ({ projects, onProjectClick }) => {
  return (
    <section id="projects" className="bg-[#111111] py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-center font-light uppercase tracking-widest mb-12 text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
          {projects.map((project, index) => (
            <button 
              key={project.id} 
              className="group text-left cursor-pointer" 
              onClick={() => onProjectClick(index)}
              aria-label={`View details for ${project.title}`}
            >
              <div className="overflow-hidden mb-4 bg-gray-900 aspect-square">
                <img 
                  src={project.coverImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-light text-white text-center">{project.title}</h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileProjects;
