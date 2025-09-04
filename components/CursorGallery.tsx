import React, { useState, useEffect, useRef } from 'react';
import type { Project } from '../types';

interface TrailImage {
  id: number;
  x: number;
  y: number;
  src: string;
  alt: string;
}

interface CursorGalleryProps {
  projects: Project[];
  position: { x: number; y: number };
  isVisible: boolean;
}

const CursorGallery: React.FC<CursorGalleryProps> = ({ projects, position, isVisible }) => {
  const [trail, setTrail] = useState<TrailImage[]>([]);
  const imageIndexRef = useRef(0);
  const nextId = useRef(0);
  const lastAddTime = useRef(0);

  useEffect(() => {
    if (!isVisible || projects.length === 0) {
      return;
    }

    const now = Date.now();
    // Throttle image creation to every 50ms for a dense trail on movement
    if (now - lastAddTime.current < 50) {
      return;
    }
    lastAddTime.current = now;

    const currentProject = projects[imageIndexRef.current];
    const newImage: TrailImage = {
      id: nextId.current++,
      x: position.x,
      y: position.y,
      src: currentProject.coverImage.replace('=w800', '=w200'),
      alt: currentProject.title,
    };

    setTrail(prev => [...prev, newImage]);

    // Cycle through project images for the next trail member
    imageIndexRef.current = (imageIndexRef.current + 1) % projects.length;

    // Remove the image after its animation ends
    const timeoutId = setTimeout(() => {
      setTrail(currentTrail => currentTrail.filter(img => img.id !== newImage.id));
    }, 800); // Corresponds to animation duration in index.html

    return () => clearTimeout(timeoutId);

  }, [position, isVisible, projects]);

  if (projects.length === 0) {
    return null;
  }
  
  return (
    <>
      {trail.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className="fixed w-20 h-auto object-cover rounded-md shadow-lg pointer-events-none cursor-gallery-trail-image"
          style={{
            left: `${image.x}px`,
            top: `${image.y}px`,
          }}
        />
      ))}
    </>
  );
};

export default CursorGallery;