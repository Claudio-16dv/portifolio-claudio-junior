"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations("sidebar");

  return (
    <aside
      className={cn(
        "bg-card border border-border rounded-2xl p-4 shadow-lg transition-all duration-500 overflow-hidden",
        "xl:sticky xl:top-[60px] xl:h-fit xl:pt-[60px] xl:min-w-[320px] xl:w-[320px]",
        isExpanded ? "max-h-[500px]" : "max-h-[112px]",
        "sm:max-h-[180px] sm:p-[30px]",
        isExpanded && "sm:max-h-[600px]",
        "xl:max-h-none"
      )}
    >
      {/* Basic Info */}
      <div className="relative flex items-center gap-4 sm:gap-6 xl:flex-col">
        {/* Logo Avatar */}
        <div className="relative w-20 h-20 sm:w-[120px] sm:h-[120px] xl:w-[150px] xl:h-[150px] rounded-2xl sm:rounded-3xl bg-linear-to-br from-neutral-800 to-neutral-950 overflow-hidden shadow-xl flex items-end justify-center pb-2 sm:pb-3 xl:pb-4">
          <div className="flex items-end">
            <span className="text-neutral-500 text-base sm:text-xl xl:text-2xl font-light">&lt;</span>
            <span className="text-white text-3xl sm:text-5xl xl:text-6xl font-light tracking-tight mx-1">CJ</span>
            <span className="text-neutral-500 text-base sm:text-xl xl:text-2xl font-light">/&gt;</span>
          </div>
        </div>

        {/* Name & Title */}
        <div className="xl:text-center">
          <h1 className="text-foreground text-lg sm:text-xl font-light tracking-wide mb-2 xl:whitespace-nowrap">
            Claudio Junior
          </h1>
          <div className="flex items-center gap-2 flex-nowrap xl:justify-center">
            <p className="text-foreground/90 bg-secondary text-xs font-light px-3 py-1 rounded-lg whitespace-nowrap">
              {personalInfo.title}
            </p>
            <p className="text-foreground/90 bg-secondary text-xs font-light px-3 py-1 rounded-lg whitespace-nowrap">
              {t("seniority")}
            </p>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "absolute -top-4 -right-4 sm:-top-[30px] sm:-right-[30px] rounded-bl-2xl rounded-tr-2xl",
            "text-sm text-accent-color bg-linear-to-br from-neutral-600/25 to-transparent p-2.5 sm:px-4",
            "shadow-lg transition-all hover:bg-linear-to-br hover:from-accent-color/30",
            "xl:hidden"
          )}
        >
          <span className="hidden sm:block text-xs">
            {isExpanded ? t("hideContacts") : t("showContacts")}
          </span>
          <ChevronDown
            className={cn(
              "w-4 h-4 sm:hidden transition-transform",
              isExpanded && "rotate-180"
            )}
          />
        </button>
      </div>

      {/* Expanded Content */}
      <div
        className={cn(
          "transition-all duration-500",
          isExpanded ? "opacity-100 visible" : "opacity-0 invisible",
          "xl:opacity-100 xl:visible"
        )}
      >
        <div className="w-full h-px bg-border my-4 sm:my-8" />

        {/* Contact List */}
        <ul className="space-y-4 sm:space-y-5">
          <ContactItem
            icon={<Mail className="w-4 h-4" />}
            label={t("email")}
            value={personalInfo.email}
          />
          <ContactItem
            icon={<Phone className="w-4 h-4" />}
            label={t("phone")}
            value={personalInfo.phone}
          />
          <ContactItem
            icon={<MapPin className="w-4 h-4" />}
            label={t("location")}
            value={personalInfo.location}
          />
        </ul>

        <div className="w-full h-px bg-border my-4 sm:my-8 xl:opacity-0" />

        {/* Social Links */}
        <div className="flex items-center gap-4 xl:justify-center">
          <SocialLink href={personalInfo.social.github} icon={<GithubIcon />} />
          <SocialLink href={personalInfo.social.linkedin} icon={<LinkedinIcon />} />
        </div>

        <div className="w-full h-px bg-border my-4 sm:my-8" />

        {/* Theme & Language Toggles */}
        <div className="flex items-center justify-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </aside>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <li className="flex items-center gap-4">
      <div className="relative w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-linear-to-br from-neutral-600/25 to-transparent flex items-center justify-center text-accent-color shadow-lg">
        <div className="absolute inset-px bg-card rounded-[inherit] -z-10" />
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-muted-foreground text-[10px] sm:text-xs uppercase mb-0.5">{label}</p>
        {href ? (
          <a
            href={href}
            className="text-foreground text-xs sm:text-sm font-light hover:text-accent-color transition-colors truncate block"
          >
            {value}
          </a>
        ) : (
          <span className="text-foreground text-xs sm:text-sm font-light block">{value}</span>
        )}
      </div>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-accent-color transition-colors"
    >
      {icon}
    </a>
  );
}

function GithubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}