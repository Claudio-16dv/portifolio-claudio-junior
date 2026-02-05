"use client";

import { useTranslations, useLocale } from "next-intl";
import { BookOpen } from "lucide-react";
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
              period={item.period}
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
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-lg sm:text-xl font-medium text-foreground">{t("experience")}</h3>
        </div>

        <ol className="ml-12 space-y-5">
          {experience.map((item, index) => (
            <TimelineItem
              key={item.id}
              title={item.title[locale]}
              subtitle={item.company[locale]}
              period={item.period}
              description={item.description[locale]}
              isLast={index === experience.length - 1}
            />
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section>
        <h3 className="text-lg sm:text-xl font-medium text-foreground mb-5">{t("skills")}</h3>
        <div className="bg-card border border-border rounded-2xl p-5 shadow-lg space-y-5">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
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
  isLast,
}: {
  title: string;
  subtitle: string;
  period: string;
  description: string;
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
    </li>
  );
}

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h5 className="text-sm font-medium text-foreground">{name}</h5>
        <span className="text-muted-foreground text-xs font-light">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-accent-color rounded-full skill-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
