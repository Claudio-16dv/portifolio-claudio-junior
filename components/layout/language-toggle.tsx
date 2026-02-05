"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const t = useTranslations("language");

  const toggleLanguage = () => {
    const current = document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="))
      ?.split("=")[1] || "pt";
    
    const newLocale = current === "pt" ? "en" : "pt";
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    window.location.reload();
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      title={t("toggle")}
      className="text-muted-foreground hover:text-accent-color"
    >
      <Languages className="w-5 h-5" />
    </Button>
  );
}
