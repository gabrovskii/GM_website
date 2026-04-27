"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[819px] flex items-center px-8 mx-auto max-w-6xl" id="hero">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
        <div className="md:col-span-7 z-10 flex flex-col items-start justify-center">
          <span className="font-label text-xs uppercase tracking-widest text-primary dark:text-brand-accent mb-4 block font-bold">
            {t(
              "Especialista em Qualidade & Testes de Software",
              "Software Quality & Testing Specialist"
            )}
          </span>
          <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-on-surface dark:text-white mb-8">
            <span className="text-primary-dim dark:text-brand-accent">Gabriel</span>
            <div>Menezes</div>
          </h1>
          <p className="font-body text-xl text-secondary dark:text-slate-300 mb-10 leading-relaxed max-w-xl">
            {t(
              "Especialista em testes de software e colaborador da comunidade Python no Brasil, vivo o equilíbrio entre os desafios técnicos e o ar livre. Entusiasta de trilhas e da fotografia aérea.",
              "A Software Quality Specialist and Python community contributor in Brazil, I balance technical precision with the freedom of the outdoors. Hiking enthusiast and aerial photographer."
            )}
          </p>
          <div className="col-span-full w-full">
            <div className="max-w-xl mx-auto">
              <iframe
                className="spotify-embed"
                src="https://open.spotify.com/embed/playlist/696ALwWYYnyTI1NFxEnQJN?utm_source=generator&theme=0"
                width="100%"
                height="100"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-high dark:bg-[#111418] relative group border dark:border-white/5">
            <Image
              src="/assets/images/1.jpg"
              alt="Perspectiva Aérea"
              fill
              className="object-cover transition-all duration-700 scale-105 group-hover:scale-100"
            />
            <div className="absolute bottom-6 left-6 glass-overlay p-4 rounded-lg">
              <span className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant dark:text-slate-400 block mb-1">
                {t("Evento", "Event")}
              </span>
              <span className="font-label text-sm font-bold text-primary dark:text-brand-accent">
                Python Norte 2023
              </span>
            </div>
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-container/30 dark:bg-brand-accent/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
