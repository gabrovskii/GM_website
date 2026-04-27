"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (pt: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-lang");
    if (savedLang === "en" || savedLang === "pt") {
      setLanguage(savedLang as Language);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "pt" ? "en" : "pt";
    setLanguage(newLang);
    localStorage.setItem("preferred-lang", newLang);
    document.documentElement.setAttribute("lang", newLang === "pt" ? "pt-br" : "en");
  };

  const t = (pt: string, en: string) => (language === "pt" ? pt : en);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
