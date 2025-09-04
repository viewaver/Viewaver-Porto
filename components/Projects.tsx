import React from 'react';
import type { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  onProjectClick: (index: number) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, onProjectClick }) => {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-0">
      {projects.map((project, index) => {
        return (
          <button
            key={project.id}
            className="group relative block w-full overflow-hidden break-inside-avoid"
            onClick={() => onProjectClick(index)}
            aria-label={`View details for ${project.title}`}
          >
            <img
              src={project.coverImage}
              alt={project.title}
              className="block w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#DA5A2A] bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#3B1877]/80 to-transparent project-item-title">
              <h3 className="text-white text-base font-light truncate">{project.title}</h3>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Projects;