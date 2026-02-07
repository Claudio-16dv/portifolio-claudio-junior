"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Eye, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects, categories, type Project } from "@/lib/data";
import { ProjectModal } from "./project-modal";

export function Portfolio() {
  const t = useTranslations("portfolio");
  const locale = useLocale() as "pt" | "en";
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
    setSelectOpen(false);
  };

  return (
    <article className="animate-fade-in">
      <header>
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 relative pb-2">
          {t("title")}
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-accent-color rounded-full" />
        </h2>
      </header>

      {/* Filter - Desktop */}
      <ul className="hidden md:flex items-center gap-6 mb-8 pl-1">
        {categories.map((cat) => (
          <li key={cat.value}>
            <button
              onClick={() => handleFilterChange(cat.value)}
              className={cn(
                "text-base transition-colors",
                activeFilter === cat.value
                  ? "text-accent-color"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t(cat.labelKey)}
            </button>
          </li>
        ))}
      </ul>

      {/* Filter - Mobile Select */}
      <div className="relative mb-6 md:hidden">
        <button
          onClick={() => setSelectOpen(!selectOpen)}
          className="w-full flex items-center justify-between bg-card border border-border rounded-xl px-4 py-3 text-muted-foreground text-sm"
        >
          <span>
            {t(categories.find((c) => c.value === activeFilter)?.labelKey || "all")}
          </span>
          <ChevronDown
            className={cn("w-4 h-4 transition-transform", selectOpen && "rotate-180")}
          />
        </button>

        {selectOpen && (
          <ul className="absolute top-full left-0 w-full mt-2 bg-card border border-border rounded-xl p-2 z-10 shadow-lg">
            {categories.map((cat) => (
              <li key={cat.value}>
                <button
                  onClick={() => handleFilterChange(cat.value)}
                  className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {t(cat.labelKey)}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Projects Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <li key={project.id} className="animate-scale-up">
            <button
              onClick={() => setSelectedProject(project)}
              className="w-full text-left group"
            >
              <figure className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4 bg-secondary">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center">
                  <div className="bg-secondary text-accent-color p-4 rounded-xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </figure>

              <h3 className="text-foreground font-medium mb-1 ml-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm ml-2">
                {t(categories.find((c) => c.value === project.category)?.labelKey || "all")}
              </p>
            </button>
          </li>
        ))}
      </ul>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        locale={locale}
        onClose={() => setSelectedProject(null)}
      />
    </article>
  );
}
