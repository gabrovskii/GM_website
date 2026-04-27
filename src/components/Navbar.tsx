"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const { toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "experience", "journey", "lifestyle", "social"];
      const scrollPosition = window.scrollY + 100;
      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50);

      if (isAtBottom) {
        setActiveSection("social");
      } else {
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", pt: "Início", en: "Home" },
    { id: "experience", pt: "Experiência", en: "Experience" },
    { id: "journey", pt: "Comunidade", en: "Community" },
    { id: "lifestyle", pt: "Registros", en: "Gallery" },
    { id: "social", pt: "Contatos", en: "Connect" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/80 dark:bg-brand-dark/80 border-b border-transparent dark:border-white/5 shadow-sm">
      <div className="flex justify-between items-center max-w-full mx-auto px-8 py-4 w-full relative">
        <a
          href="#hero"
          className="text-xl font-bold tracking-tighter text-slate-800 dark:text-[#e0e6f1] font-headline uppercase hover:opacity-70 transition-opacity"
        >
          GABRIEL MENEZES
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "nav-link text-slate-500 dark:text-[#a5abb6] font-medium font-headline tracking-tight hover:text-primary dark:hover:text-[#e0e6f1] transition-colors duration-300 flex flex-col items-center relative",
                activeSection === link.id && "active"
              )}
            >
              <span>{t(link.pt, link.en)}</span>
              <span className="active-dot absolute -bottom-2 w-1 h-1 bg-primary dark:bg-brand-accent rounded-full opacity-0 transition-opacity"></span>
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-surface-container dark:hover:bg-[#1b2027] transition-all border border-slate-200 dark:border-white/10"
          >
            <span className="material-symbols-outlined text-sm text-primary dark:text-brand-accent">
              language
            </span>
            <span className="font-label text-xs font-bold text-slate-700 dark:text-[#a5abb6] uppercase">
              {language === "pt" ? "PT" : "EN"}
            </span>
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-surface-container dark:hover:bg-[#1b2027] transition-all"
          >
            <span className="material-symbols-outlined text-primary dark:text-brand-accent">
              contrast
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
