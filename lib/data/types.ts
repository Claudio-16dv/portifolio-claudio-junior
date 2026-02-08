export type Project = {
  id: string;
  title: string;
  category: "web-design" | "applications" | "web-development";
  thumbnail: string;
  images: string[];
  isPublic: boolean;
  liveUrl?: string;
  repoUrl?: string;
  technologies: string[];
  description: {
    pt: string;
    en: string;
  };
};
