"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const Lifestyle = () => {
  const { t } = useLanguage();
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: "left" | "right") => {
    if (galleryRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 px-8 bg-surface dark:bg-brand-dark overflow-hidden" id="lifestyle">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-0 w-64 h-64 technical-grid text-primary/5 dark:text-brand-accent/5 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-1 text-primary/20 dark:text-brand-accent/20 border-b border-dashed"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-12 items-center">
          <div className="lg:col-span-5 relative z-10">
            <span className="font-label text-xs uppercase tracking-widest text-primary dark:text-brand-accent mb-4 font-bold">
              {t("O mundo na minha perspectiva", "The world from my perspective")}
            </span>
            <h2 className="font-headline text-4xl font-black text-on-surface dark:text-white mb-6 tracking-tighter uppercase leading-none">
              {t(
                "Perspectivas: Onde o Código encontra o Horizonte.",
                "Perspectives: Where Code Meets the Horizon."
              )}
            </h2>
            <div className="space-y-6">
              <p className="font-body text-lg text-secondary dark:text-slate-300 leading-relaxed border-l-2 border-primary/20 dark:border-brand-accent/20 pl-6">
                {t(
                  "Como nem tudo na vida é código, descobri na aviação uma paixão que me motivou a explorar o mundo de outros ângulos. Enquanto ainda não assumo o manche de um avião real, uso simuladores e minhas \"câmeras que voam\" para descobrir novos lugares.",
                  "Beyond code, aviation is the passion that drives me to explore the world from new angles. While I haven't taken the yoke of a real aircraft yet, I use simulators and my \"flying cameras\" to discover new horizons."
                )}
              </p>
              <div className="flex items-center gap-6 mt-12">
                <div className="flex gap-2">
                  <button
                    onClick={() => scrollGallery("left")}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#1b2027] border border-slate-200 dark:border-white/10 text-primary dark:text-brand-accent hover:bg-primary hover:text-white dark:hover:bg-brand-accent dark:hover:text-brand-dark transition-all shadow-sm"
                  >
                    <span className="material-symbols-outlined">west</span>
                  </button>
                  <button
                    onClick={() => scrollGallery("right")}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#1b2027] border border-slate-200 dark:border-white/10 text-primary dark:text-brand-accent hover:bg-primary hover:text-white dark:hover:bg-brand-accent dark:hover:text-brand-dark transition-all shadow-sm"
                  >
                    <span className="material-symbols-outlined">east</span>
                  </button>
                </div>
                <div className="h-px flex-grow bg-slate-200 dark:bg-white/10 relative">
                  <div className="absolute right-0 -top-2 font-label text-[8px] uppercase tracking-tighter text-outline dark:text-slate-500">
                    Slide 01-03
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="h-[600px] overflow-hidden rounded-xl border border-slate-200 dark:border-white/5 bg-surface-container dark:bg-brand-dark shadow-2xl relative group">
              <div
                ref={galleryRef}
                className="absolute inset-0 no-scrollbar overflow-x-auto flex snap-x snap-mandatory scroll-smooth"
              >
                {/* Mosaic Slide 1 */}
                <div className="min-w-full h-full snap-start p-2 grid grid-cols-4 grid-rows-2 gap-2 relative">
                  <div className="col-span-2 row-span-2 rounded-lg overflow-hidden relative group/img">
                    <Image
                      src="/assets/images/7.jpg"
                      alt="Drone Hero"
                      fill
                      className="object-cover group-hover/img:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 font-label text-[10px] text-white/50 bg-black/30 px-2 py-1 backdrop-blur-sm border border-white/10">
                      DJI MINI SE
                    </div>
                  </div>
                  <div className="col-span-2 row-span-1 rounded-lg overflow-hidden relative group/img">
                    <Image
                      src="/assets/images/8.jpg"
                      alt="Drone Wide"
                      fill
                      className="object-cover group-hover/img:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="col-span-1 row-span-1 rounded-lg overflow-hidden relative group/img">
                    <Image
                      src="/assets/images/9.jpg"
                      alt="Drone Square 1"
                      fill
                      className="object-cover group-hover/img:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="col-span-1 row-span-1 rounded-lg overflow-hidden relative group/img">
                    <Image
                      src="/assets/images/10.jpg"
                      alt="Drone Square 2"
                      fill
                      className="object-cover group-hover/img:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
                {/* Mosaic Slide 2 */}
                <div className="min-w-full h-full snap-start p-2 grid grid-cols-4 grid-rows-2 gap-2 relative">
                  <div className="col-span-1 row-span-2 rounded-lg overflow-hidden relative group/img">
                    <Image
                      src="/assets/images/13.jpg"
                      alt="Drone Portrait"
                      fill
                      className="object-cover group-hover/img:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-4 right-4 font-label text-[10px] text-white/50 bg-black/30 px-2 py-1 backdrop-blur-sm border border-white/10">
                      DJI MINI SE
                    </div>
                  </div>
                  <div className="col-span-3 row-span-2 rounded-lg overflow-hidden relative group/img">
                    <Image
                      src="/assets/images/11.jpg"
                      alt="Drone Panorama"
                      fill
                      className="object-cover group-hover/img:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
                {/* Mosaic Slide 3 */}
                <div className="min-w-full h-full snap-start p-2 grid grid-cols-4 grid-rows-2 gap-2 relative">
                  <div className="col-span-1 row-span-1 rounded-lg overflow-hidden relative group/img">
                    <Image
                      src="/assets/images/12.jpg"
                      alt="Drone Texture 1"
                      fill
                      className="object-cover group-hover/img:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="col-span-1 row-span-1 rounded-lg overflow-hidden relative group/img">
                    <Image
                      src="/assets/images/14.jpg"
                      alt="Drone Texture 2"
                      fill
                      className="object-cover group-hover/img:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="col-span-2 row-span-2 rounded-lg overflow-hidden relative group/img">
                    <Image
                      src="/assets/images/15.jpg"
                      alt="Drone Final Look"
                      fill
                      className="object-cover group-hover/img:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute top-4 right-4 font-label text-[10px] text-white/50 bg-black/30 px-2 py-1 backdrop-blur-sm border border-white/10">
                      NAV_PT_03 // 450FT
                    </div>
                  </div>
                  <div className="col-span-2 row-span-1 rounded-lg overflow-hidden relative group/img">
                    <Image
                      src="/assets/images/16.jpg"
                      alt="Drone Horizon"
                      fill
                      className="object-cover group-hover/img:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none border-[1px] border-primary/10 dark:border-brand-accent/10 m-4 rounded-lg">
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary dark:border-brand-accent/30 rounded-tr-md"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary dark:border-brand-accent/30 rounded-bl-md"></div>
                <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col gap-1">
                  <div className="w-1 h-1 bg-primary dark:bg-brand-accent rounded-full"></div>
                  <div className="w-1 h-4 bg-primary/20 dark:bg-brand-accent/20 rounded-full"></div>
                  <div className="w-1 h-1 bg-primary dark:bg-brand-accent rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
