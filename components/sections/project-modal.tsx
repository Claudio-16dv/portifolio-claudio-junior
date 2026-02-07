"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ExternalLink, Lock, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data";

interface ProjectModalProps {
  project: Project | null;
  locale: "pt" | "en";
  onClose: () => void;
}

export function ProjectModal({ project, locale, onClose }: ProjectModalProps) {
  const t = useTranslations("portfolio");
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <Dialog
      open={!!project}
      onOpenChange={(open) => {
        if (!open) {
          setCurrentImage(0);
          onClose();
        }
      }}
    >
      <DialogContent className="w-[95vw] max-w-[1200px] h-[90vh] flex flex-col bg-card border-border p-0 gap-0 overflow-hidden">
        {/* Header */}
        <DialogHeader className="p-6 pb-4 border-b border-border shrink-0">
          <div className="flex items-center justify-between gap-4 pr-8">
            <DialogTitle className="text-2xl font-semibold text-foreground">
              {project.title}
            </DialogTitle>
            <Badge
              variant={project.isPublic ? "default" : "secondary"}
              className={
                project.isPublic
                  ? "bg-green-600 hover:bg-green-700 shrink-0"
                  : "shrink-0"
              }
            >
              {project.isPublic ? (
                <>
                  <Globe className="w-3 h-3 mr-1" />
                  {t("public")}
                </>
              ) : (
                <>
                  <Lock className="w-3 h-3 mr-1" />
                  {t("private")}
                </>
              )}
            </Badge>
          </div>
        </DialogHeader>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Main Image with Navigation */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-900">
            <Image
              src={project.images[currentImage]}
              alt={`${project.title} - ${currentImage + 1}`}
              fill
              className="object-contain"
              priority
            />
            
            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 text-white text-sm">
                  {currentImage + 1} / {project.images.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {project.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-colors ${
                    currentImage === index
                      ? "border-accent-color"
                      : "border-transparent hover:border-accent-color/50"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-3">
              {t("description")}
            </h4>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {project.description[locale]}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-3">
              {t("technologies")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.liveUrl || project.repoUrl) && (
            <div className="flex gap-3 pt-4">
              {project.liveUrl && (
                <Button
                  asChild
                  className="bg-accent-color text-white hover:bg-accent-color-hover"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("visitSite")}
                  </a>
                </Button>
              )}
              {project.repoUrl && (
                <Button asChild variant="outline">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="w-4 h-4 mr-2" />
                    {t("viewCode")}
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
