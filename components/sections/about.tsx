"use client";

import { useTranslations, useLocale } from "next-intl";
import { Code, Palette, Smartphone, Server } from "lucide-react";
import { aboutMe, services } from "@/lib/data";

const iconMap = {
  code: Code,
  palette: Palette,
  smartphone: Smartphone,
  server: Server,
};

export function About() {
  const t = useTranslations("about");
  const locale = useLocale() as "pt" | "en";

  return (
    <article className="animate-fade-in">
      <header>
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 relative pb-2">
          {t("title")}
          <span className="absolute bottom-0 left-0 w-10 h-1 bg-accent-color rounded-full" />
        </h2>
      </header>

      {/* About Text */}
      <section className="mb-8">
        <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
          {aboutMe[locale].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Services */}
      <section>
        <h3 className="text-lg sm:text-xl font-medium text-foreground mb-5">
          {t("whatIDo")}
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <li
                key={service.id}
                className="relative bg-card border border-border rounded-2xl p-5 shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-color/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-accent-color" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-foreground mb-1">
                      {service.title[locale]}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description[locale]}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}
