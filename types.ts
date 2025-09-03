
export interface Service {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  position: {
    x: number; // percentage from left
    y: number; // percentage from top
  };
}