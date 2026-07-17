"use client";

import { useTranslations, useLocale } from "next-intl";
import { BookOpen, BriefcaseBusiness, Layers3 } from "lucide-react";
import { education, experience, skills } from "@/lib/data";

export function Resume() {
  const t = useTranslations("resume");
  const locale = useLocale() as "pt" | "en";

  return (
    <article className="animate-fade-in">
      <header>
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 relative pb-2">
          {t("title")}
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-accent-color rounded-full" />
        </h2>
      </header>

      {/* Education */}
      <section className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-12 h-12 rounded-xl bg-linear-to-br from-neutral-600/25 to-transparent flex items-center justify-center text-accent-color shadow-lg">
            <div className="absolute inset-px bg-card rounded-[inherit] -z-10" />
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-lg sm:text-xl font-medium text-foreground">{t("education")}</h3>
        </div>

        <ol className="ml-12 space-y-5">
          {education.map((item, index) => (
            <TimelineItem
              key={item.id}
              title={item.title[locale]}
              subtitle={item.institution[locale]}
              period={item.period[locale]}
              description={item.description[locale]}
              isLast={index === education.length - 1}
            />
          ))}
        </ol>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-12 h-12 rounded-xl bg-linear-to-br from-neutral-600/25 to-transparent flex items-center justify-center text-accent-color shadow-lg">
            <div className="absolute inset-px bg-card rounded-[inherit] -z-10" />
            <BriefcaseBusiness className="w-5 h-5" />
          </div>
          <h3 className="text-lg sm:text-xl font-medium text-foreground">{t("experience")}</h3>
        </div>

        <ol className="ml-12 space-y-5">
          {experience.map((item, index) => (
            <TimelineItem
              key={item.id}
              title={item.title[locale]}
              subtitle={item.company[locale]}
              period={item.period[locale]}
              description={item.description[locale]}
              highlights={item.highlights[locale]}
              technologies={item.technologies[locale]}
              stackLabel={t("technologyStack")}
              isLast={index === experience.length - 1}
            />
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section>
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-12 h-12 rounded-xl bg-linear-to-br from-neutral-600/25 to-transparent flex items-center justify-center text-accent-color shadow-lg">
            <div className="absolute inset-px bg-card rounded-[inherit] -z-10" />
            <Layers3 className="w-5 h-5" />
          </div>
          <h3 className="text-lg sm:text-xl font-medium text-foreground">{t("skills")}</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <SkillGroup
              key={skill.category.en}
              title={skill.category[locale]}
              technologies={skill.technologies[locale]}
            />
          ))}
        </div>
      </section>
    </article>
  );
}

function TimelineItem({
  title,
  subtitle,
  period,
  description,
  highlights,
  technologies,
  stackLabel,
  isLast,
}: {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  highlights?: string[];
  technologies?: string[];
  stackLabel?: string;
  isLast: boolean;
}) {
  return (
    <li className="relative">
      {/* Line */}
      {!isLast && (
        <div className="absolute -top-5 -left-[30px] w-px h-[calc(100%+40px)] bg-border" />
      )}
      {/* Dot */}
      <div className="absolute top-1.5 -left-[33px] w-2 h-2 bg-accent-color rounded-full shadow-[0_0_0_4px_var(--border)]" />

      <h4 className="text-sm sm:text-base font-medium text-foreground mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground mb-1">{subtitle}</p>
      <span className="text-accent-color text-sm font-normal mb-2 block">{period}</span>
      <p className="text-muted-foreground text-sm font-light leading-relaxed">{description}</p>
      {highlights && highlights.length > 0 && (
        <ul className="mt-3 space-y-2">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="relative pl-4 text-muted-foreground text-sm font-light leading-relaxed before:absolute before:left-0 before:top-[0.65em] before:w-1 before:h-1 before:rounded-full before:bg-accent-color"
            >
              {highlight}
            </li>
          ))}
        </ul>
      )}
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4" aria-label={stackLabel}>
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-accent-color/25 bg-accent-color/10 px-2.5 py-1 text-[11px] font-normal text-accent-color"
            >
              {technology}
            </span>
          ))}
        </div>
      )}
    </li>
  );
}

function SkillGroup({
  title,
  technologies,
}: {
  title: string;
  technologies: string[];
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 shadow-md">
      <h4 className="text-sm font-medium text-foreground mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg bg-secondary px-2.5 py-1.5 text-xs font-light text-foreground/85"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}
