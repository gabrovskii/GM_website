"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const Social = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: "Flickr",
      url: "https://www.flickr.com/photos/gabrielmenezes_/",
      icon: "photo_library",
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/gabrovskii",
      icon: "videogame_asset",
    },
    {
      name: "VscoCam",
      url: "https://vsco.co/gabrovskii/gallery",
      icon: "filter_vintage",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/gabbrovskii",
      icon: "photo_camera",
    },
    {
      name: "Linkedin",
      url: "http://www.linkedin.com/in/gabrielcmenezes",
      icon: "work",
    },
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto text-center" id="social">
      <h3 className="font-headline text-3xl font-black dark:text-white mb-12 tracking-tighter uppercase">
        {t("ONDE MAIS ME ENCONTRAR?", "CONNECT ELSEWHERE")}
      </h3>

      <div className="flex flex-wrap justify-center gap-12 top-20 mt-10">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 bg-surface-container-high dark:bg-[#1b2027] rounded-full flex items-center justify-center group-hover:bg-primary-container dark:group-hover:bg-[#a8caec] transition-all border dark:border-white/5">
              <span className="material-symbols-outlined text-primary dark:text-brand-accent group-hover:dark:text-brand-dark">
                {link.icon}
              </span>
            </div>
            <span className="font-label text-[10px] uppercase tracking-widest text-outline dark:text-slate-400 group-hover:text-primary dark:group-hover:text-brand-accent font-bold">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Social;
