export type Project = {
  id: string;
  title: {
    pt: string;
    en: string;
  };
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
