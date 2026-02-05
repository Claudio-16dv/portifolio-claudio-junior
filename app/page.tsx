"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Resume } from "@/components/sections/resume";
import { Portfolio } from "@/components/sections/portfolio";

type Page = "about" | "resume" | "portfolio";

export default function Home() {
  const [activePage, setActivePage] = useState<Page>("about");

  return (
    <main className="min-h-screen p-4 pb-24 sm:p-6 sm:pb-28 lg:pb-6 xl:max-w-[1400px] xl:mx-auto xl:flex xl:gap-6 xl:items-start xl:py-[60px]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="relative w-full mt-4 sm:mt-6 xl:mt-0 xl:flex-1">
        <div className="bg-card border border-border rounded-2xl p-4 sm:p-8 shadow-lg min-h-[400px]">
          {/* Navbar */}
          <Navbar activePage={activePage} onPageChange={setActivePage} />

          {/* Content */}
          {activePage === "about" && <About />}
          {activePage === "resume" && <Resume />}
          {activePage === "portfolio" && <Portfolio />}
        </div>
      </div>
    </main>
  );
}
