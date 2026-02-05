"use client";

import { useTranslations } from "next-intl";
import { User, FileText, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

type Page = "about" | "resume" | "portfolio";

interface NavbarProps {
  activePage: Page;
  onPageChange: (page: Page) => void;
}

export function Navbar({ activePage, onPageChange }: NavbarProps) {
  const t = useTranslations("nav");

  const navItems: { key: Page; label: string; icon: React.ReactNode }[] = [
    { key: "about", label: t("about"), icon: <User className="w-5 h-5" /> },
    { key: "resume", label: t("resume"), icon: <FileText className="w-5 h-5" /> },
    { key: "portfolio", label: t("portfolio"), icon: <Briefcase className="w-5 h-5" /> },
  ];

  return (
    <nav
      className={cn(
        // Mobile: floating pill at bottom center
        "fixed bottom-4 left-1/2 -translate-x-1/2 z-50",
        "bg-background/60 backdrop-blur-xl border border-border/50 rounded-full",
        "shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        // Desktop: positioned at top right of content
        "lg:absolute lg:bottom-auto lg:top-0 lg:left-auto lg:right-0 lg:translate-x-0",
        "lg:rounded-none lg:rounded-bl-2xl lg:rounded-tr-2xl lg:bg-card/80"
      )}
    >
      <ul className="flex items-center justify-center gap-1 px-2 py-2 lg:gap-6 lg:px-5 lg:py-0">
        {navItems.map((item) => (
          <li key={item.key}>
            <button
              onClick={() => onPageChange(item.key)}
              className={cn(
                "flex items-center gap-2 py-2.5 px-4 rounded-full transition-all",
                "lg:flex-row lg:py-5 lg:px-3 lg:rounded-none",
                activePage === item.key
                  ? "text-white bg-accent-color shadow-md lg:text-accent-color lg:bg-transparent lg:shadow-none"
                  : "text-foreground/80 hover:text-foreground hover:bg-foreground/10 lg:hover:bg-transparent"
              )}
            >
              <span>{item.icon}</span>
              <span className="text-sm font-medium lg:text-base">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
