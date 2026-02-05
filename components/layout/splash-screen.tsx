"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<"init" | "bemvindo" | "welcome" | "fadeout">("init");

  useEffect(() => {
    // Init -> Bem-vindo (fade in)
    const timer0 = setTimeout(() => setPhase("bemvindo"), 600);
    // Bem-vindo -> Welcome
    const timer1 = setTimeout(() => setPhase("welcome"), 2400);
    // Welcome -> Fadeout
    const timer2 = setTimeout(() => setPhase("fadeout"), 4200);
    // Complete
    const timer3 = setTimeout(() => onComplete(), 4900);

    return () => {
      clearTimeout(timer0);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700",
        "bg-neutral-900",
        phase === "fadeout" && "opacity-0 pointer-events-none"
      )}
    >
      <div className="relative">
        {/* Bem-vindo */}
        <h1
          className={cn(
            "text-4xl sm:text-6xl font-light text-white transition-all duration-700 absolute left-1/2 -translate-x-1/2 whitespace-nowrap",
            phase === "bemvindo" ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          Bem-vindo
        </h1>

        {/* Welcome */}
        <h1
          className={cn(
            "text-4xl sm:text-6xl font-light text-white transition-all duration-700 whitespace-nowrap",
            phase === "welcome" ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          Welcome
        </h1>
      </div>
    </div>
  );
}
